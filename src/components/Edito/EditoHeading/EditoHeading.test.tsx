import { render } from "@testing-library/react";
import EditoHeading from "./EditoHeading";

const mock = {
  title: "Edito heading title",
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

describe("EditoHeading", () => {
  it("renders", () => {
    const { container } = render(
      <EditoHeading
        title={mock.title}
        image={mock.image}
        tags={mock.tagLabels}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
