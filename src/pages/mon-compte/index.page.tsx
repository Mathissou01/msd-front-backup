import React from "react";
import CommonTabs from "../../components/Common/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import MyPersonalInfos from "../../components/MyAccount/MyPersonnalInfos";
import useGetUser from "../../hooks/user/useGetUser";
import CommonSpinner from "../../components/Common/CommonSpinner/CommonSpinner";
import MyCommunicationPref from "../../components/MyAccount/MyCommunicationPref/MyCommunicationPref";
import "./my-account-page.scss";

const MyAccountPage = () => {
  const { user, refetch, loading } = useGetUser(
    process.env.NEXT_PUBLIC_USER_ID || "",
  );
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
          {user && user !== null && (
            <>
              <CommonPageTitle title="Mon compte" />
              <CommonTabs tabData={tabData} align="center" />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyAccountPage;
