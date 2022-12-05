import { render, screen } from "@testing-library/react";
import { defaultMockData } from "../../../../__mocks__/RecyclingGuideBlockMockData";
import RecyclingGuideBlock from "./RecyclingGuideBlock";

it("renders one tip", () => {
  const { container } = render(
    <RecyclingGuideBlock data={defaultMockData.data} />,
  );
  const title = screen.getByText("Un doute sur le recyclage d'un déchet");
  expect(title).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
