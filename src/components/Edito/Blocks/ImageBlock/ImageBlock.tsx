import Image from "next/image";
import { makePublicAssetPath } from "../../../../lib/utilities";
import { IBlocksImage } from "../../../../lib/edito-content";
import "./image-block.scss";

interface IImageBlockProps {
  block: IBlocksImage;
}
export default function ImageBlock({ block }: IImageBlockProps) {
  /* Static Data */
  const imageData = block?.picture?.data;
  return (
    imageData && (
      <div className="c-ImageBlock">
        <Image
          src={makePublicAssetPath(imageData.attributes.url)}
          alt={imageData.attributes.alternativeText}
          width={580}
          height={328}
        />
      </div>
    )
  );
}
