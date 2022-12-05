import { render, screen } from "@testing-library/react";
import {
  defaultMockData,
  threeTipsMockData,
} from "../../../../__mocks__/QuizAndTipsBlockMockData";
import QuizAndTipsBlock from "./QuizAndTipsBlock";

it("renders one tip", () => {
  const { container } = render(
    <QuizAndTipsBlock data={defaultMockData.data} />,
  );
  const tag = screen.getAllByText("Astuce");
  const firstTip = screen.getByText(
    "Découper vos peaux de bananes avant de les jeter dans votre compost.",
  );
  const secondTip = screen.queryByText(
    "Pas besoin de nettoyer vos pots de yaourts avant de les jeter",
  );
  expect(tag.length).toBe(1);
  expect(firstTip).toBeInTheDocument();
  expect(secondTip).not.toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

it("renders three tips", () => {
  const { container } = render(
    <QuizAndTipsBlock data={threeTipsMockData.data} />,
  );
  const tag = screen.getAllByText("Astuce");
  const firstTip = screen.getByText(
    "Découper vos peaux de bananes avant de les jeter dans votre compost.",
  );
  const secondTip = screen.queryByText(
    "Pas besoin de nettoyer vos pots de yaourts avant de les jeter",
  );
  expect(tag.length).toBe(3);
  expect(firstTip).toBeInTheDocument();
  expect(secondTip).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
