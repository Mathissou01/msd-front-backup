import React from "react";
import router from "next/router";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import {
  City,
  useGetBanCitiesAutoCompleteLazyQuery,
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
    notResult: "Vous ne trouvez pas votre commune dans la liste ?",
    searchboxPlaceHolder: "Entre une commune",
    labelButton: "Valider",
  };
  const limit = 10;

  /* Methods */
  async function searchFunction(searchValue: string): Promise<Array<City>> {
    let searchResults: Array<City> = [];
    await getCities({
      variables: { limit, nameOrPostalCode: searchValue },
      onCompleted: (results) => {
        if (
          results.getBanCitiesAutoComplete &&
          results.getBanCitiesAutoComplete?.length > 0
        ) {
          searchResults =
            results.getBanCitiesAutoComplete?.filter(removeNulls) ?? [];
        }
      },
    });
    return searchResults;
  }

  function displayTransform(result: City): string {
    let city = "";

    if (result.name) {
      city += result.name;
    }

    if (city.length > 0 && result.postalCode) {
      city += ` - ${result.postalCode}`;
    }

    return city;
  }

  function selectTransform(result: City): string {
    return result.name ?? "";
  }

  function handleOnSubmit() {
    router.push(
      `/${form
        .getValues("search")
        .toLowerCase()
        .replaceAll(" ", "-")}/index.html`,
    );
  }

  /* Local data */
  const form = useForm<FieldValues>({
    mode: "onChange",
  });

  /* External Data */
  const [getCities, { loading, error }] =
    useGetBanCitiesAutoCompleteLazyQuery();

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
                  <FormAutoCompleteInput<City>
                    name="search"
                    placeholder={formLabels.searchboxPlaceHolder}
                    searchFunction={searchFunction}
                    displayTransformFunction={displayTransform}
                    selectTransformFunction={selectTransform}
                    isLoading={loading}
                  />
                </CommonErrors>
              </form>
            </FormProvider>
            <span className="c-ModalSelector__ShowList">
              {formLabels.notResult}
            </span>
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
