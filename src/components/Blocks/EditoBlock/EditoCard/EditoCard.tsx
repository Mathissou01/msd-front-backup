import Image from "next/image";
import Link from "next/link";
import Arrow from "public/images/pictos/arrow.svg";
import "./edito-card.scss";

interface IEditoCardProps {
  tagLabels?: Array<string>;
  title: string;
  imageUrl: string;
  imageAlt?: string;
}

export default function EditoCard({
  tagLabels,
  title,
  imageAlt = "",
}: IEditoCardProps) {
  const defaultImage = "/images/images-temp/imagePlat.jpg";
  const linkLabel = "En savoir plus";

  return (
    <section className="c-EditoCard">
      <div className="c-EditoCard__Image">
        <Image src={defaultImage} alt={imageAlt} width={312} height={185} />
      </div>
      <div className="c-EditoCard__Tags">
        {tagLabels?.map((tagLabel, index) => (
          <span
            key={index}
            className={`c-EditoCard__Tag ${
              index > 0 ? "c-EditoCard__Tag_background" : ""
            }`}
          >
            {tagLabel}
          </span>
        ))}
      </div>
      <div className="c-EditoCard__Title">{title}</div>
      <Link className="c-EditoCard__Link" href="/">
        <span>{linkLabel}</span>
        <Arrow />
      </Link>
    </section>
  );
}
