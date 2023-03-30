import { render, screen } from "@testing-library/react";
import { defaultMockData } from "../../../../__mocks__/RecyclingGuideBlockMockData";
import RecyclingGuideBlock from "./RecyclingGuideBlock";

describe("RecyclingGuideBlock", () => {
  it("renders", () => {
    const { container } = render(
      <RecyclingGuideBlock data={defaultMockData.data} />,
    );
    const title = screen.getByText("Un doute sur le recyclage d'un déchet");
    expect(title).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
