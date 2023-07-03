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
import { User } from "../../../lib/user";
import { AddressOption } from "../../../lib/address-option";
import CommonButton from "../../Common/CommonButton/CommonButton";
import AutocompleteAddress from "../../CompteurDechets/Eligibility/AutocompleteAddress/AutocompleteAddress";

interface MyInfosEditProps {
  user: User;
  refetch: () => void;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

interface MyInfosFormData {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
}

const MyInfosEditBlock: React.FC<MyInfosEditProps> = ({
  user,
  refetch,
  isEdit,
  setIsEdit,
}) => {
  const [addressValue, setAddressValue] = useState(user.addressLabel || "");
  const debouncedValue = useDebounce<string>(addressValue, 500);
  const [selectedAddress, setSelectedAddress] = useState<Partial<User>>();
  const [filteredOptions, setFilteredOptions] = useState<AddressOption[]>([]);
  const [isVisibled, setIsVisibled] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { updateUser } = useUpdateUser(process.env.NEXT_PUBLIC_USER_ID || "");
  const { data: searchAddressData, loading } = useSearchAddressQuery({
    variables: { address: debouncedValue, limit: 5 },
  });

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressValue(event.target.value);
  };

  const handleClickAddressOption = (option: Partial<AddressOption>) => {
    setSelectedAddress({
      streetNumber: option.houseNumber || null,
      streetName: option.street || null,
      city: option.city || null,
      postalCode: option.postcode || null,
      idAddress: option.id || null,
      addressLabel: option.label || null,
    });
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
      ...selectedAddress,
    };
    if (datas.idAddress && datas.idAddress !== user.idAddress) {
      datas.activeCounter = false;
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
          <label className="c-CommonInfoPersoEdit__Label" htmlFor="lastName">
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

          <CommonButton type="submit" style="primary" label="Enregistrer" />
        </div>
      </div>
    </form>
  );
};

export default MyInfosEditBlock;
