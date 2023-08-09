import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonMeta from "../../../components/Common/CommonMeta/CommonMeta";
import PickUpDayBlock from "../../../components/PickUpDayBlock/PickUpDayBlock";

export default function ServicePointsCollectePage() {
  /* Static Data */
  const pageTitle = "Jour de collecte";

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
      <CommonMeta title={pageTitle} />
      <CommonBreadcrumb pages={pagesUrl} />
      <PickUpDayBlock />
    </div>
  );
}
