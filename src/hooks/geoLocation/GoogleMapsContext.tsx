import { createContext, useState, useEffect, ReactNode } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export const GoogleMapsContext = createContext({
  isLoaded: false,
  error: null,
});

export const GoogleMapsProvider = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;
    if (apiKey === undefined) {
      throw new Error("Google Maps API key is undefined");
    }

    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    const loader = new Loader({
      apiKey,
      libraries: ["geometry"],
    });

    loader
      .load()
      .then(() => {
        setIsLoaded(true);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, error }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};
