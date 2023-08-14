import React, { useState } from "react";
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard";
import SubscriptionBlock from "./SubscriptionBlock/SubscriptionBlock";
import UnsubscriptionBlock from "./UnsubscriptionBlock/UnsubscriptionBlock";
import SubHeadingBlock from "../../Edito/Blocks/SubHeadingBlock/SubHeadingBlock";
import "./header-alerts.scss";

interface HeaderAlertsProps {
  setCurrentQuestion: (question: number) => void;
  currentQuestion: number;
  handleBackClick: () => void;
}

export default function HeaderAlerts({
  setCurrentQuestion,
  currentQuestion,
}: HeaderAlertsProps) {
  /* Static Data */
  const labels = {
    title: "Votre demande concerne",
    description:
      "Pour recevoir par SMS ou e-mail les infos sur les modifications de collecte (perturbations météo, collecte supplémentaire…) ou animations(compostage, village de la réparation…).",
    alertSubscription: "M'inscrire aux alertes",
    alertUnSubscription: "Me désinscrire",
  };

  /* Local Data*/
  const [isSubscriptionBlockVisible, setIsSubscriptionBlockVisible] =
    useState(false);
  const [isUnsubscriptionBlockVisible, setIsUnsubscriptionBlockVisible] =
    useState(false);

  /* Methods */
  const handleSubscriptionClick = () => {
    setIsSubscriptionBlockVisible(true);
    setIsUnsubscriptionBlockVisible(false);
    setCurrentQuestion(2);
  };

  const handleUnsubscriptionClick = () => {
    setIsSubscriptionBlockVisible(false);
    setIsUnsubscriptionBlockVisible(true);
    setCurrentQuestion(2);
  };

  return (
    <div className="c-HeaderAlerts">
      <div>
        <div className="c-HeaderAlerts__Title">
          <SubHeadingBlock subHeadingText={labels.title} subHeadingTag={"h2"} />
        </div>
        <p>{labels.description}</p>
        <div className="c-HeaderAlerts__SubscriptionCards">
          <SubscriptionCard
            href=""
            name={labels.alertSubscription}
            onClick={handleSubscriptionClick}
          />
          <SubscriptionCard
            href=""
            name={labels.alertUnSubscription}
            onClick={handleUnsubscriptionClick}
          />
        </div>
        {currentQuestion === 2 && isSubscriptionBlockVisible && (
          <SubscriptionBlock />
        )}
        {currentQuestion === 2 && isUnsubscriptionBlockVisible && (
          <UnsubscriptionBlock />
        )}
      </div>
    </div>
  );
}
