import { render } from "@testing-library/react";
import CommonCardBlock from "./CommonCardBlock";

const mock = {
  tagLabels: ["common card block tag"],
  title: "common card block title",
  href: "/accueil",
};

describe("CommonCardBlock", () => {
  it("renders", () => {
    const { container } = render(
      <CommonCardBlock
        tagLabels={mock.tagLabels}
        title={mock.title}
        href={mock.href}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
