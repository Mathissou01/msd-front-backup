import React, { Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { User } from "../../../lib/user";
import useUpdateUser from "../../../hooks/user/useUpdateUser";
import CommonButton from "../../Common/CommonButton/CommonButton";

interface MyHomeProps {
  user: User;
  refetch: () => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isMyHomeInfosCompleted: () => void;
}

interface MyHomeFormData {
  dwellingType?: string;
  householdSize?: number;
}

const dwellingTypeOptions = [
  { value: "house", title: "Maison" },
  { value: "apartment", title: "Appartement" },
];

const MyHomeEditBlock: React.FC<MyHomeProps> = ({
  user,
  refetch,
  isEdit,
  setIsEdit,
  isMyHomeInfosCompleted,
}) => {
  const { updateUser } = useUpdateUser(
    process.env.NEXT_PUBLIC_USER_API_URL || "",
    // TODO: change to currentUser.id
    process.env.NEXT_PUBLIC_USER_ID || "",
  );
  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      dwellingType: user?.dwellingType || "house",
      householdSize: user?.householdSize || 1,
    },
  });

  const handleChangeHouseholdSize = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseInt(e.target.value);
    setValue("householdSize", value);
  };

  const handleDecrement = () => {
    const currentValue = getValues("householdSize");
    if (currentValue > 1) setValue("householdSize", currentValue - 1);
  };

  const handleIncrement = () => {
    const currentValue = getValues("householdSize");
    setValue("householdSize", currentValue + 1);
  };

  const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)(e);
  };

  const onSubmit = (data: MyHomeFormData) => {
    const datas = {
      ...data,
      activeCounter: false,
    };
    updateUser(datas, refetch).then(() => setIsEdit(!isEdit));
  };
  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">Mon foyer</p>
      <form className="c-CommonInfoPersoEdit" onSubmit={onSubmitHandler}>
        <div className="c-CommonInfoPersoEdit__Content">
          <div className="c-CommonInfoPersoEdit__Row">
            <label className="c-CommonInfoPersoEdit__Label">
              Type de logement
            </label>
            <input type="text" tabIndex={-1} hidden />

            <Controller
              control={control}
              name="dwellingType"
              defaultValue={user?.dwellingType || "house"}
              render={({ field }) => (
                <div className="c-FormRadioInput__Options">
                  {dwellingTypeOptions.map((option) => (
                    <div
                      key={option.value}
                      className="c-FormRadioInput__Option"
                    >
                      <input
                        type="radio"
                        checked={field.value === option.value}
                        className="c-FormRadioInput__Input c-FormRadioInput__Input_checked"
                        {...field}
                        value={option.value}
                      />
                      <div className="c-FormLabel">
                        <label
                          className="c-FormLabel__LabelWrapper"
                          htmlFor={option.value}
                        >
                          <span className="c-FormLabel__Label">
                            {option.title}
                          </span>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
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
                onClick={handleDecrement}
              >
                -
              </button>
              <Controller
                control={control}
                defaultValue={user?.householdSize || 1}
                name="householdSize"
                render={({ field }) => (
                  <input
                    className="c-CommonInfoPersoEdit__Input c-CommonInfoPersoEdit__InputField"
                    type="number"
                    value={field.value}
                    onChange={handleChangeHouseholdSize}
                  />
                )}
              />
              <button
                type="button"
                className="c-CommonInfoPersoEdit__Less"
                onClick={handleIncrement}
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
              onClick={() => {
                isMyHomeInfosCompleted();
                setIsEdit(!isEdit);
              }}
            />
            <CommonButton type="submit" style="primary" label="Enregistrer" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyHomeEditBlock;
