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
}

const CommonMonthSelector: React.FC<CommonMonthSelectorProps> = ({
  date,
  setDate,
  dateFormat = "MMMM yyyy",
  amount = 1,
}) => {
  const handleChangeDate = (amount: number) => {
    setDate((prevDate: Date) => {
      const newDate = addMonths(prevDate, amount);
      const currentDate = new Date();
      const previousMonth = subMonths(currentDate, 1);
      if (newDate > previousMonth) {
        return previousMonth;
      } else {
        return newDate;
      }
    });
  };

  const formattedDate = format(date, dateFormat, {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });

  return (
    <div className="c-CommonMonthSelector">
      <button
        className="c-CommonMonthSelector__Arrow"
        onClick={() => handleChangeDate(-amount)}
      >
        <ArrowBack />
      </button>
      <span className="c-CommonMonthSelector__Date">{formattedDate}</span>
      <button
        className="c-CommonMonthSelector__Arrow"
        onClick={() => handleChangeDate(amount)}
      >
        <ArrowRegular />
      </button>
    </div>
  );
};

export default CommonMonthSelector;
