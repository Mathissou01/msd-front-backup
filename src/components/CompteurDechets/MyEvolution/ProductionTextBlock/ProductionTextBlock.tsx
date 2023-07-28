import React from "react";
import classNames from "classnames";
import "./production-text-block.scss";

interface ProductionTextBlockProps {
  percent: number | null;
}
const ProductionTextBlock: React.FC<ProductionTextBlockProps> = ({
  percent,
}) => {
  const renderEvolutionText = () => {
    if (percent === null) {
      return `Il s'agit des premières données enregistrées sur votre compteur`;
    }
    if (percent >= 5) {
      return `Votre production a augmenté de ${percent}% comparé au mois précédent.`;
    }
    if (percent <= -5) {
      return `Votre production a diminué de ${Math.abs(
        percent,
      )}% comparé au mois précédent.`;
    }
    if (percent < 5 && percent > -5) {
      return `Votre production est stable comparé au mois précédent`;
    }
  };

  const TextClass = classNames("c-ProductionTextBlock", {
    "c-ProductionTextBlock_red": percent !== null && percent >= 5,
    "c-ProductionTextBlock_green": percent !== null && percent <= -5,
  });
  return (
    <div className={TextClass}>
      <p>{renderEvolutionText()}</p>
    </div>
  );
};

export default ProductionTextBlock;
