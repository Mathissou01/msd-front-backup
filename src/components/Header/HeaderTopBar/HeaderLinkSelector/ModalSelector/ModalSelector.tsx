import React, { useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import {
  CityInformation,
  useGetCitiesInformationsLazyQuery,
  useGetContractIdByInseeCodeLazyQuery,
} from "../../../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../../../lib/utilities";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import CommonErrors from "../../../../Common/CommonErrors/CommonErrors";
import FormAutoCompleteInput from "../../../../Form/FormAutoCompleteInput/FormAutoCompleteInput";
import FormLabel from "../../../../Form/FormLabel/FormLabel";
import "./modal-selector.scss";

interface IModalSelectorProps {
  handleClose?: () => void;
  hasError?: () => void;
}
export default function ModalSelector({ handleClose }: IModalSelectorProps) {
  /* Static Data */
  const formLabels = {
    title: "Changer de commune",
    searchboxLabel:
      "Pour accéder au service, merci d'indiquer votre commune : *",
    searchboxPlaceHolder: "Entre une commune",
    labelButton: "Valider",
  };

  /* Methods */
  async function searchFunction(
    searchValue: string,
  ): Promise<Array<CityInformation>> {
    let searchResults: Array<CityInformation> = [];
    await getCities({
      variables: { searchTerm: searchValue, prehome: true },
      onCompleted: (results) => {
        if (
          results.getCitiesInformations &&
          results.getCitiesInformations?.length > 0
        ) {
          searchResults =
            results.getCitiesInformations?.filter(removeNulls).slice(0, 5) ??
            [];
        }
      },
    });
    return searchResults;
  }

  function selectTransform(result: CityInformation): string {
    setCurrentInsee(result.insee ?? "");
    return result.name && result.postalCode
      ? `${result.name} - ${result.postalCode}`
      : "";
  }

  function handleOnSubmit() {
    return getContractByInsee({
      variables: { insee: currentInsee },
      onCompleted: (results) => {
        const inseeCodeQueryParameter = results.getContractIdByInseeCode
          ?.attributes?.isFreemium
          ? `?inseeCode=${currentInsee}`
          : "";
        window.location.replace(
          `/${results.getContractIdByInseeCode?.attributes?.clientName}/index.html${inseeCodeQueryParameter}`,
        );
      },
      onError: (error) => {
        console.log("Error fetching contract by Insee code:", error);
      },
    });
  }

  /* Local data */
  const form = useForm<FieldValues>({
    mode: "onChange",
  });
  const [currentInsee, setCurrentInsee] = useState<string>("");

  /* External Data */
  const [getCities, { loading, error }] = useGetCitiesInformationsLazyQuery();
  const [getContractByInsee] = useGetContractIdByInseeCodeLazyQuery();

  return (
    <>
      <div className="c-ModalSelector">
        <button
          className="c-ModalSelector__CloseButton"
          type="button"
          onClick={handleClose}
        />
        <div className="c-ModalSelector__Container">
          <div className="c-ModalSelector__Title">{formLabels.title}</div>
          <div className="c-ModalSelector__Body">
            <FormProvider {...form}>
              <form className="c-ModalSelector__Form">
                <FormLabel label={formLabels.searchboxLabel} />
                <CommonErrors errors={[error]}>
                  <FormAutoCompleteInput<CityInformation>
                    name="search"
                    placeholder={formLabels.searchboxPlaceHolder}
                    searchFunction={searchFunction}
                    displayTransformFunction={(result) =>
                      result.postalCode
                        ? `${result.name} - ${result.postalCode}`
                        : result.name ?? ""
                    }
                    selectTransformFunction={selectTransform}
                    isLoading={loading}
                  />
                </CommonErrors>
              </form>
            </FormProvider>
          </div>
          <div className="c-ModalSelector__Bottom">
            <CommonButton
              type="button"
              style="primary"
              label={formLabels.labelButton}
              onClick={handleOnSubmit}
            />
          </div>
        </div>
      </div>

      <div onClick={handleClose} className="c-ModalSelector__Backdrop"></div>
    </>
  );
}
