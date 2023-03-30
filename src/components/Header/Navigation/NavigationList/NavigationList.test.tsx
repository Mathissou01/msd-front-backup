import { render, screen } from "@testing-library/react";
import NavigationList from "./NavigationList";

describe("NavigationList", () => {
  it("renders in mobile mode", async () => {
    const { container } = render(<NavigationList isDesktopMode={false} />);

    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(await screen.findByText("Guide du tri")).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });

  it("renders in desktop mode", async () => {
    const { container } = render(<NavigationList isDesktopMode={true} />);

    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(await screen.findByText("Guide du tri")).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });
});
