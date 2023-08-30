import React, { Dispatch, SetStateAction, useEffect } from "react";
import Image from "next/image";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonOverlay from "../../../Common/CommonPopover/CommonOverlay";
import { IError } from "../../../../pages/mon-compteur-dechets/eligibilite/index.page";
import EligibilityRecycling from "public/images/id-bac.svg";
import BacIcon from "public/images/pictos/bac_2_roues.svg";
import "./step4.scss";
import { IAddress } from "../../../../lib/user";
import { useContract } from "../../../../hooks/useContract";
import { useCheckUserRequirementsQuery } from "../../../../graphql/codegen/generated-types";
import classNames from "classnames";
import CommonSpinner from "../../../Common/CommonSpinner/CommonSpinner";
import { useCurrentUser } from "../../../../hooks/useCurrentUser";

interface Step4Props {
  handleOptionClick: (next: string | number) => void;
  handleError: (updates: Partial<IError>) => void;
  selectedAddress: IAddress | null | undefined;
  setSelectedAddress: Dispatch<SetStateAction<IAddress | null | undefined>>;
}

const labels = {
  unknownBacs:
    "Malheureusement, nous ne retrouvons pas de bacs de déchets liés à votre adresse",
  alreadyLinked: "Oups, votre bac semble déjà lié à un autre compte",
};

const binType: { [key: string]: string } = {
  OMR: "Ordures ménagères",
  CS: "Emballages",
};
const Step4: React.FC<Step4Props> = ({
  selectedAddress,
  handleOptionClick,
  handleError,
}) => {
  const { currentUser } = useCurrentUser();
  const { contractId } = useContract();
  const { data, loading, error } = useCheckUserRequirementsQuery({
    variables: {
      streetNumber: `${selectedAddress?.houseNumber}`,
      streetName: `${selectedAddress?.street}`,
      postalCode: `${selectedAddress?.postcode}`,
      city: `${selectedAddress?.city}`,
      contractId: contractId,
      userId: currentUser?._id || null,
    },
  });

  useEffect(() => {
    if (error) {
      if (error?.message === "Adress already registered")
        handleError({
          isActive: true,
          isAddressVisible: true,
          isReasonVisible: true,
          isContactVisible: true,
          title: labels.alreadyLinked,
        });
      if (error?.message)
        handleError({
          isActive: true,
          isAddressVisible: true,
          isReasonVisible: true,
          isContactVisible: true,
          title: labels.unknownBacs,
          isNoBinsLinked: true,
        });
    }
  }, [error, handleError]);

  return (
    <>
      <div>
        <div className="o-Steps c-StepIdentiteBacs">
          <EligibilityRecycling className="o-Steps__Image" />
          <div className="o-Steps__Container">
            <CommonBlockHeading titleContent="Nous avons identifiés des bacs pour votre adresse" />
            <EligibilityRecycling className="o-Steps__Image" />
            {loading ? (
              <CommonSpinner />
            ) : (
              <div className="o-Steps__CardContainer c-StepIdentiteBacs__CardContainer">
                <>
                  {data?.checkUserRequirements?.map((item, i) => (
                    <div
                      key={i}
                      className={classNames(
                        "c-StepIdentiteBacs__CardItem",
                        item?.trashFlow === "OMR"
                          ? "c-StepIdentiteBacs__CardItem_gray"
                          : "c-StepIdentiteBacs__CardItem_yellow",
                      )}
                    >
                      <div className="c-StepIdentiteBacs__CardItem_icon">
                        <BacIcon />
                      </div>
                      <div className="c-StepIdentiteBacs__CardItem_content">
                        <p className="c-StepIdentiteBacs__CardItem_label">
                          {binType[item?.trashFlow as string]}
                        </p>
                        <p className="c-StepIdentiteBacs__CardItem_idPuce">
                          {item?.chipId}
                        </p>
                      </div>
                    </div>
                  ))}
                </>

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
                        bins: data?.checkUserRequirements?.map((item) => ({
                          name: binType[item?.trashFlow as string],
                          value: item?.chipId,
                        })) as { name: string; value: string }[],
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;
