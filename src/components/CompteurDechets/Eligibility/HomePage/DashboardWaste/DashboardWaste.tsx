import { useEffect, useState } from "react";
import {
  useCheckUserRequirementsQuery,
  useGetHasTipsQuery,
} from "../../../../../graphql/codegen/generated-types";
import FlowsBox from "../FlowsBox";
import { useContract } from "../../../../../hooks/useContract";
import CommonBreadcrumb from "../../../../Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import MyHomeData from "../../MyHomeData/MyHomeData";
import LearnMore from "../LearnMore/LearnMore";
import MwcTips from "./MwcTips/MwcTips";
import Illu_1 from "public/images/felicitations.svg";
import "./dashboard-waste.scss";
import { useCurrentUser } from "../../../../../hooks/useCurrentUser";
import CommonSpinner from "../../../../Common/CommonSpinner/CommonSpinner";

const DashboardWaste: React.FC = () => {
  const isModalAlreadyShow = localStorage.getItem("showModal");
  const { currentUser } = useCurrentUser();
  const { contractId } = useContract();

  const [showModal, setShowModal] = useState(
    isModalAlreadyShow === "off" ? false : true,
  );

  const breadcrumbPages = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Mon compteur déchets",
      slug: "/mon-compteur-dechets",
    },
  ];
  const { data: hasTips } = useGetHasTipsQuery({
    variables: {
      filters: {
        contract: {
          id: {
            eq: contractId,
          },
        },
      },
    },
  });

  const { data: bins, loading: binsLoading } = useCheckUserRequirementsQuery({
    variables: {
      streetNumber: `${currentUser?.address?.houseNumber}`,
      streetName: `${currentUser?.address?.street}`,
      postalCode: `${currentUser?.address?.postcode}`,
      city: `${currentUser?.address?.city}`,
      contractId: contractId,
      userId: currentUser?._id,
    },
  });

  useEffect(() => {
    localStorage.setItem("showModal", "off");
  }, []);

  return (
    <div className="c-DashboardWaste">
      {showModal && (
        <>
          <div className="c-DashboardWaste__CommonModal">
            <CommonButton
              style={null}
              type={"button"}
              isDisabled={false}
              onClick={() => setShowModal(false)}
            />
            <div className="c-DashboardWaste__CommonModal_container">
              <div className="c-DashboardWaste__CommonModal_title">
                Bienvenue sur votre compteur déchets
              </div>

              <div className="c-DashboardWaste__CommonModal_subTitle">
                Vous allez pouvoir accéder à votre compteur déchets et découvrir
                toutes ses fonctionnalités
              </div>

              <div className="c-DashboardWaste__CommonModal_illustration">
                <Illu_1 />
              </div>

              <div className="c-DashboardWaste__CommonModal_button">
                <CommonButton
                  label="Accèder à mon compteur"
                  type="button"
                  style="primary"
                  onClick={() => setShowModal(false)}
                />
              </div>
            </div>
          </div>

          <div
            onClick={() => setShowModal(false)}
            className="c-DashboardWaste__CommonModal_backdrop"
          ></div>
        </>
      )}

      <CommonBreadcrumb pages={breadcrumbPages} />
      {!binsLoading ? (
        <section>
          <FlowsBox bins={bins} />

          <MyHomeData />
        </section>
      ) : (
        <CommonSpinner />
      )}

      {hasTips?.mwCounterServices?.data?.[0]?.attributes?.hasTips && (
        <section>
          <MwcTips />
        </section>
      )}

      <section>
        <LearnMore />
      </section>
    </div>
  );
};
export default DashboardWaste;
