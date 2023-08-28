import React, { useEffect } from "react";
import "./step5.scss";
import CommonBlockHeading from "../../../Common/CommonBlockHeading/CommonBlockHeading";
import CommonButton from "../../../Common/CommonButton/CommonButton";
import EligibilityPersons from "public/images/membre-foyer.svg";
import { useFormContext } from "react-hook-form";

interface Step5Props {
  handleOptionClick: (next: string | number) => void;
}

const Step5: React.FC<Step5Props> = ({ handleOptionClick }) => {
  const {
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    trigger("householdSize"); // Déclencher la validation du champ "householdSize" au chargement du composant
  }, [trigger]);
  const incrementValue = () => {
    setValue("householdSize", parseInt(getValues("householdSize"), 10) + 1);
    trigger("householdSize");
  };

  const decrementValue = () => {
    if (parseInt(getValues("householdSize"), 10) > 1) {
      setValue("householdSize", parseInt(getValues("householdSize"), 10) - 1);
    }
    trigger("householdSize");
  };

  return (
    <div className="o-Steps c-Step5">
      <EligibilityPersons className="o-Steps__Image" />
      <div className="o-Steps__Container">
        <CommonBlockHeading titleContent="Vous y êtes presque !" />
        <EligibilityPersons className="o-Steps__Image" />

        <div className="o-Steps__CardContainer">
          <label className="o-Steps__SubText" htmlFor="personsCount">
            Combien de personne composent votre foyer :
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
              {...register("householdSize", {
                valueAsNumber: true,
                required: "Le nombre de personnes est obligatoire",
                min: {
                  value: 1,
                  message: "Le nombre de personnes doit être supérieur à 0",
                },
                max: {
                  value: 20,
                  message: "Le nombre de personnes doit être inférieur à 20",
                },
              })}
              className="c-Step5__InputField"
              type="number"
              onChange={(e) => {
                setValue("householdSize", parseInt(e.target.value, 10)); // Mettre à jour la valeur du champ "householdSize"
                trigger("householdSize"); // Déclencher la validation du champ "householdSize" lors de la modification de la valeur
              }}
              value={
                typeof getValues("householdSize") === "number"
                  ? getValues("householdSize")
                  : 1
              }
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
            {errors.householdSize?.message as string}
          </p>
          <div className="o-Steps__ButtonContainer">
            <CommonButton
              type="button"
              style="primary"
              label="Valider"
              onClick={() => {
                handleOptionClick(6);
              }}
              isDisabled={errors.householdSize?.message !== undefined}
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
