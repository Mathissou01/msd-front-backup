import { render, screen } from "@testing-library/react";
import {
  defaultMockData,
  newestTopContentMockData,
} from "../../../../__mocks__/TopContentBlockMockData";
import TopContentBlock from "./TopContentBlock";

describe("TopContentBlock", () => {
  it("renders", () => {
    const { container } = render(
      <TopContentBlock
        data={defaultMockData}
        newestTopcontents={newestTopContentMockData}
      />,
    );
    const titleContent = screen.getByText("Actualités & Evénements");
    expect(titleContent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
