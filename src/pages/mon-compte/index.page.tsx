import React from "react";
import CommonTabs from "../../components/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import "./my-account-page.scss";
import InfoPerso from "../../components/MyAccount/c-InfoPerso";

const MyAccountPage = () => {
  const tabData = [
    {
      title: "Mes informations personnelles",
      content: <InfoPerso />,
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
