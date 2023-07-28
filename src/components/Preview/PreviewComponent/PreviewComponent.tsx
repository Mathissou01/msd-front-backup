import {
  NewEntityResponse,
  TipEntityResponse,
  WasteFormEntityResponse,
} from "../../../graphql/codegen/generated-types";
import {
  TPreviewQueryData,
  TPreviewTypes,
  isPreviewType,
} from "../../../lib/preview";
import ActualitesNewPage from "../../../pages/actualites/[newId]/index.page";
import TipPage from "../../../pages/astuces/[tipId]/index.page";
import ServiceGuideTriPage from "../../../pages/service/guide-tri/[guidetriId]/index.page";

interface IPreviewComponentProps {
  type: TPreviewTypes;
  data: TPreviewQueryData;
}

function getTypeComponent(type: TPreviewTypes, data: TPreviewQueryData) {
  if (
    data &&
    type === "tip" &&
    "tip" in data &&
    isPreviewType<TipEntityResponse>(data, type)
  ) {
    return <TipPage tipData={data.tip?.data} />;
  }

  if (
    data &&
    type === "new" &&
    "new" in data &&
    isPreviewType<NewEntityResponse>(data, type)
  ) {
    return <ActualitesNewPage newData={data.new?.data} />;
  }

  if (
    data &&
    type === "wasteForm" &&
    "wasteForm" in data &&
    isPreviewType<WasteFormEntityResponse>(data, type)
  ) {
    return <ServiceGuideTriPage guidetriData={data.wasteForm?.data} />;
  }

  return null;
}

export default function PreviewComponent({
  type,
  data,
}: IPreviewComponentProps) {
  return getTypeComponent(type, data);
}
