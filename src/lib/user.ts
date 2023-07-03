import { NextRouter } from "next/router";

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
  communication?: Communication;
}

export interface Consent {
  acceptanceDate: Date;
  version: string;
}

export interface Communication {
  alerts: CommunicationType;
  tips: CommunicationType;
  sociologicalSurveys: boolean;
  evolutionServices: boolean;
}

export interface CommunicationType {
  email: boolean;
  sms: boolean;
  push: boolean;
}

export const isUserAccessToMWC = (currentUser: User | null): boolean => {
  return (
    (currentUser && currentUser.activeCounter === false) ||
    currentUser?.dwellingType !== "house" ||
    currentUser?.userType !== "particular"
  );
};

export const redirectUser = (currentUser: User | null, router: NextRouter) => {
  if (!currentUser) {
    router.push("/connexion");
    return;
  }
};

export const redirectMWCUser = (
  currentUser: User | null,
  router: NextRouter,
) => {
  redirectUser(currentUser, router);
  if (isUserAccessToMWC(currentUser)) {
    router.push("/mon-compteur-dechets/eligibilite");
    return;
  }
};
