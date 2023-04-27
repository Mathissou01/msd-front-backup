import CommonSvgFilter from "./CommonSvgFilter/CommonSvgFilter";
import { useContract } from "../../../hooks/useContract";
export default function CommonSvgDefs() {
  const { colors } = useContract();
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
            hexColor={colors["external-primary"]}
            opacity={1}
          />
          <CommonSvgFilter
            id="recolor-secondary"
            hexColor={colors["external-secondary"]}
            opacity={1}
          />
        </defs>
      </svg>
    </>
  );
}
