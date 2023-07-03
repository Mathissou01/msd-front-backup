import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import Flows from "../HomePage/Flows/Flows";
import { useRouter } from "next/router";
import MyHomeDataComponent from "../HomePage/myHomeDataComponent/myHomeDataComponent";
import { useGetDataHomePageMwcQuery } from "../../../../graphql/codegen/generated-types";

import PencilWrite from "public/images/pictos/pencilwrite.svg";
import Info from "public/images/pictos/info.svg";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import "./my-home-data.scss";
import CommonStatsArrow from "../../../Common/CommonStatsArrow/CommonStatsArrow";
import CommonPie from "../../../Common/CommonGraphs/CommonPie";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";

const MyHomeData = () => {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

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
    const variationPercent = homeData?.variationPercent || 0;

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

  return (
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
              {homeData?.productionCumulee || 138}
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
            <CommonStatsArrow percent={homeData?.variationPercent || 0} />
          }
          text={arrowColorClass.text}
          path="/mon-compteur-dechets/mon-evolution"
        />
        <div className="c-MyHomeData__Barometer">
          {/* TODO: Change values when API's ready */}
          <p className="c-MyHomeData__BarometerTopInfo">
            Pour votre foyer, la production est de{" "}
            <span> 34.5 kg/personne</span>
          </p>
          <CommonPie />
          <div className="c-MyHomeData__BarometerLegend">
            <p>
              <span className="c-MyHomeData__BarometerLegend_low"></span> Faible
            </p>
            <p>
              <span className="c-MyHomeData__BarometerLegend_medium"></span>
              Moyen
            </p>
            <p>
              <span className="c-MyHomeData__BarometerLegend_hot"></span> Élevé
            </p>
            <p>
              <span className="c-MyHomeData__BarometerLegend_veryHot"></span>
              Trés élevé
            </p>
          </div>

          {/* TODO: Change values when API's ready */}
          <div className="c-MyHomeData__BarometerBottomInfo">
            <p>
              Votre foyer est constitué de : <span>X personne(s)</span>
            </p>
            <button
              type="button"
              onClick={() => router.push(`/`)}
              className="c-MyHomeData__BarometerBottomInfoEdit"
            >
              {" "}
              <PencilWrite />
            </button>
          </div>
        </div>
      </div>
      <p className="c-MyHomeData__TextInfo">
        Les données affichées sont des données mensuelles estimées.
      </p>
    </div>
  );
};

export default MyHomeData;
