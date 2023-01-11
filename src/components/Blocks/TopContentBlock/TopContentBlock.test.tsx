import { render, screen } from "@testing-library/react";
import {
  defaultMockMinData,
  defaultMockFullData,
  newestTopContentMockData,
} from "../../../../__mocks__/TopContentBlockMockData";
import TopContentBlock from "./TopContentBlock";

describe("TopContentBlock", () => {
  it("renders titleContent", () => {
    const { container } = render(
      <TopContentBlock
        data={defaultMockMinData}
        newestTopContents={newestTopContentMockData}
      />,
    );
    const titleContent = screen.getByText("Actualités & Evénements");
    expect(titleContent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders top Content and three topContents", () => {
    const { container } = render(
      <TopContentBlock
        data={defaultMockFullData}
        newestTopContents={newestTopContentMockData}
      />,
    );

    const title = screen.getByText("Lorem ipsum dolor sit amet");
    const shortDescription = screen.getByText(
      "consectetur adipiscing elit. Aliquam facilisis tincidunt est",
    );
    const titleEventOrNews = screen.getByText("Suspendisse et est sem");
    const shortDescriptionEventOrNews = screen.getByText(
      "Vestibulum cursus eros ut ligula lobortis auctor. Quisque luctus sagittis tellus",
    );

    expect(title).toBeInTheDocument();
    expect(shortDescription).toBeInTheDocument();
    expect(titleEventOrNews).toBeInTheDocument();
    expect(shortDescriptionEventOrNews).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
