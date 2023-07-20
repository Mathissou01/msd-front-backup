import React, { MouseEvent } from "react";
import useOpeningHours from "../../../hooks/Map/useOpeningHours";
import { IContentData } from "../../../lib/map";
import "./content-map.scss";

interface IContentDataProps {
  contents: Array<IContentData>;
  onContentClick: (content: IContentData, message: string) => void;
}
export default function ContentMap({
  contents,
  onContentClick,
}: IContentDataProps) {
  const { getFormattedTime, getMessage, currentDayName, currentTime } =
    useOpeningHours({ contents });

  return (
    <div className="c-ContentMap">
      {contents.map((content, index) => {
        const {
          infoPicto,
          infoName,
          infoAddress,
          infoPostal,
          infoDistance,
          infoTime,
        } = content;

        const todayOpeningDay = infoTime.find(
          (day) => day.weekDay === currentDayName,
        );

        // Get the formatted opening and closing times for the morning and afternoon
        const formattedMorningStart =
          todayOpeningDay?.morningStart &&
          getFormattedTime(todayOpeningDay.morningStart);
        const formattedMorningEnd =
          todayOpeningDay?.morningEnd &&
          getFormattedTime(todayOpeningDay.morningEnd);
        const formattedAfterNoonStart =
          todayOpeningDay?.afterNoonStart &&
          getFormattedTime(todayOpeningDay.afterNoonStart);
        const formattedAfterNoonEnd =
          todayOpeningDay?.afterNoonEnd &&
          getFormattedTime(todayOpeningDay.afterNoonEnd);
        const message = getMessage(
          index,
          content.infoCollectGender === "féminin",
          currentTime,
          formattedMorningStart || "",
          formattedMorningEnd || "",
          formattedAfterNoonStart || "",
          formattedAfterNoonEnd || "",
        );
        // Event handler for content click
        const handleContentClick = (
          event: MouseEvent<HTMLDivElement>,
          content: IContentData,
          message: string,
        ) => {
          onContentClick(content, message);
        };
        return (
          <div
            className="c-ContentMap__Content"
            key={index}
            onClick={(event) => handleContentClick(event, content, message)}
          >
            <div className="c-ContentMap__Picto">
              <div className="c-ContentMap__PictoContainer">
                <div className="c-Marker">
                  <div className="c-Marker__Content">
                    <div
                      className="c-Marker__TopPin"
                      style={{
                        backgroundImage: `url(${infoPicto})`,
                      }}
                    >
                      <div className="c-Marker__BottomPin"></div>
                    </div>
                  </div>
                </div>
              </div>
              {infoDistance && <div className="c-ContentMap__CarPicto"></div>}
              <span className="c-ContentMap__InfoDistance">{infoDistance}</span>
            </div>
            <div className="c-ContentMap__Info">
              <span className="c-ContentMap__InfoName">{infoName}</span>
              <span className="c-ContentMap__InfoAddress">{infoAddress}</span>
              <span className="c-ContentMap__InfoPostal">{infoPostal}</span>
              <div className="c-ContentMap__InfoOpeningTimeContainer">
                <span
                  className={`c-ContentMap__Open ${
                    message
                      .normalize("NFD")
                      .replace(/\p{Diacritic}/gu, "")
                      .includes("Ferme")
                      ? "c-ContentMap__Close"
                      : ""
                  }`}
                >
                  {message}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
