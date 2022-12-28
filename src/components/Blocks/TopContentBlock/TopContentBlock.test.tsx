import { render, screen } from "@testing-library/react";
import { defaultMockData } from "../../../../__mocks__/TopContentBlockMockData";
import TopContentBlock from "./TopContentBlock";

describe("TopContentBlock", () => {
  it("renders", () => {
    const { container } = render(<TopContentBlock data={defaultMockData} />);
    const title = screen.getByText("Actualités & Evénements");
    const titleNews = screen.getByText("Café préparation");
    expect(title).toBeInTheDocument();
    expect(titleNews).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
