import React from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/formes_gray.svg";

interface Step1Props {
  question: IQuestion;
  handleOptionClick: (nextQuestion: string | number) => void;
}

const Step1: React.FC<Step1Props> = ({ question, handleOptionClick }) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <EligibilityRecycling className="o-Steps__Image" />
        {/* <div className="o-Steps__TitleContainer"> */}
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />
        <div className="o-Steps__CardContainer">
          <p className="o-Steps__SubText">{question.subText}</p>
          {question.options.map((option: IQuestionOption, index: number) => (
            <button
              key={index}
              className="o-Steps__Card"
              onClick={() => handleOptionClick(option.next || 0)}
            >
              <p className="o-Steps__CardSubtitle">{option.text}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step1;
