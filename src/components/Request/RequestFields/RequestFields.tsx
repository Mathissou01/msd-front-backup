import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { RequestEntity } from "../../../graphql/codegen/generated-types";
import { ICoordinates } from "../../../lib/pickup-days";
import { removeNulls } from "../../../lib/utilities";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonGeolocationButton from "../../Common/CommonGeolocationButton/CommonGeolocationButton";
import FormInput from "../../Form/FormInput/FormInput";
import RequestAddressField from "../RequestAddressField/RequestAddressField";
import RequestAppointmentSlots from "../RequestAppointmentSlots/RequestAppointmentSlots";
import RequestUser from "../RequestUser/RequestUser";
import "./request-fields.scss";
import RequestBlocks from "../RequestBlocks/RequestBlocks";

interface IRequestFieldsProps {
  data: RequestEntity;
}

export default function RequestFields({ data }: IRequestFieldsProps) {
  /* Static Data */
  const labels = {
    appointmentSlots: "Créneaux disponibles*",
    additionalAddress: "Complément d'adresse",
  };

  /* Local data */
  const { setValue, register, getValues } = useFormContext();

  /* Hidden inputs linked to RequestAddressField */
  register("lat", { value: undefined, required: true });
  register("long", { value: undefined, required: true });

  const submitSearch = useCallback(
    async (newCoordinates: ICoordinates) => {
      setValue("lat", newCoordinates.latitude);
      setValue("long", newCoordinates.longitude);
    },
    [setValue],
  );

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
              <RequestAddressField name="address" />
              <FormInput
                name="additionalAddress"
                label={labels.additionalAddress}
                placeholder={labels.additionalAddress}
              />
            </div>
          )}
          {data.attributes.hasAddress &&
            data.attributes.hasAppointmentSlots &&
            getValues("lat") &&
            getValues("long") && (
              <div className="c-RequestFields__AppointmentSlots">
                <CommonBlockHeading
                  titleContent={labels.appointmentSlots}
                  isAlignLeft
                />
                <RequestAppointmentSlots
                  requestId={data.id}
                  lat={getValues("lat")}
                  long={getValues("long")}
                />
              </div>
            )}
          {data.attributes.addableBlocks &&
            data.attributes.addableBlocks.length >= 1 && (
              <RequestBlocks
                blocks={data.attributes.addableBlocks.filter(removeNulls)}
              />
            )}
          {data.attributes.hasUser && (
            <RequestUser
              isNameRequired={data.attributes.isUserNameMandatory ?? true}
              isPhoneRequired={data.attributes.isUserPhoneMandatory ?? true}
              isEmailRequired={data.attributes.isUserEmailMandatory ?? true}
              hasSMS={data.attributes.userAllowSMSNotification ?? false}
            />
          )}
        </div>
      )}
    </>
  );
}
