import { useCallback, useState } from "react";
import { useContract } from "../../hooks/useContract";
import {
  PickUpDayEntity,
  useGetPickUpDaysByCoordinatesLocalLazyQuery,
  useGetPickUpDaysByIdsAndContratIdLazyQuery,
} from "../../graphql/codegen/generated-types";
import { Coordinates } from "../../lib/pickup-days";
import CommonGeolocationButton from "../Common/CommonGeolocationButton/CommonGeolocationButton";
import PickUpDayEnterAddress from "./PickUpDayEnterAddress/PickUpDayEnterAddress";
import PickUpDayList from "./PickUpDayList/PickUpDayList";
import "./pick-up-day-block.scss";

export default function PickUpDayBlock() {
  /* Local Data */
  const pickUpDayTitle = "Collecte à Mon Adresse";
  const [pickUpDayResults, setPickUpDayResults] = useState<PickUpDayEntity[]>(
    [],
  );
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
    async (newCoordinates: Coordinates) => {
      setPickUpDayResults([]);
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
              setIsLoading(false);
            }
          },
        });
      }
      setIsLoading(false);
    },
    [
      contract?.attributes?.pickUpDayService?.data?.id,
      contract?.id,
      contract?.attributes?.pickUpDayService?.data?.attributes?.isActivated,
      getPickUpDaysByIdsAndContratIdLazyQuery,
      getPickUpDaysByCoordinatesLocalLazyQuery,
    ],
  );

  return (
    <section className="c-PickUpDayBlock">
      <div className="c-PickUpDayBlock__Heading">
        <h2 className="c-PickUpDayBlock__Title">{pickUpDayTitle}</h2>
        <div className="c-PickUpDayBlock__Search">
          <CommonGeolocationButton
            informativeText
            onUpdateCoordinates={submitSearch}
          />
          <PickUpDayEnterAddress onUpdateCoordinates={submitSearch} />
        </div>
      </div>
      <div className="c-PickUpDayBlock__Main">
        <PickUpDayList pickUpDays={pickUpDayResults} isLoading={isLoading} />
      </div>
    </section>
  );
}
