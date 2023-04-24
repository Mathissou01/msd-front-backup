import { render } from "@testing-library/react";
import CommonAutocomplete from "./CommonAutocomplete";

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
};

describe("CommonAutocomplete", () => {
  it("renders", () => {
    const { container } = render(
      <CommonAutocomplete
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
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
