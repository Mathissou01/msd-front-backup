import React, { useState } from "react";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonMonthSelector from "../../../components/Common/CommonMonthSelector/CommonMonthSelector";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import "./my-evolution.scss";
import MyEvolutionDetailBlock from "../../../components/CompteurDechets/MyEvolution/MyEvolutionDetailBlock";
import CommonBarChart from "../../../components/Common/CommonGraphs/CommonBarChart/CommonBarChart";

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
  const { currentUser } = useCurrentUser();

  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });

  // TODO: Fonction de rappel pour récupérer les données du BarComponent
  // const [chartData, setChartData] = useState([]);
  // const handleDataUpdate = (data) => {
  //   setChartData(data);
  // };

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
            <CommonMonthSelector
              date={currentDate}
              setDate={setCurrentDate}
              minDate={currentUser?.activationDate}
            />
          </div>
        </div>
        <div className="c-MyEvolution__EvolutionContainer">
          <div className="c-MyEvolution__BlockContainer">
            <div className="c-MyEvolution__StatsContainer">
              <CommonBarChart />
            </div>
            <div className="c-MyEvolution__ProgressionBlockContainer">
              <MyEvolutionDetailBlock date={formattedDate} />
            </div>
          </div>
          <div className="c-MyEvolution__DataTextContent">
            <p className="c-MyEvolution__DataText">
              Les données affichées sont des données mensuelles estimées.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEvolution;
