import React from "react";
import { IQuestion } from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";

interface Step3Props {
  question: IQuestion;
  handleOptionClick: (nextQuestion: number) => void;
}

const Step3: React.FC<Step3Props> = ({ question, handleOptionClick }) => {
  return (
    <div>
      <h2>{question.text}</h2>
      <input type="text" />
      <div>
        <button
          onClick={() =>
            handleOptionClick(question.options[0].nextQuestion || 0)
          }
        >
          {question.options[0].text}
        </button>
        <button>{question.options[1].text}</button>
      </div>
    </div>
  );
};

export default Step3;
