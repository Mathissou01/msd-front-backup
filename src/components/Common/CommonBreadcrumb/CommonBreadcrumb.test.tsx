import { render, screen } from "@testing-library/react";
import CommonBreadcrumb from "./CommonBreadcrumb";

const mockPagesUrl = [
  {
    label: "Accueil",
    slug: "/",
  },
  {
    label: "Actualités",
    slug: "actualites",
  },
  {
    label: "Semaine initiatives vertes",
  },
];

describe("CommonBreadcrumb", () => {
  it("renders", () => {
    const { container } = render(<CommonBreadcrumb pages={mockPagesUrl} />);
    const lableUrl = screen.getByText("Accueil");
    expect(lableUrl).toHaveAttribute("href", "/");
    expect(container).toMatchSnapshot();
  });
});
