import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import router from "next/router";
import {
  useDeleteAlertUserStorageMutation,
  useGetAlertUserStorageLazyQuery,
} from "../../../../graphql/codegen/generated-types";
import FormInput from "../../../Form/FormInput/FormInput";
import SubHeadingBlock from "../../../Edito/Blocks/SubHeadingBlock/SubHeadingBlock";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonLoader from "../../../Common/CommonLoader/CommonLoader";
import "./unsubscription-block.scss";

interface IUnsubscribeBlock {
  email: string;
  phoneNumber: string;
}
export default function UnsubscriptionBlock() {
  /* Static Data */
  const labels = {
    title: "Vos informations saisies lors de l'inscription*",
    fields: {
      phoneErrorMessage: "Le numéro de téléphone est incorrect",
    },
    backToHome: "Revenir à l'accueil",
  };

  /*Local Data */
  const form = useForm<IUnsubscribeBlock>();
  const { handleSubmit } = form;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isUserExisting, setIsUserExisting] = useState(true);

  const [getAlertUserStorageId, { loading: getAlertLoading }] =
    useGetAlertUserStorageLazyQuery({
      fetchPolicy: "network-only",
    });
  const [deleteAlertUser, { loading: getAddressLoading }] =
    useDeleteAlertUserStorageMutation({
      fetchPolicy: "network-only",
    });

  /*Methods */
  const onSubmit = async (data: IUnsubscribeBlock) => {
    try {
      const result = await getAlertUserStorageId({
        variables: {
          email: data.email,
          phoneNumber: data.phoneNumber?.replaceAll(" ", ""),
        },
      });

      const userId = result?.data?.alertUserStorages?.data?.[0].id;

      if (userId) {
        await deleteAlertUser({
          variables: {
            deleteAlertUserStorageId: userId,
          },
        }).then(() => {
          setIsSubmitted(true);
          setIsUserExisting(true);
        });
      } else {
        setIsUserExisting(false);
        setError("Erreur, réessayez");
      }
    } catch (error) {
      setIsUserExisting(false);
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="c-UnsubscriptionBlock">
      <CommonLoader isLoading={getAddressLoading || getAlertLoading}>
        <section>
          {isSubmitted ? (
            <div className="c-UnsubscriptionBlock__ConfirmationMessage">
              <div
                dangerouslySetInnerHTML={{
                  __html: "<h1>Votre demande a bien été prise en compte</h1>",
                }}
              />
              <div className="c-UnsubscriptionBlock__ConfirmationButtons">
                <CommonButton
                  type="button"
                  style="secondary"
                  onClick={() => router.push("/")}
                  label={labels.backToHome}
                />
              </div>
            </div>
          ) : error || !isUserExisting ? (
            <div className="c-UnsubscriptionBlock__ConfirmationMessage">
              {!isUserExisting ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: "<h1>Aucune correspondance trouvée</h1>",
                  }}
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: "<h1>Erreur</h1>",
                  }}
                />
              )}
              <div className="c-UnsubscriptionBlock__ConfirmationButtons">
                <CommonButton
                  type="button"
                  style="secondary"
                  onClick={() => router.push("/")}
                  label={labels.backToHome}
                />
              </div>
            </div>
          ) : (
            <FormProvider {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="c-UnsubscriptionBlock__Title">
                  <SubHeadingBlock
                    subHeadingText={labels.title}
                    subHeadingTag={"h2"}
                  />
                </div>
                <div className="c-UnsubscriptionBlock__SMS">
                  <FormInput
                    type="text"
                    maxLengthValidation={14}
                    name={"phoneNumber"}
                    label={"Télphone mobile"}
                    patternValidation={
                      /^0[0-9] [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$/im
                    }
                    isRequired
                    patternValidationErrorMessage={
                      labels.fields.phoneErrorMessage
                    }
                    isPhoneNumber
                  />
                </div>
                <div className="c-UnsubscriptionBlock__Mail">
                  <FormInput name={"email"} label={"Adresse mail"} isRequired />
                </div>
                <div className="c-UnsubscriptionBlock__ValidationButton">
                  <CommonButton
                    label="Me désinscrire"
                    type="submit"
                    style="primary"
                    fontStyle="fontLarge"
                    isDisabled={false}
                  />
                </div>
              </form>
            </FormProvider>
          )}
        </section>
      </CommonLoader>
    </div>
  );
}
