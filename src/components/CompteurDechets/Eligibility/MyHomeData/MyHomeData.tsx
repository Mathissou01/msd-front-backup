import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import Flows from "../HomePage/Flows/Flows";
import { useRouter } from "next/router";
// import { useGetDataHomePageMwcQuery } from "../../../../graphql/codegen/generated-types";
import MyHomeDataComponent from "../HomePage/myHomeDataComponent/myHomeDataComponent";
import DecliningProduction from "public/images/pictos/arrowData.svg";

import PencilWrite from "public/images/pictos/pencilwrite.svg";
import Info from "public/images/pictos/info.svg";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import "./my-home-data.scss";

const MyHomeData = () => {
  const router = useRouter();

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
              {/* {homeData?.productionCumulee || 138}
              <span className="c-MyHomeData__DataUnity">kg</span> */}
            </>
          }
          text="hello"
          path="/block1"
        />
        <MyHomeDataComponent
          isFirstBlock={false}
          title="Mon évolution"
          logoOrWeight={
            <div className="c-MyHomeData__DataArrow c-MyHomeData__DataArrowRed">
              <DecliningProduction />{" "}
            </div>
          }
          // text={`Votre production à baissé de ${
          //   homeData?.variationPercent || 0
          // } % le mois dernier`}
          text="hello"
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
