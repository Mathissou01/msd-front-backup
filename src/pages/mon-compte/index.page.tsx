import React from "react";
import { useRouter } from "next/router";
import useGetUser from "../../hooks/user/useGetUser";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import MyPersonalInfos from "../../components/MyAccount/MyPersonnalInfos";
import CommonTabs from "../../components/Common/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";
import CommonSpinner from "../../components/Common/CommonSpinner/CommonSpinner";
import MyCommunicationPref from "../../components/MyAccount/MyCommunicationPref/MyCommunicationPref";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import "./my-account-page.scss";

const MyAccountPage = () => {
  /* Static Data */
  const pageTitle = "Mon Compte";

  const router = useRouter();
  const { user, refetch, loading } = useGetUser(
    process.env.NEXT_PUBLIC_USER_ID || "",
  );
  const { logout } = useCurrentUser();
  const tabData = [
    {
      title: "Mes informations personnelles",
      content: <MyPersonalInfos user={user} refetch={refetch} />,
      isActive: true,
    },
    {
      title: "Mes préférences de communication",
      content: <MyCommunicationPref user={user} refetch={refetch} />,
      isActive: true,
    },
  ];

  return (
    <div className="o-MyAccount">
      <CommonMeta title={pageTitle} />
      {loading ? (
        <CommonSpinner />
      ) : (
        <>
          {user && user !== null ? (
            <>
              <CommonPageTitle title="Mon compte" />
              <CommonTabs tabData={tabData} align="center" />
            </>
          ) : (
            <p>
              <br />
              <br />
              Une erreur est survenue lors de la récupération de votre profile.
              <CommonButton
                label="Deconnexion"
                onClick={() => {
                  logout();
                  router.push("/connexion");
                }}
              />
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default MyAccountPage;
