import { Enum_Audience_Type } from "../graphql/codegen/generated-types";

export interface IAudience {
  id: string;
  type?: Enum_Audience_Type;
}
