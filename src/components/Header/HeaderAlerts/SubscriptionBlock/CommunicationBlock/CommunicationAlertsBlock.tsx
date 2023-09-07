import { useState } from "react";
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
      " Les informations renseignées dans ce formulaire serviront uniquement au service Infos et Alertes, aucunement à des fins commerciales.",
    RGPT: "RGPT",
    fields: {
      phoneErrorMessage: "Le numéro de téléphone est incorrect",
    },
    smsNameCheckBox: "isSMS",
    sms: "SMS",
    phoneNumberInput: "phoneNumber",
    telephoneMobile: "Télphone mobile",
    emailNameCheckbox: "isEMail",
    email: "Email",
    emailInput: "email",
    adresseMail: "Adresse mail",
  };

  /* Local Data */
  const [isSmsChecked, setIsSmsChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleSmsCheckboxChange = () => {
    setIsSmsChecked(!isSmsChecked);
  };

  const handleEmailCheckboxChange = () => {
    setIsEmailChecked(!isEmailChecked);
  };

  return (
    <form>
      <div className="c-CommunicationAlertsBlock">
        <div className="c-CommunicationAlertsBlock__Title">
          <SubHeadingBlock subHeadingText={labels.title} subHeadingTag={"h2"} />
        </div>
        <p>{labels.text}</p>

        <div className="c-CommunicationAlertsBlock__SMS">
          <FormCheckbox
            name={labels.smsNameCheckBox}
            label={labels.sms}
            defaultChecked={isSmsChecked}
            onClick={handleSmsCheckboxChange}
          />
          <FormInput
            type="text"
            maxLengthValidation={14}
            name={labels.phoneNumberInput}
            label={labels.telephoneMobile}
            patternValidation={/^0[0-9] [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/im}
            isRequired={isSmsChecked}
            patternValidationErrorMessage={labels.fields.phoneErrorMessage}
            isPhoneNumber={true}
          />
        </div>
        <div className="c-CommunicationAlertsBlock__Mail">
          <FormCheckbox
            name={labels.emailNameCheckbox}
            label={labels.email}
            defaultChecked={isEmailChecked}
            onClick={handleEmailCheckboxChange}
          />
          <FormInput
            name={labels.emailInput}
            label={labels.adresseMail}
            isRequired={isEmailChecked}
          />
        </div>
        <div className="c-CommunicationAlertsBlock__RGPD">
          <FormCheckbox
            name={labels.RGPT}
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
