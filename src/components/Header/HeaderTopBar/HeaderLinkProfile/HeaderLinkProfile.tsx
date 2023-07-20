import React, { useState } from "react";
import FormSelect from "../../../Form/FormSelect/FormSelect";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { useContract } from "../../../../hooks/useContract";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { AudienceEntity } from "../../../../graphql/codegen/generated-types";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import ArrowDown from "public/images/pictos/arrow_bold.svg";
import "./header-link-profile.scss";

export default function HeaderLinkProfile() {
  /* Methods */
  async function onSubmit(submitData: FieldValues) {
    const audienceName =
      audiencesSelectData?.find((audiencesSelect) => {
        return audiencesSelect.id === submitData.audience.id;
      })?.type ?? "";
    setUserAudience(audienceName);
    setSelectedAudienceType(audienceName);
    setPopUpVisible(false);
    setMirrored(false);
  }

  /* Local Data */
  const { contract } = useContract();
  const audiencesSelectData = contract?.attributes?.audiences?.data?.map(
    (link) => ({
      id: link.id,
      type: link.attributes?.type,
      isActive: link.attributes?.isActive,
    }),
  );

  const audiencesLabels = {
    title: "Mon profil :",
    subtitle: "Profil",
  };
  /* Form Properties */
  const form = useForm({
    mode: "onChange",
  });
  const { handleSubmit } = form;
  const [selectedAudienceType, setSelectedAudienceType] = useState<string>();
  const { setUserAudience, currentAudience } = useCurrentUser();

  const selectedAudience = selectedAudienceType
    ? selectedAudienceType
    : currentAudience
    ? currentAudience
    : audiencesSelectData
    ? audiencesSelectData?.find((audiencesSelect) => audiencesSelect.id === "1")
        ?.type
    : "";

  const defaultSelectValue = audiencesSelectData
    ? audiencesSelectData.find(
        (audiencesSelect) => audiencesSelect.type === selectedAudience,
      ) ?? undefined
    : undefined;
  const activeAudiencesSelectData = audiencesSelectData?.filter(
    (data) => data.isActive === true,
  );
  /* Animation Popup properties */
  const [isPopUpVisible, setPopUpVisible] = useState<boolean>(false);
  const [isMirrored, setMirrored] = useState<boolean>(false);

  const togglePopUp = () => {
    setPopUpVisible(!isPopUpVisible);
    setMirrored(!isMirrored);
  };

  const arrowStyle = {
    transform: isMirrored ? "scaleY(-1)" : "scaleY(1)",
    transition: "transform 0.2s ease",
  };

  return (
    <div className="c-HeaderLinkProfile">
      <div className="c-HeaderLinkProfile__Content" onClick={togglePopUp}>
        <span>{selectedAudience}</span>
        <ArrowDown style={arrowStyle} />
      </div>
      <div
        className={`c-HeaderLinkProfile__PopUp ${
          isPopUpVisible ? "Visible" : ""
        }`}
      >
        <div className="c-HeaderLinkProfile__PopUpHead"></div>
        <div className="c-HeaderLinkProfile__PopUpContent">
          <span className="c-HeaderLinkProfile__PopUpTitle">
            {audiencesLabels.title}
          </span>
          <FormProvider {...form}>
            <form
              className="c-HeaderLinkProfile__PopUpForm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormSelect<AudienceEntity>
                name="audience"
                label={audiencesLabels.subtitle}
                options={
                  activeAudiencesSelectData
                    ? activeAudiencesSelectData.map((data) => ({
                        label: data.type,
                        option: { id: data.id },
                      }))
                    : []
                }
                optionKey={"id"}
                defaultValue={defaultSelectValue}
                isRequired
              />
              <div className="c-HeaderLinkProfile__PopUpButton">
                <CommonButton
                  label="Modifier mon profil"
                  type="submit"
                  style="primary"
                  fontStyle="fontLarge"
                  paddingStyle="paddingLarge"
                  isFullWidth={true}
                />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
