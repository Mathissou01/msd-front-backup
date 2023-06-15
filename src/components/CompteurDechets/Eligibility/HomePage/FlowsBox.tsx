import React, { useEffect, useState } from "react";
import { format, subMonths, subYears } from "date-fns";
import { fr } from "date-fns/locale";
import Bac from "public/images/pictos/bac_2_roues.svg";
import Calendar from "public/images/pictos/calendar.svg";
import CommonLoader from "../../../Common/CommonLoader/CommonLoader";
import GetDataChipId from "../../../Common/CommonChipIdMwc/CommonChipIdMwc";

import "./flows-box.scss";

const FlowsBox = () => {
  const [previousMonth, setPreviousMonth] = useState("");
  const [previousYear, setPreviousYear] = useState("");

  const { loading, error, findChipIdByTrashFlow, binIdData } = GetDataChipId();

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

  const chipIdOrduresMenageres: string = findChipIdByTrashFlow(
    binIdData,
    "OMR",
  );

  const chipIdCollecteSelective: string = findChipIdByTrashFlow(
    binIdData,
    "CS",
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
