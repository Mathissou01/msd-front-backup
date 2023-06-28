import { useState, useCallback } from "react";

interface GeoPosition {
  lat: number;
  lng: number;
}

interface GeolocationResult {
  address: string | null;
  error: string | null;
  position: GeoPosition | null;
  disable: boolean;
}

export function useGeolocation(): [GeolocationResult, () => void] {
  const [address, setAddress] = useState<string | null>(null);
  const [position, setPosition] = useState<GeoPosition | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [disable, setDisable] = useState<boolean>(false);

  const fetchGeolocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      //setError("Geolocation is not available.");
      setDisable(true);
      return;
    } else {
      setDisable(false);
    }

    const id = navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setPosition({ lat, lng });

        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ location: { lat, lng } }, (results, status) => {
          if (status === "OK") {
            if (results && results[0]) {
              setAddress(results[0].formatted_address);
            } else {
              setError("Position non trouvée");
            }
          } else {
            setError("Error");
          }
          navigator.geolocation.clearWatch(id);
        });
      },
      () => {
        setError("Permission de géolocalisation non accordée ");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000, // Accept a cached position up to 10 seconds old
        timeout: 5000, // If no new position within 5 seconds, invoke error callback
      },
    );
  }, []);

  return [{ address, error, disable, position }, fetchGeolocation];
}
