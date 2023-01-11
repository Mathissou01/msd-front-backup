import CommonTopContentCard from "../../components/Common/CommonTopContentCard/CommonTopContentCard";
import DesktopActuHero from "public/images/desktop_actuhero.svg";
import MobileActuHero from "public/images/mobile_actuhero.svg";
import CommonBreadcrumb from "../../components/Common/CommonBreadcrumb/CommonBreadcrumb";

interface IGetStaticProps {
  params: { freeContent: string };
}

export default function EditoContenuLibrePage() {
  //TODO temporary data
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
      <section className="o-Page__EditoContenuLibre">
        <div className="o-Page__HeroImage">
          <CommonTopContentCard
            title="Semaine initiatives vertes"
            redirectUrl="/"
            isTitleTop={true}
            imageUrlDesktop={defaultImageDesktop}
            imageUrlMobile={defaultImageMobile}
            style="editoPage"
          />
          <div className="o-Page__SvgContainer">
            <MobileActuHero className="o-Page__Svg_mobile" />
            <DesktopActuHero className="o-Page__Svg_desktop" />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }: IGetStaticProps) {
  const route = params.freeContent;
  return { props: { route } };
}

export async function getStaticPaths() {
  // TODO: get all freeContentSubServices and map them here
  const paths = [
    { params: { freeContent: ["reduire-mes-dechets"] } },
    { params: { freeContent: ["valoriser-mes-dechets"] } },
  ];
  return {
    paths,
    fallback: false,
  };
}
