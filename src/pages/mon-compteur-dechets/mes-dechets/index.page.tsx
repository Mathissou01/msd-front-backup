import React, { useState } from "react";
import SectionHeader from "../../../components/CompteurDechets/StatSection/SectionHeader/SectionHeader";
import CommonChips from "../../../components/Common/CommonChips/CommonChips";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import { format, subMonths } from "date-fns";
import { fr } from "date-fns/locale";
import "./my-waste.scss";

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
  const [currentDate] = useState(subMonths(new Date(), 1));

  const formattedDate = format(currentDate, "MMMM yyyy", {
    locale: fr,
    useAdditionalWeekYearTokens: false,
  });
  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <div className="c-MyWaste">
        <SectionHeader title="Mes déchets" date={formattedDate} />
        <div className="c-MyWaste__Content">
          <CommonChips
            chips={chips}
            selectedChip={selectedChip}
            setSelectedChip={setSelectedChip}
          />
        </div>
      </div>
    </>
  );
};

export default MyWastePage;
