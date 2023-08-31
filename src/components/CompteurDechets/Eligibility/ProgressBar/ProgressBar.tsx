import React from "react";
import ArrowBack from "public/images/pictos/arrow-back.svg";
import "./ProgressBar.scss";

interface ProgressBarProps {
  title?: string;
  currentQuestion: number;
  maxQuestions: number;
  withoutBackButton?: boolean;
  handleBackClick?: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  title = "",
  currentQuestion,
  withoutBackButton = false,
  maxQuestions,
  handleBackClick,
}) => {
  /* Static Data */
  const progressionTitle = "Progression";

  const progressStyle = {
    width: `${(currentQuestion / maxQuestions) * 100}%`,
  };

  return (
    <div className="c-ProgressBar__Header">
      {currentQuestion >= 1 && !withoutBackButton && (
        <div onClick={handleBackClick} className="c-ProgressBar__ArrowIcon">
          <ArrowBack />
        </div>
      )}
      <div className="c-ProgressBar__Content">
        <h4>{title}</h4>
        <div className="c-ProgressBar__Container">
          <p>{progressionTitle}</p>
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
