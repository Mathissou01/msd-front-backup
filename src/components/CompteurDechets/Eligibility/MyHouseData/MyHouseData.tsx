import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import Flows from "../HomePage/Flows/Flows";
import { useRouter } from "next/router";
// import { useGetDataHomePageMwcQuery } from "../../../../graphql/codegen/generated-types";
import MyHouseDataComponent from "../HomePage/myHouseDataComponent/myHouseDataComponent";
import DecliningProduction from "public/images/pictos/arrowData.svg";

import PencilWrite from "public/images/pictos/pencilwrite.svg";
import Info from "public/images/pictos/info.svg";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import "./my-house-data.scss";

const MyHomeData = () => {
  const router = useRouter();

  // const { data } = useGetDataHomePageMwcQuery({
  //   variables: {
  //     address: "11111",
  //     typeUsager: "test",
  //     dateDebut: "test",
  //     dateFin: "test",
  //     averageProductionPerPerson: 90,
  //     numberOfPeopleIntheHousehold: 4,
  //     agregation: "M",
  //   },
  // });

  // const homeData = data?.GetHomeDataMwc;
  const renderOverlayContent = () => {
    return (
      <div className="c-MyHouseData__Overlay">
        <div>
          <h4>Votre adresse</h4>
          <p>160 rue du chemin, 0000 Ville</p>
        </div>
        <div className="c-MyHouseData__Flows">
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
    <div className="c-MyHouseData">
      <div className="c-MyHouseData__Head">
        <CommonBlockHeading titleContent="Les données de mon foyer" />

        <div className="c-MyHouseData__TitleContent">
          <div className="c-MyHouseData__TitleContentAddress">
            <p className="c-MyHouseData__TitleContentAddress_label">
              Votre adresse
            </p>
            <p className="c-MyHouseData__TitleContentAddress_labelValue">
              160 rue du chemin, 0000 Ville
            </p>
          </div>
          <div
            className="c-MyHouseData__PencilIcon"
            onClick={() => router.push("/mon-compte")}
          >
            <PencilWrite />
          </div>
        </div>
        <div className="c-MyHouseData__InfoIcon">
          <CommonOverlay
            button={<Info />}
            content={renderOverlayContent}
            title="Les données de mon foyer"
          />
        </div>
      </div>
      <div className="c-MyHouseData__Container">
        <MyHouseDataComponent
          isFirstBlock={true}
          title="Mes Déchets"
          logoOrWeight={
            <>
              {/* {homeData?.productionCumulee || 138}
              <span className="c-MyHouseData__DataUnity">kg</span> */}
            </>
          }
          text="hello"
          path="/block1"
        />
        <MyHouseDataComponent
          isFirstBlock={false}
          title="Mon évolution"
          logoOrWeight={
            <div className="c-MyHouseData__DataArrow c-MyHouseData__DataArrowRed">
              <DecliningProduction />{" "}
            </div>
          }
          // text={`Votre production à baissé de ${
          //   homeData?.variationPercent || 0
          // } % le mois dernier`}
          text="hello"
          path="/block2"
        />
        <div>
          {/* TODO: Add Diagram here and remove lorem  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, illo?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A vitae
          distinctio veritatis repellendus quibusdam alias! Quibusdam quod
          beatae sequi quo?
        </div>
      </div>
      <p className="c-MyHouseData__TextInfo">
        Les données affichées sont des données mensuelles estimées.
      </p>
    </div>
  );
};

export default MyHomeData;
