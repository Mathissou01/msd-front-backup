import React, { useState } from "react";
import { questions } from "./questionDatas";
import Step1 from "../../../components/CompteurDechets/Eligibility/Step1/Step1";
import Step2 from "../../../components/CompteurDechets/Eligibility/Step2/Step2";
import Step3 from "../../../components/CompteurDechets/Eligibility/Step3/Step3";
import Step4 from "../../../components/CompteurDechets/Eligibility/Step4/Step4";
import ProgressBar from "../../../components/CompteurDechets/Eligibility/ProgressBar/ProgressBar";
import Step0 from "../../../components/CompteurDechets/Eligibility/Step0/Step0";

const Eligibilite = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 0:
        return (
          <Step0
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
          />
        );
      case 1:
        return (
          <Step1
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
          />
        );
      case 2:
        return (
          <Step2
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
          />
        );
      case 3:
        return (
          <Step3
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
          />
        );
      case 4:
        return (
          <Step4
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
          />
        );
    }
  };

  const handleOptionClick = (nextQuestion: number) => {
    nextQuestion && setCurrentQuestion(nextQuestion);
  };

  const handleBackClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <>
      <ProgressBar
        title="Activation du compteur déchets"
        currentQuestion={currentQuestion}
        maxQuestions={questions.length}
        handleBackClick={handleBackClick}
      />
      {renderQuestion()}
    </>
  );
};

export default Eligibilite;
