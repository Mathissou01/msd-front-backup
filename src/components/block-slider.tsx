import React from "react";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ComponentType = {
  data: {
    files: Array<{
      id: number;
      localFile: ImageDataLike;
      alternativeText: string;
    }>;
  };
};

const BlockSlider: React.FunctionComponent<ComponentType> = ({ data }) => {
  return (
    <div className="container max-w-3xl py-8">
      <Slider
        dots={true}
        infinite={true}
        speed={300}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={true}
        swipe={true}
      >
        {data.files.map(
          (file: {
            id: number;
            localFile: ImageDataLike;
            alternativeText: string;
          }) => (
            <GatsbyImage
              key={file.id}
              image={getImage(file.localFile) as IGatsbyImageData}
              alt={file.alternativeText}
            />
          ),
        )}
      </Slider>
    </div>
  );
};

export default BlockSlider;
