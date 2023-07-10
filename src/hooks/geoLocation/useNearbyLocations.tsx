import { useEffect, useState } from "react";
import { IMarker } from "../../lib/map";

interface GeoPosition {
  lat: number;
  lng: number;
}

export default function useFilterMarkers(
  isLoaded: boolean,
  center: GeoPosition | null,
  markers: IMarker[] | undefined,
  rangeInKm = 30,
  numberOfResults = 30,
) {
  const [filteredMarkers, setFilteredMarkers] = useState<IMarker[]>([]);

  useEffect(() => {
    if (!isLoaded || !markers || markers.length === 0) {
      setFilteredMarkers([]);
      return;
    }

    // If center is not provided, or lat/lng are not valid numbers, return all markers without filtering
    if (!center || isNaN(Number(center.lat)) || isNaN(Number(center.lng))) {
      setFilteredMarkers(markers);
      return;
    }

    const centerPoint = new window.google.maps.LatLng(
      Number(center.lat),
      Number(center.lng),
    );

    const filtered = markers
      .map((marker) => {
        const markerPoint = new window.google.maps.LatLng(
          Number(marker.lat),
          Number(marker.lng),
        );
        const distanceInM =
          window.google.maps.geometry.spherical.computeDistanceBetween(
            centerPoint,
            markerPoint,
          );
        const distanceInKm = distanceInM / 1000;
        const roundedDistance = Math.round(distanceInKm * 1000) / 1000;
        const isWithinRange = distanceInKm <= rangeInKm;
        return {
          ...marker,
          distance: isWithinRange ? roundedDistance.toString() : "",
          distanceText: isWithinRange
            ? distanceInKm < 1
              ? `${Math.round(distanceInM)} m`
              : `${roundedDistance} km`
            : "",
        };
      })
      .filter((marker) => marker.distance !== "")
      .sort((a, b) => Number(a.distance || 0) - Number(b.distance || 0))
      .slice(0, numberOfResults);
    setFilteredMarkers(filtered);
  }, [isLoaded, center, markers, rangeInKm, numberOfResults]);

  return filteredMarkers;
}
