import { useForm, FormProvider } from "react-hook-form";
import {
  SearchResultAddress,
  useGetBanAddressesAutoCompleteLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import { IAddressInfo, ICoordinates } from "../../../lib/pickup-days";
import CommonAddressField from "../../Common/CommonAddressField/CommonAddressField";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./pick-up-day-enter-address.scss";

interface IFormInput {
  addressInput: string;
}

interface PickUpDayEnterAddressProps {
  onUpdateCoordinates: (coordinates: ICoordinates) => void;
  onUpdateAddressInfo: (addressInfo: IAddressInfo) => void;
}

export default function PickUpDayEnterAddress({
  onUpdateCoordinates,
  onUpdateAddressInfo,
}: PickUpDayEnterAddressProps) {
  /* Methods */
  async function onSubmit(address: IFormInput) {
    if (address.addressInput) {
      const infoFromAddress = await getInfoFromAddress(address.addressInput);
      if (
        infoFromAddress?.coordinates?.longitude &&
        infoFromAddress.coordinates.latitude
      ) {
        onUpdateCoordinates(infoFromAddress.coordinates);
      }
      if (
        infoFromAddress?.addressInfo?.city &&
        infoFromAddress.addressInfo.street
      ) {
        onUpdateAddressInfo(infoFromAddress.addressInfo);
      }
    }
  }

  async function getInfoFromAddress(
    searchValue: string,
  ): Promise<
    { coordinates: ICoordinates; addressInfo: IAddressInfo } | undefined
  > {
    let searchResults: Array<SearchResultAddress> = [];
    await getBanAddresses({
      variables: { searchTerm: searchValue },
      onCompleted: (results) => {
        if (
          results.getAddressCoordinates &&
          results.getAddressCoordinates?.length > 0
        ) {
          searchResults =
            results.getAddressCoordinates?.filter(removeNulls) ?? [];
        }
      },
    });
    if (
      searchResults.length > 0 &&
      searchResults[0].longitude &&
      searchResults[0].latitude &&
      searchResults[0].banFeaturesProperties
    ) {
      const banFeaturesProperties = JSON.parse(
        searchResults[0].banFeaturesProperties,
      );
      return {
        coordinates: {
          longitude: searchResults[0].longitude,
          latitude: searchResults[0].latitude,
        },
        addressInfo: {
          city: banFeaturesProperties.city,
          street: banFeaturesProperties.street,
        },
      };
    }
    return undefined;
  }

  /* Local Data */
  const form = useForm<IFormInput>();
  const { handleSubmit, clearErrors } = form;
  const [getBanAddresses] = useGetBanAddressesAutoCompleteLazyQuery({
    fetchPolicy: "network-only",
  });

  return (
    <FormProvider {...form}>
      <form
        className="c-PickUpDayEnterAddress"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="c-PickUpDayEnterAddress__AddressInput"
          onBlur={() => clearErrors("addressInput")}
        >
          <CommonAddressField name={"addressInput"} label="Adresse" />
        </div>
        <CommonButton
          label="Valider"
          type="submit"
          style="primary"
          fontStyle="fontLarge"
          isDisabled={false}
        />
      </form>
    </FormProvider>
  );
}
