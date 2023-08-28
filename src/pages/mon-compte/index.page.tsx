import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useGetUser from "../../hooks/user/useGetUser";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import MyPersonalInfos from "../../components/MyAccount/MyPersonnalInfos";
import CommonTabs from "../../components/Common/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";
import CommonSpinner from "../../components/Common/CommonSpinner/CommonSpinner";
import MyCommunicationPref from "../../components/MyAccount/MyCommunicationPref/MyCommunicationPref";
import "./my-account-page.scss";

const MyAccountPage = () => {
  /* Static Data */
  const pageTitle = "Mon Compte";

  const router = useRouter();
  const { currentUser, isLoading } = useCurrentUser();
  const { user, refetch, loading } = useGetUser(currentUser?._id || "");

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
  useEffect(() => {
    if (!currentUser && !isLoading) {
      router.push("/connexion");
    }
  }, [currentUser, router, isLoading]);
  return (
    <div className="o-MyAccount">
      <CommonMeta title={pageTitle} />
      {loading ? (
        <CommonSpinner />
      ) : (
        <>
          <CommonPageTitle title="Mon compte" />
          <CommonTabs tabData={tabData} align="center" />
        </>
      )}
    </div>
  );
};

export default MyAccountPage;
