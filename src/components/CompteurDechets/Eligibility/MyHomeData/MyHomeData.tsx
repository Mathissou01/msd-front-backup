import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import Flows from "../HomePage/Flows/Flows";
import { useRouter } from "next/router";
import MyHomeDataComponent from "../HomePage/myHomeDataComponent/myHomeDataComponent";
import DecliningProduction from "public/images/pictos/arrowData.svg";
import { useGetDataHomePageMwcQuery } from "../../../../graphql/codegen/generated-types";

import PencilWrite from "public/images/pictos/pencilwrite.svg";
import Info from "public/images/pictos/info.svg";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import "./my-home-data.scss";

const MyHomeData = () => {
  const router = useRouter();

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
          <p>160 rue du chemin, 0000 Ville</p>
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
        className: "c-MyHomeData__DataArrowRed",
        text: `Votre production a augmenté de ${variationPercent}% le mois dernier`,
      };
    } else if (variationPercent < -5) {
      return {
        className: "c-MyHomeData__DataArrowGreen",
        text: `Votre production a baissé de ${Math.abs(
          variationPercent,
        )}% le mois dernier`,
      };
    } else {
      return {
        className: "c-MyHomeData__DataArrowBlue",
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
              160 rue du chemin, 0000 Ville
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
            <div
              className={`c-MyHomeData__DataArrow ${arrowColorClass.className}`}
            >
              <DecliningProduction />{" "}
            </div>
          }
          text={arrowColorClass.text}
          path="/block2"
        />
        <div className="c-MyHomeData__Barometer">
          {/* TODO: Add Diagram here and remove lorem  */}
          Barometer
        </div>
      </div>
      <p className="c-MyHomeData__TextInfo">
        Les données affichées sont des données mensuelles estimées.
      </p>
    </div>
  );
};

export default MyHomeData;
