import React, { useContext } from "react";
import { ContractEntity } from "../graphql/codegen/generated-types";

export interface IContractContext {
  contract: ContractEntity;
  contractId: `${number}`;
  colors: { [key: string]: string };
}

export const ContractContext = React.createContext<IContractContext>({
  contract: {},
  contractId: "0",
  colors: {},
});

export const useContract = () => useContext(ContractContext);
