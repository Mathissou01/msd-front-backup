import { addMonths, format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import React, { Dispatch, SetStateAction } from "react";
import ArrowBack from "public/images/pictos/arrow-back.svg";
import ArrowRegular from "public/images/pictos/arrow-regular.svg";
import "./common-month-selector.scss";

interface CommonMonthSelectorProps {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  dateFormat?: string;
  amount?: number;
  minDate?: Date;
}

const CommonMonthSelector: React.FC<CommonMonthSelectorProps> = ({
  date,
  setDate,
  dateFormat = "MMMM yyyy",
  amount = 1,
  minDate,
}) => {
  const handleChangeDate = (amount: number) => {
    setDate((prevDate: Date) => {
      const newDate = addMonths(prevDate, amount);
      const previousMonth = subMonths(new Date(), 1);
      if (minDate) {
        const effectiveMinDate = subMonths(new Date(minDate), 1);
        if (newDate > previousMonth) {
          return previousMonth;
        } else if (newDate < effectiveMinDate) {
          return effectiveMinDate;
        }
      } else {
        if (newDate > previousMonth) {
          return previousMonth;
        }
      }

      return newDate;
    });
  };

  const formattedDate = format(date, dateFormat, {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });

  return (
    <div className="c-CommonMonthSelector">
      {minDate && subMonths(new Date(minDate), 1) < new Date(date) && (
        <button
          className="c-CommonMonthSelector__Arrow"
          onClick={() => handleChangeDate(-amount)}
        >
          <ArrowBack />
        </button>
      )}

      <span className="c-CommonMonthSelector__Date">{formattedDate}</span>
      {new Date(date).toISOString().substring(0, 10) !==
        subMonths(new Date(), 1).toISOString().substring(0, 10) && (
        <button
          className="c-CommonMonthSelector__Arrow"
          onClick={() => handleChangeDate(amount)}
        >
          <ArrowRegular />
        </button>
      )}
    </div>
  );
};

export default CommonMonthSelector;
