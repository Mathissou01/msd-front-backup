import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import CommonChips from "../../../components/Common/CommonChips/CommonChips";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { useGetMwcFlowsByContractIdQuery } from "../../../graphql/codegen/generated-types";
import { renderFlowName } from "../../../lib/flows";
import MyWasteStatsBlock from "../../../components/CompteurDechets/MyWaste/MyWasteStatsBlock";
import MyFlowEdito from "../../../components/CompteurDechets/MyWaste/MyFlowEdito/MyFlowEdito";

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
  code: string;
}

interface Flows {
  total: number;
  percent: number;
  date: string;
  flow: Flow[];
}
interface IMyWasteFlowEdito {
  __typename?: string;
  id?: string;
  subHeadingText?: string;
  subHeadingTag?: string;
  transcriptText?: string;
  videoLink?: string;
  textEditor?: string;
  picture?: string[];
}

const flows: Flows = {
  total: 150,
  percent: 3,
  date: "01/06/2023",
  flow: [
    {
      name: "Ordures ménagères",
      total: 100,
      percent: 78,
      poid: 90,
      code: "OMR",
    },
    {
      name: "Emballages",
      total: 45,
      percent: 22,
      poid: 25,
      code: "CS",
    },
  ],
};

const { NEXT_PUBLIC_CONTRACT_ID } = process.env;

export default function MyWastePage() {
  const { data } = useGetMwcFlowsByContractIdQuery({
    variables: {
      filters: {
        mwCounterService: {
          contract: {
            id: {
              eq: NEXT_PUBLIC_CONTRACT_ID,
            },
          },
        },
      },
    },
  });
  const [chips, setChips] = useState<string[]>([]);
  const [wasteFlows, setWasteFlows] = useState<IMyWasteFlowEdito[]>([]);
  const [selectedChip, setSelectedChip] = useState("all");
  const [currentDate] = useState(subMonths(new Date(), 1));
  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });
  useEffect(() => {
    if (data) {
      const mappedChips =
        data.mwcFlows?.data
          .map((flow) => flow?.attributes?.flow?.data?.attributes?.name || "")
          .filter((name) => name !== undefined) || [];

      if (mappedChips) {
        setChips([...mappedChips, "all"]);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const mappedFlows =
        data.mwcFlows?.data
          ?.filter(
            (flowdata) =>
              flowdata.attributes?.flow?.data?.attributes?.name ===
              selectedChip,
          )
          .map((flowBlock) => flowBlock?.attributes?.blocks)
          .filter((blocks) => blocks !== undefined) || [];

      if (mappedFlows) {
        setWasteFlows(mappedFlows[0] as IMyWasteFlowEdito[]);
      }
    }
  }, [data, selectedChip]);
  //TODO: if collapse
  // const [isCollapsed, setIsCollapsed] = useState(false);
  // const toggleCollapse = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

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
                          selectedChip === "OMR"
                            ? "_color1"
                            : selectedChip === "CS"
                            ? "_color4"
                            : "_color1"
                        }`}
                      ></span>
                      Ordures ménagères
                    </p>
                    <p>
                      <span
                        className={`c-MyWaste__DonutLegend${
                          selectedChip === "CS"
                            ? "_color2"
                            : selectedChip === "OMR"
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
                {selectedChip === "all" && <MyWasteStatsBlock flows={flows} />}
                {selectedChip !== "all" && (
                  <div className="c-MyFlowEdito">
                    {wasteFlows?.map((wasteFlow, index) => (
                      <MyFlowEdito wasteFlow={wasteFlow} key={index} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
