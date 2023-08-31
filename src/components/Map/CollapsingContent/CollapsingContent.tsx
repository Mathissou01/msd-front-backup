import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import fileDownload from "js-file-download";
import CommonButton from "../../Common/CommonButton/CommonButton";
import CollapsingButton from "./CollapsingButton/CollapsingButton";
import useOpeningHours from "../../../hooks/Map/useOpeningHours";
import { IContentData } from "../../../lib/map";
import {
  UploadFile,
  UploadFileEntityResponse,
} from "../../../graphql/codegen/generated-types";
import axios from "axios";
import classNames from "classnames";
import "./collapsing-content.scss";

interface IContentDataProps {
  message: string;
  markers: Array<IContentData>;
  setDestination: (destination: { lat: number; lng: number }) => void;
  closeModal: () => void;
}

export default function CollapsingContentPage({
  markers,
  closeModal,
  setDestination,
}: IContentDataProps) {
  const { getFormattedTime, getMessage, currentDayName, currentTime } =
    useOpeningHours({ contents: markers });
  /* Static variables */
  const title = {
    WasteTitle: "Déchets acceptés",
    MustKnowTitle: "À savoir avant de venir",
  };
  const label = {
    ItinaryLabel: "Itinéraires",
    ShowMoreLabel: "Afficher plus",
    ShowLessLabel: "Afficher moins",
  };

  /* Static animation properties */
  const marker = markers[0];
  const handleCrossButtonClick = () => {
    const animationDuration = 300; // CSS transition duration
    setIsVisible(false); // Start the animation
    // Wait for animation to complete before removing the component from the DOM
    setTimeout(() => {
      setIsVisible(null); // Reset the visibility state
      closeModal();
    }, animationDuration);
  };

  const handleDestination = () => {
    setDestination({ lat: marker.infoLat, lng: marker.infoLng });
  };

  // Add a state to track the component's visibility
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    setIsVisible(true); // True when the component mounts
  }, []);

  /* Static properties */
  // FUTURE FEATURE : Show more information "déchets acceptés" block
  // const [showWasteList, setShowWasteList] = useState(false);
  // const [buttonLabel, setButtonLabel] = useState(label.ShowMoreLabel);

  // const toggleWasteList = () => {
  //   setShowWasteList(!showWasteList);
  //   setButtonLabel(showWasteList ? label.ShowMoreLabel : label.ShowLessLabel);
  // };
  const handleDownload = async (files: UploadFileEntityResponse) => {
    if (files.data?.attributes && files.data?.attributes?.url) {
      const uploadFile: UploadFile = files.data.attributes;
      axios
        .get(files.data.attributes.url, {
          responseType: "blob",
        })
        .then((res) => {
          fileDownload(res.data, uploadFile.name);
        });
    }
  };
  const parsedHtmlMustKnow = parse(`${marker.infoMustKnow}`);
  return (
    <>
      {markers.map((marker, index) => {
        const todayOpeningDay = marker.infoTime.find(
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
          marker.infoCollectGender === "féminin",
          currentTime,
          formattedMorningStart || "",
          formattedMorningEnd || "",
          formattedAfterNoonStart || "",
          formattedAfterNoonEnd || "",
        );
        return (
          <div
            className={classNames("c-CollapsingContent", {
              "c-CollapsingContent_show": isVisible === true,
              "c-CollapsingContent_hide": isVisible === false,
              "c-CollapsingContent": isVisible === null,
            })}
            key={index}
          >
            <div className="c-CollapsingContent__Content">
              <div className="c-CollapsingContent__ButtonCrossContainer">
                <CommonButton
                  picto="cross"
                  type="button"
                  style="tertiary"
                  fontStyle="fontSmall"
                  isFullWidth={true}
                  isDisabled={false}
                  onClick={handleCrossButtonClick}
                />
              </div>
              <div className="c-CollapsingContent__Info">
                <h3 className="c-CollapsingContent__InfoText">
                  {marker.infoName}
                </h3>
                <span className="c-CollapsingContent__InfoText">
                  {marker.infoAddress}
                </span>
                <span className="c-CollapsingContent__InfoText">
                  {marker.infoPostal}
                </span>
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
              <div className="c-CollapsingContent__ButtonWrapper">
                <div className="c-CollapsingContent__ButtonContainer">
                  <div className="c-CollapsingContent__Button">
                    <CollapsingButton
                      label={label.ItinaryLabel}
                      picto="direction"
                      type="button"
                      style="secondary"
                      paddingStyle={"paddingSmall"}
                      fontStyle="fontSmall"
                      isFullWidth={false}
                      isDisabled={false}
                      onClick={handleDestination}
                      isRounded={true}
                    />
                  </div>
                  {/* FUTURE FEATURE : Button */}
                  {/*<div className="c-CollapsingContent__Button">*/}
                  {/*  <CollapsingButton*/}
                  {/*    label="Prendre rendez-vous"*/}
                  {/*    picto="map"*/}
                  {/*    type="button"*/}
                  {/*    style="secondary"*/}
                  {/*    paddingStyle={"paddingSmall"}*/}
                  {/*    fontStyle="fontSmall"*/}
                  {/*    isFullWidth={false}*/}
                  {/*    isDisabled={false}*/}
                  {/*    isRound={true}*/}
                  {/*  />*/}
                  {/*</div>*/}
                  {/*<div className="c-CollapsingContent__Button">*/}
                  {/*  <CollapsingButton*/}
                  {/*    label="Signaler"*/}
                  {/*    picto="event"*/}
                  {/*    type="button"*/}
                  {/*    style="secondary"*/}
                  {/*    isFullWidth={false}*/}
                  {/*    paddingStyle={"paddingSmall"}*/}
                  {/*    isDisabled={false}*/}
                  {/*    isRound={true}*/}
                  {/*  />*/}
                  {/*</div>*/}
                  {marker &&
                    marker.infoFiles?.map((marker, index) => (
                      <div className="c-CollapsingContent__Button" key={index}>
                        <CollapsingButton
                          label={marker.linkText}
                          onClick={() => handleDownload(marker.file)}
                          picto="map"
                          type="button"
                          style="secondary"
                          paddingStyle={"paddingSmall"}
                          fontStyle="fontSmall"
                          isFullWidth={false}
                          isDisabled={false}
                          isRounded={true}
                        />
                      </div>
                    ))}
                </div>
              </div>
              {/*FUTURE FEATURE : Feature "Déchets acceptées" block */}
              {/* <div className="c-CollapsingContent__WasteContainer">
              <h4 className="c-CollapsingContent__Title">{title.WasteTitle}</h4>
              <div
                className={`c-CollapsingContent__Waste ${
                  showWasteList ? "c-CollapsingContent__WasteDisplay" : ""
                }`}
              >
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">
                    Electroménager
                  </span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">Carton</span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">
                    Boissons
                  </span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">Bois</span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">
                    Déchets ménager
                  </span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">
                    Nourritures
                  </span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">Bois</span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">Bois</span>
                </div>
                <div className="c-CollapsingContent__WasteContent">
                  <span className="c-CollapsingContent__WasteName">
                    Déchets ménager
                  </span>
                </div>
              </div>
              <div className="c-CollapsingContent__WasteDisplayContainer">
                <button
                  className="c-CollapsingContent__WasteText"
                  onClick={toggleWasteList}
                >
                  {buttonLabel}
                </button>
              </div>
            </div> */}
              {marker.infoMustKnow && (
                <div className="c-CollapsingContent__MustKnow">
                  <h4 className="c-CollapsingContent__Title">
                    {title.MustKnowTitle}
                  </h4>
                  <p className="c-CollapsingContent__MustKnowContent">
                    {parsedHtmlMustKnow}
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
