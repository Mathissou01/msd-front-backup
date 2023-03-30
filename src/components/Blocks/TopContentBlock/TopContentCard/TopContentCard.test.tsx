import { render } from "@testing-library/react";
import TopContentCard from "./TopContentCard";

const mock = {
  title: "common top content card title",
  href: "/accueil",
  image: {
    attributes: {
      url: "/images/images-temp/temp_image.jpg",
      alternativeText: "",
      hash: "",
      mime: "",
      name: "",
      provider: "",
      size: 0,
    },
  },
};

describe("TopContentCard", () => {
  it("renders", () => {
    const { container } = render(
      <TopContentCard title={mock.title} href={mock.href} image={mock.image} />,
    );
    expect(container).toMatchSnapshot();
  });
});
