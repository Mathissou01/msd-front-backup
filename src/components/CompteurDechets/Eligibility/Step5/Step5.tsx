import React, { Dispatch, SetStateAction } from "react";
import "./step5.scss";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import { IQuestion } from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import EligibilityPersons from "public/images/eligibility-recycle.svg";

interface Step5Props {
  question: IQuestion;
  handleOptionClick: (next: string | number) => void;
  personsCount: number;
  setPersonsCount: Dispatch<SetStateAction<number>>;
}

const Step5: React.FC<Step5Props> = ({
  question,
  handleOptionClick,
  personsCount,
  setPersonsCount,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    value >= 1 && setPersonsCount(value);
  };

  return (
    <div className="c-Step5">
      <EligibilityPersons className="c-Step5__Image" />
      <div className="c-Step5__TitleContainer">
        <CommonBlockHeading titleContent={question.title} />
      </div>

      <div className="c-Step5__InputContainer">
        <label className="c-Step5__Label" htmlFor="personsCount">
          {question.text}
        </label>
        <input
          id="personsCount"
          name="personsCount"
          className="c-Step5__Input"
          type="number"
          value={personsCount}
          onChange={handleChange}
        />

        <div className="c-Step5__ButtonContainer">
          <CommonButton
            type="button"
            style="primary"
            label={question.options[0].text}
            onClick={() => handleOptionClick(question.options[0].next)}
          />
        </div>
      </div>
    </div>
  );
};

export default Step5;
