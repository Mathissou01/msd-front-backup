import CustomMaker from "../MarkerMap/MarkerMap";

interface MarkerData {
  id: string | undefined;
  picto: string;
  lat: number;
  lng: number;
  onClick: () => void;
  selectedMarkerId: string | undefined;
  showModal: boolean;
}

export default function MarkerClusterMap({
  id,
  lat,
  lng,
  picto,
  onClick,
  selectedMarkerId,
  showModal,
}: MarkerData) {
  // FUTURE FEATURE : Add maker cluster here
  return (
    <CustomMaker
      position={{ lat, lng }}
      key={id}
      picto={picto}
      onClick={onClick}
      id={id}
      selectedMarkerId={selectedMarkerId}
      showModal={showModal}
    />
  );
}
