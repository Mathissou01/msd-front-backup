import React from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";

interface Step4Props {
  question: IQuestion;
  handleOptionClick: (nextQuestion: number) => void;
}

const Step4: React.FC<Step4Props> = ({ question, handleOptionClick }) => {
  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option: IQuestionOption, index: number) => (
          <li key={index}>
            <button onClick={() => handleOptionClick(option.nextQuestion || 0)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step4;
