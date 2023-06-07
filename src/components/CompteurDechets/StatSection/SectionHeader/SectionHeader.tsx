import React from "react";
import ArrowBack from "public/images/pictos/arrow-back.svg";
import Calendar from "public/images/pictos/calendar.svg";
import Info from "public/images/pictos/info.svg";
import "./section-header.scss";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import { useRouter } from "next/router";

export interface SectionHeaderProps {
  title: string;
  isDateDisplay?: boolean;
}

const date = format(subMonths(new Date(), 1), "MMMM yyyy", {
  locale: fr,
  useAdditionalWeekYearTokens: false,
});

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  isDateDisplay = false,
}) => {
  const router = useRouter();
  return (
    <div className="c-SectionHeader">
      <div className="c-SectionHeader__Desktop">
        <div
          className="c-SectionHeader__ArrowContainer"
          onClick={() => router.back()}
        >
          <ArrowBack style={{ width: 50, height: 50 }} />
        </div>
        <div className="c-SectionHeader__Content">
          <h1 className="c-SectionHeader__Title">{title}</h1>
          <div>
            {isDateDisplay && (
              <div className="c-SectionHeader__DateContainer">
                <Calendar />
                <p className="c-SectionHeader__Date">{date}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="c-SectionHeader__Mobile">
        <div className="c-SectionHeader__Content">
          <div
            className="c-SectionHeader__ArrowContainer"
            onClick={() => router.back()}
          >
            <ArrowBack />
          </div>
          <h1 className="c-SectionHeader__TitleMobile">{title}</h1>
          <Info />
        </div>
        <div className="c-SectionHeader__DateContainer">
          {isDateDisplay && (
            <div className="c-SectionHeader__DateContent">
              <p className="c-SectionHeader__Date">{date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
