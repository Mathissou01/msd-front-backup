import { render } from "@testing-library/react";
import { IsDesktopContext } from "../../../hooks/useScreenWidth";
import WelcomeBlock from "./WelcomeBlock";

describe("WelcomeBlock", () => {
  it("renders", () => {
    const { container } = render(
      <IsDesktopContext.Provider value={false}>
        <WelcomeBlock />
      </IsDesktopContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
