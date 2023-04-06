import Image from "next/image";
import { IBlocksImage } from "../../../../lib/edito-content";
import "./image-block.scss";

interface IImageBlockProps {
  block: IBlocksImage;
}
export default function ImageBlock({ block }: IImageBlockProps) {
  console.log("first : ", block?.picture?.data?.attributes?.url);
  const imageURL = block?.picture?.data;

  return (
    imageURL && (
      <div className="c-ImageBlock">
        <Image
          src={block?.picture?.data?.attributes?.url}
          alt=""
          width={580}
          height={328}
        />
      </div>
    )
  );
}
