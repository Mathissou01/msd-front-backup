import { render } from "@testing-library/react";
import { defaultMockData } from "../../../../__mocks__/WasteHeadingMockData";
import WasteHeading from "./WasteHeading";

describe("WasteHeading", () => {
  it("renders", () => {
    const { container } = render(
      <WasteHeading
        title={defaultMockData.title}
        picto={defaultMockData.picto}
        collectItems={defaultMockData.collecItems}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
