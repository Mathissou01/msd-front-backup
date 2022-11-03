import { render, screen } from "@testing-library/react";
import Header from "./Header";

type Page = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
  };
};

const pages: Array<Page> = [
  {
    id: 1,
    attributes: {
      title: "this is a title",
      content: "this is content",
      slug: "page-1",
    },
  },
  {
    id: 2,
    attributes: {
      title: "this is a title",
      content: "this is content",
      slug: "page-2",
    },
  },
];

it("renders", () => {
  const { container } = render(<Header pages={pages} />);
  expect(container).toMatchSnapshot();
});

it("has navigation elements", () => {
  render(<Header pages={pages} />);
  const topBar = screen.getByTestId("top-bar");
  expect(topBar).toBeInTheDocument();
  const leftBar = screen.getByTestId("left-bar");
  expect(leftBar).toBeInTheDocument();
});
