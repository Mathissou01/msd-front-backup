import { act, fireEvent, render, screen } from "@testing-library/react";
import { mockResizeWindow } from "../../../__mocks__/resizeWindow";
import Header from "./Header";

it("renders in mobile mode", () => {
  const { container } = render(<Header />);
  act(() => mockResizeWindow(325, 600));

  const topBar = screen.getByTestId("top-bar");
  const burgerMenuButton = screen.queryByTestId("burger-menu-button");
  const burgerMenu = screen.getByTestId("burger-menu");
  const sideBar = screen.queryByTestId("side-bar");
  expect(topBar).toBeInTheDocument();
  expect(burgerMenuButton).toBeInTheDocument();
  expect(burgerMenu).toBeInTheDocument();
  expect(sideBar).not.toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it("opens the burger menu and enables the content cover when burger button is clicked", () => {
  render(<Header />);
  act(() => mockResizeWindow(325, 600));

  const burgerMenuButton = screen.getByTestId("burger-menu-button");
  const contentCover = screen.getByTestId("content-cover");
  expect(burgerMenuButton).toBeInTheDocument();
  expect(contentCover).toBeInTheDocument();
  expect(contentCover).not.toHaveClass("c-Header__ContentCover_active");
  expect(burgerMenuButton).not.toHaveClass(
    "c-HeaderTopBar__BurgerButton_expanded",
  );

  fireEvent.click(burgerMenuButton);
  expect(contentCover).toHaveClass("c-Header__ContentCover_active");
  expect(burgerMenuButton).toHaveClass("c-HeaderTopBar__BurgerButton_expanded");

  fireEvent.click(burgerMenuButton);
  expect(contentCover).not.toHaveClass("c-Header__ContentCover_active");
  expect(burgerMenuButton).not.toHaveClass(
    "c-HeaderTopBar__BurgerButton_expanded",
  );
});

it("renders in desktop mode", () => {
  const { container } = render(<Header />);
  act(() => mockResizeWindow(1200, 600));

  const topBar = screen.getByTestId("top-bar");
  const sideBar = screen.getByTestId("side-bar");
  const burgerMenuButton = screen.queryByTestId("burger-menu-button");
  const burgerMenu = screen.queryByTestId("burger-menu");
  expect(sideBar).toBeInTheDocument();
  expect(topBar).toBeInTheDocument();
  expect(burgerMenuButton).not.toBeInTheDocument();
  expect(burgerMenu).not.toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
