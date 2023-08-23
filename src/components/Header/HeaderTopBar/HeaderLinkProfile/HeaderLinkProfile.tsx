import React, { useEffect, useRef, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { IAudience } from "../../../../lib/audience";
import { useContract } from "../../../../hooks/useContract";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import {
  AudienceEntity,
  Enum_Audience_Type,
} from "../../../../graphql/codegen/generated-types";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import FormSelect from "../../../Form/FormSelect/FormSelect";
import { usePopinContext } from "../../PopinContext/PopinContext";
import ArrowDown from "public/images/pictos/arrow_bold.svg";
import "./header-link-profile.scss";

export default function HeaderLinkProfile() {
  const { openPopinProfil, isPopinProfilOpen } = usePopinContext();
  /* Static data */
  const defaultAudience = {
    id: "0",
  };

  /* Methods */
  function getDefaultAudienceFromData(): IAudience {
    if (!audiencesSelectData) {
      return defaultAudience;
    }

    const audience = audiencesSelectData[0];

    if (!audience || !audience.id) {
      return defaultAudience;
    }

    return {
      id: audience.id,
      type: audience.type,
    };
  }

  async function onSubmit(submitData: FieldValues) {
    const audienceData = audiencesSelectData?.find((audiencesSelect) => {
      return audiencesSelect.id === submitData.audience.id;
    });
    if (audienceData) {
      const newAudience = {
        id: audienceData.id ?? "",
        type: audienceData.type ?? Enum_Audience_Type.Particuliers,
      };
      setUserAudience(newAudience);
      setSelectedAudienceType(newAudience);
    }
    openPopinProfil();
    setMirrored(false);
  }

  /* Local Data */
  const isInitialized = useRef<boolean>(false);
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
  const [selectedAudienceType, setSelectedAudienceType] =
    useState<IAudience>(defaultAudience);
  const { setUserAudience, currentAudience } = useCurrentUser();

  const selectedAudience: IAudience =
    selectedAudienceType.id !== defaultAudience.id
      ? selectedAudienceType
      : currentAudience?.id !== defaultAudience.id
      ? currentAudience
      : audiencesSelectData
      ? getDefaultAudienceFromData()
      : defaultAudience;

  const defaultSelectValue = audiencesSelectData
    ? audiencesSelectData.find(
        (audiencesSelect) => audiencesSelect.id === selectedAudience.id,
      ) ?? undefined
    : undefined;

  const activeAudiencesSelectData = audiencesSelectData?.filter(
    (data) => data.isActive === true,
  );

  /* Animation Popup properties */
  const [isMirrored, setMirrored] = useState<boolean>(false);

  const arrowStyle = {
    transform: isMirrored ? "scaleY(-1)" : "scaleY(1)",
    transition: "transform 0.2s ease",
  };

  useEffect(() => {
    if (
      !isInitialized.current &&
      defaultSelectValue?.id &&
      defaultSelectValue.type &&
      !localStorage.getItem("audience")
    ) {
      setUserAudience({
        id: defaultSelectValue.id,
        type: defaultSelectValue.type,
      });
      isInitialized.current = true;
    }
  }, [defaultSelectValue, setUserAudience]);

  return (
    <div className="c-HeaderLinkProfile">
      <div
        className="c-HeaderLinkProfile__Content"
        onClick={() => {
          openPopinProfil();
        }}
      >
        {selectedAudience && <span>{selectedAudience.type}</span>}
        <ArrowDown style={arrowStyle} />
      </div>
      <div
        className={`c-HeaderLinkProfile__PopUp ${
          isPopinProfilOpen ? "Visible" : ""
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
