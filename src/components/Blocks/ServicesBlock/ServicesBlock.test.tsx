import { render, screen } from "@testing-library/react";
import {
  defaultMockData,
  emptyMockData,
  lessThanThreeMockData,
} from "../../../../__mocks__/ServicesBlockMockData";
import ServicesBlock from "./ServicesBlock";

describe("ServicesBlock", () => {
  it("renders nothing when data don't contain a required data ", () => {
    const { container } = render(
      <ServicesBlock remappedData={emptyMockData} />,
    );
    const component = screen.queryByTestId("services-block");
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders less than three ServiceCard", () => {
    const { container } = render(
      <ServicesBlock remappedData={lessThanThreeMockData} />,
    );
    const OneService = screen.getByText("Guide du tri");
    expect(OneService).toBeInTheDocument();

    const cards = screen.getAllByTestId("service-card");
    expect(cards.length).toBe(2);
    expect(container).toMatchSnapshot();
  });

  it("renders three or more of ServiceCard", () => {
    const { container } = render(
      <ServicesBlock remappedData={defaultMockData} />,
    );
    const OneService = screen.getByText("Réduire mes déchets");
    expect(OneService).toBeInTheDocument();

    const cards = screen.getAllByTestId("service-card");
    expect(cards.length).toBe(4);
    expect(container).toMatchSnapshot();
  });
});
