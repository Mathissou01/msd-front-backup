import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import { IAddress, IUser } from "../../../../lib/user";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import useRegister from "../../../../hooks/user/useRegister";
import useUpdateUser from "../../../../hooks/user/useUpdateUser";
import Register from "public/images/register.svg";
import FormInput from "../../../Form/FormInput/FormInput";
import FormCheckbox from "../../../Form/FormCheckbox/FormCheckbox";
import "./step-final.scss";

const labels = {
  fields: {
    email: "Email",
    emailErrorMessage: "L'email est incorrect",
  },
};

const fieldNames = {
  email: "email",
};

export default function StepFinal({
  selectedAddress,
}: {
  selectedAddress: IAddress | null | undefined;
}) {
  const router = useRouter();
  const { addUser } = useRegister();
  const { watch, getValues, handleSubmit } = useFormContext();
  const { currentUser, login, isLoading } = useCurrentUser();
  const { updateUser } = useUpdateUser(currentUser?._id || " ");

  const onSubmit = async () => {
    const data: Partial<IUser> = {
      ...getValues(),
      activeCounter: true,
      activationDate: new Date(),
      consents: [
        {
          acceptanceDate: new Date(),
          version: "1.0",
        },
      ],
    };
    selectedAddress && (data.address = selectedAddress);

    if (currentUser) {
      const updatedUser = await updateUser(data);

      if (updatedUser) {
        await login(getValues("email"));
        if (!isLoading) router.push("/mon-compteur-dechets");
      }
    } else {
      const newUser = await addUser(data);
      if (newUser.statusCode !== 400) {
        await login(watch("email"));
        if (!isLoading) {
          router.push("/mon-compteur-dechets");
        }
      }
    }
  };

  return (
    <div className="o-Steps c-StepFinal">
      <Register className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading titleContent="Une dernière étape pour accéder à votre compteur" />
        <Register className="o-Steps__Image" />
        <form onSubmit={handleSubmit(onSubmit)} className="c-StepFinal__Form">
          <div>
            <FormInput
              type="text"
              name={fieldNames.email}
              label="Email"
              isRequired={true}
              patternValidation={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              patternValidationErrorMessage={labels.fields.emailErrorMessage}
            />
          </div>

          <div className="c-StepFinal__ConsentContainer">
            <FormCheckbox name="consent" label={""} />
            <p className="c-StepFinal__Text">
              J&apos;accepte les{" "}
              <span className="c-StepFinal__Consent">
                Conditions Générales d&apos;Utilisation
              </span>{" "}
              de Mon Service Déchet (obligatoire)
            </p>
          </div>
          <CommonButton
            type="submit"
            style="primary"
            label={
              currentUser ? "Je modifie mes informations" : "Je créé mon compte"
            }
            isDisabled={!watch("consent") || watch("consent") === false}
          />
        </form>
      </div>
    </div>
  );
}
