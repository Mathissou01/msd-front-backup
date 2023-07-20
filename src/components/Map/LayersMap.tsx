import { useCallback, useEffect, useRef, useState, useContext } from "react";
import { GoogleMap } from "@react-google-maps/api";
import MarkerClusterMap from "./Marker/MarkerClusterMap/MarkerClusterMap";
import MarkerGeoloc from "./Marker/MarkerGeoloc/MarkerGeoloc";
import { IGeoPosition, IMarker } from "../../lib/map";
import useCalculateRoute from "../../hooks/geoLocation/useCalculateRoute";
import mapStyles from "./mapStyles.json";
import { GoogleMapsContext } from "../../hooks/geoLocation/GoogleMapsContext";
import "./layers-map.scss";

interface ILayersMapProps {
  markers: IMarker[];
  position: IGeoPosition | null;
  setIsMapLoaded: (isLoaded: boolean) => void;
  destination: IGeoPosition | null;
  selectedMarkerId: string | undefined;
  onMarkerClick: (index: IMarker) => void;
}

export default function LayersMap({
  markers,
  position,
  setIsMapLoaded,
  destination,
  onMarkerClick,
  selectedMarkerId,
}: ILayersMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const { isLoaded } = useContext(GoogleMapsContext);

  useEffect(() => {
    setIsMapLoaded(isLoaded);
  }, [isLoaded, setIsMapLoaded]);

  const [markersLoaded, setMarkersLoaded] = useState(false);
  const calculateRoute = useCalculateRoute(mapRef);
  const loadMarkers = useCallback(() => {
    if (isLoaded && markers && markers.length > 0) {
      setMarkersLoaded(true);
    }
  }, [isLoaded, markers]);

  const fitMapToMarkers = useCallback(() => {
    if (mapRef.current) {
      const bounds = new window.google.maps.LatLngBounds();

      if (markersLoaded && markers.length > 0) {
        markers.map(({ lat, lng }) => {
          bounds.extend(new window.google.maps.LatLng(lat, lng));
        });
      } else if (position) {
        bounds.extend(
          new window.google.maps.LatLng(position.lat, position.lng),
        );
      }

      mapRef.current.fitBounds(bounds);
    }
  }, [markers, markersLoaded, position]);

  useEffect(loadMarkers, [loadMarkers]);
  useEffect(fitMapToMarkers, [fitMapToMarkers]);
  useEffect(() => {
    if (destination && position) calculateRoute(position, destination);
  }, [calculateRoute, position, destination]);

  if (!isLoaded) return null;

  return (
    <div className="c-LayersMap">
      {markersLoaded && markers && (
        <GoogleMap
          mapContainerClassName="c-LayersMap__Container"
          onLoad={(map) => {
            mapRef.current = map;
            fitMapToMarkers();
          }}
          zoom={3}
          options={{
            styles: mapStyles,
            streetViewControl: false,
            fullscreenControl: false,
            mapTypeControl: false,
            minZoom: 5,
          }}
        >
          {markers.map(({ lat, lng, picto, id }, ind) => (
            <MarkerClusterMap
              key={ind}
              id={id}
              lng={Number(lng)}
              lat={Number(lat)}
              picto={picto ?? ""}
              selectedMarkerId={selectedMarkerId}
              onClick={() => onMarkerClick(markers[ind])}
            />
          ))}
          {position && position.lat && (
            <MarkerGeoloc key={1} position={position} />
          )}
        </GoogleMap>
      )}
    </div>
  );
}
