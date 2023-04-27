import { render } from "@testing-library/react";
import AutocompleteAddress from "./AutocompleteAddress";

const mock = {
  value: "common",
  handleChange: () => {
    console.log("");
  },
  debouncedValue: "common",
  isVisibled: true,
  setIsVisibled: () => {
    console.log("");
  },
  handleClick: () => {
    console.log("");
  },
  filteredOptions: ["common autocomplete 1", "common autocomplete 2"],
  inputName: "common autocomplete",
  inputLabel: "common autocomplete",
  inputPlaceholder: "common autocomplete",
  handleError: () => {
    console.log("");
  },
};

describe("AutocompleteAddress", () => {
  it("renders", () => {
    const { container } = render(
      <AutocompleteAddress
        value={mock.value}
        handleChange={mock.handleChange}
        debouncedValue={mock.debouncedValue}
        isVisibled={mock.isVisibled}
        setIsVisibled={mock.setIsVisibled}
        handleClick={mock.handleClick}
        filteredOptions={mock.filteredOptions}
        inputName={mock.inputName}
        inputLabel={mock.inputLabel}
        inputPlaceholder={mock.inputPlaceholder}
        handleError={mock.handleError}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
