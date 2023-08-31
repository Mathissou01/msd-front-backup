import HomeEligibility from "../../components/CompteurDechets/Eligibility/HomePage/HomeEligibility/HomeEligibility";
import DashboardWaste from "../../components/CompteurDechets/Eligibility/HomePage/DashboardWaste/DashboardWaste";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";

const MyWasteCounter = () => {
  /* Static Data */
  const pageTitle = "Mon compteur déchets";

  const { currentUser } = useCurrentUser();

  return (
    <>
      <CommonMeta title={pageTitle} />
      {currentUser &&
      currentUser?.activeCounter &&
      currentUser?.dwellingType === "house" &&
      currentUser?.userType === "particular" ? (
        <DashboardWaste />
      ) : (
        <HomeEligibility />
      )}
    </>
  );
};
export default MyWasteCounter;
