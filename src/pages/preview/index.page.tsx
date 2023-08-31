import { useCallback, useEffect } from "react";
import { useRoutingQueryPreview } from "../../hooks/useRoutingQueryPreview";
import PreviewComponent from "../../components/Preview/PreviewComponent/PreviewComponent";
import CommonLoader from "../../components/Common/CommonLoader/CommonLoader";
import {
  TPreviewQueryData,
  TPreviewTypes,
  previewTypes,
} from "../../lib/preview";
import {
  useGetNewByIdLazyQuery,
  useGetRecyclingWasteFormItemByIdLazyQuery,
  useGetTipByIdLazyQuery,
} from "../../graphql/codegen/generated-types";

interface IPreviewPageProps {
  previewId: string;
  previewType: TPreviewTypes;
}

export function PreviewPage({ previewId, previewType }: IPreviewPageProps) {
  /* Local Data */
  const [getTipById, { data: tipData, loading: tipLoading, error: tipError }] =
    useGetTipByIdLazyQuery();
  const [getNewById, { data: newData, loading: newLoading, error: newError }] =
    useGetNewByIdLazyQuery();
  const [
    getWasteFormById,
    { data: wasteFormData, loading: wasteLoading, error: wasteError },
  ] = useGetRecyclingWasteFormItemByIdLazyQuery();
  const isLoading = !previewType && (tipLoading || newLoading || wasteLoading);
  const errors = [tipError, newError, wasteError];

  const executeQuery = useCallback(() => {
    switch (previewType) {
      case "tip":
        getTipById({ variables: { tipId: previewId } });
        break;
      case "new":
        getNewById({ variables: { newId: previewId } });
        break;
      case "wasteForm":
        getWasteFormById({ variables: { wasteFormId: previewId } });
        break;
      default:
        throw new Error("Invalid preview type");
    }
  }, [previewId, previewType, getTipById, getNewById, getWasteFormById]);

  useEffect(() => {
    executeQuery();
  }, [executeQuery]);

  const previewData: TPreviewQueryData = tipData || newData || wasteFormData;
  return (
    <CommonLoader isLoading={isLoading} errors={errors}>
      {previewType && (
        <PreviewComponent type={previewType} data={previewData} />
      )}
    </CommonLoader>
  );
}

export default function IndexPage() {
  function isPreviewType(query?: string | string[]): query is TPreviewTypes {
    return !!query && previewTypes.includes(query.toString());
  }
  function isValidId(id: string): boolean {
    return !!id.match(/^\d+$/);
  }
  const id = useRoutingQueryPreview<string>("id", isValidId);
  const type = useRoutingQueryPreview<TPreviewTypes>("type", isPreviewType);
  return id && type && <PreviewPage previewId={id} previewType={type} />;
}
