import { fireEvent, render, screen } from "@testing-library/react";
import SearchEngineBlock from "./SearchEngineBlock";
import React from "react";

describe("SearchEngineBlock", () => {
  const data = {
    title: "Titre",
    subtitle: "Sous-titre",
    placeholder: "Lampes",
  };

  it("renders the block properly with all props", () => {
    const onSearchSubmit = jest.fn();
    const handleSearchTermChange = jest.fn();

    const { container } = render(
      <SearchEngineBlock
        title={data.title}
        subtitle={data.subtitle}
        placeholder={data.placeholder}
        onSearchSubmit={onSearchSubmit}
        onSearchTermChange={handleSearchTermChange}
        minLengthSearch={3}
        searchTerm=""
      />,
    );

    /* Components (input & button) */
    const input = screen.getByPlaceholderText("Lampes");
    const searchButton = screen.getByRole("button");

    /* Testing cases */
    expect(searchButton).toBeDisabled();
    expect(input).toHaveValue("");
    expect(container).toMatchSnapshot();
  });

  it("should modify input value by firing onChangeEvent", () => {
    const handleSearchTermChange = jest.fn();

    const { container } = render(
      <SearchEngineBlock
        title={data.title}
        subtitle={data.subtitle}
        placeholder={data.placeholder}
        onSearchSubmit={() => null}
        onSearchTermChange={handleSearchTermChange}
        minLengthSearch={3}
        searchTerm=""
      />,
    );

    /* Components (input & button) */
    const input = screen.getByPlaceholderText("Lampes");
    const searchButton = screen.getByRole("button");

    /* Testing cases */
    expect(searchButton).toBeDisabled();
    fireEvent.change(input, { target: { value: "Test Input" } });
    expect(handleSearchTermChange).toBeCalledWith("Test Input");

    expect(container).toMatchSnapshot();
  });

  it("should firing click button 1 times when input value > 3", () => {
    const onSearchSubmit = jest.fn();
    const handleSearchTermChange = jest.fn();

    render(
      <SearchEngineBlock
        title={data.title}
        subtitle={data.subtitle}
        placeholder={data.placeholder}
        onSearchSubmit={onSearchSubmit}
        onSearchTermChange={handleSearchTermChange}
        minLengthSearch={3}
        searchTerm="Test Input"
      />,
    );

    /* Components (input & button) */
    const searchButton = screen.getByRole("button");

    /* Testing cases */
    // Button is enabled because it have value
    expect(searchButton).toBeEnabled();

    // We test click button
    fireEvent.click(searchButton);
    expect(onSearchSubmit).toBeCalledTimes(1);
  });
});
