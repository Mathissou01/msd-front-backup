import React, { useEffect, useState } from "react";
import { format, subMonths, subYears } from "date-fns";
import { fr } from "date-fns/locale";
import Bac from "public/images/pictos/bac_2_roues.svg";
import Calendar from "public/images/pictos/calendar.svg";
import { CheckUserRequirementsQuery } from "../../../../graphql/codegen/generated-types";
import classNames from "classnames";
import "./flows-box.scss";

const binType: { [key: string]: string } = {
  OMR: "Ordures ménagères",
  CS: "Emballages",
};

interface IFlowsBoxProps {
  bins: CheckUserRequirementsQuery | undefined;
}

const FlowsBox = ({ bins }: IFlowsBoxProps) => {
  const [previousMonth, setPreviousMonth] = useState("");
  const [previousYear, setPreviousYear] = useState("");

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

  return (
    <div className="c-FlowsBox">
      <p className="c-FlowsBox__Title">Mon compteur déchets</p>
      <div className="c-FlowsBox__Container">
        <div className="c-FlowsBox__Infos">
          <p className="c-FlowsBox__SubTitle">
            Suivez la production de déchets de votre foyer, mois après mois,
            pour les flux ci-dessous :
          </p>

          <div className="c-FlowsBox__Flows">
            {bins?.checkUserRequirements?.map((item, i) => (
              <div className="c-FlowsBox__Flows_item" key={i}>
                <div
                  className={classNames(
                    "c-FlowsBox__BacSvg",
                    item?.trashFlow === "OMR"
                      ? "c-FlowsBox__BacSvg_gray"
                      : "c-FlowsBox__BacSvg_yellow",
                  )}
                >
                  <Bac data-testid="bac1" />
                </div>
                <div className="c-FlowsBox__Flows_itemData">
                  <p className="c-FlowsBox__Flows_name">
                    {binType[item?.trashFlow as string]}
                  </p>
                  <p className="c-FlowsBox__Flows_id">{item?.chipId}</p>
                </div>
              </div>
            ))}
          </div>
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
