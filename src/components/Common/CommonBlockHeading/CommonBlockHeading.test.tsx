import { render } from "@testing-library/react";
import CommonBlockHeading from "./CommonBlockHeading";

const mock = {
  titleContent: "common block heading",
};

it("renders", () => {
  const { container } = render(
    <CommonBlockHeading titleContent={mock.titleContent} />,
  );
  expect(container).toMatchSnapshot();
});
