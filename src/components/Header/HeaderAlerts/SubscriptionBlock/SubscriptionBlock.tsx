import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import router from "next/router";
import {
  useCreateAlertUserStorageMutation,
  useGetAddressCoordinatesLazyQuery,
} from "../../../../graphql/codegen/generated-types";
import { useContract } from "../../../../hooks/useContract";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonLoader from "../../../Common/CommonLoader/CommonLoader";
import CommunicationAlertsBlock from "./CommunicationBlock/CommunicationAlertsBlock";
import AdressAlertsBlock from "./AdressAlertsBlock/AdressAlertsBlock";
import "./subscription-block.scss";

interface ISubscriptionBlock {
  address: string;
  email: string;
  phoneNumber: string;
  isEmail: boolean;
  isSMS: boolean;
  alertNotificationServiceId: string;
  RGPT: boolean;
}

export default function SubscriptionBlock() {
  /* Static Data */
  const labels = {
    subscribe: "M'inscrire",
    backToHome: "Revenir à l'accueil",
    submitNewForm: "Soumettre une nouvelle inscription",
  };

  /*Local Data */
  const { contract } = useContract();
  const form = useForm<ISubscriptionBlock>();
  const { handleSubmit, watch } = form;
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [
    getBanAddresses,
    { loading: getAddressLoading, error: getAddressError },
  ] = useGetAddressCoordinatesLazyQuery({
    fetchPolicy: "network-only",
  });
  const [
    createAlertUserStorage,
    { loading: createAlertLoading, error: creatAlertError },
  ] = useCreateAlertUserStorageMutation({
    fetchPolicy: "network-only",
  });
  const isRGPTFormChecked = watch("RGPT");

  /*Methods */
  const onSubmit = async (data: ISubscriptionBlock) => {
    if (!getAddressLoading && isRGPTFormChecked) {
      await getBanAddresses({ variables: { searchTerm: data.address } })
        .then((result) => {
          const firstResult = result.data?.getAddressCoordinates?.[0];
          const transformedResult = {
            lat: firstResult?.latitude?.toString() ?? "",
            lng: firstResult?.longitude?.toString() ?? "",
          };
          createAlertUserStorage({
            variables: {
              data: {
                longitude: transformedResult.lng,
                latitude: transformedResult.lat,
                isSMS: data.isSMS,
                isEmail: data.isEmail,
                alertNotificationServiceId: contract.id,
                email: data.email,
                phoneNumber: data.phoneNumber?.replaceAll(" ", ""),
              },
            },
          });

          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("Error fetching address coordinates:", error);
        });
    }
  };

  function resetForm() {
    form.reset();
    setIsSubmitted(false);
  }
  return (
    <CommonLoader
      isLoading={getAddressLoading || createAlertLoading}
      errors={[creatAlertError, getAddressError]}
    >
      <section className="c-SubscriptionBlock">
        {isSubmitted ? (
          <div className="c-SubscriptionBlock__ConfirmationMessage">
            <div
              dangerouslySetInnerHTML={{
                __html: "<h1>Votre demande a bien été prise en compte</h1>",
              }}
            />
            <div className="c-SubscriptionBlock__ConfirmationButtons">
              <CommonButton
                type="button"
                style="secondary"
                onClick={() => router.push("/")}
                label={labels.backToHome}
              />
              <CommonButton
                type="button"
                style="primary"
                onClick={resetForm}
                label={labels.submitNewForm}
              />
            </div>
          </div>
        ) : (
          <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="c-SubscriptionBlock__Informations">
                <div className="c-SubscriptionBlock__Adress">
                  <AdressAlertsBlock />
                </div>
                <div className="c-SubscriptionBlock__Communication">
                  <CommunicationAlertsBlock />
                </div>

                <div className="c-SubscriptionBlock__ValidationButton">
                  <CommonButton
                    label={labels.subscribe}
                    type="submit"
                    style="primary"
                    fontStyle="fontLarge"
                    isDisabled={!isRGPTFormChecked}
                  />
                </div>
              </div>
            </form>
          </FormProvider>
        )}
      </section>
    </CommonLoader>
  );
}
