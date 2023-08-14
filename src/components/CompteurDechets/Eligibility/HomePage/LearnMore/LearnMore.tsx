import React, { useEffect } from "react";
import Info from "public/images/pictos/infoicon.svg";
import Plus from "public/images/pictos/plus-button.svg";
import CommonBlockHeading from "../../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonOverlay from "../../../../Common/CommonPopover/CommonOverlay";
import "./learn-more.scss";
import Flow from "../Flows/Flow/Flow";
import { useGetMwcFlowsByContractIdQuery } from "../../../../../graphql/codegen/generated-types";

interface Flow {
  name: string;
  weightSystem: string;
  trashFlow: string;
}

const { NEXT_PUBLIC_CONTRACT_ID } = process.env;

const LearnMore = () => {
  const [flows, setFlows] = React.useState<Flow[]>([]);
  const { data } = useGetMwcFlowsByContractIdQuery({
    variables: {
      filters: {
        mwCounterService: {
          contract: {
            id: {
              eq: NEXT_PUBLIC_CONTRACT_ID,
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    if (data) {
      setFlows(
        data.mwcFlows?.data.map(
          (flow) =>
            ({
              name: flow?.attributes?.flow?.data?.attributes?.name,
              weightSystem: flow?.attributes?.weightSystem,
              trashFlow: flow?.attributes?.flow?.data?.attributes?.code,
            } as Flow),
        ) || [],
      );
    }
  }, [data]);

  const renderOverlayContent = () => {
    const uniqueWeighingSystems = Array.from(
      new Set(flows.map((flow) => flow.weightSystem)),
    );

    return (
      <>
        <div>
          <p>
            Vos déchets sont collectés de manière régulière par des camions de
            collecte de déchets, dédiés à votre quartier. Lors de la collecte de
            déchets, chaque bac levé est identifié de manière unique grâce à une
            puce collée sur le bac.
          </p>
          <br />

          {uniqueWeighingSystems.map((weighingSystem) => (
            <div key={weighingSystem}>
              <h4>Méthode de calculs pour les déchets</h4>
              <div className="c-LearnMore__MultipleFlowContainer">
                {flows
                  .filter((flow) => flow.weightSystem === weighingSystem)
                  .map((flow) => (
                    <Flow key={flow.trashFlow} flow={flow} />
                  ))}
              </div>
              {renderWeighingSystemContent(weighingSystem)}
              <br />
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderWeighingSystemContent = (weighingSystem: string) => {
    switch (weighingSystem) {
      case "Outlet":
        return (
          <p>
            L’ensemble des bacs de déchets collectés par un camion sont pesés
            collectivement. Une fois la tournée de collecte de déchets du
            quartier terminée, le camion est pesé et vidé sur une installation
            de traitement. Ce poids total est ensuite réparti sur l’ensemble des
            bacs de déchets levés pendant la tournée, proportionnellement à la
            taille des bacs.
            <br />
            <br />
            Par exemple : Imaginons un camion qui a été pesé 8,5 tonnes pour un
            volume total de bacs collectés de 88 500 litres. Si votre bac fait
            120 litres, le poids qui sera attribué à vos déchets est : 8 500 /
            88 500 * 120 = 11,5 kg
            <br /> <br /> Nous vous affichons donc une donnée estimée dans votre
            compteur déchets.
          </p>
        );
      case "Dynamic":
        return (
          <p>
            Vos bacs de déchets sont pesés de manière individuelle à chaque fois
            qu’ils sont collectés, grâce à un système de pesée embarqué sur
            chaque camion. <br />
            Nous vous affichons donc une donnée précise dans votre compteur
            déchets.
          </p>
        );
    }
  };

  return (
    <div className="c-LearnMore">
      <div className="c-LearnMore__Title">
        <CommonBlockHeading titleContent="En savoir plus" />
      </div>
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
