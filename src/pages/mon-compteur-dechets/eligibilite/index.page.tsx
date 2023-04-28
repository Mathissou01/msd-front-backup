import React, { useState } from "react";
import { questions } from "./questionDatas";
import Step1 from "../../../components/CompteurDechets/Eligibility/Step1/Step1";
import Step2 from "../../../components/CompteurDechets/Eligibility/Step2/Step2";
import Step3 from "../../../components/CompteurDechets/Eligibility/Step3/Step3";
import Step4 from "../../../components/CompteurDechets/Eligibility/Step4/Step4";
import ProgressBar from "../../../components/CompteurDechets/Eligibility/ProgressBar/ProgressBar";
import Step0 from "../../../components/CompteurDechets/Eligibility/Step0/Step0";
import { useRouter } from "next/router";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import Step5 from "../../../components/CompteurDechets/Eligibility/Step5/Step5";
import StepError from "../../../components/CompteurDechets/Eligibility/StepError/StepError";
export interface IError {
  isActive: boolean;
  title: string;
  isAddressVisible: boolean;
  isReasonVisible: boolean;
  isContactVisible: boolean;
}

const breadcrumbPages = [
  {
    label: "Accueil",
    slug: "/",
  },
  {
    label: "Mon compteur déchets",
    slug: "/mon-compteur-dechets",
  },
];

const Eligibilite = () => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [personsCount, setPersonsCount] = useState(1);
  const [error, setError] = useState({
    isActive: false,
    title: "",
    isAddressVisible: true,
    isReasonVisible: true,
    isContactVisible: true,
  });

  const handleError = (updates: Partial<IError>) => {
    setError({ ...error, ...updates });
  };

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
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            handleError={handleError}
          />
        );
      case 4:
        return (
          <Step4
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
          />
        );
      case 5:
        return (
          <Step5
            question={questions[currentQuestion]}
            handleOptionClick={handleOptionClick}
            personsCount={personsCount}
            setPersonsCount={setPersonsCount}
          />
        );
    }
  };

  const handleOptionClick = (next: string | number) => {
    typeof next === "string"
      ? router.push(`/mon-compteur-dechets${next}`)
      : setCurrentQuestion(next);
  };

  const handleBackClick = () => {
    error.isActive
      ? setError({ ...error, isActive: false })
      : setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <>
      <ProgressBar
        title="Activation du compteur déchets"
        currentQuestion={currentQuestion}
        maxQuestions={questions.length}
        handleBackClick={handleBackClick}
      />
      <CommonBreadcrumb pages={breadcrumbPages} />
      {error.isActive ? (
        <StepError
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          error={error}
          handleError={handleError}
        />
      ) : (
        renderQuestion()
      )}
    </>
  );
};

export default Eligibilite;
