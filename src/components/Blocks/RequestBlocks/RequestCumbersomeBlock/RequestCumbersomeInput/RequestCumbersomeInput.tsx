import React from "react";
import classNames from "classnames";
import "./request-cumbersome-input.scss";

interface IRequestCumbersomeInputProps {
  name: string;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  isIncrementDisabled: boolean;
}

export default function RequestCumbersomeInput({
  name,
  quantity,
  onQuantityChange,
  isIncrementDisabled,
}: IRequestCumbersomeInputProps) {
  return (
    <div className="c-RequestCumbersomeInput">
      <div>
        <span>{name}</span>
      </div>
      <div className="c-RequestCumbersomeInput__ActionsContainer">
        <div
          className={classNames("c-RequestCumbersomeInput__MinusButton", {
            "c-RequestCumbersomeInput__MinusButton_disabled": quantity <= 1,
          })}
          onClick={() => quantity > 1 && onQuantityChange(quantity - 1)}
        >
          <span>-</span>
        </div>
        <div className="c-RequestCumbersomeInput__Quantity">
          <span>{quantity}</span>
        </div>
        <div
          className={classNames("c-RequestCumbersomeInput__PlusButton", {
            "c-RequestCumbersomeInput__PlusButton_disabled":
              isIncrementDisabled,
          })}
          onClick={() => !isIncrementDisabled && onQuantityChange(quantity + 1)}
        >
          <span>+</span>
        </div>
        <div
          className="c-RequestCumbersomeInput__RemoveButton"
          onClick={() => onQuantityChange(0)}
        >
          <span />
        </div>
      </div>
    </div>
  );
}
