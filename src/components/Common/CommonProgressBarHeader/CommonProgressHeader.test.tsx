import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CommonProgressBarHeader from "./CommonProgressHeader";

describe("CommonProgressBarHeader", () => {
  const mockProps = {
    title: "Mock Title",
    currentQuestion: 2,
    maxQuestions: 10,
    handleBackClick: jest.fn(),
  };

  it("renders without crashing", () => {
    const { container } = render(<CommonProgressBarHeader {...mockProps} />);
    expect(container).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(<CommonProgressBarHeader {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("calls handleBackClick when CommonArrowAndTitle component is clicked", () => {
    render(<CommonProgressBarHeader {...mockProps} />);
    const arrowAndTitle = screen.getByTestId("common-arrow-and-title");
    fireEvent.click(arrowAndTitle);
    expect(mockProps.handleBackClick).toHaveBeenCalledTimes(1);
  });
});
