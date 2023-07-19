import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import {
  Enum_Componentblockscheckbox_Fieldstatuscheckbox,
  RequestEntity,
} from "../../../graphql/codegen/generated-types";
import { ICoordinates } from "../../../lib/pickup-days";
import { removeNulls } from "../../../lib/utilities";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonGeolocationButton from "../../Common/CommonGeolocationButton/CommonGeolocationButton";
import RequestAddressField from "../RequestAddressField/RequestAddressField";
import RequestCheckboxBlock from "../RequestCheckboxBlock/RequestCheckboxBlock";
import RequestAppointmentSlots from "../RequestAppointmentSlots/RequestAppointmentSlots";
import "./request-fields.scss";

interface IRequestFieldsProps {
  data: RequestEntity;
}

export default function RequestFields({ data }: IRequestFieldsProps) {
  /* Static Data */
  const labels = {
    appointmentSlots: "Créneaux disponibles*",
  };

  /* Local Data */
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
              <CommonGeolocationButton onUpdateCoordinates={submitSearch} />
              <RequestAddressField name="address" />
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
              <div className="c-RequestFields__BlocksField">
                {data.attributes.addableBlocks
                  .map((block, blockIndex) => {
                    if (block) {
                      const id = `request-block-${blockIndex}`;
                      switch (block.__typename) {
                        case "ComponentBlocksAttachments":
                          return <></>;
                        case "ComponentBlocksCheckbox":
                          return (
                            <RequestCheckboxBlock
                              id={id}
                              label={block.labelCheckbox}
                              isRequired={
                                block.fieldStatusCheckbox ===
                                Enum_Componentblockscheckbox_Fieldstatuscheckbox.Obligatoire
                              }
                              key={id}
                            />
                          );
                        case "ComponentBlocksCommentary":
                          return <></>;
                        case "ComponentBlocksCumbersome":
                          return <></>;
                        case "ComponentBlocksDateChoice":
                          return <></>;
                        case "ComponentBlocksQcm":
                          return <></>;
                        case "ComponentBlocksQuestions":
                          return <></>;
                      }
                    }
                  })
                  .filter(removeNulls) ?? []}
              </div>
            )}
        </div>
      )}
    </>
  );
}
