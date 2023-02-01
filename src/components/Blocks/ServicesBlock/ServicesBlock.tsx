import classNames from "classnames";
import { IServiceLink } from "../../../lib/service-links";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import ServiceCard from "./ServiceCard/ServiceCard";
import ServicesMobile from "public/images/mobile_services-section_bottom-left-angle.svg";
import ServicesDesktop from "public/images/desktop_services-section_bottom-left-angle.svg";
import "./services-block.scss";

interface IServicesBlockProps {
  remappedData: {
    titleContent: string | null;
    serviceLinks: Array<IServiceLink> | null;
  };
}

export default function ServicesBlock({ remappedData }: IServicesBlockProps) {
  /* Static Data */
  const defaultPicto = "/images/pictos/default.svg";

  /* Local Data */
  const countVisibleServices =
    remappedData.serviceLinks?.filter((service) => service.isDisplayed)
      .length ?? 0;

  return (
    <section className="c-ServicesBlock" data-testid="services-block">
      <div className="c-ServicesBlock__Content">
        <CommonBlockHeading titleContent={remappedData.titleContent ?? ""} />
        <div className="c-ServicesBlock__Services">
          {remappedData.serviceLinks?.map(
            (link, index) =>
              link.isDisplayed && (
                <div
                  key={`${link.name}_${index}`}
                  className={classNames("c-ServicesBlock__Card", {
                    "c-ServicesBlock__Card_few": countVisibleServices < 3,
                  })}
                >
                  <ServiceCard
                    href={
                      link.externalLink
                        ? link.externalLink
                        : link.generatedSlug ?? "/"
                    }
                    name={link.name ?? ""}
                    pictoUrl={link.picto?.data?.attributes?.url ?? defaultPicto}
                  />
                </div>
              ),
          )}
        </div>
      </div>
      <div className="c-ServicesBlock__SvgContainer">
        <ServicesDesktop className="c-ServicesBlock__Svg_desktop" />
        <ServicesMobile className="c-ServicesBlock__Svg_mobile" />
      </div>
    </section>
  );
}
