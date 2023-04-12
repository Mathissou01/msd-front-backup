import React, { useContext } from "react";
import { ContractEntity } from "../graphql/codegen/generated-types";

export interface IContractContext {
  contract: ContractEntity;
  contractId: `${number}`;
}

export const ContractContext = React.createContext<IContractContext>({
  contract: {},
  contractId: "0",
});

export const useContract = () => useContext(ContractContext);
