import { act, render, screen } from "@testing-library/react";
import { mockResizeWindow } from "../../../../__mocks__/resizeWindow";
import WelcomeBlock from "./WelcomeBlock";

it("renders in mobile mode", () => {
  const { container } = render(<WelcomeBlock />);
  act(() => mockResizeWindow(325, 600));

  const heroMobile = screen.getByTestId("hero-illu-mobile");
  const heroDesktop = screen.queryByTestId("hero-illu-desktop");
  expect(heroMobile).toBeInTheDocument();
  expect(heroDesktop).not.toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it("renders in desktop mode", () => {
  const { container } = render(<WelcomeBlock />);
  act(() => mockResizeWindow(1440, 600));

  const heroDesktop = screen.getByTestId("hero-illu-desktop");
  const heroMobile = screen.queryByTestId("hero-illu-mobile");
  expect(heroDesktop).toBeInTheDocument();
  expect(heroMobile).not.toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
