import { useEffect, useState } from "react";
import { useGeolocation } from "../../../hooks/geoLocation/useGeolocation";
import CommonButton from "../../Common/CommonButton/CommonButton";
import { Coordinates } from "../PickUpDayEnterAddress/PickUpDayEnterAddress";
import "./pick-up-day-geolocation.scss";

interface PickUpDayGeolocationProps {
  onUpdateCoordinates: (coordinates: Coordinates) => void;
}

export default function PickUpDayGeolocation({
  onUpdateCoordinates,
}: PickUpDayGeolocationProps) {
  /* Local Data */
  const informativeText =
    "*Les champs marqués d'une astérisque sont obligatoire";
  const otherOptionText = "ou je rentre mon adresse : ";
  const submitButtonLabel = "Me géolocaliser";

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
      <p className="c-PickUpDay__InformativeText">{informativeText}</p>
      <div className="c-PickUpDay__GeolocationBlock">
        <CommonButton
          label={submitButtonLabel}
          type="submit"
          style="secondary"
          fontStyle="fontLarge"
          paddingStyle="paddingLarge"
          isDisabled={false}
          picto="target"
          pictoPosition="right"
          onClick={fetchGeolocation}
        />
        <p>{otherOptionText}</p>
      </div>
    </div>
  );
}
