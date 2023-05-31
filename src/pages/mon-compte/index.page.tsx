import React from "react";
import CommonTabs from "../../components/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import "./my-account-page.scss";
import MyPersonalInfos from "../../components/MyAccount/MyPersonnalInfos";
import MyCommunicationPref from "../../components/MyAccount/MyCommunicationPref";

const MyAccountPage = () => {
  const tabData = [
    {
      title: "Mes informations personnelles",
      content: <MyPersonalInfos />,
      isActive: true,
    },
    {
      title: "Mes préférences de communication",
      content: <MyCommunicationPref />,
      isActive: true,
    },
  ];

  return (
    <div className="o-MyAccount">
      <CommonPageTitle title="Mon compte" />
      <CommonTabs tabData={tabData} align="center" />
    </div>
  );
};

export default MyAccountPage;
