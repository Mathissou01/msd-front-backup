import { fireEvent, render, screen } from "@testing-library/react";
import { IsDesktopContext } from "../../hooks/useScreenWidth";
import Header from "./Header";

jest.mock("./Navigation/NavigationList/NavigationList");

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
  }),
}));

jest.mock("../../graphql/codegen/generated-types", () => ({
  useGetCitiesInformationsLazyQuery: jest.fn().mockReturnValue(["test"]),
}));

describe("Header", () => {
  it("renders in mobile mode", async () => {
    const { container } = render(
      <IsDesktopContext.Provider value={false}>
        <Header />
      </IsDesktopContext.Provider>,
    );
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
    render(
      <IsDesktopContext.Provider value={false}>
        <Header />
      </IsDesktopContext.Provider>,
    );
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
    expect(burgerMenuButton).toHaveClass(
      "c-HeaderTopBar__BurgerButton_expanded",
    );
    fireEvent.click(burgerMenuButton);
    expect(contentCover).not.toHaveClass("c-Header__ContentCover_active");
    expect(burgerMenuButton).not.toHaveClass(
      "c-HeaderTopBar__BurgerButton_expanded",
    );
  });
  it("renders in desktop mode", () => {
    const { container } = render(
      <IsDesktopContext.Provider value={true}>
        <Header />
      </IsDesktopContext.Provider>,
    );
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
});
