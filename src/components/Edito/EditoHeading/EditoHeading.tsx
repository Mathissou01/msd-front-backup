import Image from "next/image";
import classNames from "classnames";
import {
  Maybe,
  TagEntity,
  UploadFile,
} from "../../../graphql/codegen/generated-types";
import { makePublicAssetPath } from "../../../lib/utilities";
import MobileActuHero from "public/images/mobile_actuhero.svg";
import DesktopActuHero from "public/images/desktop_actuhero.svg";
import "./edito-heading.scss";

interface IEditoHeadingProps {
  title: string;
  tags?: Array<TagEntity>;
  image?: Maybe<UploadFile>;
}

export default function EditoHeading({
  title,
  tags,
  image,
}: IEditoHeadingProps) {
  const hasImage = !!image;
  const headingContent = classNames("c-EditoHeading__Content", {
    "c-EditoHeading__Content_noImage": !hasImage,
  });
  const cardContainer = classNames("c-EditoHeading__CardContainer", {
    "c-EditoHeading__CardContainer_fullWidth": !hasImage,
  });
  const headingCard = classNames("c-EditoHeading__Card", {
    "c-EditoHeading__Card_only": !hasImage,
  });

  return (
    <div className="c-EditoHeading">
      <div className={headingContent}>
        {image && (
          <div className="c-EditoHeading__Header">
            <Image
              src={makePublicAssetPath(image.url)}
              alt={image.alternativeText ?? ""}
              fill
              priority
            />
          </div>
        )}
        <div className={cardContainer}>
          <div className={headingCard}>
            <h1 className="c-EditoHeading__Title">{title}</h1>
            <div className="c-EditoHeading__Tags">
              {tags?.map((tagLabel, index) => (
                <span
                  key={index}
                  className="c-EditoHeading__Tag c-EditoHeading__Tag_background"
                >
                  {tagLabel.attributes?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="c-EditoHeading__Background" />
      <div className="c-EditoHeading__SvgContainer">
        <MobileActuHero className="c-EditoHeading__Svg_mobile" />
        <DesktopActuHero className="c-EditoHeading__Svg_desktop" />
      </div>
    </div>
  );
}
