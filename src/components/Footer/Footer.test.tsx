import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Header", () => {
  it("renders", async () => {
    const { container } = render(<Footer />);

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
