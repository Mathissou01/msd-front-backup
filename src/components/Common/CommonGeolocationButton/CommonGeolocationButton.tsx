import { useEffect, useState } from "react";
import { useGeolocation } from "../../../hooks/geoLocation/useGeolocation";
import CommonButton from "../../Common/CommonButton/CommonButton";
import { Coordinates } from "../../../lib/pickup-days";
import "./common-geolocation-button.scss";

interface CommonGeolocationButtonProps {
  onUpdateCoordinates: (coordinates: Coordinates) => void;
  informativeText?: boolean;
}

export default function CommonGeolocationButton({
  onUpdateCoordinates,
  informativeText = false,
}: CommonGeolocationButtonProps) {
  /* Local Data */
  const labels = {
    informativeText: "*Les champs marqués d'une astérisque sont obligatoires.",
    otherOptionText: "ou je rentre mon adresse : ",
    submitButtonLabel: "Me géolocaliser",
  };

  const [{ position }, fetchGeolocation] = useGeolocation();
  const [isInitializedLocation, setIsInitializedLocation] =
    useState<boolean>(false);

  /* Methods */

  useEffect(() => {
    if (!isInitializedLocation && position?.lat && position?.lng) {
      onUpdateCoordinates({
        latitude: position.lat,
        longitude: position.lng,
      });
      setIsInitializedLocation(true);
    }
  }, [position, isInitializedLocation, onUpdateCoordinates]);

  return (
    <div className="c-PickUpDay__Geolocation">
      {informativeText && (
        <p className="c-PickUpDay__InformativeText">{labels.informativeText}</p>
      )}
      <div className="c-PickUpDay__GeolocationBlock">
        <CommonButton
          label={labels.submitButtonLabel}
          type="button"
          style="secondary"
          fontStyle="fontLarge"
          paddingStyle="paddingLarge"
          isDisabled={false}
          picto="target"
          pictoPosition="right"
          onClick={fetchGeolocation}
        />
        <p>{labels.otherOptionText}</p>
      </div>
    </div>
  );
}
