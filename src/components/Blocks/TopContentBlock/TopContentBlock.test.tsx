import { render, screen } from "@testing-library/react";
import {
  topContentBlockMockData,
  newestTopContentMockData,
} from "../../../../__mocks__/TopContentBlockMockData";
import TopContentBlock from "./TopContentBlock";

describe("TopContentBlock", () => {
  it("renders titleContent", () => {
    const { container } = render(
      <TopContentBlock
        data={topContentBlockMockData}
        newestTopContents={newestTopContentMockData}
      />,
    );
    const titleContent = screen.getByText("Actualités et événements");
    expect(titleContent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders top Content and three topContents", async () => {
    const { container } = render(
      <TopContentBlock
        data={topContentBlockMockData}
        newestTopContents={newestTopContentMockData}
      />,
    );

    const title = await screen.findByText("Actu test");
    const shortDescription = await screen.findByText("Test");
    const titleEventOrNews = await screen.findByText("Suspendisse et est sem");
    const shortDescriptionEventOrNews = await screen.findByText(
      "Vestibulum cursus eros ut ligula lobortis auctor. Quisque luctus sagittis tellus",
    );

    expect(title).toBeInTheDocument();
    expect(shortDescription).toBeInTheDocument();
    expect(titleEventOrNews).toBeInTheDocument();
    expect(shortDescriptionEventOrNews).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
