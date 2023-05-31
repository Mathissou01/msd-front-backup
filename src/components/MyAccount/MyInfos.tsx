import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import CommonButton from "../Common/CommonButton/CommonButton";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  streetNumber: string;
  streetName: string;
  city: string;
  postalCode: string;
  dwellingType: string;
  userType: string;
  householdSize: number;
}
interface MyInfosProps {
  user: User;
  refetch: () => void;
  loading: boolean;
}

const MyInfos: React.FC<MyInfosProps> = ({ user, refetch }) => {
  const [isEdit, setIsEdit] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: { [key: string]: string }) => {
    fetch(
      `${process.env.NEXT_PUBLIC_USER_API_URL}/user/${process.env.NEXT_PUBLIC_USER_ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    )
      .then((response) => {
        if (response.ok) {
          refetch();
          setIsEdit(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">Mes informations</p>
      {isEdit ? (
        <form
          className="c-CommonInfoPersoEdit"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="c-CommonInfoPersoEdit__Content">
            <p className="c-CommonInfoPersoEdit__TextMsg">
              Les champs marqués d’un * sont obligatoires
            </p>
            <div className="c-CommonInfoPersoEdit__Row c-CommonInfoPersoEdit__DisabledField">
              <label className="c-CommonInfoPersoEdit__Label" htmlFor="idUser">
                ID utilisateur
              </label>
              <input
                className="c-CommonInfoPersoEdit__Input"
                type="text"
                disabled
                defaultValue="MSD123456"
              />
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label
                className="c-CommonInfoPersoEdit__Label"
                htmlFor="firstName"
              >
                Prénom
              </label>
              <Controller
                control={control}
                name="firstname"
                defaultValue={user?.firstname}
                render={({ field }) => (
                  <input
                    {...field}
                    className="c-CommonInfoPersoEdit__Input"
                    type="text"
                  />
                )}
              />
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label
                className="c-CommonInfoPersoEdit__Label"
                htmlFor="lastName"
              >
                Nom
              </label>
              <Controller
                control={control}
                name="lastname"
                defaultValue={user?.lastname}
                render={({ field }) => (
                  <input
                    {...field}
                    className="c-CommonInfoPersoEdit__Input"
                    type="text"
                  />
                )}
              />
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label className="c-CommonInfoPersoEdit__Label" htmlFor="tel">
                N° de téléphone
              </label>
              <p className="c-CommonInfoPersoEdit__TextMsg">
                Ce numéro pourra être utilisé pour recevoir les alertes
                auxquelles sous avez souscrites.
              </p>
              <Controller
                control={control}
                name="phone"
                defaultValue={user?.phone}
                rules={{
                  maxLength: {
                    value: 20,
                    message:
                      "Le numéro de téléphone ne doit pas dépasser 20 caractères",
                  },
                  pattern: {
                    value: /^[\d+]+$/,
                    message: "Le numéro de téléphone n'est pas valide",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="c-CommonInfoPersoEdit__Input"
                    type="text"
                  />
                )}
              />

              {errors.phone && (
                <p className="c-CommonInfoPersoEdit__ErrorMessage">
                  {errors?.phone?.message as string}
                </p>
              )}
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label className="c-CommonInfoPersoEdit__Label" htmlFor="email">
                Votre email *
              </label>
              <Controller
                control={control}
                name="email"
                defaultValue={user?.email}
                rules={{
                  required: "L'email est obligatoire",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "L'email n'est pas valide",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    className="c-CommonInfoPersoEdit__Input"
                    type="text"
                  />
                )}
              />
              {errors.email && (
                <p className="c-CommonInfoPersoEdit__ErrorMessage">
                  {errors.email.message as string}
                </p>
              )}
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

              <CommonButton type="submit" style="primary" label="Enregistrer" />
            </div>
          </div>
        </form>
      ) : (
        <>
          <div className="c-CommonInfoPerso__Content">
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                ID Utilisateur
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">{user?.id}</p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                Nom complet
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">
                {user?.firstname} {user?.lastname}
              </p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">Email</p>
              <p className="c-CommonInfoPerso__ContentItem_value">
                {user?.email}
              </p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                N° de téléphone
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">
                {user?.phone}
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
};

export default MyInfos;
