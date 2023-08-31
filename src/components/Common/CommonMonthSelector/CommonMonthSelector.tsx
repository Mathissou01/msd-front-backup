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

  const currentDate = new Date();
  const entryDateFormat = new Date(currentDate);
  const entryDate = entryDateFormat.setDate(entryDateFormat.getDate() + 1);

  const lastMonthDate = subMonths(currentDate, 1);
  const lastMonthTime = lastMonthDate.getTime();

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
      {entryDate < lastMonthTime && (
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
