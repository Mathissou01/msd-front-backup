import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import PickUpDayBlock from "../../../components/PickUpDayBlock/PickUpDayBlock";

export default function ServicePointsCollectePage() {
  /* Local Data */
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Collecte à mon adresse",
    },
  ];
  return (
    <div className="c-PickUpDay">
      <CommonBreadcrumb pages={pagesUrl} />
      <PickUpDayBlock />
    </div>
  );
}
