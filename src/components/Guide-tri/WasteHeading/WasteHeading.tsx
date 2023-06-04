import React from "react";
import Image from "next/image";
import {
  Flow,
  Maybe,
  UploadFileEntityResponse,
} from "../../../graphql/codegen/generated-types";
import { makePublicAssetPath } from "../../../lib/utilities";
import { filterAndDisplayPictos } from "../../../lib/waste-pictos";
import MobileDechetHero from "public/images/mobile_dechethero.svg";
import DesktopDechetHero from "public/images/desktop_dechethero.svg";
import "./waste-heading.scss";

interface IWasteHeadingProps {
  title: string;
  gestureText?: Maybe<string> | undefined;
  picto?: Maybe<UploadFileEntityResponse>;
  collectItems?: Maybe<Flow> | undefined;
}
export default function WasteHeading({
  title,
  gestureText,
  picto,
  collectItems,
}: IWasteHeadingProps) {
  /* Static DATA */
  const filteredFlowData = filterAndDisplayPictos(collectItems);

  return (
    <div className="c-WasteHeading">
      <div className="c-WasteHeading__SvgContainer">
        <DesktopDechetHero className="c-WasteHeading__Svg_desktop" />
        <MobileDechetHero className="c-WasteHeading__Svg_mobile" />
      </div>
      <div className="c-WasteHeading__DetailDechet">
        <h1 className="c-WasteHeading__WasteName">{title}</h1>
        <div className="c-WasteHeading__Content">
          <div className="c-WasteHeading__BlocConsignes">
            {gestureText && (
              <div className="c-WasteHeading__Bloc c-WasteHeading__Bloc_left">
                {/*TODO Gesture picto not defined */}
                {/* <div className="c-WasteHeading__GesturePicto">
                  <Image
                    src={"/images/pictos-temp/poubelle-barree.svg"}
                    alt=""
                    width="48"
                    height="48"
                  />
                </div> */}
                <span className="WasteHeading__GestureText">{gestureText}</span>
              </div>
            )}
            <div className="c-WasteHeading__Bloc c-WasteHeading__Bloc_right">
              <div className="c-WasteHeading__BoxContainers">
                {filteredFlowData &&
                  filteredFlowData.pictos.map((picto, index) => {
                    if (picto.attributes?.url) {
                      return (
                        <div key={index} className="c-WasteHeading__BoxPictos">
                          <Image
                            src={makePublicAssetPath(picto.attributes.url)}
                            alt={picto.attributes.alternativeText ?? ""}
                            width="48"
                            height="48"
                            className="c-WasteHeading__Picto"
                          />
                          {index !== filteredFlowData.pictos.length - 1 && (
                            <span>ou</span>
                          )}
                        </div>
                      );
                    }
                  })}
              </div>
              <div className="c-WasteHeading__Description">
                {filteredFlowData &&
                  filteredFlowData.names.map((name, index) => (
                    <div className="c-WasteHeading__Description" key={index}>
                      <span className="c-WasteHeading__NamePicto">{name}</span>
                      {index !== filteredFlowData.names.length - 1 && (
                        <span>ou</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="o-Blob c-WasteHeading__WastePicto">
          {picto?.data?.attributes?.url && (
            <>
              <Image
                src={makePublicAssetPath(picto?.data?.attributes?.url)}
                alt={picto.data.attributes.alternativeText ?? ""}
                width="130"
                height="130"
                className="c-WasteHeading__WastePicto_desktop"
              />
              <Image
                src={makePublicAssetPath(picto?.data?.attributes?.url)}
                alt={picto.data.attributes.alternativeText ?? ""}
                width="76"
                height="76"
                className="c-WasteHeading__WastePicto_mobile"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
