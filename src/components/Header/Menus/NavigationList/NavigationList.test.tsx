import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { defaultMockData } from "../../../../../__mocks__/NavigationListMockData";
import NavigationList from "./NavigationList";

describe("NavigationList", () => {
  it("renders in mobile mode", async () => {
    const { container } = render(
      <MockedProvider mocks={defaultMockData}>
        <NavigationList isDesktopMode={false} />
      </MockedProvider>,
    );

    expect(await screen.findByTestId("common-spinner")).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
    expect(await screen.findByText("Accueil")).toBeInTheDocument();
    expect(
      await screen.findByText("Collecte à mon adresse"),
    ).toBeInTheDocument();
    expect(await container).toMatchSnapshot();
  });
});
