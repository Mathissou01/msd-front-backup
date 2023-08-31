import React, { useEffect, useState } from "react";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Maybe,
  TrashFlow,
  UserWasteData,
  useGetUserWasteManagementHistoryQuery,
} from "../../../graphql/codegen/generated-types";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { useContract } from "../../../hooks/useContract";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonMonthSelector from "../../../components/Common/CommonMonthSelector/CommonMonthSelector";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import CommonBarChart from "../../../components/Common/CommonGraphs/CommonBarChart/CommonBarChart";
import MyEvolutionDetailBlock from "../../../components/CompteurDechets/MyEvolution/MyEvolutionDetailBlock";
import CommonSpinner from "../../../components/Common/CommonSpinner/CommonSpinner";
import "./my-evolution.scss";

interface DataEntry {
  lastDayOfRange: string;
  flows: TrashFlow[];
  totalWeight: number;
}

interface TransformedData {
  name: string;
  packaging: number;
  householdWaste: number;
  total: number;
  date: Date;
}

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

export default function MyEvolutionPage() {
  /* Static Data */
  const pageTitle = "Mon évolution";

  const { contractId } = useContract();
  const [currentDate, setCurrentDate] = useState(subMonths(new Date(), 1));
  const { currentUser } = useCurrentUser();
  const [wasteUserHistory, setWasteUserHistory] = useState<TransformedData[]>(
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [productionCompare, setProductionCompare] = useState(0);

  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });

  const { data, loading } = useGetUserWasteManagementHistoryQuery({
    variables: {
      contractId: contractId,
      streetNumber: `${currentUser?.streetNumber}`,
      streetName: `${currentUser?.streetName}`,
      postcode: `${currentUser?.postalCode}`,
      city: `${currentUser?.city}`,
      signUpDate:
        currentUser && currentUser.activationDate
          ? new Date(currentUser?.activationDate).toISOString()
          : new Date().toISOString(),
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const transformData = (originalData: DataEntry[]): TransformedData[] => {
    const monthMap: { [key: string]: string } = {
      "01": "Jan",
      "02": "Fev",
      "03": "Mars",
      "04": "Avr",
      "05": "Mai",
      "06": "Juin",
      "07": "Juil",
      "08": "Aout",
      "09": "Sept",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec",
    };

    const transformedData: TransformedData[] = [];

    data?.getUserWasteManagementHistory?.forEach(
      (entry: Maybe<UserWasteData>) => {
        const date = new Date(entry?.lastDayOfRange as string);
        const month =
          monthMap[(date.getUTCMonth() + 1).toString().padStart(2, "0")];
        const packaging = entry?.flows?.find(
          (flow: Maybe<TrashFlow>) => flow?.trashFlow === "CS",
        )?.weight;
        const packagingValue = packaging && packaging >= 0 ? packaging : 0;

        const householdWaste =
          entry?.flows?.find(
            (flow: Maybe<TrashFlow>) => flow?.trashFlow === "OMR",
          )?.weight || 0;
        const householdWasteValue =
          householdWaste && householdWaste >= 0 ? householdWaste : 0;
        const total = entry?.totalWeight || 0;

        transformedData.push({
          name: month,
          packaging: packagingValue,
          householdWaste: householdWasteValue,
          total,
          date,
        });

        setCurrentDate(
          new Date(transformedData[transformedData.length - 1]?.date),
        );
      },
    );

    return transformedData;
  };

  const handleChangeDate = (amount: number) => {
    if (activeIndex >= 0 && activeIndex <= wasteUserHistory.length - 1) {
      setActiveIndex(amount < 0 ? activeIndex - 1 : activeIndex + 1);
      if (!wasteUserHistory) return;
      setCurrentDate(
        wasteUserHistory[amount < 0 ? activeIndex - 1 : activeIndex + 1]?.date,
      );
    }
  };

  const compareProductionToPreviousMonthinPercent = () => {
    const currentMonth = wasteUserHistory[activeIndex]?.total;
    if (activeIndex <= 0) return 0;
    if (activeIndex > wasteUserHistory.length - 1) return 0;
    const previousMonth = wasteUserHistory[activeIndex - 1].total;
    if (currentMonth && previousMonth) {
      const result = ((currentMonth - previousMonth) / previousMonth) * 100;
      return Number(result.toFixed(0));
    }
  };

  useEffect(() => {
    const transformedData = transformData(
      data?.getUserWasteManagementHistory as DataEntry[],
    );
    setWasteUserHistory(transformedData);
    setActiveIndex(transformedData.length - 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const result = compareProductionToPreviousMonthinPercent();
    setProductionCompare(result as number);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <>
      <CommonMeta title={pageTitle} />
      <CommonBreadcrumb pages={breadcrumbPages} />
      {data && !loading ? (
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
                minDate={currentUser?.activationDate}
                handleChangeDate={handleChangeDate}
              />
            </div>
          </div>
          <div className="c-MyEvolution__EvolutionContainer">
            <div className="c-MyEvolution__EvolutionWrapper">
              <div className="c-MyEvolution__BlockContainer">
                <div className="c-MyEvolution__StatsContainer">
                  <CommonBarChart
                    wasteUserHistory={wasteUserHistory}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    setCurrentDate={setCurrentDate}
                  />
                </div>
                <div className="c-MyEvolution__ProgressionBlockContainer">
                  {data?.getUserWasteManagementHistory && (
                    <MyEvolutionDetailBlock
                      date={formattedDate}
                      wasteUserHistory={
                        (data?.getUserWasteManagementHistory[activeIndex] as {
                          totalWeight: number;
                          flows: Maybe<Maybe<TrashFlow>[]> | undefined;
                        }) || []
                      }
                      productionCompare={productionCompare}
                      activeIndex={activeIndex}
                    />
                  )}
                </div>
              </div>
              <div className="c-MyEvolution__DataTextContent">
                <p className="c-MyEvolution__DataText">
                  Les données affichées sont des données mensuelles estimées.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <CommonSpinner />
      )}
    </>
  );
}
