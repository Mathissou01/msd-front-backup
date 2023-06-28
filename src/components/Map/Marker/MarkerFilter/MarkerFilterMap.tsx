import React, { useState } from "react";
import Image from "next/image";
import { makePublicAssetPath } from "../../../../lib/utilities";
import { IFilterData } from "../../../../lib/map-markers";
import "./marker-filter-map.scss";

interface IMarkerDataProps {
  markers: Array<IFilterData>;
  setSelectedFilter: (filterName: string) => void;
}

export default function MarkerFilterMap({
  markers,
  setSelectedFilter,
}: IMarkerDataProps) {
  const [divWrapName, setDivWrapName] = useState(
    "c-MarkerFilterMap__ContainerScroll",
  );
  const [textWrapName, setTextWrapName] = useState("Voir tout");

  const handleButtonWrapClick = () => {
    const newDivWrapName =
      divWrapName === "c-MarkerFilterMap__ContainerScroll"
        ? "c-MarkerFilterMap__ContainerWrap"
        : "c-MarkerFilterMap__ContainerScroll";
    const newTextWrapName =
      textWrapName === "Voir tout" ? "Replier" : "Voir tout";
    setDivWrapName(newDivWrapName);
    setTextWrapName(newTextWrapName);
  };
  //
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null,
  );
  const handleButtonFilterClick = (index: number, marker: IFilterData) => {
    setSelectedButtonIndex(index);
    setSelectedFilter(marker.name);
  };
  return (
    <div>
      <div className="c-MarkerFilterMap">
        <div className={divWrapName}>
          {markers
            .sort((a, b) =>
              a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
            )
            .map((marker, index) => {
              return (
                <div
                  className={`${
                    selectedButtonIndex === index
                      ? "c-MarkerFilterMap__ContentSelected"
                      : "c-MarkerFilterMap__Content"
                  }`}
                  key={index}
                >
                  <button
                    className="c-MarkerFilterMap__FilterButton"
                    onClick={() => handleButtonFilterClick(index, marker)}
                  >
                    <Image
                      src={makePublicAssetPath(marker.picto)}
                      alt="PictoDropOffMap"
                      width={18}
                      height={18}
                      className={`${
                        selectedButtonIndex === index
                          ? "c-MarkerFilterMap__PictoFilterSelected"
                          : "c-MarkerFilterMap__PictoFilter"
                      }`}
                    />
                    &nbsp;
                    <span
                      className={`${
                        selectedButtonIndex === index
                          ? "c-MarkerFilterMap__InfoSelected"
                          : "c-MarkerFilterMap__Info"
                      }`}
                    >
                      {marker.name}
                    </span>
                    &nbsp;
                    <span
                      className={`${
                        selectedButtonIndex === index
                          ? "c-MarkerFilterMap__InfoSelected"
                          : "c-MarkerFilterMap__Info"
                      }`}
                    >
                      ({marker.count})
                    </span>
                    &nbsp;
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="c-MarkerFilterMap__DisplayContainer">
        <button
          className="c-MarkerFilterMap__DisplayButton"
          onClick={handleButtonWrapClick}
        >
          <span className="c-MarkerFilterMap__DisplayText">{textWrapName}</span>
        </button>
      </div>
    </div>
  );
}
