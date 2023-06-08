import HomeEligibility from "../../components/CompteurDechets/Eligibility/HomePage/HomeEligibility/HomeEligibility";
import DashboardWaste from "../../components/CompteurDechets/Eligibility/HomePage/DashboardWaste/DashboardWaste";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const MyWasteCounter = () => {
  const { currentUser } = useCurrentUser();
  return (
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
  );
};
export default MyWasteCounter;
