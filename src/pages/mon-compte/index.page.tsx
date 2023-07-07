import React from "react";
import CommonTabs from "../../components/Common/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import MyPersonalInfos from "../../components/MyAccount/MyPersonnalInfos";
import useGetUser from "../../hooks/user/useGetUser";
import CommonSpinner from "../../components/Common/CommonSpinner/CommonSpinner";
import MyCommunicationPref from "../../components/MyAccount/MyCommunicationPref/MyCommunicationPref";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useRouter } from "next/router";
import "./my-account-page.scss";

const MyAccountPage = () => {
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
