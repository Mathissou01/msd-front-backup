import { render } from "@testing-library/react";
import CommonCardBlock from "./CommonCardBlock";

const mock = {
  tagLabels: [
    {
      id: "16",
      attributes: {
        name: "Prise de RDV",
      },
    },
    {
      id: "12",
      attributes: {
        name: "Evénement",
      },
    },
  ],
  title: "common card block title",
  href: "/accueil",
  image: {
    url: "/images/images-temp/temp_image.jpg",
    alternativeText: "",
    hash: "",
    mime: "",
    name: "",
    provider: "",
    size: 0,
  },
};

describe("CommonCardBlock", () => {
  it("renders", () => {
    const { container } = render(
      <CommonCardBlock
        tags={mock.tagLabels}
        title={mock.title}
        image={mock.image}
        href={mock.href}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
