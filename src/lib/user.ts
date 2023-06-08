export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  idAddress?: string | null;
  streetNumber?: number | string | null;
  streetName?: string | null;
  city?: string | null;
  postalCode?: string | null;
  addressLabel?: string | null;
  dwellingType: string;
  userType: string;
  householdSize: number;
  consent?: Consent[];
  activeCounter?: boolean;
  activationDate?: Date;
}

export interface Consent {
  acceptanceDate: Date;
  version: string;
}
