import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import ArrowBack from "public/images/pictos/arrow-back.svg";
import ArrowRegular from "public/images/pictos/arrow-regular.svg";
import "./common-month-selector.scss";

interface CommonMonthSelectorProps {
  date: Date;
  dateFormat?: string;
  amount?: number;
  minDate?: Date;
  handleChangeDate: (amount: number) => void;
}

const CommonMonthSelector: React.FC<CommonMonthSelectorProps> = ({
  date,

  dateFormat = "MMMM yyyy",
  amount = 1,
  minDate = new Date("2000-01-01"),
  handleChangeDate,
}) => {
  const formattedDate = format(date, dateFormat, {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });

  const formattedMinDateToMMYYY = `${subMonths(
    new Date(minDate),
    1,
  ).getMonth()}-${subMonths(new Date(minDate), 1).getFullYear()}`;
  const formattedDateToMMYYY = `${new Date(date).getMonth()}-${new Date(
    date,
  ).getFullYear()}`;

  const entryDate = new Date(date).getTime();
  const lastMonthDate = subMonths(new Date(), 1).getTime();

  return (
    <div className="c-CommonMonthSelector">
      {formattedMinDateToMMYYY !== formattedDateToMMYYY && (
        <button
          className="c-CommonMonthSelector__Arrow"
          onClick={() => handleChangeDate(-amount)}
        >
          <ArrowBack />
        </button>
      )}

      <span className="c-CommonMonthSelector__Date">{formattedDate}</span>
      {entryDate < lastMonthDate && (
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
