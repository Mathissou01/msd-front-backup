import React from "react";
import { useFormContext } from "react-hook-form";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonCheckbox from "../../Common/CommonCheckbox/CommonCheckbox";
import FormInput from "../../Form/FormInput/FormInput";
import "./request-user.scss";

interface IRequestUserProps {
  isNameRequired: boolean;
  isEmailRequired: boolean;
  isPhoneRequired: boolean;
  hasSMS: boolean;
}

export default function RequestUser({
  isNameRequired,
  isPhoneRequired,
  isEmailRequired,
  hasSMS,
}: IRequestUserProps) {
  /* Static Data */
  const labels = {
    title: "Vos informations",
    fields: {
      surname: "Nom",
      surnameErrorMessage: "Le nom est incorrect",
      name: "Prénom",
      nameErrorMessage: "Le prénom est incorrect",
      phone: "Téléphone mobile",
      phoneErrorMessage: "Le numéro de téléphone est incorrect",
      email: "Email",
      emailErrorMessage: "L'email est incorrect",
    },
    checkboxes: {
      consent:
        "J'ai été informé que mes coordonnées pourront être utilisées dans le cadre de ma demande, pour plus d'informations, merci de vous référer à la politique de confidentialité du site",
      sms: "J'accepte de recevoir des notifications de rappel de la prise en charge de ma demande de SMS",
    },
  };
  const fieldNames = {
    surname: "user-surname",
    name: "user-name",
    phone: "user-phone",
    email: "user-email",
    allowSms: "user-allow-sms",
  };

  /* Local Data */
  const { watch } = useFormContext();
  const phoneWatcher = watch(fieldNames.phone);

  return (
    <div className="c-RequestUser">
      <CommonBlockHeading titleContent={labels.title} isAlignLeft />
      <div className="c-RequestUser__Group">
        <div className="c-RequestUser__Group_surname">
          <FormInput
            type="text"
            name={fieldNames.surname}
            label={labels.fields.surname}
            isRequired={isNameRequired}
            patternValidation={/^[a-z ,.'-]+$/i}
            patternValidationErrorMessage={labels.fields.surnameErrorMessage}
          />
        </div>
        <div className="c-RequestUser__Group_name">
          <FormInput
            type="text"
            name={fieldNames.name}
            label={labels.fields.name}
            isRequired={isNameRequired}
            patternValidation={/^[a-z ,.'-]+$/i}
            patternValidationErrorMessage={labels.fields.nameErrorMessage}
          />
        </div>
      </div>
      <div className="c-RequestUser__Group">
        <div className="c-RequestUser__Group_phone">
          <FormInput
            type="text"
            name={fieldNames.phone}
            label={labels.fields.phone}
            isRequired={isPhoneRequired}
            patternValidation={
              /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
            }
            patternValidationErrorMessage={labels.fields.phoneErrorMessage}
          />
        </div>
        <div className="c-RequestUser__Group_email">
          <FormInput
            type="text"
            name={fieldNames.email}
            label={labels.fields.email}
            isRequired={isEmailRequired}
            patternValidation={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            patternValidationErrorMessage={labels.fields.emailErrorMessage}
          />
        </div>
      </div>
      <div className="c-RequestUser__ConsentCheckbox">
        <CommonCheckbox
          id="consent"
          isRequired
          label={labels.checkboxes.consent}
        />
      </div>
      {hasSMS && (
        <div className="c-RequestUser__ConsentCheckbox">
          <CommonCheckbox
            id={fieldNames.allowSms}
            label={labels.checkboxes.sms}
            disabled={!phoneWatcher || phoneWatcher.length === 0}
          />
        </div>
      )}
    </div>
  );
}
