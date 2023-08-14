import React from "react";
import "./common-progress-barlign.scss";

interface ICommonProgressBarProps {
  currentQuestion: number;
  maxQuestions: number;
}
export default function CommonProgressBarLign({
  currentQuestion,
  maxQuestions,
}: ICommonProgressBarProps) {
  const progressStyle = {
    width: `${(currentQuestion / maxQuestions) * 100}%`,
  };
  return (
    <div className="c-CommonProgressBarLign">
      <div
        className="c-CommonProgressBarLign__ProgressBar"
        style={progressStyle}
      ></div>
    </div>
  );
}
