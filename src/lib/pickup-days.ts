import { InformationMessage } from "../graphql/codegen/generated-types";
import { createDateFromString, isSubArrayInOrder } from "./utilities";

enum EMonthlyStatus {
  MONTHLY_FIRST = "le premier",
  MONTHLY_LAST = "le dernier",
  MONTHLY_DATE = "le N du mois",
}

enum EDaysOfTheWeek {
  MONDAY = "Lundi",
  TUESDAY = "Mardi",
  WEDNESDAY = "Mercredi",
  THURSDAY = "Jeudi",
  FRIDAY = "Vendredi",
  SATURDAY = "Samedi",
  SUNDAY = "Dimanche",
}

interface IHebdomadireAdvancedSelection {
  hebdomadaire: {
    selection: Array<string>;
  };
}

interface IMensuelAdvancedSelection {
  mensuel: {
    choice: string;
    selection: Array<string> | number;
  };
}

type IAdvancedSelection =
  | IHebdomadireAdvancedSelection
  | IMensuelAdvancedSelection;

export const areConsecutiveDays = (days: string[]) => {
  return isSubArrayInOrder(Object.values(EDaysOfTheWeek), days);
};

export const informationMessageIsRelevant = (
  informationMessage: InformationMessage,
) => {
  const currentDate = new Date();
  const dateStart = informationMessage?.dateStart
    ? createDateFromString(informationMessage?.dateStart)
    : undefined;
  const dateEnd = informationMessage?.dateEnd
    ? createDateFromString(informationMessage?.dateEnd)
    : undefined;
  dateEnd?.setHours(23, 59, 59, 0);
  if (dateEnd) {
    return dateStart && dateStart <= currentDate && currentDate <= dateEnd;
  } else {
    return dateStart && dateStart <= currentDate;
  }
};

export { EMonthlyStatus, EDaysOfTheWeek };

export type {
  IHebdomadireAdvancedSelection,
  IMensuelAdvancedSelection,
  IAdvancedSelection,
};
