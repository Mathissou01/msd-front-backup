import { useIsDesktopContext } from "../../../hooks/useScreenWidth";
import HeroIlluDesktop from "public/images/Hero-illu-desktop.svg";
import HeroIlluMobile from "public/images/Hero-illu-mobile.svg";
import "./welcome-block.scss";

export default function WelcomeBlock() {
  /* Static Data */
  const temporaryText = {
    title: "",
    subtitle: "",
  };

  /* Local Data */
  const isDesktop = useIsDesktopContext();

  return (
    <section className="c-WelcomeBlock">
      <div className="c-WelcomeBlock__Heading">
        <h1 className="c-WelcomeBlock__Title">{temporaryText.title}</h1>
        <span className="c-WelcomeBlock__Subtitle">
          {temporaryText.subtitle}
        </span>
      </div>
      <div className="c-WelcomeBlock__SvgContainer">
        {isDesktop ? (
          <HeroIlluDesktop
            className="c-WelcomeBlock__Svg_desktop"
            data-testid="hero-illu-desktop"
          />
        ) : (
          <HeroIlluMobile
            className="c-WelcomeBlock__Svg_mobile"
            data-testid="hero-illu-mobile"
          />
        )}
      </div>
    </section>
  );
}
