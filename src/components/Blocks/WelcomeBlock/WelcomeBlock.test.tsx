import { render, screen } from "@testing-library/react";
import { IsDesktopContext } from "../../../hooks/useScreenWidth";
import WelcomeBlock from "./WelcomeBlock";

describe("WelcomeBlock", () => {
  it("renders in mobile mode", () => {
    const { container } = render(
      <IsDesktopContext.Provider value={false}>
        <WelcomeBlock />
      </IsDesktopContext.Provider>,
    );

    const heroMobile = screen.getByTestId("hero-illu-mobile");
    const heroDesktop = screen.queryByTestId("hero-illu-desktop");
    expect(heroMobile).toBeInTheDocument();
    expect(heroDesktop).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders in desktop mode", () => {
    const { container } = render(
      <IsDesktopContext.Provider value={true}>
        <WelcomeBlock />
      </IsDesktopContext.Provider>,
    );

    const heroDesktop = screen.getByTestId("hero-illu-desktop");
    const heroMobile = screen.queryByTestId("hero-illu-mobile");
    expect(heroDesktop).toBeInTheDocument();
    expect(heroMobile).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
