import React from "react";
import "./guide-tri.scss";
import WasteFamilyBlock from "../../../components/Guide-tri/WasteFamilyBlock";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";

export default function ServiceGuideTriPage() {
  /* Local Data */
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Guide du tri",
    },
  ];
  return (
    <div className="c-GuideTri">
      <CommonBreadcrumb pages={pagesUrl} />
      <div className="c-GuideTri__Block">
        <WasteFamilyBlock />
      </div>
    </div>
  );
}
