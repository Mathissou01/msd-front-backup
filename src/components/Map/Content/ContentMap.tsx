import React from "react";
import { ComponentBlocksDownloadBlock } from "../../../graphql/codegen/generated-types";
import "./content-map.scss";

export interface IContentData {
  infoPicto: string;
  infoName: string;
  infoAddress: string;
  infoPostal: string;
  infoTime: string;
  infoMustKnow: string;
  infoDistance: string;
  infoLat: number;
  infoLng: number;
  infoFiles: Array<ComponentBlocksDownloadBlock>;
}

interface IContentDataProps {
  contents: Array<IContentData>;
  onContentClick: (content: IContentData) => void;
}

export default function ContentMap({
  contents,
  onContentClick,
}: IContentDataProps) {
  return (
    <div className="c-ContentMap">
      {contents &&
        contents.map((content, index) => {
          const handleContentClick = () => {
            onContentClick(content);
          };
          return (
            <div
              className="c-ContentMap__Content"
              key={index}
              onClick={handleContentClick}
            >
              <div className="c-ContentMap__Picto">
                <div className="c-ContentMap__PictoContainer">
                  <div className="c-Marker">
                    <div className="c-Marker__Content">
                      <div
                        className="c-Marker__TopPin"
                        style={{
                          backgroundImage: `url(${content.infoPicto})`,
                        }}
                      >
                        <div className="c-Marker__BottomPin"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="c-ContentMap__InfoDistance">
                  {content.infoDistance}
                </span>
              </div>
              <div className="c-ContentMap__Info">
                <span className="c-ContentMap__InfoName">
                  {content.infoName}
                </span>
                <span className="c-ContentMap__InfoAddress">
                  {content.infoAddress}
                </span>
                <span className="c-ContentMap__InfoPostal">
                  {content.infoPostal}
                </span>
                <div className="c-ContentMap__InfoOpeningTimeContainer">
                  <span className="c-ContentMap__InfoTime">
                    {content.infoTime}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
