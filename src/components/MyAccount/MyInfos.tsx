import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../Common/CommonButton/CommonButton";

interface ICommonInfoPersoProps {
  title: string;
  idUser: string;
  nomComplet?: string;
  email?: string;
  tel?: string;
}

export default function CommonInfoPerso({
  title,
  idUser,
  nomComplet,
  email,
  tel,
}: ICommonInfoPersoProps) {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      tel: "",
      email: "",
    },
  });
  return (
    <div className="c-CommonInfoPerso__Container">
      <p className="c-CommonInfoPerso__Title">{title}</p>
      {isEdit ? (
        <form
          className="c-CommonInfoPersoEdit"
          onSubmit={handleSubmit((data) => console.log("first : ", data))}
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
              <input
                className="c-CommonInfoPersoEdit__Input"
                type="text"
                defaultValue="Prénom"
                {...register("firstName")}
              />
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label
                className="c-CommonInfoPersoEdit__Label"
                htmlFor="lastName"
              >
                Nom
              </label>
              <input
                className="c-CommonInfoPersoEdit__Input"
                type="text"
                defaultValue="Nom"
                {...register("lastName")}
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
              <input
                className="c-CommonInfoPersoEdit__Input"
                type="text"
                defaultValue="0623455678"
                {...register("tel", { maxLength: 10, pattern: /^[0-9]+$/i })}
              />
              {errors.tel && errors.tel.type === "maxLength" && (
                <p className="c-CommonInfoPersoEdit__ErrorMessage">
                  Le numéro de téléphone ne doit pas dépasser 10 caractères.
                </p>
              )}
              {errors.tel && errors.tel.type === "pattern" && (
                <p className="c-CommonInfoPersoEdit__ErrorMessage">
                  Le numéro téléphone doit contenir uniquement des chiffres.
                </p>
              )}
            </div>
            <div className="c-CommonInfoPersoEdit__Row">
              <label className="c-CommonInfoPersoEdit__Label" htmlFor="email">
                Votre email *
              </label>
              <input
                className="c-CommonInfoPersoEdit__Input"
                type="text"
                defaultValue="jimhalpert@gmail.com"
                {...register("email", {
                  required: "L'email est obligatoire",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "L'email n'est pas valide",
                  },
                })}
              />
              {errors.email && (
                <p className="c-CommonInfoPersoEdit__ErrorMessage">
                  {errors.email.message}
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
                Nom complet
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">{idUser}</p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                Nom complet
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">
                {nomComplet}
              </p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">Email</p>
              <p className="c-CommonInfoPerso__ContentItem_value">{email}</p>
            </div>
            <div className="c-CommonInfoPerso__ContentItem">
              <p className="c-CommonInfoPerso__ContentItem_subTtitle">
                N° de téléphone
              </p>
              <p className="c-CommonInfoPerso__ContentItem_value">{tel}</p>
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
