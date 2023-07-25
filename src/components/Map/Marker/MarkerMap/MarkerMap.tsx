import { OverlayView, OverlayViewF } from "@react-google-maps/api";
import "./marker-map.scss";

type MarkerMapProps = {
  position: google.maps.LatLngLiteral;
  picto: string;
  selectedMarkerId: string | undefined;
  onClick: () => void;
  id: string | undefined;
  showModal: boolean;
};

export default function MarkerMap({
  position,
  picto,
  onClick,
  id,
  selectedMarkerId,
  showModal,
}: MarkerMapProps) {
  const markerSize = id === selectedMarkerId && showModal ? 1.3 : 1;
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
            className="c-Marker__TopPin"
            style={{
              backgroundImage: `url(${picto})`,
            }}
          >
            <div className="c-Marker__BottomPin"></div>
            <div className="c-Marker__WavePin"></div>
          </div>
        </div>
      </div>
    </OverlayViewF>
  );
}
