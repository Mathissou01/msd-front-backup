import HomeEligibility from "../../components/CompteurDechets/Eligibility/HomePage/HomeEligibility/HomeEligibility";
import DashboardWaste from "../../components/CompteurDechets/Eligibility/HomePage/DashboardWaste/DashboardWaste";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import CommonSpinner from "../../components/Common/CommonSpinner/CommonSpinner";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";

export default function MyWasteCounter() {
  const pageTitle = "Mon compteur déchets";
  const { currentUser, isLoading } = useCurrentUser();
  return (
    <>
      <CommonMeta title={pageTitle} />
      {!isLoading ? (
        <>
          {currentUser &&
          currentUser?.activeCounter &&
          currentUser?.dwellingType === "house" &&
          currentUser?.userType === "particular" ? (
            <DashboardWaste />
          ) : (
            <HomeEligibility />
          )}
        </>
      ) : (
        <CommonSpinner />
      )}
    </>
  );
}
