import { useRouter } from "next/router";
import CommonBreadcrumb from "../../../../Common/CommonBreadcrumb/CommonBreadcrumb";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import BgPagePrincipaleDesktop from "public/images/hero-desktop_compteur-dechets.svg";
import BgPagePrincipaleTablet from "public/images/hero-tablet_compteur-dechets.svg";
import BgPagePrincipaleMobile from "public/images/hero-mobile_compteur-dechets.svg";
import "./home-eligibility.scss";

export default function HomeEligibility() {
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
    <div className="c-HomeEligibility">
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-HomeEligibility__Wrapper">
        <div className="c-HomeEligibility__SvgContainer">
          <BgPagePrincipaleDesktop
            className="c-HomeEligibility__Svg_desktop"
            data-testid="bg-pagePrincipale-desktop"
          />
          <BgPagePrincipaleTablet
            className="c-HomeEligibility__Svg_tablet"
            data-testid="bg-pagePrincipale-tablet"
          />
          <BgPagePrincipaleMobile
            className="c-HomeEligibility__Svg_mobile"
            data-testid="bg-pagePrincipale-mobile"
          />
        </div>
        <div className="c-HomeEligibility__Container">
          <div className="c-HomeEligibility__Content">
            <h1 className="c-HomeEligibility__Title">
              Jetez moins, triez mieux, grâce à votre compteur déchets !
            </h1>
            <p className="c-HomeEligibility__Subtitle">
              Suivez votre production, recevez des conseils et comprenez le
              devenir de vos déchets.
            </p>
          </div>
          <p className="c-HomeEligibility__Text">
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
    </div>
  );
}
