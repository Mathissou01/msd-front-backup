import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CommonButton from "../../Common/CommonButton/CommonButton";
import {
  SearchResultAddress,
  useGetAddressCoordinatesLazyQuery,
  useGetDropOffMapByDropOffMapByServiceIdLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { useContract } from "../../../hooks/useContract";
import { IGeoPosition, IMarker } from "../../../lib/map-markers";
import FormAutoCompleteInput from "../../Form/FormAutoCompleteInput/FormAutoCompleteInput";
import { removeNulls } from "../../../lib/utilities";
import "./search-map.scss";

interface IFormInput {
  searchTerm: string;
  address: string;
}

interface ISearchMapProps {
  setMarkers: (markers: IMarker[]) => void;
  fetchGeolocation: () => void;
  setSelectedAddress: (position: IGeoPosition) => void;
  error: string | null;
  disable: boolean;
}

export default function SearchMap({
  setMarkers,
  fetchGeolocation,
  setSelectedAddress,
  error,
  disable,
}: ISearchMapProps) {
  const { contract } = useContract();
  const dropOffMapServiceId = contract?.attributes?.dropOffMapService?.data?.id;
  const [getDropOffMapByServiceId] =
    useGetDropOffMapByDropOffMapByServiceIdLazyQuery();

  const searchTitle =
    "Vous cherchez le point de collecte ou de réemploi le plus proche dechez vous ?";

  async function searchFunction(
    searchValue: string,
  ): Promise<Array<SearchResultAddress>> {
    let searchResults: Array<SearchResultAddress> = [];
    await getBanAddresses({
      variables: { searchTerm: searchValue },
      onCompleted: (results) => {
        if (
          results.getAddressCoordinates &&
          results.getAddressCoordinates?.length > 0
        ) {
          searchResults = results.getAddressCoordinates?.filter(removeNulls);
        }
      },
    });
    return searchResults;
  }

  /* Local Data */
  const [getBanAddresses, { loading }] = useGetAddressCoordinatesLazyQuery({
    fetchPolicy: "network-only",
  });

  // const { getValues } = useForm<IFormInput>();
  const formMethods = useForm<IFormInput>();
  const handleSearch = async () => {
    try {
      const inputValue = formMethods.watch("address");
      const searchResults = await searchFunction(inputValue);
      if (searchResults && searchResults.length > 0) {
        const firstResult = searchResults[0];
        const transformedResult = {
          lat: firstResult.latitude ?? 0,
          lng: firstResult.longitude ?? 0,
        };
        setSelectedAddress(transformedResult);
      }
    } catch (error) {
      console.error("Error occurred during search:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDropOffMapByServiceId({
          variables: {
            dropOffMapServiceId: `${dropOffMapServiceId}`,
          },
        });

        const responseData = response.data;
        if (responseData?.getDropOffMaps) {
          const mapData: IMarker[] = responseData.getDropOffMaps.map(
            (dropOffMapData) => {
              const BANFeatureProperties = JSON.parse(
                dropOffMapData?.BANFeatureProperties || "{}",
              );

              const collect = {
                name: dropOffMapData?.collect?.name
                  ? dropOffMapData?.collect.name
                  : "",
                picto: {
                  url: dropOffMapData?.collect?.picto?.url
                    ? dropOffMapData?.collect?.picto?.url
                    : "",
                },
              };

              return {
                id: dropOffMapData?.id,
                name: dropOffMapData?.name ?? null,
                lat: dropOffMapData?.latitude ?? 0,
                lng: dropOffMapData?.longitude ?? 0,
                mustKnow: dropOffMapData?.mustKnow ?? "",
                address: BANFeatureProperties.name ?? "",
                postal:
                  (BANFeatureProperties.postcode ?? "") +
                  " " +
                  (BANFeatureProperties.city ?? ""),
                picto: dropOffMapData?.collect?.picto.url ?? null,
                collect,
                files: dropOffMapData?.downloadableFiles
                  ?.filter((child) => child?.__typename)
                  .filter(removeNulls),
              };
            },
          );
          setMarkers(mapData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dropOffMapServiceId, getDropOffMapByServiceId, setMarkers]);

  return (
    <FormProvider {...formMethods}>
      <div className="c-SearchMap">
        <p>{searchTitle}</p>
        <div className="c-SearchMap__SearchBar">
          <div className="c-SearchMap__InputContainer">
            <FormAutoCompleteInput<SearchResultAddress>
              name="address"
              searchFunction={searchFunction}
              displayTransformFunction={(result) => result.name ?? ""}
              selectTransformFunction={(result) => result.name ?? undefined}
              isLoading={loading}
              isRequired={true}
              defaultValue={formMethods.getValues("address")}
            />
          </div>
          <CommonButton
            picto="search"
            type="submit"
            style="primary"
            fontStyle="fontLarge"
            paddingStyle="paddingLarge"
            isFullWidth={false}
            isDisabled={false}
            onClick={handleSearch}
          />
          <CommonButton
            picto="target"
            type="button"
            style="secondary"
            fontStyle="fontLarge"
            paddingStyle="paddingLarge"
            isFullWidth={false}
            isDisabled={disable}
            onClick={fetchGeolocation}
          />
        </div>
        {error && <p> {error}</p>}
      </div>
    </FormProvider>
  );
}
