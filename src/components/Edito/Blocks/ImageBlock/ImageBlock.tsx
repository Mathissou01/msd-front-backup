import Image from "next/image";
import { UploadFileEntity } from "../../../../graphql/codegen/generated-types";
import { makePublicAssetPath } from "../../../../lib/utilities";
import "./image-block.scss";

interface IImageBlockProps {
  image: UploadFileEntity;
}

export default function ImageBlock({ image }: IImageBlockProps) {
  return (
    <>
      {image.attributes?.url && (
        <div className="c-ImageBlock">
          <Image
            src={makePublicAssetPath(image.attributes?.url)}
            alt={image.attributes.alternativeText ?? ""}
            width={580}
            height={328}
          />
        </div>
      )}
    </>
  );
}
