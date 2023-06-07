import React, { useState } from "react";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import SectionContent from "../../../components/CompteurDechets/StatSection/SectionContent/SectionContent";
import "./my-waste.scss";
import CommonChips from "../../../components/Common/CommonChips/CommonChips";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
const breadcrumbPages = [
  {
    label: "Accueil",
    slug: "/",
  },
  {
    label: "Mon compteur déchets",
    slug: "/mon-compteur-dechets",
  },
  {
    label: "Mes déchets",
    slug: "/mon-compteur-dechets/mes-dechets",
  },
];

// TODO: replace this mock with real data from API
const chips = [
  {
    label: "Emballages",
    name: "packaging",
  },
  {
    label: "Ordures ménagères",
    name: "household",
  },
  {
    label: "Tous",
    name: "all",
  },
];

const MyWastePage = () => {
  const [selectedChip, setSelectedChip] = useState("packaging");

  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <div className="c-MyWaste">
        <SectionHeader title="Mes déchets" isDateDisplay={true} />
        <div className="c-MyWaste__Content">
          <CommonChips
            chips={chips}
            selectedChip={selectedChip}
            setSelectedChip={setSelectedChip}
          />
          <SectionContent />
        </div>
      </div>
    </>
  );
};

export default MyWastePage;
