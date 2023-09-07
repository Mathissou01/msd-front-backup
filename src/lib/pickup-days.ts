import { Maybe } from "@graphql-tools/utils";
import {
  Enum_Pickupday_Periodicity,
  InformationMessage,
  PickUpDayEntity,
  WasteFormEntity,
} from "../graphql/codegen/generated-types";
import { createDateFromString, isSubArrayInOrder } from "./utilities";

interface IAddressInfo {
  city: string;
  street: string;
  houseNumber?: string;
  postalCode?: string;
}

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

interface IHebdomadaireAdvancedSelection {
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

interface ICoordinates {
  longitude: number;
  latitude: number;
}

interface IFormattedPickUpDay {
  pictoBlock: {
    pictoUrl?: string;
    pictoAltText?: Maybe<string>;
    color?: string;
    pickUpDayName?: string;
    flowName?: Maybe<string>;
  };
  informationBlock: {
    informationMessage?: {
      isRelevant?: boolean | null;
      message: string;
    };
    pickUpHoursDescription?: string;
    periodicityDescription?: string;
    hasIncludeHolidayDescription?: boolean;
  };
  acceptedWasteBlock: {
    displayCustomButton: boolean;
    customButtonRequestLink?: string;
    customButtonExternalLink?: string;
    customButtonLabel?: Maybe<string>;
    pavName?: Maybe<string>;
    displayFindRecyclingCenterButton?: boolean;
    acceptedWasteList?: WasteFormEntity[];
  };
}

function areConsecutiveDays(days: string[]) {
  return isSubArrayInOrder(Object.values(EDaysOfTheWeek), days);
}

function informationMessageIsRelevant(informationMessage: InformationMessage) {
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
}

function getMonthlyText(advancedSelection: IMensuelAdvancedSelection): string {
  const labels = {
    allThe: "Tous les",
    theFirst: "Le premier",
    theLast: "Le dernier",
    ofTheMonth: "du mois",
  };

  const monthlySelection = advancedSelection.mensuel;
  const weekday = Array.isArray(monthlySelection.selection)
    ? monthlySelection.selection[0]
    : "";
  switch (monthlySelection?.choice) {
    case EMonthlyStatus.MONTHLY_FIRST:
      return `${labels.theFirst} ${weekday} ${labels.ofTheMonth}`;
    case EMonthlyStatus.MONTHLY_LAST:
      return `${labels.theLast} ${weekday} ${labels.ofTheMonth}`;
    case EMonthlyStatus.MONTHLY_DATE:
      return `${labels.allThe} ${monthlySelection?.selection} ${labels.ofTheMonth}`;
    default:
      return "";
  }
}

function getWeeklyText(
  advancedSelection: IHebdomadaireAdvancedSelection,
  fullWeekDescription: string,
): string {
  const labels = {
    from: "Du",
    to: "au",
    and: "et",
  };
  const weeklySelection = advancedSelection?.hebdomadaire;
  const selectionLength: number = weeklySelection?.selection?.length;
  if (selectionLength === 1) {
    return weeklySelection?.selection[0];
  } else if (selectionLength === 7) {
    return fullWeekDescription;
  } else if (
    selectionLength >= 2 &&
    areConsecutiveDays(weeklySelection?.selection)
  ) {
    const firstDay = weeklySelection?.selection[0];
    const lastDay = weeklySelection?.selection[selectionLength - 1];
    return `${labels.from} ${firstDay} ${labels.to} ${lastDay}`;
  } else if (selectionLength !== 0) {
    return `${weeklySelection?.selection?.slice(0, -1).join(", ")} ${
      labels.and
    } ${weeklySelection?.selection?.slice(-1)}`;
  } else {
    return "";
  }
}

function getPeriodicityDescription(
  advancedSelection: IHebdomadaireAdvancedSelection | IMensuelAdvancedSelection,
  fullWeekDescription: string,
  periodicity?: Maybe<Enum_Pickupday_Periodicity>,
): string {
  if (periodicity === Enum_Pickupday_Periodicity.Hebdomadaire) {
    return getWeeklyText(
      advancedSelection as IHebdomadaireAdvancedSelection,
      fullWeekDescription,
    );
  } else if (periodicity === Enum_Pickupday_Periodicity.Mensuel) {
    return getMonthlyText(advancedSelection as IMensuelAdvancedSelection);
  } else {
    return "";
  }
}

export function formatPickUpDays(
  pickUpDaysToFormat: PickUpDayEntity[],
  fullWeekDescription: string,
  fromText: string,
  dropOffMapIsActivated?: boolean,
): IFormattedPickUpDay[] {
  return pickUpDaysToFormat.map((data) => {
    const externalLink = data?.attributes?.externalLink;
    const requestFormId = data?.attributes?.request?.data?.id;
    const requestLink = `/services/demandes/${requestFormId}`;
    const pavName =
      data?.attributes?.collectDoorToDoor?.data?.attributes?.name ??
      data?.attributes?.collectVoluntary?.data?.attributes?.name;
    const customButtonLabel = data?.attributes?.buttonLabel;

    return {
      pictoBlock: {
        pictoUrl:
          data?.attributes?.collectDoorToDoor?.data?.attributes?.picto?.data
            ?.attributes?.url ??
          data?.attributes?.collectVoluntary?.data?.attributes?.picto?.data
            ?.attributes?.url,
        pictoAltText:
          data?.attributes?.collectDoorToDoor?.data?.attributes?.picto?.data
            ?.attributes?.alternativeText ??
          data?.attributes?.collectVoluntary?.data?.attributes?.picto?.data
            ?.attributes?.alternativeText,
        color:
          data?.attributes?.flow?.data?.attributes?.color?.data?.attributes
            ?.hexaCode,
        pickUpDayName: data?.attributes?.name,
        flowName: data?.attributes?.flow?.data?.attributes?.name,
      },

      informationBlock: {
        periodicityDescription: getPeriodicityDescription(
          data?.attributes?.advancedSelection,
          fullWeekDescription,
          data?.attributes?.periodicity,
        ),
        hasIncludeHolidayDescription: data?.attributes?.includeHoliday,
        ...(data?.attributes?.pickUpHours && {
          pickUpHoursDescription: `${fromText}${data.attributes.pickUpHours}`,
        }),
        ...(data?.attributes?.informationMessage?.data?.attributes && {
          informationMessage: {
            isRelevant: informationMessageIsRelevant(
              data?.attributes?.informationMessage?.data?.attributes,
            ),
            message:
              data?.attributes?.informationMessage?.data?.attributes
                ?.infoMessage,
          },
        }),
      },
      acceptedWasteBlock: {
        ...(externalLink && { customButtonExternalLink: externalLink }),
        ...(requestLink && { customButtonRequestLink: requestLink }),
        displayCustomButton:
          !!customButtonLabel && !!(externalLink || requestLink),
        customButtonLabel: customButtonLabel,
        pavName: pavName,
        displayFindRecyclingCenterButton:
          !!data.attributes?.collectVoluntary?.data?.attributes &&
          dropOffMapIsActivated &&
          !!pavName,
        acceptedWasteList:
          data.attributes?.flow?.data?.attributes?.wasteForms?.data,
      },
    };
  });
}

export type { IFormattedPickUpDay, IAddressInfo, ICoordinates };
