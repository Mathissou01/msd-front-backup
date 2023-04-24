import React from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import "./step2.scss";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/eligibility-recycle.svg";

interface Step2Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
}

const Step2: React.FC<Step2Props> = ({ question, handleOptionClick }) => {
  return (
    <div className="c-Step2">
      <EligibilityRecycling className="c-Step1__Image" />
      <div className="c-Step2__TitleContainer">
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />
      </div>

      <div className="c-Step2__CardContainer">
        <p className="c-Step1__SubText">{question.subText}</p>
        {question.options.map((option: IQuestionOption, index: number) => (
          <button
            key={index}
            className="c-Step2__Card"
            onClick={() => handleOptionClick(option.next)}
          >
            <p className="c-Step2__CardSubtitle">{option.text}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Step2;
