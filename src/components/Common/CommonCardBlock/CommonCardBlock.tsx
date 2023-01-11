import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import Arrow from "public/images/pictos/arrow.svg";
import Calendar from "public/images/pictos/calendar.svg";
import { handleDateFrenchFormat } from "../../../lib/utilities";
import "./common-card-block.scss";

interface ICommonCardBlockProps {
  title: string;
  href: string;
  tagLabels?: Array<string>;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  date?: string;
  isAlignTextCenter?: boolean;
  isEventDisplay?: boolean;
}

export default function CommonCardBlock({
  tagLabels,
  title,
  href,
  description,
  imageUrl,
  imageAlt = "",
  date,
  isEventDisplay = false,
  isAlignTextCenter = false,
}: ICommonCardBlockProps) {
  const linkLabel = "En savoir plus";
  const contentCardDate = new Date(date ?? "");
  const dataFrenchFormat = handleDateFrenchFormat(contentCardDate);
  const commonCardBlock = classNames("c-CommonCardBlock", {
    "c-CommonCardBlock_eventDisplay": isEventDisplay,
  });
  const commonCardBlockContent = classNames("c-CommonCardBlock__Content", {
    "c-CommonCardBlock__Content_textCenter": isAlignTextCenter,
  });

  return (
    <div className={commonCardBlock}>
      <div className="c-CommonCardBlock__Image">
        {isEventDisplay ? (
          <div className="c-CommonCardBlock__Calendar">
            <Calendar />
            {date && (
              <div className="c-CommonCardBlock__Date">
                {dataFrenchFormat || null}
              </div>
            )}
          </div>
        ) : imageUrl ? (
          <Image src={imageUrl} alt={imageAlt} width={343} height={220} />
        ) : null}
      </div>
      <div className={commonCardBlockContent}>
        <div className="c-CommonCardBlock__ContentHeader">
          <div className="c-CommonCardBlock__Tags">
            {tagLabels?.map((tagLabel, index) => (
              <span
                key={index}
                className={`c-CommonCardBlock__Tag ${
                  index > 0 ? "c-CommonCardBlock__Tag_background" : ""
                }`}
              >
                {tagLabel}
              </span>
            ))}
          </div>
          {!isEventDisplay && date ? (
            <div className="c-CommonCardBlock__Date">{dataFrenchFormat}</div>
          ) : null}
        </div>
        <div className="c-CommonCardBlock__ContentBody">
          <h3 className="c-CommonCardBlock__Title">{title}</h3>
          <p className="c-CommonCardBlock__Description">{description}</p>
        </div>
        <Link className="c-CommonCardBlock__Link" href={href}>
          <span className="c-CommonCardBlock__Label">{linkLabel}</span>
          <Arrow />
        </Link>
      </div>
    </div>
  );
}
