import Link from "next/link";
import packageData from "../../../package.json";
import { useContract } from "../../hooks/useContract";
import "./footer.scss";

enum EAccessibilityLevel {
  "not_conform" = "non conforme",
  "partially_conform" = "partiellement conforme",
  "conform" = "totalement conforme",
}

export default function Footer() {
  /* Static Data */
  const labels = {
    accessibilityLabel: "Accessibilité : ",
    cguLabel: "Conditions générales",
    cookiesLabel: "Politique de cookies",
    confidentialityLabel: "Politique de confidentialité",
    contactUsSubService: "Contactez-nous",
  };

  const routes = {
    accessibilityRoute: "/accessibilite",
    siteRoutes: "",
    cookiesRoute: "/cookie",
    cguRoute: "/conditions-generales",
    confidentialityRoute: "/confidentialite",
    contactUsRoute: "/service/contact",
  };

  /* Global Data */
  const { contract } = useContract();
  const footerData =
    contract?.attributes?.contractCustomization?.data?.attributes?.footer?.data
      ?.attributes;

  const accessibilityLevelLabel = footerData?.accessibilityLevel
    ? Object.values(EAccessibilityLevel)[
        Object.keys(EAccessibilityLevel).indexOf(footerData.accessibilityLevel)
      ]
    : EAccessibilityLevel.not_conform;

  const linkName =
    contract.attributes?.contractCustomization?.data?.attributes?.footer?.data
      ?.attributes?.linkName;

  routes.siteRoutes = footerData?.linkUrl ?? "";

  return (
    <div className="c-Footer">
      <footer
        className="c-Footer__ContentContainer"
        role="contentinfo"
        data-testid="footer"
      >
        <Link className="c-Footer__Link" href={routes.accessibilityRoute}>
          <span>{labels.accessibilityLabel + accessibilityLevelLabel}</span>
        </Link>
        {linkName && (
          <Link className="c-Footer__Link" href={routes.siteRoutes}>
            <span>{linkName}</span>
          </Link>
        )}
        <Link
          className="c-Footer__Link"
          href={
            footerData?.cguSubService?.data?.attributes?.link ?? routes.cguRoute
          }
        >
          <span>{labels.cguLabel}</span>
        </Link>
        <Link
          className="c-Footer__Link"
          href={
            footerData?.cookiesSubService?.data?.attributes?.link ??
            routes.cookiesRoute
          }
        >
          <span>{labels.cookiesLabel}</span>
        </Link>
        <Link
          className="c-Footer__Link"
          href={
            footerData?.confidentialitySubService?.data?.attributes?.link ??
            routes.confidentialityRoute
          }
        >
          <span>{labels.confidentialityLabel}</span>
        </Link>

        {footerData?.contactUsSubService?.data?.attributes?.isActivated &&
          footerData?.contactUsSubService?.data.attributes.label && (
            <Link
              className="c-Footer__Link"
              href={
                footerData.contactUsSubService?.data?.attributes.link ??
                routes.contactUsRoute
              }
            >
              <span>
                {footerData.contactUsSubService.data?.attributes.label}
              </span>
            </Link>
          )}
      </footer>
      <span className="c-Footer__Version">Version - {packageData.version}</span>
    </div>
  );
}
