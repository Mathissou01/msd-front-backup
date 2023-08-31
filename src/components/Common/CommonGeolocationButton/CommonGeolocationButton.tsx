import { useCallback, useEffect, useState } from "react";
import {
  SearchResultAddress,
  useGetBanAddressesAutoCompleteLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import { IAddressInfo, ICoordinates } from "../../../lib/pickup-days";
import { useGeolocation } from "../../../hooks/geoLocation/useGeolocation";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./common-geolocation-button.scss";

interface CommonGeolocationButtonProps {
  onUpdateCoordinates: (coordinates: ICoordinates) => void;
  informativeText?: boolean;
  onUpdateAddressInfo?: (adressInfo: IAddressInfo) => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function CommonGeolocationButton({
  onUpdateCoordinates,
  informativeText = false,
  onUpdateAddressInfo,
  type = "submit",
}: CommonGeolocationButtonProps) {
  /* Static Data */
  const labels = {
    informativeText: "*Les champs marqués d'une astérisque sont obligatoires.",
    otherOptionText: "ou je rentre mon adresse : ",
    submitButtonLabel: "Me géolocaliser",
  };

  /* Local Data */
  const [getBanAddresses] = useGetBanAddressesAutoCompleteLazyQuery({
    fetchPolicy: "network-only",
  });
  const [{ position, address }, fetchGeolocation] = useGeolocation();
  const [isInitializedLocation, setIsInitializedLocation] =
    useState<boolean>(false);
  const [isInitializedAddress, setIsInitializedAddress] =
    useState<boolean>(false);
  const infoFromAddress = useCallback(getInfoFromAddress, [getBanAddresses]);

  /* Methods */
  async function getInfoFromAddress(
    searchValue: string,
  ): Promise<IAddressInfo | undefined> {
    let searchResults: Array<SearchResultAddress> = [];
    await getBanAddresses({
      variables: { searchTerm: searchValue },
      onCompleted: (results) => {
        if (
          results.getAddressCoordinates &&
          results.getAddressCoordinates.length > 0
        ) {
          searchResults =
            results.getAddressCoordinates.filter(removeNulls) ?? [];
        }
      },
    });

    if (searchResults.length > 0) {
      const firstResult = JSON.parse(searchResults[0].banFeaturesProperties);
      if (firstResult && firstResult.city && firstResult.street) {
        return {
          city: firstResult.city,
          street: firstResult.street,
        };
      }
    }

    return undefined;
  }

  useEffect(() => {
    if (!isInitializedLocation && position?.lat && position.lng) {
      onUpdateCoordinates({
        latitude: position.lat,
        longitude: position.lng,
      });
      setIsInitializedLocation(true);
    }
  }, [position, isInitializedLocation, onUpdateCoordinates]);

  useEffect(() => {
    const getInfoAddress = async () => {
      if (onUpdateAddressInfo && !isInitializedAddress && address) {
        const infoAddress = await infoFromAddress(address);
        if (infoAddress?.street && infoAddress.city) {
          onUpdateAddressInfo({
            street: infoAddress.street,
            city: infoAddress.city,
          });
        }
        setIsInitializedAddress(true);
      }
    };
    getInfoAddress();
  }, [address, isInitializedAddress, onUpdateAddressInfo, infoFromAddress]);

  return (
    <div className="c-PickUpDayGeolocation">
      {informativeText && (
        <p className="c-PickUpDay__InformativeText">{labels.informativeText}</p>
      )}
      <div className="c-PickUpDayGeolocation__GeolocationBlock">
        <CommonButton
          label={labels.submitButtonLabel}
          type={type}
          style="secondary"
          fontStyle="fontLarge"
          paddingStyle="paddingLarge"
          isDisabled={false}
          picto="target"
          pictoPosition="right"
          onClick={fetchGeolocation}
        />
        <p>{labels.otherOptionText}</p>
      </div>
    </div>
  );
}
