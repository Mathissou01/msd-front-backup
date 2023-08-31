import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useGetDataHomePageMwcQuery,
  useGetMwcAverageProductionQuery,
  useGetUserWasteManagementHistoryQuery,
  useGetUserWasteManagementQuery,
} from "../../../../graphql/codegen/generated-types";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";
import { useContract } from "../../../../hooks/useContract";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import CommonStatsArrow from "../../../Common/CommonStatsArrow/CommonStatsArrow";
import CommonPie from "../../../Common/CommonGraphs/CommonPie";
import CommonSpinner from "../../../Common/CommonSpinner/CommonSpinner";
import MyHomeDataComponent from "../HomePage/myHomeDataComponent/myHomeDataComponent";
import Flows from "../HomePage/Flows/Flows";
import PencilWrite from "public/images/pictos/pencilwrite.svg";
import Info from "public/images/pictos/info.svg";
import "./my-home-data.scss";
interface BarometerParams {
  low: number;
  high: number;
  medium: number;
  veryHigh: number;
}
const MyHomeData = () => {
  const router = useRouter();
  const { contractId } = useContract();
  const { currentUser } = useCurrentUser();
  const [variationPercent, setVariationPercent] = useState<number | null>(null);

  const [baroParam, setBaroParam] = useState<BarometerParams | null>(null);
  const { data } = useGetDataHomePageMwcQuery({
    variables: {
      address: "11111",
      typeUsager: "test",
      dateDebut: "test",
      dateFin: "test",
      averageProductionPerPerson: 90,
      numberOfPeopleIntheHousehold: 4,
      agregation: "M",
    },
  });
  const homeData = data?.GetHomeDataMwc;

  const { data: pieData, loading: pieLoading } = useGetUserWasteManagementQuery(
    {
      variables: {
        contractId: contractId,
        streetName: `${currentUser?.streetName}`,
        streetNumber: `${currentUser?.streetNumber}`,
        postcode: `${currentUser?.postalCode}`,
        city: `${currentUser?.city}`,
      },
    },
  );

  const { data: wasteUserHistory, loading: wasteHistoryLoading } =
    useGetUserWasteManagementHistoryQuery({
      variables: {
        contractId: contractId,
        streetNumber: `${currentUser?.streetNumber}`,
        streetName: `${currentUser?.streetName}`,
        postcode: `${currentUser?.postalCode}`,
        city: `${currentUser?.city}`,
        signUpDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          1,
        ).toISOString(),
      },
    });

  const { data: averageProduction, loading: averageLoading } =
    useGetMwcAverageProductionQuery({
      variables: {
        contractId: contractId,
      },
    });
  const pie = pieData?.getUserWasteManagement?.map(
    (pie) => pie?.barometerParams,
  );
  useEffect(() => {
    if (pie && pie[0]) {
      setBaroParam(pie[0] as BarometerParams);
    }
  }, [pie]);

  const renderOverlayContent = () => {
    return (
      <div className="c-MyHomeData__Overlay">
        <div>
          <h4>Votre adresse</h4>
          <p>{currentUser?.addressLabel}</p>
        </div>
        <div className="c-MyHomeData__Flows">
          <h4>Vos bacs</h4>
          <Flows />
        </div>
        <CommonButton
          label="Modifier dans mon profil"
          type="button"
          style={null}
          onClick={() => router.push("/mon-compte")}
        />
      </div>
    );
  };

  const getArrowColorClass = () => {
    if (!variationPercent)
      return {
        text: "Il s'agit des premières données enregistrées sur votre compteur",
      };
    if (variationPercent > 5) {
      return {
        text: `Votre production a augmenté de ${variationPercent}% le mois dernier`,
      };
    } else if (variationPercent < -5) {
      return {
        text: `Votre production a baissé de ${Math.abs(
          variationPercent,
        )}% le mois dernier`,
      };
    } else {
      return {
        text: "Votre production est stable depuis le mois dernier",
      };
    }
  };

  const arrowColorClass = getArrowColorClass();

  useEffect(() => {
    if (
      wasteUserHistory &&
      wasteUserHistory.getUserWasteManagementHistory &&
      wasteUserHistory.getUserWasteManagementHistory.length === 2
    ) {
      const firstMonth =
        wasteUserHistory.getUserWasteManagementHistory[0]?.totalWeight;
      const secondMonth =
        wasteUserHistory.getUserWasteManagementHistory[1]?.totalWeight;
      if (firstMonth && secondMonth) {
        const variationPercent = Math.round(
          ((secondMonth - firstMonth) / firstMonth) * 100,
        );

        setVariationPercent(variationPercent);
      }
    } else {
      setVariationPercent(null);
    }
  }, [wasteUserHistory]);

  return (
    <>
      {!wasteHistoryLoading && !pieLoading ? (
        <div className="c-MyHomeData">
          <div className="c-MyHomeData__Head">
            <CommonBlockHeading titleContent="Les données de mon foyer" />

            <div className="c-MyHomeData__TitleContent">
              <div className="c-MyHomeData__TitleContentAddress">
                <p className="c-MyHomeData__TitleContentAddress_label">
                  Votre adresse
                </p>
                <p className="c-MyHomeData__TitleContentAddress_labelValue">
                  {currentUser?.addressLabel}
                </p>
              </div>
              <div
                className="c-MyHomeData__PencilIcon"
                onClick={() => router.push("/mon-compte")}
              >
                <PencilWrite />
              </div>
            </div>
            <div className="c-MyHomeData__InfoIcon">
              <CommonOverlay
                button={<Info />}
                content={renderOverlayContent}
                title="Les données de mon foyer"
                modalSize="large"
              />
            </div>
          </div>
          <div className="c-MyHomeData__Container">
            <MyHomeDataComponent
              isFirstBlock={true}
              title="Mes Déchets"
              logoOrWeight={
                <>
                  {pieData?.getUserWasteManagement?.[0]?.totalWeight || 0}
                  <span className="c-MyHomeData__DataUnity">kg</span>
                </>
              }
              text={`C'est l'équivalent de la production d'un foyer d'environ ${
                homeData?.equivalentOfProduction || 0
              } personnes`}
              path="/mon-compteur-dechets/mes-dechets"
            />

            <MyHomeDataComponent
              isFirstBlock={false}
              title="Mon évolution"
              logoOrWeight={
                variationPercent !== null ? (
                  <CommonStatsArrow percent={variationPercent} />
                ) : null
              }
              text={arrowColorClass.text}
              path="/mon-compteur-dechets/mon-evolution"
            />

            {!pieLoading && !averageLoading ? (
              <div className="c-MyHomeData__Barometer">
                <p className="c-MyHomeData__BarometerTopInfo">
                  Pour votre foyer, la production est de&nbsp;
                  <span>
                    {pieData?.getUserWasteManagement?.[0]?.totalWeight || 0}
                    kg/personne
                  </span>
                </p>
                {averageProduction?.getMwcAverageProduction &&
                  pieData?.getUserWasteManagement?.[0] && (
                    <CommonPie
                      pieData={pieData?.getUserWasteManagement?.[0]}
                      average={averageProduction?.getMwcAverageProduction}
                    />
                  )}

                <div className="c-MyHomeData__BarometerLegend">
                  <p>
                    <span className="c-MyHomeData__BarometerLegend_low"></span>
                    Faible
                  </p>
                  <p>
                    <span className="c-MyHomeData__BarometerLegend_medium"></span>
                    Moyen
                  </p>
                  <p>
                    <span className="c-MyHomeData__BarometerLegend_hot"></span>
                    Élevé
                  </p>
                  <p>
                    <span className="c-MyHomeData__BarometerLegend_veryHot"></span>
                    Trés élevé
                  </p>
                </div>
                <div className="c-MyHomeData__BarometerAccess">
                  {baroParam !== null && (
                    <>
                      <p>
                        {` 0 à
                        ${
                          Math.round(baroParam?.low / 100) *
                          (averageProduction?.getMwcAverageProduction ?? 0)
                        }
                        kg `}
                      </p>
                      <p>
                        {` ${
                          Math.round(baroParam?.low / 100) *
                            (averageProduction?.getMwcAverageProduction ?? 0) +
                          1
                        }
                        à
                        ${Math.round(
                          (baroParam?.medium / 100) *
                            (averageProduction?.getMwcAverageProduction ?? 0),
                        )}
                        kg`}
                      </p>
                      <p>
                        {`${
                          Math.round(
                            (baroParam?.medium / 100) *
                              (averageProduction?.getMwcAverageProduction ?? 0),
                          ) + 1
                        }
                        à
                        ${Math.round(
                          (baroParam?.high / 100) *
                            (averageProduction?.getMwcAverageProduction ?? 0),
                        )}
                        kg`}
                      </p>
                      <p>
                        {` ${
                          Math.round(
                            (baroParam?.high / 100) *
                              (averageProduction?.getMwcAverageProduction ?? 0),
                          ) + 1
                        }
                        à
                        ${Math.round(
                          (baroParam?.veryHigh / 100) *
                            (averageProduction?.getMwcAverageProduction ?? 0),
                        )}
                        kg`}
                      </p>
                    </>
                  )}
                </div>
                <div className="c-MyHomeData__BarometerBottomInfo">
                  <p>
                    Votre foyer est constitué de :
                    <span>{currentUser?.householdSize || "X"} personne(s)</span>
                  </p>
                  <button
                    type="button"
                    onClick={() => router.push(`/mon-compte`)}
                    className="c-MyHomeData__BarometerBottomInfoEdit"
                  >
                    <PencilWrite />
                  </button>
                </div>
              </div>
            ) : (
              <CommonSpinner />
            )}
          </div>
          <p className="c-MyHomeData__TextInfo">
            Les données affichées sont des données mensuelles estimées.
          </p>
        </div>
      ) : (
        <CommonSpinner />
      )}
    </>
  );
};

export default MyHomeData;
