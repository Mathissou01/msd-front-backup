import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Step0 from "../../../components/CompteurDechets/Eligibility/Step0/Step0";
import Step1 from "../../../components/CompteurDechets/Eligibility/Step1/Step1";
import Step2 from "../../../components/CompteurDechets/Eligibility/Step2/Step2";
import Step3 from "../../../components/CompteurDechets/Eligibility/Step3/Step3";
import Step4 from "../../../components/CompteurDechets/Eligibility/Step4/Step4";
import Step5 from "../../../components/CompteurDechets/Eligibility/Step5/Step5";
import StepFinal from "../../../components/CompteurDechets/Eligibility/StepFinal/StepFinal";
import ProgressBar from "../../../components/CompteurDechets/Eligibility/ProgressBar/ProgressBar";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import StepError from "../../../components/CompteurDechets/Eligibility/StepError/StepError";
import { useCurrentUser } from "../../../hooks/useCurrentUser";
import { IAddress } from "../../../lib/user";
import "./eligibilite-page.scss";

export interface IError {
  isActive: boolean;
  title: string;
  isAddressVisible: boolean;
  isReasonVisible: boolean;
  isContactVisible: boolean;
  isNoBinsLinked: boolean;
  bins?: { name: string; value: string }[];
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
  /* Static Data */
  const pageTitle = "Mon compteur déchets";

  const router = useRouter();
  const { currentUser } = useCurrentUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<
    IAddress | null | undefined
  >(currentUser?.address || null);

  const [error, setError] = useState({
    isActive: false,
    title: "",
    isAddressVisible: false,
    isReasonVisible: false,
    isNoBinsLinked: false,
    isContactVisible: false,
  });

  const methods = useForm({
    defaultValues: {
      email: currentUser?.email,
      dwellingType: currentUser?.dwellingType,
      userType: currentUser?.userType,
      householdSize: currentUser?.householdSize || 1,
    },
  });

  const handleError = (updates: Partial<IError>) => {
    setError({ ...error, ...updates });
  };

  useEffect(() => {
    if (currentUser) {
      setCurrentQuestion(1);
      if (currentUser?.userType === "particular") {
        setCurrentQuestion(2);
      }
      if (currentUser?.dwellingType === "house") {
        setCurrentQuestion(3);
      }
    }
  }, [currentUser]);

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 0:
        return <Step0 handleOptionClick={handleOptionClick} />;
      case 1:
        return <Step1 handleOptionClick={handleOptionClick} />;
      case 2:
        return <Step2 handleOptionClick={handleOptionClick} />;
      case 3:
        return (
          <Step3
            handleOptionClick={handleOptionClick}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            handleError={handleError}
          />
        );
      case 4:
        return (
          <Step4
            handleOptionClick={handleOptionClick}
            handleError={handleError}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        );
      case 5:
        return <Step5 handleOptionClick={handleOptionClick} />;
      case 6:
        return <StepFinal selectedAddress={selectedAddress} />;
    }
  };

  const handleOptionClick = (next: string | number) => {
    typeof next === "string"
      ? router.push(`/mon-compteur-dechets${next}`)
      : setCurrentQuestion(next);
  };

  const handleBackClick = () => {
    if (currentQuestion === 4) {
      setCurrentQuestion(3);
      setError({ ...error, isActive: false });
    } else {
      error.isActive
        ? setError({ ...error, isActive: false })
        : setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <ProgressBar
        title="Activation du compteur déchets"
        currentQuestion={currentQuestion}
        maxQuestions={5}
        handleBackClick={handleBackClick}
      />
      <div className="c-Steps">
        <CommonMeta title={pageTitle} />
        <CommonBreadcrumb pages={breadcrumbPages} />
        {error.isActive ? (
          <StepError
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            error={error}
            handleError={handleError}
            setCurrentQuestion={setCurrentQuestion}
          />
        ) : (
          renderQuestion()
        )}
      </div>
    </FormProvider>
  );
};

export default Eligibilite;
