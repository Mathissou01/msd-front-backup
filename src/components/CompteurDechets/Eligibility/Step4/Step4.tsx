import React, { useEffect } from "react";
import Image from "next/image";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import GetDataChipId from "../../../Common/CommonChipIdMwc/CommonChipIdMwc";
import CommonLoader from "../../../Common/CommonLoader/CommonLoader";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import EligibilityRecycling from "public/images/id-bac.svg";
import BacIcon from "public/images/pictos/search.svg";
import "./step4.scss";

interface Step4Props {
  handleOptionClick: (next: string | number) => void;
  handleError: (updates: Partial<IError>) => void;
}

const labels = {
  unknownBacs:
    "Malheureusement, nous ne retrouvons pas de bacs de déchets liés à votre adresse",
};
const Step4: React.FC<Step4Props> = ({ handleOptionClick, handleError }) => {
  const { loading, error, findChipIdByTrashFlow, binIdData } = GetDataChipId();

  const chipIdOrduresMenageres: string = findChipIdByTrashFlow(
    binIdData,
    "OMR",
  );

  const chipIdCollecteSelective: string = findChipIdByTrashFlow(
    binIdData,
    "CS",
  );

  useEffect(() => {
    if (error && error.message) {
      handleError({
        isActive: true,
        isAddressVisible: true,
        isReasonVisible: true,
        isContactVisible: true,
        title: labels.unknownBacs,
      });
    }
  }, [chipIdCollecteSelective, chipIdOrduresMenageres, error, handleError]);
  return (
    <>
      <div>
        <div className="o-Steps c-StepIdentiteBacs">
          <EligibilityRecycling className="o-Steps__Image" />
          <div className="o-Steps__Container">
            <CommonBlockHeading titleContent="Nous avons identifiés des bacs pour votre adresse" />
            <EligibilityRecycling className="o-Steps__Image" />
            <div className="o-Steps__CardContainer c-StepIdentiteBacs__CardContainer">
              <CommonLoader isLoading={loading} errors={[error]}>
                <>
                  <div className="c-StepIdentiteBacs__CardItem c-StepIdentiteBacs__CardItem_gray">
                    <div className="c-StepIdentiteBacs__CardItem_icon">
                      <BacIcon />
                    </div>
                    <div className="c-StepIdentiteBacs__CardItem_content">
                      <p className="c-StepIdentiteBacs__CardItem_label">
                        Votre bac à ordures ménagères
                      </p>
                      <p className="c-StepIdentiteBacs__CardItem_idPuce">
                        {chipIdOrduresMenageres}
                      </p>
                    </div>
                  </div>
                  <div className="c-StepIdentiteBacs__CardItem c-StepIdentiteBacs__CardItem_yellow">
                    <div className="c-StepIdentiteBacs__CardItem_icon">
                      <BacIcon />
                    </div>
                    <div className="c-StepIdentiteBacs__CardItem_content">
                      <p className="c-StepIdentiteBacs__CardItem_label">
                        Votre bac à emballages
                      </p>
                      <p className="c-StepIdentiteBacs__CardItem_idPuce">
                        {chipIdCollecteSelective}
                      </p>
                    </div>
                  </div>
                </>
              </CommonLoader>
              <div className="o-Steps__CardButtons">
                <CommonButton
                  type="button"
                  style="primary"
                  label="Suivant"
                  onClick={() => handleOptionClick(5)}
                />

                <CommonButton
                  type="button"
                  style="secondary"
                  label="Il y a une erreur"
                  onClick={() =>
                    handleError({
                      isActive: true,
                      isAddressVisible: false,
                      isReasonVisible: false,
                      isContactVisible: true,
                      bins: [
                        {
                          name: "Bac ordure ménagère",
                          value: chipIdOrduresMenageres,
                        },
                        {
                          name: "Bac emballage",
                          value: chipIdCollecteSelective,
                        },
                      ],
                      title:
                        "Les numéros rattachés à votre adresse ne correspondent pas à ceux inscrits sur vos bacs ?",
                    })
                  }
                />
                <CommonOverlay
                  modalSize="default"
                  button={
                    <button
                      type="button"
                      className="o-Steps__CardButtons_openmodal"
                    >
                      Où trouver mon numéro de bac ?
                    </button>
                  }
                  content={() => {
                    return (
                      <div className="c-StepIdentiteBacs__ModalContainer">
                        <Image
                          src={"/images/emplacement_puce.jpg"}
                          alt="Illustration Emplacement Puce"
                          width={350}
                          height={340}
                        />
                        <p className="c-StepIdentiteBacs__Text">
                          <b>Le numéro de votre bac se trouve </b>
                          toujours <b>sous le code barres</b> situé sur
                          l’étiquette collée
                          <b>sur un des côtés de votre bac</b> de déchets.
                        </p>
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
