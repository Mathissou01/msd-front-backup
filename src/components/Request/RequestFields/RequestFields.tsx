import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { RequestEntity } from "../../../graphql/codegen/generated-types";
import { ICoordinates } from "../../../lib/pickup-days";
import { removeNulls } from "../../../lib/utilities";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonGeolocationButton from "../../Common/CommonGeolocationButton/CommonGeolocationButton";
import FormInput from "../../Form/FormInput/FormInput";
import RequestUser from "../RequestUser/RequestUser";
import RequestBlocks from "../RequestBlocks/RequestBlocks";
import RequestAppointmentSlots from "../RequestAppointmentSlots/RequestAppointmentSlots";
import CommonAddressField from "../../Common/CommonAddressField/CommonAddressField";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./request-fields.scss";

interface IRequestFieldsProps {
  data: RequestEntity;
  setCurrentStep: (steps: number) => void;
  currentStep: number;
  noBlockSteps: number;
  steps: number;
}

export default function RequestFields({
  data,
  setCurrentStep,
  currentStep,
  noBlockSteps,
  steps,
}: IRequestFieldsProps) {
  /* Static Data */
  const labels = {
    appointmentSlots: "Créneaux disponibles*",
    additionalAddress: "Complément d'adresse",
    submitButton: "Envoyer",
  };

  /* Local data */
  const { setValue, getValues, register, watch, resetField } = useFormContext();

  /* Hidden inputs linked to RequestAddressField */
  if (data && data.attributes && data.attributes.hasAddress) {
    register("lat", { value: undefined, required: true });
    register("long", { value: undefined, required: true });
  }

  const submitSearch = useCallback(
    async (newCoordinates: ICoordinates) => {
      setValue("lat", newCoordinates.latitude);
      setValue("long", newCoordinates.longitude);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue],
  );
  const watchLat = watch("lat");
  const watchLong = watch("long");

  useEffect(() => {
    if (watchLat !== undefined && watchLong !== undefined) {
      if (currentStep >= noBlockSteps) {
        setCurrentStep(
          data?.attributes?.hasAppointmentSlots
            ? noBlockSteps
            : noBlockSteps + 1,
        );

        resetField("userName");
        resetField("userSurname");
        resetField("userEmail");
        resetField("userPhone");
        resetField("userAllowSms");
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchLat, watchLong]);

  return (
    <>
      {data && data.id && data.attributes && (
        <div className="c-RequestFields">
          {data.attributes.hasAddress && (
            <div className="c-RequestFields__AddressField">
              <CommonBlockHeading
                titleContent={`${data.attributes.fieldAddressLabel ?? ""}*`}
                isAlignLeft
              />
              <CommonGeolocationButton
                onUpdateCoordinates={submitSearch}
                type="button"
              />
              <CommonAddressField name="address" />
              <FormInput
                name="additionalAddress"
                label={labels.additionalAddress}
                placeholder={labels.additionalAddress}
              />
            </div>
          )}
          {data.attributes.hasAddress &&
            data.attributes.hasAppointmentSlots &&
            watchLat &&
            watchLong && (
              <div className="c-RequestFields__AppointmentSlots">
                <CommonBlockHeading
                  titleContent={labels.appointmentSlots}
                  isAlignLeft
                />
                <RequestAppointmentSlots
                  requestId={data.id}
                  lat={getValues("lat")}
                  long={getValues("long")}
                  setCurrentStep={setCurrentStep}
                  currentStep={currentStep}
                  noBlockSteps={noBlockSteps}
                />
              </div>
            )}
          {data.attributes.addableBlocks &&
            data.attributes.addableBlocks.length >= 1 && (
              <RequestBlocks
                blocks={data.attributes.addableBlocks.filter(removeNulls)}
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                noBlockSteps={noBlockSteps}
              />
            )}
          {data.attributes.hasUser &&
            (currentStep === steps - 1 || currentStep === steps) && (
              <RequestUser
                isNameRequired={data.attributes.isUserNameMandatory ?? true}
                isPhoneRequired={data.attributes.isUserPhoneMandatory ?? true}
                isEmailRequired={data.attributes.isUserEmailMandatory ?? true}
                hasSMS={data.attributes.userAllowSMSNotification ?? false}
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
                steps={steps}
              />
            )}
          {currentStep === steps && (
            <CommonButton
              label={labels.submitButton}
              type="submit"
              style="primary"
              paddingStyle="paddingLarge"
            />
          )}
        </div>
      )}
    </>
  );
}
