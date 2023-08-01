import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import { useGetNextAvailableSlotsLazyQuery } from "../../../graphql/codegen/generated-types";
import CommonLoader from "../../Common/CommonLoader/CommonLoader";
import "./request-appointment-slots.scss";

interface RequestAppointmentSlotsProps {
  requestId: string;
  lat: string;
  long: string;
  setCurrentStep: (steps: number) => void;
  currentStep: number;
  noBlockSteps: number;
}

interface AppointmentSlot {
  __typename?: "AvailableSlot";
  slotId: string;
  exceptionId?: string | null;
  day?: string | null;
  openingTime?: string | null;
}

export default function RequestAppointmentSlots({
  requestId,
  lat,
  long,
  setCurrentStep,
  currentStep,
  noBlockSteps,
}: RequestAppointmentSlotsProps) {
  /* Static Data */
  const labels = {
    error: "Aucun créneau n'est disponible pour cette adresse",
    startingFrom: "à partir de",
    hourUnit: "h",
  };

  /* Local Data */
  const isInitialized = useRef<boolean>(false);
  const [selectedAppointmentSlot, setSelectedAppointmentSlot] =
    useState<number>(-1);
  const [getNextAvailableSlots, { data, error }] =
    useGetNextAvailableSlotsLazyQuery({
      variables: {
        requestId,
        lat: +lat,
        long: +long,
      },
      fetchPolicy: "network-only",
    });
  const { register, setValue, watch, resetField } = useFormContext();
  const watchLat = watch("lat");
  const watchLong = watch("long");

  register("appointmentSlot", { value: undefined, required: true });
  const errors = [error];

  function onSlotSelected(slot: AppointmentSlot, slotIndex: number) {
    setSelectedAppointmentSlot(slotIndex);
    setValue("appointmentSlot", slot);
    if (currentStep === noBlockSteps) {
      setCurrentStep(currentStep + 1);
    }
  }

  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true;
      void getNextAvailableSlots();
    }
  }, [getNextAvailableSlots, isInitialized]);

  useEffect(() => {
    resetField("appointmentSlot");
    setSelectedAppointmentSlot(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchLat, watchLong]);

  return (
    <>
      <div className="c-RequestAppointmentSlots">
        <CommonLoader isLoading={!isInitialized.current}>
          {errors.filter((error) => error !== undefined).length > 0 && (
            <span>{labels.error}</span>
          )}
          {data?.getNextAvailableSlots?.noSlotMessage &&
            data.getNextAvailableSlots.nextAvailableSlots?.length === 0 && (
              <span>{data.getNextAvailableSlots.noSlotMessage}</span>
            )}
          {data?.getNextAvailableSlots?.nextAvailableSlots &&
            data.getNextAvailableSlots.nextAvailableSlots.map(
              (slot, slotIndex) => {
                if (!slot?.day || !slot.openingTime) {
                  return <></>;
                }
                return (
                  <button
                    type="button"
                    key={slotIndex}
                    onClick={() => onSlotSelected(slot, slotIndex)}
                    className={classNames(
                      "c-RequestAppointmentSlots__Card",
                      selectedAppointmentSlot === slotIndex
                        ? "c-RequestAppointmentSlots__Card_selected"
                        : "",
                    )}
                  >
                    <span>
                      {new Date(slot.day).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </span>
                    <span>
                      {labels.startingFrom} {slot.openingTime.slice(0, 2)}
                      {labels.hourUnit}
                    </span>
                  </button>
                );
              },
            )}
        </CommonLoader>
      </div>
      {data?.getNextAvailableSlots?.slotMessage &&
      data?.getNextAvailableSlots?.nextAvailableSlots?.length &&
      data.getNextAvailableSlots.nextAvailableSlots.length > 0 ? (
        <span className="c-RequestAppointmentSlotsMessage">
          {data.getNextAvailableSlots.slotMessage}
        </span>
      ) : (
        <></>
      )}
    </>
  );
}
