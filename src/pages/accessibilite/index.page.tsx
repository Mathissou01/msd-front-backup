import { useEffect, useState } from "react";
import Link from "next/link";
import CommonMeta from "../../components/Common/CommonMeta/CommonMeta";
import "./accessibility-page.scss";

export default function AccessibilityPage() {
  /* Static Data */
  const labels = {
    title: "Déclaration d’accessibilité",
    intro: {
      firstLine:
        "SUEZ s’engage à rendre ses sites internet, intranet, extranet et ses progiciels accessibles (et ses applications mobiles et mobilier urbain numérique) conformément à l’article 47 de la loi n°2005-102 du 11 février 2005.",
      secondLine:
        "À cette fin, elle met en œuvre la stratégie et les actions suivantes :",
      thirdLine: "Fournir un site web accessible.",
      fourthLineP1: "Cette déclaration d’accessibilité a été établie le",
      fourthLineP2: "et s’applique à",
      fourthLineP3: ".",
    },
    state: {
      title: "État de conformité",
      content:
        "est non conforme avec le référentiel général d’amélioration de l’accessibilité (RGAA), un audit d’accessibilité n’ayant pas encore été réalisé. L’absence d’audit d’accessibilité ne remet pas en cause le caractère accessible du site web actuel.",
    },
    contact: {
      title: "Information et contact",
      firstLine:
        "Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter notre équipe pour être orienté vers une alternative accessible ou obtenir le contenu sous une autre forme.",
      secondLine: "Nous contacter",
    },
    remedy: {
      title: "Voie de recours",
      firstLine:
        "Si vous constatez un défaut d’accessibilité vous empêchant d’accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.",
      secondLine: "Plusieurs moyens sont à votre disposition :",
      thirdLine: "Écrire un message au Défenseur des droits.",
      fourthLine:
        "Contacter le délégué du Défenseur des droits dans votre région.",
      fifthLine:
        "Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre).",
      sixthLine: "Défenseur des droits",
      seventhLine: "Libre réponse 71120",
      eighthLine: "75342 Paris CEDEX 07",
    },
  };
  const deliveryDate =
    process.env["NEXT_PUBLIC_DELIVERY_DATE"] &&
    process.env["NEXT_PUBLIC_DELIVERY_DATE"] !== ""
      ? process.env["NEXT_PUBLIC_DELIVERY_DATE"]
      : "04/09/2023";
  const defaultSiteUrl =
    process.env["NEXT_PUBLIC_BASE_URL"] ??
    process.env["NEXT_PUBLIC_BASE_HOST"] ??
    "";
  const contactPage = "/service/contact";

  /* Local Data */
  const [siteUrl, setSiteUrl] = useState<string>(defaultSiteUrl);

  useEffect(() => {
    if (window?.location.origin) {
      setSiteUrl(window.location.origin);
    }
  }, []);

  return (
    <section className="c-AccessibilityPage">
      <CommonMeta title={labels.title} />
      <div className="c-AccessibilityPage__Block">
        <h1>{labels.title}</h1>
        <div className="c-AccessibilityPage__Block_content">
          <span>{labels.intro.firstLine}</span>
          <span className="c-AccessibilityPage__Block_textWithMargin">
            {labels.intro.secondLine}
          </span>
          <ul>
            <li>{labels.intro.thirdLine}</li>
          </ul>
          <span>
            {`${labels.intro.fourthLineP1} ${deliveryDate} ${labels.intro.fourthLineP2} ${siteUrl}${labels.intro.fourthLineP3}`}
          </span>
        </div>
      </div>
      <div className="c-AccessibilityPage__Block">
        <h2>{labels.state.title}</h2>
        <div className="c-AccessibilityPage__Block_content">
          <span>
            {siteUrl} {labels.state.content}
          </span>
        </div>
      </div>
      <div className="c-AccessibilityPage__Block">
        <h2>{labels.contact.title}</h2>
        <div className="c-AccessibilityPage__Block_content">
          <span>{labels.contact.firstLine}</span>
          <Link href={contactPage} className="c-AccessibilityPage__Block_link">
            {labels.contact.secondLine}
          </Link>
        </div>
      </div>
      <div className="c-AccessibilityPage__Block">
        <h2>{labels.remedy.title}</h2>
        <div className="c-AccessibilityPage__Block_content">
          <span className="c-AccessibilityPage__Block_textWithMargin">
            {labels.remedy.firstLine}
          </span>
          <span className="c-AccessibilityPage__Block_textWithMargin">
            {labels.remedy.secondLine}
          </span>
          <ul>
            <li>{labels.remedy.thirdLine}</li>
            <li>{labels.remedy.fourthLine}</li>
            <li>
              <span>{labels.remedy.fifthLine}</span>
              <span>{labels.remedy.sixthLine}</span>
              <span>{labels.remedy.seventhLine}</span>
              <span>{labels.remedy.eighthLine}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
