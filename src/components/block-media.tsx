import React from "react";
import {
  GatsbyImage,
  getImage,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";

type ComponentType = {
  data: {
    file: { mime: string; localFile: ImageDataLike; alternativeText: string };
  };
};

const BlockMedia: React.FunctionComponent<ComponentType> = ({ data }) => {
  const isVideo = data.file.mime.startsWith("video");

  return (
    <div className="py-8">
      {isVideo ? (
        <p>TODO video</p>
      ) : (
        <GatsbyImage
          image={getImage(data.file.localFile) as IGatsbyImageData}
          alt={data.file.alternativeText}
        />
      )}
    </div>
  );
};

export default BlockMedia;
