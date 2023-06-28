import CustomMaker from "../MarkerMap/MarkerMap";

interface MarkerData {
  id: number;
  picto: string;
  lat: number;
  lng: number;
}

export default function MarkerClusterMap({ id, lat, lng, picto }: MarkerData) {
  // FUTURE FEATURE : Add maker cluster here
  return <CustomMaker position={{ lat, lng }} key={id} picto={picto} />;
}
