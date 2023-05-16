import React, { useState, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../Common/CommonButton/CommonButton";

interface IMyHomeProps {
  title: string;
  typeLogement: string;
  adresse: string;
  nbrPersonnesCount?: number;
  setNbrPersonnesCount: Dispatch<SetStateAction<number>>;
}

interface IMyHomeData {
  typeLogement?: string;
  adresse: string;
  nbrPersonnesCount?: number;
  setNbrPersonnesCount?: Dispatch<SetStateAction<number>>;
}

export default function MyHome({
  title,
  nbrPersonnesCount = 0,
  setNbrPersonnesCount,
}: IMyHomeProps) {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      typeLogement: "Maison",
      adresse: "5 rue de la gare, 82000 Montauban",
    },
  });

  // Get input value
  const adresse = watch("adresse");
  const typeLogement = watch("typeLogement");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    value >= 1 && setNbrPersonnesCount(value);
  };

  const incrementValue = () => {
    setNbrPersonnesCount(nbrPersonnesCount + 1);
  };

  const decrementValue = () => {
    if (nbrPersonnesCount > 1) {
      setNbrPersonnesCount(nbrPersonnesCount - 1);
    }
  };
  const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  const onSubmit = (data: IMyHomeData) => {
    //TODO: Remove this when API is ready
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const datas = {
      ...data,
      nbrPersonnesCount: nbrPersonnesCount,
      typeLogement,
      adresse,
    };
  };
  const options: string[] = ["Maison", "Appartement"];
  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">{title}</p>
      {isEdit ? (
        <form className="c-CommonInfoPersoEdit" onSubmit={onSubmitHandler}>
          <div className="c-CommonInfoPersoEdit__Content">
            <div className="c-CommonInfoPersoEdit__Row">
              <label className="c-CommonInfoPersoEdit__Label">
                Type de logement
              </label>
              <input type="text" tabIndex={-1} hidden />
              <div className="c-FormRadioInput__Options">
                {options.map((option) => (
                  <div key={option} className="c-FormRadioInput__Option">
                    <input
                      type="radio"
                      id={option}
                      value={option}
                      checked={typeLogement === option}
                      className="c-FormRadioInput__Input c-FormRadioInput__Input_checked"
                      {...register("typeLogement")}
                    />
                    <div className="c-FormLabel">
                      <label
                        className="c-FormLabel__LabelWrapper"
                        htmlFor={option}
                      >
                        <span className="c-FormLabel__Label">{option}</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label className="c-CommonInfoPersoEdit__Label" htmlFor="adresse">
                Adresse complète *
              </label>
              <input
                className="c-CommonInfoPersoEdit__Input"
                type="text"
                defaultValue=""
                {...register("adresse", {
                  required: true,
                })}
              />
              {errors.adresse && (
                <p className="c-CommonInfoPersoEdit__ErrorMessage">
                  L&apos;adresse est obligatoire
                </p>
              )}
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label
                className="c-CommonInfoPersoEdit__Label"
                htmlFor="nbrPersonnesCount"
              >
                Nombre de personnes dans le foyer
              </label>
              <div className="c-CommonInfoPersoEdit__InputNumber">
                <button
                  type="button"
                  className="c-CommonInfoPersoEdit__Plus"
                  onClick={decrementValue}
                >
                  -
                </button>
                <input
                  id="nbrPersonnesCount"
                  className="c-CommonInfoPersoEdit__Input c-CommonInfoPersoEdit__InputField "
                  type="number"
                  value={nbrPersonnesCount}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="c-CommonInfoPersoEdit__Less"
                  onClick={incrementValue}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="c-CommonInfoPersoEdit__Bottom">
            <p className="c-CommonInfoPersoEdit__TextMsg">
              Les champs marqués d’un * sont obligatoires
            </p>
            <div className="c-CommonInfoPersoEdit__Button">
              <CommonButton
                type="button"
                style="secondary"
                label="Annuler"
                onClick={() => setIsEdit(!isEdit)}
              />
              <CommonButton
                type="submit"
                style="primary"
                label="Enregistrer"
                onClick={() => {
                  isValid && setIsEdit(!isEdit);
                }}
              />
            </div>
          </div>
        </form>
      ) : (
        <>
          <div className="c-CommonInfoPerso__Content">
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                Type de logement
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">
                {typeLogement}
              </p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                Adresse complète *
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">{adresse}</p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                Nombre de personnes dans le foyer
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">
                {nbrPersonnesCount}
              </p>
            </div>
          </div>
          <div className="c-CommonInfoPerso__Button">
            <CommonButton
              type="button"
              style="primary"
              label="modifier"
              onClick={() => setIsEdit(!isEdit)}
            />
          </div>
        </>
      )}
    </div>
  );
}
