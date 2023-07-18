import React from "react";
import Bac from "public/images/pictos/bac_2_roues.svg";
import "./flow.scss";

interface FlowProps {
  flow: {
    code: string;
  };
}

interface FlowConfig {
  color: string;
  displayName: string;
  bacTestId: string;
}

const flowConfig: Record<string, FlowConfig> = {
  OMR: {
    color: "gray",
    displayName: "Ordures ménagères",
    bacTestId: "bac1",
  },
  CS: {
    color: "yellow",
    displayName: "Emballages",
    bacTestId: "bac2",
  },
};

const Flow: React.FC<FlowProps> = ({ flow }) => {
  const config: FlowConfig = flowConfig[flow.code];

  if (!config) {
    return null;
  }

  const { color, displayName, bacTestId } = config;

  return (
    <div className="c-Flow">
      <div className={`c-Flow__BacSvg_${color}`}>
        <Bac data-testid={bacTestId} />
      </div>
      <div className="c-Flow__ItemData">
        <p className="c-Flow__Name">{displayName}</p>
      </div>
    </div>
  );
};

export default Flow;
