import { IContentData } from "../../lib/map";

interface IContentDataProps {
  contents: Array<IContentData>;
}

interface IGrammaticalHours {
  closeSoon: string;
  closeAt: string;
  openSoon: string;
  close: string;
  openNext: string;
  openTo: string;
  openToday: string;
  noTime: string;
}

interface IGrammaticalHoursMapping {
  closeSoon: string;
  closeAt: string;
  openSoon: string;
  openNext: string;
  openToday: string;
  noTime: string;
  close: {
    masc: string;
    fem: string;
  };
  openTo: {
    masc: string;
    fem: string;
  };
}

const grammaticalOpeningHourMapping: IGrammaticalHoursMapping = {
  closeSoon: "Ferme Bientôt",
  closeAt: "Ferme à",
  openSoon: "Ouvre Bientôt",
  openNext: "Ouvre",
  openToday: "Ouvre aujourd'hui",
  noTime: "Aucun horaire renseigné",
  close: {
    masc: "Fermé",
    fem: "Fermée",
  },
  openTo: {
    masc: "Ouvert Jusqu'à",
    fem: "Ouverte Jusqu'à",
  },
};

export default function useOpeningHours({ contents }: IContentDataProps) {
  /* Static Data */
  const currentDay = new Date().getDay();
  const daysOfWeek = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const currentDayName = daysOfWeek[currentDay === 0 ? 6 : currentDay - 1];
  const currentTime = new Date().getTime();
  // Helper function to format time
  const getFormattedTime = (time: string) => {
    const date = new Date(`1970-01-01T${time}`);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Helper function to get the next opening day
  const getNextOpeningDay = (contentIndex: number) => {
    const currentDayIndex = currentDay;
    let nextDayIndex = currentDayIndex;
    let foundNextOpeningDay = -1;
    let daysChecked = 0;
    // Search for the next opening day
    while (foundNextOpeningDay === -1 && daysChecked < 7) {
      const nextDay = daysOfWeek[nextDayIndex - 1];
      const nextOpeningDay = contents[contentIndex].infoTime.find((day) => {
        if (currentDayIndex === nextDayIndex && day.weekDay === nextDay) {
          const parsedCurrentDate = Date.parse(new Date().toString());
          const parsedMorningStart = formattedSlotToTimestamp(
            new Date(),
            getFormattedTime(day.morningStart),
          );
          const parsedAfternoonStart = formattedSlotToTimestamp(
            new Date(),
            getFormattedTime(day.afterNoonStart),
          );
          if (
            parsedCurrentDate < parsedMorningStart ||
            parsedCurrentDate < parsedAfternoonStart
          ) {
            return day;
          } else {
            return undefined;
          }
        }
        return (
          day.weekDay === nextDay && (day.morningStart || day.afterNoonStart)
        );
      });
      if (nextOpeningDay) {
        foundNextOpeningDay = nextDayIndex;
      }
      nextDayIndex = nextDayIndex === 7 ? 1 : nextDayIndex + 1;
      daysChecked++;
    }
    if (
      foundNextOpeningDay === -1 &&
      contents[contentIndex].infoTime.find(
        (day) => day.morningStart || day.afterNoonStart,
      )
    ) {
      foundNextOpeningDay = currentDayIndex;
    }
    // If a next opening day is found, return it; otherwise, return null
    return foundNextOpeningDay
      ? contents[contentIndex].infoTime[foundNextOpeningDay - 1]
      : null;
  };

  function formattedSlotToTimestamp(
    currentDate: Date,
    formattedSlot: string,
  ): number {
    const splittedFormattedSlot = formattedSlot.split(":");
    currentDate.setHours(
      Number.parseInt(splittedFormattedSlot[0]),
      Number.parseInt(splittedFormattedSlot[1]),
    );
    return Date.parse(currentDate.toString());
  }

  // Helper function to get the appropriate message based on the current time
  function getMessage(
    contentIndex: number,
    isFeminine: boolean,
    currentTime: number,
    formattedMorningStart: string | null,
    formattedMorningEnd: string | null,
    formattedAfterNoonStart: string | null,
    formattedAfterNoonEnd: string | null,
  ) {
    const thirtyMinutesInMillis = 30 * 60 * 1000;
    const currentDate = new Date();

    let currentTimeCloseToMorningStart = false;
    let currentTimeCloseToMorningEnd = false;
    let currentTimeCloseToAfterNoonStart = false;
    let currentTimeCloseToAfterNoonEnd = false;
    let currentTimeBetweenMorningStartEnd = false;
    let currentTimeBetweenAfternoonStartEnd = false;

    if (formattedMorningStart) {
      // Vérifier si l'heure actuelle est proche de l'heure de début du matin
      const substractionMorningStart =
        formattedSlotToTimestamp(currentDate, formattedMorningStart) -
        currentTime;
      currentTimeCloseToMorningStart =
        substractionMorningStart <= thirtyMinutesInMillis &&
        substractionMorningStart >= 0;
    }
    if (formattedMorningEnd) {
      const substractionMorningEnd =
        formattedSlotToTimestamp(currentDate, formattedMorningEnd) -
        currentTime;
      currentTimeCloseToMorningEnd =
        substractionMorningEnd <= thirtyMinutesInMillis &&
        substractionMorningEnd >= 0;
    }
    if (formattedAfterNoonStart) {
      const substractionAfterNoonStart =
        formattedSlotToTimestamp(currentDate, formattedAfterNoonStart) -
        currentTime;
      currentTimeCloseToAfterNoonStart =
        substractionAfterNoonStart <= thirtyMinutesInMillis &&
        substractionAfterNoonStart >= 0;
    }
    if (formattedAfterNoonEnd) {
      const substractionAfterNoonEnd =
        formattedSlotToTimestamp(currentDate, formattedAfterNoonEnd) -
        currentTime;
      currentTimeCloseToAfterNoonEnd =
        substractionAfterNoonEnd <= thirtyMinutesInMillis &&
        substractionAfterNoonEnd >= 0;
    }

    const infos: IGrammaticalHours = {
      closeSoon: grammaticalOpeningHourMapping.closeSoon,
      closeAt: grammaticalOpeningHourMapping.closeAt,
      openSoon: grammaticalOpeningHourMapping.openSoon,
      close: isFeminine
        ? grammaticalOpeningHourMapping.close.fem
        : grammaticalOpeningHourMapping.close.masc,
      openNext: grammaticalOpeningHourMapping.openNext,
      openTo: isFeminine
        ? grammaticalOpeningHourMapping.openTo.fem
        : grammaticalOpeningHourMapping.openTo.masc,
      openToday: grammaticalOpeningHourMapping.openToday,
      noTime: grammaticalOpeningHourMapping.noTime,
    };

    if (currentTimeCloseToMorningStart) {
      return `${infos.openSoon} ${infos.openToday}, ${formattedMorningStart}`;
    } else if (currentTimeCloseToMorningEnd) {
      return `${infos.closeSoon} ${infos.closeAt} ${formattedMorningEnd}`;
    } else if (currentTimeCloseToAfterNoonStart) {
      return `${infos.openSoon} ${infos.openToday}, ${formattedAfterNoonStart}`;
    } else if (currentTimeCloseToAfterNoonEnd) {
      return `${infos.closeSoon} ${infos.closeAt} ${formattedAfterNoonEnd}`;
    } else {
      if (formattedMorningStart && formattedMorningEnd) {
        currentTimeBetweenMorningStartEnd =
          formattedSlotToTimestamp(currentDate, formattedMorningStart) <
            currentTime &&
          currentTime <
            formattedSlotToTimestamp(currentDate, formattedMorningEnd);
      }
      if (currentTimeBetweenMorningStartEnd) {
        return `${infos.openTo} ${formattedMorningEnd}`;
      }
      if (formattedAfterNoonStart && formattedAfterNoonEnd) {
        currentTimeBetweenAfternoonStartEnd =
          formattedSlotToTimestamp(currentDate, formattedAfterNoonStart) <
            currentTime &&
          currentTime <
            formattedSlotToTimestamp(currentDate, formattedAfterNoonEnd);
      }
      if (currentTimeBetweenAfternoonStartEnd) {
        return `${infos.openTo} ${formattedAfterNoonEnd}`;
      }

      // If none of the above conditions are met, find the next opening day
      const nextOpeningDay = getNextOpeningDay(contentIndex);
      if (nextOpeningDay) {
        if (nextOpeningDay.weekDay === daysOfWeek[currentDay - 1]) {
          const parsedCurrentDate = Date.parse(new Date().toString());
          const parsedMorningStart = formattedSlotToTimestamp(
            new Date(),
            getFormattedTime(nextOpeningDay.morningStart),
          );
          const parsedAfternoonStart = formattedSlotToTimestamp(
            new Date(),
            getFormattedTime(nextOpeningDay.afterNoonStart),
          );
          let nextTodayOpeningStart = nextOpeningDay.morningStart;
          let nextInfoOpening = infos.openToday;
          if (
            parsedAfternoonStart &&
            parsedCurrentDate < parsedAfternoonStart
          ) {
            nextTodayOpeningStart = nextOpeningDay.afterNoonStart;
          }
          if (
            !parsedMorningStart ||
            (parsedCurrentDate > parsedMorningStart && !parsedAfternoonStart) ||
            parsedCurrentDate > parsedAfternoonStart
          ) {
            nextInfoOpening = `${infos.openNext} ${nextOpeningDay.weekDay}`;
          }
          return `${infos.close} ${nextInfoOpening}, ${getFormattedTime(
            nextTodayOpeningStart,
          )}`;
        }
        const nextOpeningStart =
          nextOpeningDay.morningStart || nextOpeningDay.afterNoonStart;
        return `${infos.close} ${infos.openNext} ${
          nextOpeningDay.weekDay
        }, ${getFormattedTime(nextOpeningStart)}`;
      } else {
        // If there is no next opening day, display closed message
        return `${infos.noTime}`;
      }
    }
  }

  return { getFormattedTime, getMessage, currentDayName, currentTime };
}
