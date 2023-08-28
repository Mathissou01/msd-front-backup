import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useContract } from "../../../hooks/useContract";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import {
  UserWasteData,
  useGetMwcAverageProductionQuery,
  useGetMwcFlowsByContractIdQuery,
  useGetUserWasteManagementQuery,
} from "../../../graphql/codegen/generated-types";
import { renderFlowName } from "../../../lib/flows";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import CommonChips from "../../../components/Common/CommonChips/CommonChips";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonDonut from "../../../components/Common/CommonGraphs/CommonDonut";
import CommonSpinner from "../../../components/Common/CommonSpinner/CommonSpinner";
import MyWasteStatsBlock from "../../../components/CompteurDechets/MyWaste/MyWasteStatsBlock";
import MyFlowEdito from "../../../components/CompteurDechets/MyWaste/MyFlowEdito/MyFlowEdito";
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

const { NEXT_PUBLIC_CONTRACT_ID } = process.env;

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

export default function MyWastePage() {
  /* Static Data */
  const pageTitle = "Mes déchets";

  const { contractId } = useContract();
  const { currentUser } = useCurrentUser();
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

  console.log(data);

  const { data: flowsData, loading } = useGetUserWasteManagementQuery({
    variables: {
      contractId: contractId,
      streetNumber: `${currentUser?.address?.houseNumber}`,
      streetName: `${currentUser?.address?.street}`,
      postcode: `${currentUser?.address?.postcode}`,
      city: `${currentUser?.address?.city}`,
    },
  });

  const { data: averageProduction } = useGetMwcAverageProductionQuery({
    variables: {
      contractId: contractId,
    },
  });

  const content = {
    householdWaste: "Ordures ménagères",
    packaging: "Emballages",
    buttonInfo: "Equivalent d’un foyer d’environ ",
    persons: " personne(s)",
  };
  const [chips, setChips] = useState<string[]>([]);
  const [wasteFlows, setWasteFlows] = useState<IMyWasteFlowEdito[]>([]);
  const [selectedChip, setSelectedChip] = useState("all");
  const [productionCompare, setProductionCompare] = useState(0);
  const [selectedFlowWeight, setSelectedFlowWeight] = useState(0);
  const [currentDate] = useState(subMonths(new Date(), 1));
  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });
  useEffect(() => {
    if (data) {
      const mappedChips =
        data.mwcFlows?.data
          .map((flow) => flow?.attributes?.flow?.data?.attributes?.code || "")
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
              flowdata.attributes?.flow?.data?.attributes?.code ===
              selectedChip,
          )
          .map((flowBlock) => flowBlock?.attributes?.blocks)
          .filter((blocks) => blocks !== undefined) || [];

      if (mappedFlows) {
        setWasteFlows(mappedFlows[0] as IMyWasteFlowEdito[]);
      }
    }
  }, [data, selectedChip]);

  useEffect(() => {
    // recuperer averageProductionPerson
    data?.mwcFlows?.data?.map((flow) => {
      if (
        flow?.attributes?.flow?.data?.attributes?.code === selectedChip &&
        flow?.attributes?.averageProductionPerson
      ) {
        setProductionCompare(flow?.attributes?.averageProductionPerson);
      }
    });
    // récupérer le weight du chip selected
    if (
      selectedChip !== "all" &&
      flowsData?.getUserWasteManagement?.[0]?.flows
    ) {
      flowsData?.getUserWasteManagement?.[0]?.flows.map((flow) => {
        if (flow?.trashFlow === selectedChip) {
          setSelectedFlowWeight(flow?.weight || 0);
        }
      });
    }
  }, [data, selectedChip, flowsData]);

  return (
    <div className="c-MyWaste">
      <CommonMeta title={pageTitle} />
      <CommonBreadcrumb pages={breadcrumbPages} />
      <SectionHeader title="Mes déchets" date={formattedDate} />
      {data && (
        <div className="c-MyWaste__Content">
          <CommonChips
            chips={chips}
            selectedChip={selectedChip}
            setSelectedChip={setSelectedChip}
            renderChipName={renderFlowName}
          />
          {flowsData && flowsData?.getUserWasteManagement && !loading ? (
            <div className="c-MyWaste__EvolutionContainer">
              <div className="c-MyWaste__BlockContainer">
                <div className="c-MyWaste__DonutChart">
                  <CommonDonut
                    selectedChip={selectedChip}
                    flows={
                      flowsData?.getUserWasteManagement[0] as UserWasteData
                    }
                  />

                  <div className="c-MyWaste__DonutLegend">
                    <p>
                      <span className={"c-MyWaste__DonutLegend_color1"}></span>
                      {content.householdWaste}
                    </p>
                    <p>
                      <span className={`c-MyWaste__DonutLegend_color2`}></span>
                      {content.packaging}
                    </p>
                  </div>
                  {flowsData &&
                    flowsData?.getUserWasteManagement[0] &&
                    flowsData?.getUserWasteManagement[0]?.totalWeight &&
                    averageProduction?.getMwcAverageProduction && (
                      <div className="c-MyWaste__DonutChartBottomInfo">
                        <Illu_idea />
                        <p>
                          {content.buttonInfo}{" "}
                          {selectedChip !== "all" &&
                            Math.round(selectedFlowWeight / productionCompare)}
                          {selectedChip === "all" &&
                            Math.round(
                              flowsData?.getUserWasteManagement?.[0]
                                ?.totalWeight /
                                averageProduction?.getMwcAverageProduction,
                            )}
                          {content.persons}
                        </p>
                      </div>
                    )}
                </div>
                {flowsData &&
                  flowsData.getUserWasteManagement &&
                  flowsData?.getUserWasteManagement?.[0] &&
                  selectedChip === "all" && (
                    <MyWasteStatsBlock
                      flows={flowsData?.getUserWasteManagement[0]}
                    />
                  )}
                {selectedChip !== "all" && (
                  <div className="c-MyFlowEdito">
                    {wasteFlows?.map((wasteFlow, index) => (
                      <MyFlowEdito wasteFlow={wasteFlow} key={index} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <CommonSpinner />
          )}
        </div>
      )}
    </div>
  );
}
