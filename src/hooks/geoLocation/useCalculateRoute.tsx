import { useCallback, useRef } from "react";
import { GlobalDataType } from "../../../config/globalData.type";
import _globalData from "../../../config/global.json";
import { IGeoPosition } from "../../lib/map";

const globalData = _globalData as GlobalDataType;
const colors = globalData.colors["calculated-secondary-dark"];
const colorsStroke = globalData.colors["external-secondary"];
const useCalculateRoute = (mapRef: React.RefObject<google.maps.Map | null>) => {
  const directionsRendererRef = useRef<google.maps.DirectionsRenderer | null>(
    null,
  );
  const animationLineRef = useRef<google.maps.Polyline | null>(null);
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
        polylineOptions: {
          strokeColor: colors,
        },
      });
      if (directionsRendererRef.current && results && mapRef.current) {
        directionsRendererRef.current.setDirections(results);
        directionsRendererRef.current.setMap(mapRef.current);

        // Clear previous animation
        if (animationLineRef.current) {
          animationLineRef.current.setMap(null);
        }

        // Create a polyline for the animation
        const route = results.routes[0].overview_path;
        animationLineRef.current = new google.maps.Polyline({
          path: [],
          geodesic: true,
          strokeColor: colorsStroke,
          strokeOpacity: 0.9,
          strokeWeight: 6,
          map: mapRef.current,
        });

        // Animate the polyline
        let step = 0;
        const numSteps = 50;
        const numSegments = route.length - 1; // Number of segments in the route
        const stepSize = numSegments / numSteps; // Calculate stepSize based on the number of segments

        const interval = setInterval(() => {
          step += 1;
          if (step > numSteps) {
            clearInterval(interval);
          } else {
            const endIdx = Math.min(Math.ceil(step * stepSize), numSegments);
            const pathSlice = route.slice(0, endIdx + 1); // Include the end point of the segment
            animationLineRef.current?.setPath(pathSlice);
          }
        }, 50);
      }
    },
    [mapRef],
  );

  return calculateRoute;
};

export default useCalculateRoute;
