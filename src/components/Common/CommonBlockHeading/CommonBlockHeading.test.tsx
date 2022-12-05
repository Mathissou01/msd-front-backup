import { render } from "@testing-library/react";
import CommonBlockHeading from "./CommonBlockHeading";

const mock = {
  title: "common block heading",
};

it("renders", () => {
  const { container } = render(<CommonBlockHeading blockTitle={mock.title} />);
  expect(container).toMatchSnapshot();
});
