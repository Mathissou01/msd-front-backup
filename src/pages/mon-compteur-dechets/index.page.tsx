import { useRouter } from "next/router";
import BgPagePrincipaleDesktop from "public/images/bg_page-principale.svg";
import BgPagePrincipaleMobile from "public/images/bg_page-principale-mobile.svg";
import CommonButton from "../../components/Common/CommonButton/CommonButton";
import CommonBreadcrumb from "../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import "./mon-compteur-dechets.scss";

export default function MonCompteurDechets() {
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
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-MonCompteurDechets">
        <div className="c-MonCompteurDechets__SvgContainer">
          <BgPagePrincipaleDesktop
            className="c-MonCompteurDechets__Svg_desktop"
            data-testid="bg-pagePrincipale-desktop"
          />
          <BgPagePrincipaleMobile
            className="c-MonCompteurDechets__Svg_mobile"
            data-testid="bg-pagePrincipale-mobile"
          />
        </div>
        <div className="c-MonCompteurDechets__Container">
          <div className="c-MonCompteurDechets__Content">
            <h1 className="c-MonCompteurDechets__Title">
              Jetez moins, triez mieux, grâce à votre compteur déchets !
            </h1>
            <p className="c-MonCompteurDechets__Subtitle">
              Suivez votre production, recevez des conseils et comprenez le
              devenir de vos déchets.
            </p>
          </div>
          <p className="c-MonCompteurDechets__Text">
            Voulez-vous connaître la production pour votre foyer ?
          </p>

          <CommonButton
            label="Commencer"
            type="button"
            style="primary"
            fontStyle="fontLarge"
            paddingStyle="paddingLarge"
            onClick={() => router.push("/mon-compteur-dechets/eligibilite")}
          />
        </div>
      </section>
    </>
  );
}
