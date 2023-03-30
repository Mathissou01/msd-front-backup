import { primaryColor, secondaryColor } from "../../../../config/color-config";
import CommonSvgFilter from "./CommonSvgFilter/CommonSvgFilter";

export default function CommonSvgDefs() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={0}
        height={0}
        style={{ position: "absolute", visibility: "hidden", height: 0 }}
        aria-hidden={true}
      >
        <defs>
          <CommonSvgFilter id="recolor-white" hexColor="#fff" opacity={1} />
          <CommonSvgFilter
            id="recolor-primary"
            hexColor={primaryColor}
            opacity={1}
          />
          <CommonSvgFilter
            id="recolor-secondary"
            hexColor={secondaryColor}
            opacity={1}
          />
        </defs>
      </svg>
    </>
  );
}
