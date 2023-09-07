import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchAddressQuery } from "../../../graphql/codegen/generated-types";
import useUpdateUser from "../../../hooks/user/useUpdateUser";
import useDebounce from "../../../hooks/useDebounce";
import { IAddress, IUser } from "../../../lib/user";
import { AddressOption } from "../../../lib/address-option";
import CommonButton from "../../Common/CommonButton/CommonButton";
import AutocompleteAddress from "../../CompteurDechets/Eligibility/AutocompleteAddress/AutocompleteAddress";
import classNames from "classnames";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

interface MyInfosEditProps {
  user: IUser;
  refetch: () => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

interface MyInfosFormData {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  activeCounter?: boolean;
}

const MyInfosEditBlock: React.FC<MyInfosEditProps> = ({
  user,
  refetch,
  isEdit,
  setIsEdit,
}) => {
  const [addressValue, setAddressValue] = useState(user?.address?.label || "");
  const debouncedValue = useDebounce<string>(addressValue, 500);
  const [selectedAddress, setSelectedAddress] = useState<IAddress>();
  const [filteredOptions, setFilteredOptions] = useState<AddressOption[]>([]);
  const [isVisibled, setIsVisibled] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { currentUser } = useCurrentUser();
  const { updateUser } = useUpdateUser(currentUser?._id || "");
  const { data: searchAddressData, loading } = useSearchAddressQuery({
    variables: { address: debouncedValue, limit: 5 },
  });

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(event.target.value);
  };

  const handleClickAddressOption = (option: IAddress) => {
    setSelectedAddress(option);
    setAddressValue(option.label || "");
    setIsVisibled(false);
  };

  useEffect(() => {
    setFilteredOptions(
      (searchAddressData?.searchAddress || []) as AddressOption[],
    );
  }, [searchAddressData]);

  const onSubmit = (data: MyInfosFormData) => {
    const datas = {
      ...data,
      address: selectedAddress,
    };
    localStorage.removeItem("showModal");
    if (
      datas?.address?.label &&
      datas?.address.label !== user?.address?.label
    ) {
      datas.activeCounter = false;
      localStorage.removeItem("showModal");
    }
    updateUser(datas, refetch).then(() => setIsEdit(!isEdit));
  };

  return (
    <form className="c-CommonInfoPersoEdit" onSubmit={handleSubmit(onSubmit)}>
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
        <AutocompleteAddress
          value={addressValue}
          handleChange={handleChangeAddress}
          debouncedValue={debouncedValue}
          isVisibled={isVisibled}
          setIsVisibled={setIsVisibled}
          handleClick={handleClickAddressOption}
          filteredOptions={filteredOptions}
          inputName="address"
          inputLabel="Adresse complète"
          inputPlaceholder="ex: 10 rue des fleurs 82000 Montauban"
          isEdit={true}
          loading={loading}
        />
        <div className="c-CommonInfoPersoEdit__Row">
          <label className="c-CommonInfoPersoEdit__Label" htmlFor="firstName">
            Prénom *
          </label>
          <Controller
            control={control}
            name="firstname"
            defaultValue={user?.firstname}
            rules={{
              required: "Le prénom est obligatoire",
            }}
            render={({ field }) => (
              <input
                {...field}
                className={classNames("c-CommonInfoPersoEdit__Input", {
                  "c-CommonInfoPersoEdit__Input_error": errors.firstname,
                })}
                type="text"
              />
            )}
          />
          {errors.firstname && (
            <span className="c-CommonInfoPersoEdit__ErrorMessage">
              {errors.firstname.message as string}
            </span>
          )}
        </div>
        <div className="c-CommonInfoPersoEdit__Row">
          <label className="c-CommonInfoPersoEdit__Label" htmlFor="lastName">
            Nom *
          </label>
          <Controller
            control={control}
            name="lastname"
            defaultValue={user?.lastname}
            rules={{
              required: "Le nom est obligatoire",
            }}
            render={({ field }) => (
              <input
                {...field}
                className="c-CommonInfoPersoEdit__Input"
                type="text"
              />
            )}
          />
          {errors.lastname && (
            <p className="c-CommonInfoPersoEdit__ErrorMessage">
              {errors.lastname.message as string}
            </p>
          )}
        </div>
        <div className="c-CommonInfoPersoEdit__Row">
          <label className="c-CommonInfoPersoEdit__Label" htmlFor="tel">
            N° de téléphone
          </label>
          <p className="c-CommonInfoPersoEdit__TextMsg">
            Ce numéro pourra être utilisé pour recevoir les alertes auxquelles
            sous avez souscrites.
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

          <CommonButton
            type="submit"
            style="primary"
            label="Enregistrer les modifications"
          />
        </div>
      </div>
    </form>
  );
};

export default MyInfosEditBlock;
