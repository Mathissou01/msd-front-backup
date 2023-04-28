import React from "react";
import CommonTabs from "../../components/CommonTabs/CommonTabs";
import CommonPageTitle from "../../components/Common/CommonPageTitle/CommonPageTitle";
import "./my-account-page.scss";
import ComponentA from "../../components/MyAccount/ComponentA";
import ComponentB from "../../components/MyAccount/ComponentB";

const MyAccountPage = () => {
  const tabData = [
    {
      title: "Mes informations personnelles",
      content: <ComponentA />,
      isActive: true,
    },
    {
      title: "Mes préférences de communication",
      content: <ComponentB />,
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
