import classNames from "classnames";
import "./request-level-card.scss";

interface RequestLevelCardProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function RequestLevelCard({
  name,
  isSelected,
  onClick,
}: RequestLevelCardProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "c-RequestLevelCard",
        isSelected ? "c-RequestLevelCard_selected" : "",
      )}
    >
      {name}
    </button>
  );
}
