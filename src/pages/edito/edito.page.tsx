import CommonTopContentCard from "../../components/Common/CommonTopContentCard/CommonTopContentCard";
import DesktopActuHero from "public/images/desktop_actuhero.svg";
import MobileActuHero from "public/images/mobile_actuhero.svg";
// import { TagEntity } from "../../graphql/codegen/generated-types";

export default function EditoContenuLibrePage() {
  // TODO temporary data
  // const tags = [
  //   { attributes: { name: "actualités" } },
  //   { attributes: { name: "autres" } },
  // ] as TagEntity;
  const defaultImageDesktop = "/images/images-temp/new_image.jpg";
  const defaultImageMobile = "/images/images-temp/new_image_mobile.jpg";

  return (
    <section className="o-Page__EditoContenuLibre">
      <div className="o-Page__HeroImage">
        <CommonTopContentCard
          title="Semaine initiatives vertes"
          redirectUrl="/"
          isTitleTop={true}
          imageUrlDesktop={defaultImageDesktop}
          imageUrlMobile={defaultImageMobile}
          style="editoPage"
          // tags={tags}
        />
        <div className="o-Page__SvgContainer">
          <MobileActuHero className="o-Page__Svg_mobile" />
          <DesktopActuHero className="o-Page__Svg_desktop" />
        </div>
      </div>
    </section>
  );
}
