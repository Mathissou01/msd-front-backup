import React, { useState } from "react";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import CommonProgressBarHeader from "../../../components/Common/CommonProgressBarHeader/CommonProgressHeader";
import HeaderAlerts from "../../../components/Header/HeaderAlerts/HeaderAlerts";

export default function ServicesAlertesPages() {
  /* Static Data*/
  const pageTitle = "Alertes";
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Infos & Alertes",
    },
  ];

  /* Local Data*/
  const [currentQuestion, setCurrentQuestion] = useState(1);

  /*Methods*/
  const handleBackClick = () => {
    if (currentQuestion === 1) {
      return;
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  return (
    <div className="c-ServicesAlertesPages">
      <CommonProgressBarHeader
        title="Infos et alertes"
        handleBackClick={handleBackClick}
        maxQuestions={2}
        currentQuestion={currentQuestion}
      />
      <div>
        <CommonMeta title={pageTitle} />
        <CommonBreadcrumb pages={pagesUrl} />
        <HeaderAlerts
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          handleBackClick={handleBackClick}
        />
      </div>
    </div>
  );
}
