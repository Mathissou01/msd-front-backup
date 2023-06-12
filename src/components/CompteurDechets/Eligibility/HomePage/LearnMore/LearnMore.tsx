import React from "react";
import Info from "public/images/pictos/infoicon.svg";
import Plus from "public/images/pictos/plus-button.svg";
import CommonBlockHeading from "../../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonOverlay from "../../../../Common/CommonPopover/CommonOverlay";
import "./learn-more.scss";

const LearnMore = () => {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const weighingSystem: string = "dynamic";
  const renderOverlayContent = () => {
    return (
      <>
        {weighingSystem === "outlet" && (
          <div>
            <p>
              Vos déchets sont collectés de manière régulière par des camions de
              collecte de déchets, dédiés à votre quartier. Lors de la collecte
              de déchets, chaque bac levé est identifié de manière unique grâce
              à une puce collée sur le bac.
            </p>
            <br />
            <h4>Méthode de calcul</h4>
            <br />
            <p>
              L’ensemble des bacs de déchets collectés par un camion sont pesés
              collectivement. Une fois la tournée de collecte de déchets du
              quartier terminée, le camion est pesé et vidé sur une installation
              de traitement. Ce poids total est ensuite réparti sur l’ensemble
              des bacs de déchets levés pendant la tournée, proportionnellement
              à la taille des bacs. <br />
              <br /> Par exemple : Imaginons un camion qui a été pesé 8,5 tonnes
              pour un volume total de bacs collectés de 88 500 litres. Si votre
              bac fait 120 litres, le poids qui sera attribué à vos déchets est
              : 8 500 / 88 500 * 120 = 11,5 kg
              <br />
              <br />
              Nous vous affichons donc une donnée estimée dans votre compteur
              déchets.
            </p>
          </div>
        )}
        {weighingSystem === "dynamic" && (
          <div>
            <p>
              Vos bacs de déchets sont pesés de manière individuelle à chaque
              fois qu’ils sont collectés, grâce à un système de pesée embarqué
              sur chaque camion. Nous vous affichons donc une donnée précise
              dans votre compteur déchets.
            </p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="c-LearnMore">
      <CommonBlockHeading titleContent="En savoir plus" />
      <CommonOverlay
        button={
          <button className="c-LearnMore__Content">
            <div className="c-LearnMore__Info">
              <Info
                className="c-LearnMore__InfoIcon"
                style={{ color: "green" }}
              />
            </div>
            <p className="c-LearnMore__Text">
              Comment est calculée ma production ?
            </p>
            <div className="c-LearnMore__Plus">
              <Plus />
            </div>
          </button>
        }
        content={renderOverlayContent}
        title="Comment est calculée ma production ?"
        isBottomButton={true}
        bottomButtonLabel="J'ai compris"
      />
    </div>
  );
};

export default LearnMore;
