import React from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import "./step1.scss";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/eligibility-recycle.svg";

interface Step1Props {
  question: IQuestion;
  handleOptionClick: (nextQuestion: string | number) => void;
}

const Step1: React.FC<Step1Props> = ({ question, handleOptionClick }) => {
  return (
    <div className="c-Step1">
      <EligibilityRecycling className="c-Step1__Image" />
      <div className="c-Step1__TitleContainer">
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />
      </div>

      <div className="c-Step1__CardContainer">
        <p className="c-Step1__SubText">{question.subText}</p>
        {question.options.map((option: IQuestionOption, index: number) => (
          <button
            key={index}
            className="c-Step1__Card"
            onClick={() => handleOptionClick(option.next)}
          >
            <p className="c-Step1__CardSubtitle">{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step1;
