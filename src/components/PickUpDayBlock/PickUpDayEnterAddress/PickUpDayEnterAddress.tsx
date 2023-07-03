import { useForm, FormProvider } from "react-hook-form";
import {
  SearchResultAddress,
  useGetBanAddressesAutoCompleteLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import RequestAddressFields from "../../Request/RequestAddressField/RequestAddressField";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./pick-up-day-enter-address.scss";

interface IFormInput {
  addressInput: string;
}

export interface Coordinates {
  longitude: number;
  latitude: number;
}

interface PickUpDayEnterAddressProps {
  onUpdateCoordinates: (coordinates: Coordinates) => void;
}

export default function PickUpDayEnterAddress({
  onUpdateCoordinates,
}: PickUpDayEnterAddressProps) {
  /* Methods */
  async function onSubmit(address: IFormInput) {
    if (address.addressInput) {
      const coordinates = await getCoordinatesFromAddress(address.addressInput);
      if (coordinates?.longitude && coordinates?.latitude) {
        onUpdateCoordinates(coordinates);
      }
    }
  }

  async function getCoordinatesFromAddress(
    searchValue: string,
  ): Promise<Coordinates | undefined> {
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
      searchResults[0].latitude
    ) {
      return {
        longitude: searchResults[0].longitude,
        latitude: searchResults[0].latitude,
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
        className="c-PickUpDayBlock__EnterAddress"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="c-PickUpDayBlock__AddressInput"
          onBlur={() => clearErrors("addressInput")}
        >
          <RequestAddressFields name={"addressInput"} label="Adresse" />
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
