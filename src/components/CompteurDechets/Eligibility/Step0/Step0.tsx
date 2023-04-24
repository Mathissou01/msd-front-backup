import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import EligibilityRecycling from "public/images/formes_gray.svg";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonButton from "../../../Common/CommonButton/CommonButton";

interface Step0Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
}
const Step0: React.FC<Step0Props> = ({ question, handleOptionClick }) => {
  return (
    <div className="o-Steps">
      <EligibilityRecycling className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <EligibilityRecycling className="o-Steps__Image" />
        <CommonBlockHeading
          titleContent={question.title}
          subTitle={question.text}
        />

        <div className="o-Steps__CardContainer">
          {question.options.map((option: IQuestionOption, index: number) => (
            <CommonButton
              key={index}
              type="button"
              style={option.buttonStyle}
              label={option.text}
              onClick={() => handleOptionClick(option.next || 0)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step0;
