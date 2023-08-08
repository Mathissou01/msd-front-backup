import React from "react";
import { useFormContext } from "react-hook-form";
import {
  SearchResultAddress,
  useGetBanAddressesAutoCompleteLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import CommonErrors from "../CommonErrors/CommonErrors";
import FormAutoCompleteInput from "../../Form/FormAutoCompleteInput/FormAutoCompleteInput";
import "./common-address-field.scss";

interface RequestAddressProps {
  label?: string;
  name: string;
}

export default function CommonAddressField({
  label,
  name,
}: RequestAddressProps) {
  /* Local Data */
  const [getBanAddresses, { loading, error }] =
    useGetBanAddressesAutoCompleteLazyQuery({
      fetchPolicy: "network-only",
    });
  const { getValues, setValue, watch } = useFormContext();
  /* Methods */
  async function searchFunction(
    searchValue: string,
  ): Promise<Array<SearchResultAddress>> {
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
    return searchResults;
  }

  function selectTransform(result: SearchResultAddress): string {
    setValue("lat", result.latitude);
    setValue("long", result.longitude);
    return result.name ?? "";
  }

  return (
    <div className="c-CommonAddressField">
      <CommonErrors errors={[error]}>
        <FormAutoCompleteInput<SearchResultAddress>
          name={name}
          searchFunction={searchFunction}
          displayTransformFunction={(result) => result.name ?? ""}
          selectTransformFunction={selectTransform}
          isLoading={loading}
          isRequired={watch("lat") === undefined && watch("long") === undefined}
          defaultValue={getValues(name)}
          labelProps={{ label: label }}
        />
      </CommonErrors>
    </div>
  );
}
