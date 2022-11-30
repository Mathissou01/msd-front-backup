import { useEffect, useState } from "react";
import useScreenWidth from "../lib/useScreenWidth";
import "./home-page.scss";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const windowWidth = useScreenWidth();

  useEffect(() => {
    setIsDesktop(!!(windowWidth && windowWidth >= 1200));
  }, [windowWidth]);

  // TODO: temporary styling to show structure of page in mobile/desktop, remove later
  return (
    <>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "500px" : "432px" }}
      >
        (Hero Image)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "357px" : "397px" }}
      >
        (Search)
      </section>
      ;
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "447px" : "703px" }}
      >
        (Services)
      </section>
      ;
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "512px" : "881px" }}
      >
        (KeyMetric)
      </section>
      ;
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "1205px" : "2285px" }}
      >
        (Headlines)
      </section>
      ;
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "468px" : "1046px" }}
      >
        (Tips)
      </section>
      ;
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "592px" : "1204px" }}
      >
        (Edito)
      </section>
      ;
    </>
  );
}
