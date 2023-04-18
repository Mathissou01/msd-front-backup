import React from "react";
import ArrowBack from "public/images/pictos/arrow-back.svg";
import "./ProgressBar.scss";

interface ProgressBarProps {
  title: string;
  currentQuestion: number;
  maxQuestions: number;
  handleBackClick: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  currentQuestion,
  maxQuestions,
  handleBackClick,
}) => {
  const progressStyle = {
    width: `${(currentQuestion / maxQuestions) * 100}%`,
  };
  return (
    <div className="c-ProgressBar__Header">
      <div onClick={handleBackClick}>
        <ArrowBack />
      </div>
      <div className="c-ProgressBar__Content">
        <h4>{title}</h4>
        <div className="c-ProgressBar__Container">
          <p>Progression</p>
          <div className="c-ProgressBar__ProgressBarContainer">
            <div
              className="c-ProgressBar__ProgressBar"
              style={progressStyle}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
