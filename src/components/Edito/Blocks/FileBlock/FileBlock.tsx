import { IBlocksFile } from "../../../../lib/edito-content";
import { formatFileSize } from "../../../../lib/formatFileSize";
import CardFile from "./CardFile/CardFile";
import "./file-block.scss";

interface IFileBlockProps {
  block: IBlocksFile;
}
export default function FileBlock({ block }: IFileBlockProps) {
  return (
    <div className="c-FileBlock">
      <CardFile
        title={block?.document?.data?.attributes?.name ?? ""}
        extension={block?.document?.data?.attributes?.ext ?? ""}
        size={`${formatFileSize(block?.document?.data?.attributes?.size ?? 0)}`}
        url={block?.document?.data?.attributes?.url ?? ""}
      />
    </div>
  );
}
