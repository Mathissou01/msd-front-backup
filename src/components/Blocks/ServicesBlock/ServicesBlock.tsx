import classNames from "classnames";
import { IRemappedServiceBlock } from "../../../lib/graphql-data";
import CommonBlockHeading from "../../Common/CommonBlockHeading/CommonBlockHeading";
import ServiceCard from "./ServiceCard/ServiceCard";
import ServicesMobile from "public/images/mobile_services-section_bottom-left-angle.svg";
import ServicesDesktop from "public/images/desktop_services-section_bottom-left-angle.svg";
import "./services-block.scss";

interface IServicesBlockProps {
  remappedData: IRemappedServiceBlock;
}

export default function ServicesBlock({ remappedData }: IServicesBlockProps) {
  /* Static Data */
  const defaultPicto = "/images/pictos/default.svg";

  /* Local Data */
  const countVisibleServices = remappedData.serviceLinks?.length;
  const servicesClassNames = classNames("c-ServicesBlock__Services", {
    "c-ServicesBlock__Services_few":
      !!countVisibleServices && countVisibleServices < 3,
    "c-ServicesBlock__Services_many":
      !!countVisibleServices && countVisibleServices >= 3,
  });

  return (
    <section className="c-ServicesBlock" data-testid="services-block">
      <div className="c-ServicesBlock__Content">
        <CommonBlockHeading titleContent={remappedData.titleContent ?? ""} />
        <div className={servicesClassNames}>
          {remappedData.serviceLinks?.map(
            (link, index) =>
              link.isDisplayed && (
                <ServiceCard
                  href={link.path ?? "/"}
                  key={`${link.name}_${index}`}
                  name={link.name ?? ""}
                  pictoUrl={link.picto?.data?.attributes?.url ?? defaultPicto}
                />
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
