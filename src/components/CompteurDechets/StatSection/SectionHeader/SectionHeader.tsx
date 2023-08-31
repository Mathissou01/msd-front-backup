import React from "react";
import ArrowBack from "public/images/pictos/arrow-back.svg";
import ArrowBackBold from "public/images/pictos/arrow-back-bold.svg";
import Calendar from "public/images/pictos/calendar.svg";
import Info from "public/images/pictos/info.svg";
import "./section-header.scss";
import { format } from "date-fns";
import { useRouter } from "next/router";

export interface SectionHeaderProps {
  title: string;
  date: string;
  isDateDisplayMobile?: boolean;
  isYearDisplay?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  date,
  isDateDisplayMobile = true,
  isYearDisplay = false,
}) => {
  const router = useRouter();
  const formattedYear = format(new Date(date), "yyyy");
  return (
    <div className="c-SectionHeader">
      <div className="c-SectionHeader__Desktop">
        <button
          className="c-SectionHeader__ArrowContainer"
          onClick={() => router.back()}
        >
          <ArrowBackBold />
        </button>
        <div className="c-SectionHeader__Content">
          <h1 className="c-SectionHeader__Title">{title}</h1>
          <div>
            <div className="c-SectionHeader__DateContainer">
              <Calendar />
              <p className="c-SectionHeader__Date">
                {!isYearDisplay ? date : formattedYear}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="c-SectionHeader__Mobile">
        <div className="c-SectionHeader__Content">
          <button
            className="c-SectionHeader__ArrowContainer"
            onClick={() => router.back()}
          >
            <ArrowBack />
          </button>
          <h1 className="c-SectionHeader__TitleMobile">{title}</h1>
          <Info />
        </div>
        {isDateDisplayMobile && (
          <div className="c-SectionHeader__DateContainer">
            <div className="c-SectionHeader__DateContent">
              <p className="c-SectionHeader__Date">
                {!isYearDisplay ? date : formattedYear}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
