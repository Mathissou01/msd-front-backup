import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";
import {
  ComponentBlocksCumbersome,
  Cumbersome,
  useGetCumbersomeReferentialLazyQuery,
} from "../../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../../lib/utilities";
import CommonErrors from "../../../Common/CommonErrors/CommonErrors";
import FormAutoCompleteInput from "../../../Form/FormAutoCompleteInput/FormAutoCompleteInput";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import RequestCumbersomeInput from "./RequestCumbersomeInput/RequestCumbersomeInput";
import "./request-cumbersome-block.scss";

interface IRequestCumbersomeBlockProps {
  cumbersomeBlockData: ComponentBlocksCumbersome;
  name: string;
}

export interface IRequestCumbersomeWithQuantity extends Cumbersome {
  quantity: number;
}

export default function RequestCumbersomeBlock({
  cumbersomeBlockData,
  name,
}: IRequestCumbersomeBlockProps) {
  /* Static Data */
  const minLength = 2;
  const labels = {
    informativeText:
      "Vous pouvez ajouter les encombrants grâce au champ de recherche",
    placeholder: "Matelas, vélo, frigo, ...",
    minLengthErrorMessage: `Veuillez rechercher un encombrant existant en saisissant au moins ${minLength} caractères, puis sélectionnez un résultat`,
    isLoadingCustomMessage: "Recherche d'encombrant",
    noResultsCustomMessage: "Aucun encombrant correspondant à cette recherche",
    selectedCumbersomes: "Encombrants sélectionnés",
    selectionVolume: "Volume de votre sélection",
    unit: "m³",
    mandatoryError: "Ce champ est obligatoire",
  };
  const cumbersomeAutocompleteName = "cumbersome_autocomplete";
  const maxVolume = cumbersomeBlockData.maxVolumeOfCumbersome
    ?.toString()
    .replace(".", ",");

  /* Methods */
  async function searchFunction(
    searchValue: string,
  ): Promise<Array<Cumbersome>> {
    const searchValueCleaned = searchValue
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const searchResults: Array<Cumbersome> =
      localCumbersomeReferential
        .filter((cumbersome) => {
          return cumbersome?.cumbersomeName
            ? cumbersome.cumbersomeName
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .indexOf(searchValueCleaned) === 0
            : false;
        })
        .filter(removeNulls) ?? [];
    return searchResults;
  }

  function onClickResult(result: string) {
    const newCumbersome = localCumbersomeReferential.find(
      (cumbersome) => cumbersome.cumbersomeName === result,
    );
    if (newCumbersome) {
      setLocalCumbersomeReferential(
        localCumbersomeReferential.filter(
          (cumbersome) => cumbersome.cumbersomeName !== result,
        ),
      );
      const selectedCumbersomes: IRequestCumbersomeWithQuantity[] =
        localCumbersomeWithQuantity ?? [];
      selectedCumbersomes.push({
        category: newCumbersome.category,
        cumbersomeName: newCumbersome.cumbersomeName,
        volume: newCumbersome.volume,
        quantity: 1,
      });
      setLocalCumbersomeWithQuantity(selectedCumbersomes);
      setValue(name, selectedCumbersomes);
      setValue(cumbersomeAutocompleteName, undefined);
      const newCumbersomeVolume = +newCumbersome.volume.replace(",", ".");
      const newVolume = +(
        currentItemsVolume + +newCumbersomeVolume.toFixed(2)
      ).toFixed(2);
      setCurrentItemsVolume(newVolume);
      setCurrentItemsQuantity(currentItemsQuantity + 1);
    }
  }

  function onCumbersomeRemoval(
    updatedCumbersome: IRequestCumbersomeWithQuantity,
  ) {
    if (!localCumbersomeWithQuantity) {
      return;
    }
    const cumbersomeInInitialReferential =
      data?.getCumbersomeReferential.find((cumbersome) => {
        if (!cumbersome) {
          return null;
        }
        return cumbersome?.cumbersomeName === updatedCumbersome.cumbersomeName;
      }) ?? undefined;
    if (cumbersomeInInitialReferential) {
      const newLocalReferential = [
        ...localCumbersomeReferential,
        cumbersomeInInitialReferential,
      ];
      setLocalCumbersomeReferential(newLocalReferential);
      setLocalCumbersomeWithQuantity(
        localCumbersomeWithQuantity.filter(
          (cumbersome) => cumbersome !== updatedCumbersome,
        ),
      );
      setCurrentItemsQuantity(
        currentItemsQuantity - updatedCumbersome.quantity,
      );
      const updatedCumbersomeVolume = +updatedCumbersome.volume.replace(
        ",",
        ".",
      );
      setCurrentItemsVolume(
        +(
          currentItemsVolume -
          +(
            updatedCumbersome.quantity * +updatedCumbersomeVolume.toFixed(2)
          ).toFixed(2)
        ).toFixed(2),
      );
    }
  }

  function onCumbersomeQuantityChange(name: string, quantity: number) {
    if (!localCumbersomeWithQuantity) {
      return;
    }
    const cumbersomeWithQuantity = localCumbersomeWithQuantity;
    const updatedCumbersome = cumbersomeWithQuantity.find(
      (cumbersome: IRequestCumbersomeWithQuantity) =>
        cumbersome.cumbersomeName === name,
    );
    const updatedCumbersomeIndex = cumbersomeWithQuantity.findIndex(
      (cumbersome: IRequestCumbersomeWithQuantity) =>
        cumbersome.cumbersomeName === name,
    );
    if (updatedCumbersome) {
      if (quantity > 0) {
        const oldCumbersomeQuantity =
          cumbersomeWithQuantity[updatedCumbersomeIndex].quantity;
        const isIncrement = quantity - oldCumbersomeQuantity > 0;
        cumbersomeWithQuantity[updatedCumbersomeIndex].quantity = quantity;
        setCurrentItemsQuantity(
          currentItemsQuantity + (quantity - oldCumbersomeQuantity),
        );
        const cumbersomeVolume = +cumbersomeWithQuantity[
          updatedCumbersomeIndex
        ].volume.replace(",", ".");
        const newVolume = isIncrement
          ? +(currentItemsVolume + +cumbersomeVolume.toFixed(2)).toFixed(2)
          : +(currentItemsVolume - +cumbersomeVolume.toFixed(2)).toFixed(2);
        setCurrentItemsVolume(newVolume);
        setLocalCumbersomeWithQuantity(cumbersomeWithQuantity);
      } else {
        onCumbersomeRemoval(updatedCumbersome);
      }
    }
  }

  /* Local Data */
  const { register, setValue, setError } = useFormContext();
  const isInitialized = useRef<boolean>(false);
  const [localCumbersomeReferential, setLocalCumbersomeReferential] = useState<
    Array<Cumbersome>
  >([]);
  const [localCumbersomeWithQuantity, setLocalCumbersomeWithQuantity] =
    useState<Array<IRequestCumbersomeWithQuantity>>();
  const [currentItemsVolume, setCurrentItemsVolume] = useState<number>(0);
  const [currentItemsQuantity, setCurrentItemsQuantity] = useState<number>(0);
  const [isCumbersomeBlockInError, setIsCumbersomeBlockInError] =
    useState<boolean>(false);
  const [getCumbersomeReferential, { data, loading, error }] =
    useGetCumbersomeReferentialLazyQuery({
      fetchPolicy: "network-only",
    });

  useEffect(() => {
    if (data) {
      setLocalCumbersomeReferential(
        data.getCumbersomeReferential.filter(removeNulls),
      );
    }
  }, [data]);

  useEffect(() => {
    if (!isInitialized.current) {
      register(name, {
        value: undefined,
      });
      getCumbersomeReferential();
      isInitialized.current = true;
    }
  }, [getCumbersomeReferential, name, register]);

  useEffect(() => {
    setValue(
      name,
      localCumbersomeWithQuantity?.length &&
        localCumbersomeWithQuantity?.length > 0
        ? localCumbersomeWithQuantity
        : undefined,
    );
    if (localCumbersomeWithQuantity?.length === 0) {
      setError(cumbersomeAutocompleteName, {
        type: "validate",
        message: labels.mandatoryError,
      });
    }
    const isVolumeInError = cumbersomeBlockData.maxVolumeOfCumbersome
      ? currentItemsVolume > cumbersomeBlockData.maxVolumeOfCumbersome
      : false;
    const isQuantityInError = cumbersomeBlockData.maxNumberOfCumbersome
      ? currentItemsQuantity > cumbersomeBlockData.maxNumberOfCumbersome
      : false;

    const fieldInError =
      cumbersomeBlockData.isNumberAndVolume === true
        ? isVolumeInError || isQuantityInError
        : isVolumeInError && isQuantityInError;

    setIsCumbersomeBlockInError(fieldInError);
    setError(name, {
      type: "validate",
      message: cumbersomeBlockData.cumbersomeLimitMessage,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItemsVolume, currentItemsQuantity]);

  return (
    <div className="c-RequestCumbersomeBlock">
      <CommonBlockHeading
        isAlignLeft
        titleContent={`${cumbersomeBlockData.cumbersomeLabel} *`}
      />
      <div className="c-RequestCumbersomeBlock__AutoComplete">
        <CommonErrors errors={[error]} displayMode="toaster">
          <span>{labels.informativeText}</span>
          <FormAutoCompleteInput<Cumbersome>
            name={cumbersomeAutocompleteName}
            searchFunction={searchFunction}
            displayTransformFunction={(result) => result.cumbersomeName ?? ""}
            selectTransformFunction={(result) =>
              result.cumbersomeName ?? undefined
            }
            placeholder={labels.placeholder}
            isLoading={loading}
            onClickResult={onClickResult}
            minLength={minLength}
            minLengthErrorMessage={labels.minLengthErrorMessage}
            isLoadingCustomMessage={labels.isLoadingCustomMessage}
            noResultsCustomMessage={labels.noResultsCustomMessage}
            isDisabled={isCumbersomeBlockInError}
            isRequired={
              localCumbersomeWithQuantity?.length === 0 ||
              isCumbersomeBlockInError
            }
            requiredCustomMessage={
              isCumbersomeBlockInError
                ? cumbersomeBlockData.cumbersomeLimitMessage
                : undefined
            }
          />
        </CommonErrors>
        {localCumbersomeWithQuantity &&
          localCumbersomeWithQuantity.length > 0 && (
            <div className="c-RequestCumbersomeBlock__Results">
              <div className="c-RequestCumbersomeBlock__ResultsHeader">
                <span className="c-RequestCumbersomeBlock__ResultsLabel">
                  {labels.selectedCumbersomes}
                </span>
                <div className="c-RequestCumbersomeBlock__SelectionVolumeContainer">
                  <span className="c-RequestCumbersomeBlock__SelectionVolumeLabel">
                    {labels.selectionVolume} :
                  </span>
                  <span className="c-RequestCumbersomeBlock__SelectionVolumeQuantity">
                    <span
                      className={classNames(
                        "c-RequestCumbersomeBlock__SelectionVolumeQuantityActual",
                        {
                          "c-RequestCumbersomeBlock__SelectionVolumeQuantityActual_error":
                            cumbersomeBlockData.maxVolumeOfCumbersome
                              ? currentItemsVolume >
                                cumbersomeBlockData.maxVolumeOfCumbersome
                              : false,
                        },
                      )}
                    >
                      {`${currentItemsVolume.toString().replace(".", ",")}${
                        labels.unit
                      }`}
                    </span>
                    <span className="c-RequestCumbersomeBlock__SelectionVolumeQuantitySeparator">
                      /
                    </span>
                    <span>{`${maxVolume}${labels.unit}`}</span>
                  </span>
                </div>
              </div>
              {isCumbersomeBlockInError && (
                <div className="c-RequestCumbersomeBlock__ResultsError">
                  <span className="c-RequestCumbersomeBlock__ResultsErrorIcon" />
                  <span className="c-RequestCumbersomeBlock__ResultsErrorMessage">
                    {cumbersomeBlockData.cumbersomeLimitMessage}
                  </span>
                </div>
              )}
              <div className="c-RequestCumbersomeBlock__ResultsItems">
                {localCumbersomeWithQuantity.map(
                  (selectedCumbersome: IRequestCumbersomeWithQuantity) => {
                    return (
                      <RequestCumbersomeInput
                        key={selectedCumbersome.cumbersomeName}
                        name={selectedCumbersome.cumbersomeName}
                        quantity={selectedCumbersome.quantity}
                        onQuantityChange={(number) =>
                          onCumbersomeQuantityChange(
                            selectedCumbersome.cumbersomeName,
                            number,
                          )
                        }
                        isIncrementDisabled={isCumbersomeBlockInError}
                      />
                    );
                  },
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
