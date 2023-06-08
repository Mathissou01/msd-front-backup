import React, { useState } from "react";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonMonthSelector from "../../../components/Common/CommonMonthSelector/CommonMonthSelector";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import "./my-evolution.scss";

const breadcrumbPages = [
  {
    label: "Accueil",
    slug: "/",
  },
  {
    label: "Mon compteur déchets",
    slug: "/mon-compteur-dechets",
  },
  {
    label: "Mon évolution",
    slug: "/mon-compteur-dechets/mon-evolution",
  },
];

const MyEvolution = () => {
  const [currentDate, setCurrentDate] = useState(subMonths(new Date(), 1));

  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });

  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <div className="c-MyEvolution">
        <SectionHeader
          title="Mon évolution"
          date={formattedDate}
          isYearDisplay={true}
          isDateDisplayMobile={false}
        />
        <div className="c-MyEvolution__Content">
          <div className="c-MyEvolution__DateSelectorContent">
            <CommonMonthSelector date={currentDate} setDate={setCurrentDate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEvolution;
