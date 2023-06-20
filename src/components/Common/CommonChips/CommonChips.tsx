import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import "./common-chips.scss";

interface CommonChipsProps {
  chips: string[];
  selectedChip: string;
  setSelectedChip: Dispatch<SetStateAction<string>>;
  renderChipName?: (chip: string) => string;
}

const CommonTabs: React.FC<CommonChipsProps> = ({
  chips,
  selectedChip,
  setSelectedChip,
  renderChipName,
}) => {
  return (
    <div className="c-CommonChips">
      {chips.map((chip, i) => (
        <button
          key={i}
          className={classNames("c-CommonChips__Chip", {
            "c-CommonChips__Chip_active": selectedChip === chip,
          })}
          onClick={() => setSelectedChip(chip)}
        >
          {chip && <p>{renderChipName ? renderChipName(chip) : chip}</p>}
        </button>
      ))}
    </div>
  );
};

export default CommonTabs;
