import {
  ContractMenuEntityResponse,
  FooterEntityResponse,
} from "../src/graphql/codegen/generated-types";

export type GlobalDataType = {
  contractId: string;
  contractMenu: ContractMenuEntityResponse;
  footer: FooterEntityResponse;
  colors: {
    "external-contrast-text": string;
    "external-primary": string;
    "calculated-primary-dark": string;
    "calculated-primary-light": string;
    "external-secondary": string;
    "calculated-secondary-dark": string;
    "calculated-secondary-light": string;
    "external-waste-household": string;
    "external-waste-selective": string;
    "external-waste-bio": string;
    "external-waste-green": string;
    "external-waste-glass": string;
    "external-waste-paper": string;
    "external-waste-other": string;
  };
};
