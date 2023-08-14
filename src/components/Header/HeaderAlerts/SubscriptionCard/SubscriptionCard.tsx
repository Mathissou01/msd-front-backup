import Link from "next/link";
import "./subscription-card.scss";

interface IServiceCardProps {
  href: string;
  name: string;
  onClick?: () => void;
}

export default function SubscriptionCard({
  href,
  name,
  onClick,
}: IServiceCardProps) {
  return (
    <Link className="c-SubscriptionCard" href={href} onClick={onClick}>
      <span className="c-SubscriptionCard__Name">{name}</span>
    </Link>
  );
}
