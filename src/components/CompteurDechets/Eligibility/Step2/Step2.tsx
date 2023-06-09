import React from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/maison-immeuble.svg";

interface Step2Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
}

const Step2: React.FC<Step2Props> = ({ question, handleOptionClick }) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />
        <EligibilityRecycling className="o-Steps__Image" />
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

export default Step2;
