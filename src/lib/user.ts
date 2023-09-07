import { NextRouter } from "next/router";

export interface IUser {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email: string;
  phone?: string;
  idAddress?: string | null;
  streetNumber?: number | string | null;
  streetName?: string | null;
  city?: string | null;
  postalCode?: string | null;
  addressLabel?: string | null;
  dwellingType?: string;
  userType?: string;
  householdSize?: number;
  consents?: IConsent[];
  activeCounter?: boolean;
  address?: IAddress;
  activationDate?: Date;
  communication?: ICommunication;
}

export interface IAddress {
  city?: string;
  citycode?: string;
  context?: string;
  district?: string;
  houseNumber?: number;
  id?: string;
  importance?: number;
  label?: string;
  name?: string;
  postcode?: string;
  street?: string;
  type?: string;
}

export interface IConsent {
  acceptanceDate: Date;
  version: string;
}

export interface ICommunication {
  alerts: ICommunicationType;
  tips: ICommunicationType;
  sociologicalSurveys: boolean;
  evolutionServices: boolean;
}

export interface ICommunicationType {
  email: boolean;
  sms: boolean;
  push: boolean;
}

export const isUserAccessToMWC = (currentUser: IUser | null): boolean => {
  return (
    (currentUser && currentUser.activeCounter === false) ||
    currentUser?.dwellingType !== "house" ||
    currentUser?.userType !== "particular"
  );
};

export const redirectUser = (currentUser: IUser | null, router: NextRouter) => {
  if (!currentUser) {
    router.push("/connexion");
    return;
  }
};

export const redirectMWCUser = (
  currentUser: IUser | null,
  router: NextRouter,
) => {
  redirectUser(currentUser, router);
  if (isUserAccessToMWC(currentUser)) {
    router.push("/mon-compteur-dechets/eligibilite");
    return;
  }
};
