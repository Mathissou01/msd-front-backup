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
    if (typeof window === "undefined" || !("geolocation" in navigator)) {
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

        if (
          window &&
          window.google &&
          window.google.maps &&
          window.google.maps.Geocoder
        ) {
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
        } else {
          setError("Google Maps API not loaded");
        }
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Permission de géolocalisation non accordée");
            break;
          case error.POSITION_UNAVAILABLE:
            setError("Information de géolocalisation indisponible");
            break;
          case error.TIMEOUT:
            setError("La demande de géolocalisation a expiré");
            break;
          default:
            setError("Erreur de géolocalisation");
            break;
        }
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
