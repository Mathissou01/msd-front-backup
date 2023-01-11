import { render } from "@testing-library/react";
import CommonTopContentCard from "./CommonTopContentCard";

const mock = {
  title: "common top content card title",
  href: "/accueil",
  imageUrl: "/images/pictos/default.svg",
};

describe("CommonTopContentCard", () => {
  it("renders", () => {
    const { container } = render(
      <CommonTopContentCard
        title={mock.title}
        redirectUrl={mock.href}
        imageUrlDesktop={mock.imageUrl}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
