import { useForm } from "react-hook-form";
import {
  SearchResultAddress,
  useGetAddressCoordinatesLazyQuery,
} from "../../../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../../../lib/utilities";
import FormAutoCompleteInput from "../../../../Form/FormAutoCompleteInput/FormAutoCompleteInput";
import SubHeadingBlock from "../../../../Edito/Blocks/SubHeadingBlock/SubHeadingBlock";
import "./adress-alerts-block.scss";

interface IFormInput {
  searchTerm: string;
  address: string;
}

export default function AdressAlertsBlock() {
  /* Static Data */
  const labels = {
    title: "Votre adresse",
  };

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
          searchResults = results.getAddressCoordinates?.filter(removeNulls);
        }
      },
    });
    return searchResults;
  }

  /* Local Data */
  const [getBanAddresses, { loading }] = useGetAddressCoordinatesLazyQuery({
    fetchPolicy: "network-only",
  });

  const formMethods = useForm<IFormInput>();

  return (
    <div>
      <div className="c-AdressAlertsBlock">
        <div className="c-AdressAlertsBlock__Title">
          <SubHeadingBlock subHeadingText={labels.title} subHeadingTag={"h2"} />
        </div>
        <div className="c-AdressAlertsBlock__EnterAddress">
          <FormAutoCompleteInput<SearchResultAddress>
            name="address"
            searchFunction={searchFunction}
            displayTransformFunction={(result) => result.name ?? ""}
            selectTransformFunction={(result) => result.name ?? undefined}
            isLoading={loading}
            isRequired
            defaultValue={formMethods.getValues("address")}
          />
        </div>
      </div>
    </div>
  );
}
