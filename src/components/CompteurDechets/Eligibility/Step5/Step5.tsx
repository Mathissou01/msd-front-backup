import React, { Dispatch, SetStateAction } from "react";
import "./step5.scss";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import { IQuestion } from "../../../../pages/mon-compteur-dechets/eligibilite/questionDatas";
import EligibilityPersons from "public/images/membre-foyer.svg";

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

  const incrementValue = () => {
    setPersonsCount(personsCount + 1);
  };

  const decrementValue = () => {
    if (personsCount > 1) {
      setPersonsCount(personsCount - 1);
    }
  };

  return (
    <div className="o-Steps c-Step5">
      <EligibilityPersons className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading titleContent={question.title} />
        <EligibilityPersons className="o-Steps__Image" />

        <div className="o-Steps__CardContainer">
          <label className="o-Steps__SubText" htmlFor="personsCount">
            {question.text}
          </label>
          <div className="c-Step5__InputNumber">
            <button
              type="button"
              className="c-Step5__Plus"
              onClick={decrementValue}
            >
              -
            </button>
            <input
              id="personsCount"
              name="personsCount"
              className="c-Step5__InputField"
              type="number"
              value={personsCount}
              onChange={handleChange}
            />
            <button
              type="button"
              className="c-Step5__Less"
              onClick={incrementValue}
            >
              +
            </button>
          </div>
          <p className="c-Step5__ErrorMessage">
            {personsCount > 20 &&
              "Merci de vérifier le nombre de personnes dans votre foyer"}
          </p>
          <div className="o-Steps__ButtonContainer">
            <CommonButton
              type="button"
              style="primary"
              label={question.options[0].text}
              onClick={() =>
                personsCount <= 20 &&
                handleOptionClick(question.options[0].next)
              }
              isDisabled={personsCount > 20}
            />
            <p className="c-Step5__RGPD">
              L’activation de Mon Compteur Déchets entrainera le traitement de
              données à caractère personnel :{" "}
              <a
                href="/rgpd"
                title="Lien vers la page de la Politique de confidentialité"
              >
                Politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
