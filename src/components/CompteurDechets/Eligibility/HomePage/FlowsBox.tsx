import React, { useEffect, useState } from "react";
import { format, subMonths, subYears } from "date-fns";
import { fr } from "date-fns/locale";
import Bac from "public/images/pictos/bac_2_roues.svg";
import Calendar from "public/images/pictos/calendar.svg";
import { useGetBinIdQuery } from "../../../../graphql/codegen/generated-types";
import CommonLoader from "../../../Common/CommonLoader/CommonLoader";

import "./flows-box.scss";

const FlowsBox = () => {
  const [previousMonth, setPreviousMonth] = useState("");
  const [previousYear, setPreviousYear] = useState("");

  const queryVariables = {
    houseNumber: "13",
    street: "RUE JULES ALLEMAND",
    city: "Rennes",
    contractMetadataKey: "243500139",
  };

  const { data, loading, error } = useGetBinIdQuery({
    variables: queryVariables,
  });

  useEffect(() => {
    const today = new Date();

    // Obtenir le mois précédent
    const previousMonthDate = subMonths(today, 1);
    const formattedPreviousMonth = format(previousMonthDate, "MMMM", {
      locale: fr,
    });
    setPreviousMonth(formattedPreviousMonth);

    // Obtenir l'année précédente
    const previousYearDate = subYears(today, 1);
    const formattedPreviousYear = format(previousYearDate, "yyyy");
    setPreviousYear(formattedPreviousYear);
  }, []);

  const findChipIdByTrashFlow = (
    binIdData:
      | {
          __typename?: string | undefined;
          chipId?: string | null | undefined;
          trashFlow?: string | null | undefined;
        }[]
      | null
      | undefined,
    trashFlow: string,
  ): string => {
    if (binIdData) {
      const item = binIdData.find(
        (item) => item !== null && item.trashFlow === trashFlow,
      );
      if (item) {
        return item.chipId || "";
      }
    }
    return "";
  };

  const binIdData:
    | {
        __typename?: string | undefined;
        chipId?: string | null | undefined;
        trashFlow?: string | null | undefined;
      }[]
    | null
    | undefined = data?.getBinId as
    | {
        __typename?: string | undefined;
        chipId?: string | null | undefined;
        trashFlow?: string | null | undefined;
      }[]
    | null
    | undefined;

  const chipIdOrduresMenageres: string = findChipIdByTrashFlow(
    binIdData,
    "Bacs ordures ménagères",
  );

  const chipIdCollecteSelective: string = findChipIdByTrashFlow(
    binIdData,
    "Bacs collecte sélective",
  );

  return (
    <div className="c-FlowsBox">
      <p className="c-FlowsBox__Title">Mon compteur déchets</p>
      <div className="c-FlowsBox__Container">
        <div className="c-FlowsBox__Infos">
          <p className="c-FlowsBox__SubTitle">
            Suivez la production de déchets de votre foyer, mois après mois,
            pour les flux ci-dessous :
          </p>
          <CommonLoader isLoading={loading} errors={[error]}>
            <div className="c-FlowsBox__Flows">
              <div className="c-FlowsBox__Flows_item">
                <div className="c-FlowsBox__BacSvg_gray">
                  <Bac data-testid="bac1" />
                </div>
                <div className="c-FlowsBox__Flows_itemData">
                  <p className="c-FlowsBox__Flows_name">Ordures ménagères</p>
                  <p className="c-FlowsBox__Flows_id">
                    {chipIdOrduresMenageres}
                  </p>
                </div>
              </div>
              <div className="c-FlowsBox__Flows_item">
                <div className="c-FlowsBox__BacSvg_yellow">
                  <Bac data-testid="bac2" />
                </div>
                <div className="c-FlowsBox__Flows_itemData">
                  <p className="c-FlowsBox__Flows_name">Emballages</p>
                  <p className="c-FlowsBox__Flows_id">
                    {chipIdCollecteSelective}
                  </p>
                </div>
              </div>
            </div>
          </CommonLoader>
        </div>
        <div className="c-FlowsBox__Date">
          <Calendar className="c-FlowsBox_Svg" data-testid="bac1" />
          <p className="c-FlowsBox__Date_month">{previousMonth}</p>
          <p className="c-FlowsBox__Date_year">{previousYear}</p>
        </div>
      </div>
    </div>
  );
};

export default FlowsBox;
