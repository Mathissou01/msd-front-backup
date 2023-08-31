import { RequestAddableBlocksDynamicZone } from "../../../graphql/codegen/generated-types";
import { removeNulls } from "../../../lib/utilities";
import RequestDynamicBlocks from "./RequestDynamicBlocks/RequestDynamicBlocks";
import "./request-blocks.scss";

interface IRequestBlocksProps {
  blocks: Array<RequestAddableBlocksDynamicZone>;
  setCurrentStep: (steps: number) => void;
  currentStep: number;
  noBlockSteps: number;
}

export default function RequestBlocks({
  blocks,
  setCurrentStep,
  currentStep,
  noBlockSteps,
}: IRequestBlocksProps) {
  return (
    <div className="c-RequestBlocks">
      {blocks
        .map((block, index) => {
          if (block) {
            return (
              <RequestDynamicBlocks
                key={index}
                block={block}
                blockIndex={index}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                noBlockSteps={noBlockSteps}
              />
            );
          }
        })
        .filter(removeNulls) ?? []}
    </div>
  );
}
