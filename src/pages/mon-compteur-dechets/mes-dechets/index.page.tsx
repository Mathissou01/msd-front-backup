import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import CommonChips from "../../../components/Common/CommonChips/CommonChips";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { useGetFlowMwcQuery } from "../../../graphql/codegen/generated-types";
import { renderFlowName } from "../../../lib/flows";
import MyWasteStatsBlock from "../../../components/CompteurDechets/MyWaste/MyWasteStatsBlock";
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
}

interface Flows {
  total: number;
  percent: number;
  date: string;
  flow: Flow[];
}

const flows: Flows = {
  total: 145,
  percent: 3,
  date: "01/06/2023",
  flow: [
    {
      name: "householdWaste",
      total: 100,
      percent: 78,
    },
    {
      name: "packaging",
      total: 45,
      percent: 22,
    },
  ],
};

const MyWastePage = () => {
  const { data } = useGetFlowMwcQuery({
    variables: {
      contractId: "1",
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
  console.log(data);
  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });
  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <div className="c-MyWaste">
        <SectionHeader title="Mes déchets" date={formattedDate} />
        <div className="c-MyWaste__Content">
          <CommonChips
            chips={chips}
            selectedChip={selectedChip}
            setSelectedChip={setSelectedChip}
            renderChipName={renderFlowName}
          />
          <div className="c-MyWaste__EvolutionContainer">
            <div className="c-MyWaste__BlockContainer">
              <div>Content</div>
              {selectedChip === "all" && <MyWasteStatsBlock flows={flows} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyWastePage;
