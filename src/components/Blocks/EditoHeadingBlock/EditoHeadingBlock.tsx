import DesktopActuHero from "public/images/desktop_actuhero.svg";
import MobileActuHero from "public/images/mobile_actuhero.svg";
import "./edito-heading-block.scss";
import Image from "next/image";
import classNames from "classnames";
import { UploadFile } from "../../../graphql/codegen/generated-types";

interface IEditoHeadingBlockProps {
  title: string;
  tags: Array<string>;
  image: UploadFile;
}

export default function EditoHeadingBlock({
  title,
  tags,
  image,
}: IEditoHeadingBlockProps) {
  function getTagClassNames(isDarker: boolean) {
    return classNames("c-EditoHeadingBlock__Tag", {
      "c-EditoHeadingBlock__Tag_darker": isDarker,
    });
  }

  return (
    <div className="c-EditoHeadingBlock">
      <div className="c-EditoHeadingBlock__Content">
        <div className="c-EditoHeadingBlock__Header">
          <Image src={image.url} alt={image.alternativeText ?? ""} fill />
        </div>
        <div className="c-EditoHeadingBlock__CardContainer">
          <div className="c-EditoHeadingBlock__Card">
            <h1 className="c-EditoHeadingBlock__Title">{title}</h1>
            <div className="c-EditoHeadingBlock__Tags">
              {tags?.map((tagLabel, index) => (
                // TODO: temporary alternating tag colors
                <span key={index} className={getTagClassNames(index % 2 !== 0)}>
                  {tagLabel}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="c-EditoHeadingBlock__Background" />
      <div className="c-EditoHeadingBlock__SvgContainer">
        <MobileActuHero className="c-EditoHeadingBlock__Svg_mobile" />
        <DesktopActuHero className="c-EditoHeadingBlock__Svg_desktop" />
      </div>
    </div>
  );
}
