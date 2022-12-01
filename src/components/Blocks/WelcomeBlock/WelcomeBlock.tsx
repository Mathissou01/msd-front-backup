import useScreenWidth from "../../../lib/useScreenWidth";
import HeroIlluDesktop from "public/images/Hero-illu-desktop.svg";
import HeroIlluMobile from "public/images/Hero-illu-mobile.svg";
import "./welcome-block.scss";

export default function WelcomeBlock() {
  /* Static Data */
  const temporaryText = {
    title: "Vestibulum nulla volutpat vulputates econsectetur ut sed.",
    subtitle:
      "Orci sem pellentesque augue ultrices. Quam nisl ut maecenas et aliquet varius cursus. Blandit arcu morbi tellu bibendum quis lectus commodo ",
  };

  /* Local Data */
  const { isDesktop } = useScreenWidth();

  return (
    <section className="c-WelcomeBlock">
      <div className="c-WelcomeBlock__Heading">
        <h1 className="c-WelcomeBlock__Title">{temporaryText.title}</h1>
        <span className="c-WelcomeBlock__Subtitle">
          {temporaryText.subtitle}
        </span>
      </div>
      <div className="c-WelcomeBlock__Svg">
        {isDesktop ? (
          <HeroIlluDesktop data-testid="hero-illu-desktop" />
        ) : (
          <HeroIlluMobile data-testid="hero-illu-mobile" />
        )}
      </div>
    </section>
  );
}
