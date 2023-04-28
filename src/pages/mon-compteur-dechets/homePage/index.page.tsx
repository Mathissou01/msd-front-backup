import { useState } from "react";
import { useRouter } from "next/router";
import CommonButton from "../../../components/Common/CommonButton/CommonButton";
import CommonBreadcrumb from "../../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import Illu_1 from "public/images/illu_1.svg";
import "./homePage.scss";

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();
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

  return (
    <>
      {showModal && (
        <>
          <div className="c-HomePage__CommonModal">
            <CommonButton
              style={null}
              type={"button"}
              isDisabled={false}
              onClick={() => setShowModal(false)}
            />
            <div className="c-HomePage__CommonModal_container">
              <div className="c-HomePage__CommonModal_title">
                Bienvenue sur votre compteur déchets
              </div>

              <div className="c-HomePage__CommonModal_subTitle">
                Vous allez pouvoir accéder à votre compteur déchets et découvrir
                toutes ses fonctionnalités
              </div>

              <div className="c-HomePage__CommonModal_illustration">
                <Illu_1 />
              </div>

              <div className="c-HomePage__CommonModal_button">
                <CommonButton
                  label="Accèder à mon compteur"
                  type="button"
                  style="primary"
                  onClick={() =>
                    router.push("/mon-compteur-dechets/eligibilite")
                  }
                />
              </div>
            </div>
          </div>

          <div
            onClick={() => setShowModal(false)}
            className="c-HomePage__CommonModal_backdrop"
          ></div>
        </>
      )}

      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-HomePage"></section>
    </>
  );
};
export default HomePage;
