import { render } from "@testing-library/react";
import HorizontalRuleBlock from "./HorizontalRuleBlock";

describe("HorizontalRuleBlock", () => {
  it("renders", () => {
    const { container } = render(<HorizontalRuleBlock />);
    expect(container).toMatchSnapshot();
  });
});
