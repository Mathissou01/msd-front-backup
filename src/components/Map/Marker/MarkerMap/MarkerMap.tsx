import { OverlayView, OverlayViewF } from "@react-google-maps/api";
import Image from "next/image";
import "./marker-map.scss";

type MarkerMapProps = {
  position: google.maps.LatLngLiteral;
  picto: string;
  pictoName: string;
  selectedMarkerId: string | undefined;
  onClick: () => void;
  id: string | undefined;
  showModal: boolean;
};

export default function MarkerMap({
  position,
  picto,
  pictoName,
  onClick,
  id,
  selectedMarkerId,
  showModal,
}: MarkerMapProps) {
  /* Local properties */
  const isSelectedMarker = id === selectedMarkerId && showModal;
  const markerSize = isSelectedMarker ? 1.3 : 1;

  function getPixelPositionOffset(
    width: number,
    height: number,
  ): { x: number; y: number } {
    return { x: -(width / 2), y: -(height / 2) };
  }

  return (
    <OverlayViewF
      position={position}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      getPixelPositionOffset={getPixelPositionOffset}
    >
      <div
        className="c-Marker"
        onClick={onClick}
        style={{ transform: `scale(${markerSize})` }}
      >
        <div className="c-Marker__Content">
          <div
            className={
              isSelectedMarker ? "c-Marker__TopPinSelected" : "c-Marker__TopPin"
            }
          >
            <Image
              className={
                isSelectedMarker
                  ? "c-Marker__SvgPictoSelected"
                  : "c-Marker__SvgPicto"
              }
              src={picto}
              alt={pictoName}
              width={30}
              height={30}
            />
            <div className="c-Marker__BottomPin"></div>
            <div className="c-Marker__WavePin"></div>
          </div>
        </div>
      </div>
    </OverlayViewF>
  );
}
