import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import CommonChips from "../../../components/Common/CommonChips/CommonChips";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import { useContract } from "../../../hooks/useContract";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { useGetFlowMwcQuery } from "../../../graphql/codegen/generated-types";
import { renderFlowName } from "../../../lib/flows";
import MyWasteStatsBlock from "../../../components/CompteurDechets/MyWaste/MyWasteStatsBlock";

import CommonDonut from "../../../components/Common/CommonGraphs/CommonDonut";

import Illu_idea from "../../../../public/images/pictos/Idea.svg";
import "./my-waste.scss";

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
    label: "Mes déchets",
    slug: "/mon-compteur-dechets/mes-dechets",
  },
];

interface Flow {
  name: string;
  total: number;
  percent: number;
  poid: number;
}

interface Flows {
  total: number;
  percent: number;
  date: string;
  flow: Flow[];
}

const flows: Flows = {
  total: 150,
  percent: 3,
  date: "01/06/2023",
  flow: [
    {
      name: "householdWaste",
      total: 100,
      percent: 78,
      poid: 90,
    },
    {
      name: "packaging",
      total: 45,
      percent: 22,
      poid: 25,
    },
  ],
};

const MyWastePage = () => {
  const { contractId } = useContract();
  const { data } = useGetFlowMwcQuery({
    variables: {
      contractId: contractId,
    },
  });
  const [chips, setChips] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      const mappedChips =
        data?.contract?.data?.attributes?.MwCounterService?.data?.attributes?.mwcFlows?.data
          ?.map((flow) => flow?.attributes?.name || "")
          .filter((name) => name !== undefined) || [];
      if (mappedChips) {
        setChips([...mappedChips, "all"]);
      }
    }
  }, [data]);

  const [selectedChip, setSelectedChip] = useState("packaging");
  const [currentDate] = useState(subMonths(new Date(), 1));
  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });
  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <div className="c-MyWaste">
        <SectionHeader title="Mes déchets" date={formattedDate} />
        {data && (
          <div className="c-MyWaste__Content">
            <CommonChips
              chips={chips}
              selectedChip={selectedChip}
              setSelectedChip={setSelectedChip}
              renderChipName={renderFlowName}
            />
            <div className="c-MyWaste__EvolutionContainer">
              <div className="c-MyWaste__BlockContainer">
                <div className="c-MyWaste__DonutChart">
                  <CommonDonut selectedChip={selectedChip} flows={flows} />

                  <div className="c-MyWaste__DonutLegend">
                    <p>
                      <span
                        className={`c-MyWaste__DonutLegend${
                          selectedChip === "householdWaste"
                            ? "_color1"
                            : selectedChip === "packaging"
                            ? "_color4"
                            : "_color1"
                        }`}
                      ></span>
                      Ordures ménagères
                    </p>
                    <p>
                      <span
                        className={`c-MyWaste__DonutLegend${
                          selectedChip === "packaging"
                            ? "_color2"
                            : selectedChip === "householdWaste"
                            ? "_color3"
                            : "_color2"
                        }`}
                      ></span>
                      Emballages
                    </p>
                  </div>
                  <div className="c-MyWaste__DonutChartBottomInfo">
                    <Illu_idea />
                    <p>Equivalent d’un foyer d’environ X personne(s)</p>
                  </div>
                </div>
                {<MyWasteStatsBlock flows={flows} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyWastePage;
