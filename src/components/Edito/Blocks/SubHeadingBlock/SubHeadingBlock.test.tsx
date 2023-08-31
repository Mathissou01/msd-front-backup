import { render } from "@testing-library/react";
import SubHeadingBlock from "./SubHeadingBlock";
import { THeadingTags } from "../../../../lib/edito-content";

const mock = {
  subHeadingTag: "h2" as THeadingTags,
  subHeadingText: "Heading Block",
};
describe("SubHeadingBlock", () => {
  it("renders", () => {
    const { container } = render(
      <SubHeadingBlock
        subHeadingText={mock.subHeadingText}
        subHeadingTag={mock.subHeadingTag}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
