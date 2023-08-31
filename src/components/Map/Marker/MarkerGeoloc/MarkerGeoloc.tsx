import { OverlayView, OverlayViewF } from "@react-google-maps/api";
import "./marker-geoloc.scss";

type MarkerGeolocProps = {
  position: google.maps.LatLngLiteral;
};

export default function MarkerGeoloc({ position }: MarkerGeolocProps) {
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
      <div className="c-MarkerGeoloc">
        <div className="c-MarkerGeoloc__Content">
          <div className="c-MarkerGeoloc__TopPin">
            <div className="c-MarkerGeoloc__BottomPin"></div>
          </div>
        </div>
      </div>
    </OverlayViewF>
  );
}
