import Image from "next/image";
import Link from "next/link";
import Arrow from "public/images/pictos/arrow.svg";
import "./edito-card.scss";

interface IEditoCardProps {
  tagLabel: string;
  title: string;
  imageUrl: string | null;
  imageAlt?: string;
}

export default function EditoCard({
  tagLabel,
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

      <div className="c-EditoCard__Tag">{tagLabel}</div>
      <div className="c-EditoCard__Title">{title}</div>
      <Link className="c-EditoCard__Link" href="/">
        <span>{linkLabel}</span>
        <Arrow />
      </Link>
    </section>
  );
}
