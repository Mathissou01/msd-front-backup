import { useCallback, useState } from "react";
import {
  PickUpDayEntity,
  useGetPickUpDaysByCoordinatesLocalLazyQuery,
  useGetPickUpDaysByIdsAndContratIdLazyQuery,
} from "../../graphql/codegen/generated-types";
import { IAddressInfo, ICoordinates } from "../../lib/pickup-days";
import { useContract } from "../../hooks/useContract";
import PickUpDayEnterAddress from "./PickUpDayEnterAddress/PickUpDayEnterAddress";
import CommonGeolocationButton from "../Common/CommonGeolocationButton/CommonGeolocationButton";
import PickUpDayList from "./PickUpDayList/PickUpDayList";
import "./pick-up-day-block.scss";

export default function PickUpDayBlock() {
  /* Static Data */
  const pickUpDayTitle = "Collecte à mon adresse";

  /* Local Data */
  const [pickUpDayResults, setPickUpDayResults] = useState<PickUpDayEntity[]>();
  const [addressInfo, setAddressInfo] = useState<IAddressInfo>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { contract } = useContract();

  const [getPickUpDaysByCoordinatesLocalLazyQuery] =
    useGetPickUpDaysByCoordinatesLocalLazyQuery({
      fetchPolicy: "network-only",
    });
  const [getPickUpDaysByIdsAndContratIdLazyQuery] =
    useGetPickUpDaysByIdsAndContratIdLazyQuery({
      fetchPolicy: "network-only",
    });

  /* Methods */
  const submitSearch = useCallback(
    async (newCoordinates: ICoordinates) => {
      setPickUpDayResults(undefined);
      setIsLoading(true);
      const contractId = contract?.id;
      const pickUpDayIsActivated =
        contract?.attributes?.pickUpDayService?.data?.attributes?.isActivated;
      if (
        pickUpDayIsActivated &&
        contract?.attributes?.pickUpDayService?.data?.id
      ) {
        await getPickUpDaysByCoordinatesLocalLazyQuery({
          variables: {
            lat: newCoordinates.latitude,
            long: newCoordinates.longitude,
            pickUpDayServiceId:
              contract?.attributes?.pickUpDayService?.data?.id,
          },
          onCompleted: async (pickUpDayIdResults) => {
            if (
              pickUpDayIdResults?.getPickUpDaysByCoordinates &&
              pickUpDayIdResults?.getPickUpDaysByCoordinates.length > 0
            ) {
              await getPickUpDaysByIdsAndContratIdLazyQuery({
                variables: {
                  pickUpDayIds: pickUpDayIdResults.getPickUpDaysByCoordinates,
                  contractId: contractId,
                },
                onCompleted: (pickUpDayResults) => {
                  if (
                    pickUpDayResults.pickUpDays &&
                    pickUpDayResults.pickUpDays?.data.length > 0
                  ) {
                    setPickUpDayResults(
                      pickUpDayResults?.pickUpDays?.data as PickUpDayEntity[],
                    );
                  }
                  setIsLoading(false);
                },
              });
            } else {
              setPickUpDayResults([]);
              setIsLoading(false);
            }
          },
          onError: async () => {
            setPickUpDayResults([]);
            setIsLoading(false);
          },
        });
      } else {
        setPickUpDayResults(undefined);
        setIsLoading(false);
      }
    },
    [
      contract?.attributes?.pickUpDayService?.data?.id,
      contract?.id,
      contract?.attributes?.pickUpDayService?.data?.attributes?.isActivated,
      getPickUpDaysByIdsAndContratIdLazyQuery,
      getPickUpDaysByCoordinatesLocalLazyQuery,
    ],
  );

  const updateAddressInfo = (addressInfo: IAddressInfo) => {
    setAddressInfo(addressInfo);
  };

  return (
    <section className="c-PickUpDayBlock">
      <div className="c-PickUpDayBlock__Heading">
        <h2 className="c-PickUpDayBlock__Title">{pickUpDayTitle}</h2>
        <div className="c-PickUpDayBlock__Search">
          <CommonGeolocationButton
            informativeText
            onUpdateCoordinates={submitSearch}
            onUpdateAddressInfo={updateAddressInfo}
          />
          <PickUpDayEnterAddress
            onUpdateCoordinates={submitSearch}
            onUpdateAddressInfo={updateAddressInfo}
          />
        </div>
      </div>
      <div className="c-PickUpDayBlock__Main">
        <PickUpDayList
          pickUpDays={pickUpDayResults}
          isLoading={isLoading}
          addressInfo={addressInfo}
        />
      </div>
    </section>
  );
}
