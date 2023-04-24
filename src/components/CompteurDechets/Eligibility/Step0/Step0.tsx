import React from "react";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
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
    <div>
      <CommonBlockHeading titleContent={question.title} />
      {question.options.map((option: IQuestionOption, index: number) => (
        <CommonButton
          key={index}
          type="button"
          style={option.buttonStyle}
          label={option.text}
          onClick={() => handleOptionClick(option.next)}
        />
      ))}
    </div>
  );
};

export default Step0;
