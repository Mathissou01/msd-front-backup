import { render, screen } from "@testing-library/react";
import { IsDesktopContext } from "../../../../hooks/useScreenWidth";
import NavigationList from "./NavigationList";

describe("NavigationList", () => {
  it("renders in mobile mode", async () => {
    const { container } = render(
      <IsDesktopContext.Provider value={false}>
        <NavigationList isDesktopMode={false} />
      </IsDesktopContext.Provider>,
    );

    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(
      await screen.findByText("Collecte à mon adresse"),
    ).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });

  it("renders in desktop mode", async () => {
    const { container } = render(
      <IsDesktopContext.Provider value={false}>
        <NavigationList isDesktopMode={true} />
      </IsDesktopContext.Provider>,
    );

    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(
      await screen.findByText("Collecte à mon adresse"),
    ).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });
});
