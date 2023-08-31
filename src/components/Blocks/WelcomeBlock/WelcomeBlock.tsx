import HeroIlluDesktop from "public/images/Hero-illu-desktop.svg";
import HeroIlluTablet from "public/images/Hero-illu-tablet.svg";
import HeroIlluMobile from "public/images/Hero-illu-mobile.svg";
import "./welcome-block.scss";

interface IWelcomeBlockProps {
  title: string;
  subtitle: string;
}

export default function WelcomeBlock({ title, subtitle }: IWelcomeBlockProps) {
  return (
    <section className="c-WelcomeBlock">
      <div className="c-WelcomeBlock__Heading">
        <h1 className="c-WelcomeBlock__Title">{title}</h1>
        <span className="c-WelcomeBlock__Subtitle">{subtitle}</span>
      </div>
      <div className="c-WelcomeBlock__SvgContainer">
        <HeroIlluDesktop
          className="c-WelcomeBlock__Svg_desktop"
          data-testid="hero-illu-desktop"
        />
        <HeroIlluTablet
          className="c-WelcomeBlock__Svg_tablet"
          data-testid="hero-illu-tablet"
        />
        <HeroIlluMobile
          className="c-WelcomeBlock__Svg_mobile"
          data-testid="hero-illu-mobile"
        />
      </div>
    </section>
  );
}
