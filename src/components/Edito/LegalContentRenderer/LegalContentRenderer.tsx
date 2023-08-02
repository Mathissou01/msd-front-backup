import { IEditoBlock, isEditoBlock } from "../../../lib/edito-content";
import CommonBreadcrumb, {
  IBreadcrumbPage,
} from "../../Common/CommonBreadcrumb/CommonBreadcrumb";
import EditoDynamicBlock from "../EditoDynamicBlock";
import "./legal-content-renderer.scss";

interface ILegalContentRendererProps {
  breadcrumbPages: IBreadcrumbPage[];
  title: string;
  legalContentBlocks: IEditoBlock[];
}

export default function LegalContentRenderer({
  breadcrumbPages,
  title,
  legalContentBlocks,
}: ILegalContentRendererProps) {
  return (
    <>
      <CommonBreadcrumb pages={breadcrumbPages} />
      <section className="c-LegalContentRenderer">
        {title && <h1 className="c-LegalContentRenderer__Title">{title}</h1>}
        {legalContentBlocks && legalContentBlocks.length > 0 && (
          <div className="c-LegalContentRenderer__Blocks">
            {legalContentBlocks.map((block, index) => {
              if (block && isEditoBlock(block)) {
                return (
                  <EditoDynamicBlock
                    key={index}
                    type={block.__typename}
                    data={block}
                  />
                );
              }
            })}
          </div>
        )}
      </section>
    </>
  );
}
