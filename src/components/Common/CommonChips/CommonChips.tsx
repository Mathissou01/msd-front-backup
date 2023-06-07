import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";
import "./common-chips.scss";

interface CommonChipsProps {
  chips: { [key: string]: string }[];
  selectedChip: string;
  setSelectedChip: Dispatch<SetStateAction<string>>;
}

const CommonTabs: React.FC<CommonChipsProps> = ({
  chips,
  selectedChip,
  setSelectedChip,
}) => {
  return (
    <div className="c-CommonChips">
      {chips.map((chip, i) => (
        <button
          key={i}
          className={classNames("c-CommonChips__Chip", {
            "c-CommonChips__Chip_active": selectedChip === chip.name,
          })}
          onClick={() => setSelectedChip(chip.name)}
        >
          <p>{chip.label}</p>
        </button>
      ))}
    </div>
  );
};

export default CommonTabs;
