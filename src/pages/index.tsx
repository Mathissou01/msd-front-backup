import useScreenWidth from "../lib/useScreenWidth";
import WelcomeBlock from "../components/Blocks/WelcomeBlock/WelcomeBlock";
import "./home-page.scss";

export default function HomePage() {
  /* Local Data */
  const { isDesktop } = useScreenWidth();

  // TODO: temporary styling to show structure of page in mobile/desktop, remove later
  return (
    <>
      <WelcomeBlock />
      <section
        className="o-Page__Section"
        style={{
          minHeight: isDesktop ? "357px" : "397px",
          backgroundColor: "#fff",
        }}
      >
        (Search)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "447px" : "703px" }}
      >
        (Services)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "512px" : "881px" }}
      >
        (KeyMetric)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "1205px" : "2285px" }}
      >
        (Headlines)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "468px" : "1046px" }}
      >
        (Tips)
      </section>
      <section
        className="o-Page__Section"
        style={{ minHeight: isDesktop ? "592px" : "1204px" }}
      >
        (Edito)
      </section>
    </>
  );
}
