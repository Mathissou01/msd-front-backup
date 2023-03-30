import React from "react";
import { RecyclingGuideBlockEntity } from "../../../graphql/codegen/generated-types";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./recycling-guide-block.scss";

interface IRecyclingGuideBlock {
  data: RecyclingGuideBlockEntity;
}

export default function RecyclingGuideBlock({ data }: IRecyclingGuideBlock) {
  /* Local Data */
  const titleContent = data.attributes?.titleContent;
  const subtitleContent = data.attributes?.subtitleContent;
  const recyclingGuideDisplayContent =
    data.attributes?.recyclingGuideDisplayContent;
  // TODO: temporarily static data, replace with real tags later
  const tagLabels = [
    "Bouteille plastique",
    "Carton de pizza",
    "Papier collant",
  ];

  return (
    <section className="c-RecyclingGuideBlock">
      <div className="c-RecyclingGuideBlock__Heading">
        <span className="c-RecyclingGuideBlock__Title">{titleContent}</span>
        <h2 className="c-RecyclingGuideBlock__Subtitle">{subtitleContent}</h2>
      </div>
      <div className="c-RecyclingGuideBlock__SearchContainer">
        <div className="c-RecyclingGuideBlock__SearchBar">
          <input
            className="c-RecyclingGuideBlock__Input"
            placeholder={recyclingGuideDisplayContent}
            type="text"
          />
          <CommonButton
            label="Rechercher"
            picto="search"
            type="button"
            style="primary"
            fontStyle="fontLarge"
            paddingStyle="paddingLarge"
            isFullWidth={true}
          />
        </div>
        <div className="c-RecyclingGuideBlock__Tags">
          {tagLabels.map((tag) => (
            <button
              key={tag}
              className="c-RecyclingGuideBlock__Tag"
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
