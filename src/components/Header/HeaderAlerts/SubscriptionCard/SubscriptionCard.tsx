import "./subscription-card.scss";

interface IServiceCardProps {
  name: string;
  onClick?: () => void;
}

export default function SubscriptionCard({ name, onClick }: IServiceCardProps) {
  return (
    <button className="c-SubscriptionCard" onClick={onClick}>
      <span className="c-SubscriptionCard__Name">{name}</span>
    </button>
  );
}
