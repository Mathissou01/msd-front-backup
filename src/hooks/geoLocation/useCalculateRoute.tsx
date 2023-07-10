import { useCallback, useRef } from "react";
import { IGeoPosition } from "../../lib/map";

const useCalculateRoute = (mapRef: React.RefObject<google.maps.Map | null>) => {
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null,
  );

  const calculateRoute = useCallback(
    async (origin: IGeoPosition | null, destination: IGeoPosition | null) => {
      if (!origin || !destination) return;

      const directionsService = new google.maps.DirectionsService();

      const results: google.maps.DirectionsResult | undefined =
        await directionsService.route({
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        });

      if (directionsRendererRef.current) {
        directionsRendererRef.current.setMap(null);
        directionsRendererRef.current = null;
      }

      directionsRendererRef.current = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
      });
      if (directionsRendererRef.current && results && mapRef.current) {
        directionsRendererRef.current.setDirections(results);
        directionsRendererRef.current.setMap(mapRef.current);
      }
    },
    [mapRef],
  );

  return calculateRoute;
};

export default useCalculateRoute;
