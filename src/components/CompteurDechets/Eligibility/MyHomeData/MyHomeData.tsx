import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import Flows from "../HomePage/Flows/Flows";
import { useRouter } from "next/router";
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
      <CommonBlockHeading titleContent="Les données de mon foyer" />

      <div className="c-MyHomeData__TitleContent">
        <div>
          <h4>Votre adresse</h4>
          <p>160 rue du chemin, 0000 Ville</p>
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
          button={<Info className="c-MyHomeData__Info" />}
          content={renderOverlayContent}
          title="Les données de mon foyer"
        />
      </div>
    </div>
  );
};

export default MyHomeData;
