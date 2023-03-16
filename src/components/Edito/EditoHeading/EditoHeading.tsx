import Image from "next/image";
import classNames from "classnames";
import MobileActuHero from "public/images/mobile_actuhero.svg";
import DesktopActuHero from "public/images/desktop_actuhero.svg";
import {
  Maybe,
  TagEntity,
  UploadFile,
} from "../../../graphql/codegen/generated-types";
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
  function getTagClassNames(isDarker: boolean) {
    return classNames("c-EditoHeading__Tag", {
      "c-EditoHeading__Tag_darker": isDarker,
    });
  }
  const hasImage = image ? true : false;
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
            <Image src={image.url} alt={image.alternativeText ?? ""} fill />
          </div>
        )}
        <div className={cardContainer}>
          <div className={headingCard}>
            <h1 className="c-EditoHeading__Title">{title}</h1>
            <div className="c-EditoHeading__Tags">
              {tags?.map((tagLabel, index) => (
                <span
                  key={tagLabel.id}
                  className={getTagClassNames(index % 2 !== 0)}
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
