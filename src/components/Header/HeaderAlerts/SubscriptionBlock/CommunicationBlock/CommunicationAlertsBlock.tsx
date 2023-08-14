import SubHeadingBlock from "../../../../Edito/Blocks/SubHeadingBlock/SubHeadingBlock";
import FormCheckbox from "../../../../Form/FormCheckbox/FormCheckbox";
import FormInput from "../../../../Form/FormInput/FormInput";
import "./communication-alerts-block.scss";

export default function CommunicationAlertsBlock() {
  /* Static Data */
  const labels = {
    title: "Vos préférences de communication",
    text: "Vous souhaitez être alerté par* :",
    RGPTConditions:
      "J'accepte que mes coordonnées soient utilsées dans le cadre du service 'Infos et Alertes' de ma ville.",
    RGPTInformation:
      " Les informations renseignées dans ce formaulaire serviront uniquement au service Infos et Alertes, aucunement à des fins commerciales.",
    fields: {
      phoneErrorMessage: "Le numéro de téléphone est incorrect",
    },
  };

  return (
    <form>
      <div className="c-CommunicationAlertsBlock">
        <div className="c-CommunicationAlertsBlock__Title">
          <SubHeadingBlock subHeadingText={labels.title} subHeadingTag={"h2"} />
        </div>
        <p>{labels.text}</p>

        <div className="c-CommunicationAlertsBlock__SMS">
          <FormCheckbox name={"isSMS"} label={"SMS"} defaultChecked={false} />
          <FormInput
            type="text"
            maxLengthValidation={14}
            name={"phoneNumber"}
            label={"Télphone mobile"}
            patternValidation={/^0[0-9] [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/im}
            isRequired
            patternValidationErrorMessage={labels.fields.phoneErrorMessage}
            isPhoneNumber={true}
          />
        </div>
        <div className="c-CommunicationAlertsBlock__Mail">
          <FormCheckbox name={"isEmail"} label={"Email"} defaultChecked />
          <FormInput name={"email"} label={"Adresse mail"} isRequired />
        </div>
        <div className="c-CommunicationAlertsBlock__RGPD">
          <FormCheckbox
            name="RGPT"
            label={labels.RGPTConditions}
            isChecked={false}
            isRequired
          />
          <p>{labels.RGPTInformation}</p>
        </div>
      </div>
    </form>
  );
}
