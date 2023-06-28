import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import MarkerClusterMap from "./Marker/MarkerClusterMap/MarkerClusterMap";
import MarkerGeoloc from "./Marker/MarkerGeoloc/MarkerGeoloc";
import { IGeoPosition, IMarker } from "../../lib/map-markers";
import useCalculateRoute from "../../hooks/geoLocation/useCalculateRoute";
import mapStyles from "./mapStyles.json";
import "./layers-map.scss";

interface ILayersMapProps {
  markers: IMarker[];
  position: IGeoPosition | null;
  setIsMapLoaded: (isLoaded: boolean) => void;
  destination: IGeoPosition | null;
}

const libraries: "geometry"[] = ["geometry"];
export default function LayersMap({
  markers,
  position,
  setIsMapLoaded,
  destination,
}: ILayersMapProps): ReactElement | null {
  const mapRef = useRef<google.maps.Map | null>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "",
    libraries,
  });

  setIsMapLoaded(isLoaded);

  const [markersLoaded, setMarkersLoaded] = useState(false);
  const calculateRoute = useCalculateRoute(mapRef);
  const loadMarkers = useCallback(() => {
    if (isLoaded && markers && markers.length > 0) {
      setMarkersLoaded(true);
    }
  }, [isLoaded, markers]);

  const fitMapToMarkers = useCallback(() => {
    if (mapRef.current && markersLoaded) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.map(({ lat, lng }) => {
        bounds.extend(new window.google.maps.LatLng(lat, lng));
      });
      mapRef.current.fitBounds(bounds);
    }
  }, [markers, markersLoaded]);

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
          {markers.map(({ lat, lng, picto }, ind) => (
            <MarkerClusterMap
              key={ind}
              id={ind}
              lng={Number(lng)}
              lat={Number(lat)}
              picto={picto ?? ""}
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
