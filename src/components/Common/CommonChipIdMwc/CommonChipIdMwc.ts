import { useCheckUserRequirementsQuery } from "../../../graphql/codegen/generated-types";
import { useContract } from "../../../hooks/useContract";
import { useCurrentUser } from "../../../hooks/useCurrentUser";

export const GetDataChipId = () => {
  const { currentUser } = useCurrentUser();
  const { contractId } = useContract();
  const { data, loading, error } = useCheckUserRequirementsQuery({
    variables: {
      streetNumber: `${currentUser?.address?.houseNumber}`,
      streetName: `${currentUser?.address?.street}`,
      postalCode: `${currentUser?.address?.postcode}`,
      city: `${currentUser?.address?.city}`,
      contractId: contractId,
    },
  });

  const findChipIdByTrashFlow = (
    binIdData:
      | {
          __typename?: string | undefined;
          chipId?: string | null | undefined;
          trashFlow?: string | null | undefined;
        }[]
      | null
      | undefined,
    trashFlow: string,
  ): string => {
    if (binIdData) {
      const item = binIdData.find(
        (item) => item !== null && item.trashFlow === trashFlow,
      );
      if (item) {
        return item.chipId || "";
      }
    }
    return "";
  };

  const binIdData:
    | {
        __typename?: string | undefined;
        chipId?: string | null | undefined;
        trashFlow?: string | null | undefined;
      }[]
    | null
    | undefined = data?.checkUserRequirements as
    | {
        __typename?: string | undefined;
        chipId?: string | null | undefined;
        trashFlow?: string | null | undefined;
      }[]
    | null
    | undefined;

  return {
    data,
    loading,
    error,
    findChipIdByTrashFlow,
    binIdData,
  };
};

export default GetDataChipId;
