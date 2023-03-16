import { render } from "@testing-library/react";
import SubHeadingBlock from "./SubHeadingBlock";

const mock = {
  subHeadingText: "Heading Block ",
};
describe("SubHeadingBlock", () => {
  it("renders", () => {
    const { container } = render(
      <SubHeadingBlock subHeadingText={mock.subHeadingText} />,
    );
    expect(container).toMatchSnapshot();
  });
});
