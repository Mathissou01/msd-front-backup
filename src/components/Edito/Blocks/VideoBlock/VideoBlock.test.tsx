import { render } from "@testing-library/react";
import VideoBlock from "./VideoBlock";

const mock = {
  videoUrl: "monurlyoutube.com",
};
describe("Video Block", () => {
  it("renders", () => {
    const { container } = render(<VideoBlock videoLink={mock.videoUrl} />);
    expect(container).toMatchSnapshot();
  });
});
