import { useGetBinIdQuery } from "../../../graphql/codegen/generated-types";

export const GetDataChipId = () => {
  const queryVariables = {
    houseNumber: "13",
    street: "RUE JULES ALLEMAND",
    city: "Rennes",
    contractMetadataKey: "243500139",
  };

  const { data, loading, error } = useGetBinIdQuery({
    variables: queryVariables,
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
    | undefined = data?.getBinId as
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
