import React from "react";
import {
  IQuestion,
  IQuestionOption,
} from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";

interface Step5Props {
  question: IQuestion;
  handleOptionClick: (nextQuestion: number, redirectTo: string) => void;
}

const Step5: React.FC<Step5Props> = ({ question, handleOptionClick }) => {
  return (
    <div>
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option: IQuestionOption, index: number) => (
          <li key={index}>
            <button
              onClick={() =>
                handleOptionClick(
                  option.nextQuestion || 0,
                  option.redirectTo || "",
                )
              }
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Step5;
