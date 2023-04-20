import BgPagePrincipaleDesktop from "public/images/bg_page-principale.svg";
import BgPagePrincipaleMobile from "public/images/bg_page-principale-mobile.svg";

import CommonButton from "../../components/Common/CommonButton/CommonButton";
import "./mon-compteur-dechets.scss";

export default function MonCompteurDechets() {
  return (
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
        />
      </div>
    </section>
  );
}
