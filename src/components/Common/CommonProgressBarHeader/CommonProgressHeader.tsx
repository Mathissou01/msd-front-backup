import React from "react";
import CommonArrowAndTitle from "../CommonArrowAndTitle/CommonArrowAndTitle";
import CommonProgressBarLign from "../CommonProgressBarLign/CommonProgressBarLign";
import "./common-progress-bar-header.scss";

interface ICommonProgressBarProps {
  title: string;
  currentQuestion: number;
  maxQuestions: number;
  handleBackClick: () => void;
}

export default function CommonProgressBarHeader({
  title,
  currentQuestion,
  maxQuestions,
  handleBackClick,
}: ICommonProgressBarProps) {
  /* Static Data */
  const progressionTitle = "Progression";
  return (
    <div className="c-CommonProgressBarHeader">
      <div className="c-CommonProgressBarHeader__ArrowAndTitle">
        {currentQuestion >= 1 && (
          <CommonArrowAndTitle
            handleBackClick={handleBackClick}
            title={title}
          />
        )}
      </div>
      <div className="c-CommonProgressBarHeader__Container">
        <p>{progressionTitle}</p>
        <CommonProgressBarLign
          currentQuestion={currentQuestion}
          maxQuestions={maxQuestions}
        />
      </div>
    </div>
  );
}
