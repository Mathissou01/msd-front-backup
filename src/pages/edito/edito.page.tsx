import CommonTopContentCard from "../../components/Common/CommonTopContentCard/CommonTopContentCard";
import DesktopActuHero from "public/images/desktop_actuhero.svg";
import MobileActuHero from "public/images/mobile_actuhero.svg";
import CommonBreadcrumb from "../../components/Common/CommonBreadcrumb/CommonBreadcrumb";
import "./edito-page.scss";

export default function EditoPage() {
  //TODO temporarily data
  const pagesUrl = [
    {
      label: "Accueil",
      slug: "/",
    },
    {
      label: "Actualités",
      slug: "actualites",
    },
    {
      label: "Semaine initiatives vertes",
    },
  ];
  const defaultImageDesktop = "/images/images-temp/new_image.jpg";
  const defaultImageMobile = "/images/images-temp/new_image_mobile.jpg";
  return (
    <>
      <CommonBreadcrumb pages={pagesUrl} />
      <section className="c-EditoPage">
        <div className="c-EditoPage__HeroImage">
          <CommonTopContentCard
            title="Semaine initiatives vertes"
            redirectUrl="/"
            isTitleTop={true}
            imageUrlDesktop={defaultImageDesktop}
            imageUrlMobile={defaultImageMobile}
            style="editoPage"
          />
          <div className="c-EditoPage__SvgContainer">
            <MobileActuHero className="c-EditoPage__Svg_mobile" />
            <DesktopActuHero className="c-EditoPage__Svg_desktop" />
          </div>
        </div>
      </section>
    </>
  );
}
