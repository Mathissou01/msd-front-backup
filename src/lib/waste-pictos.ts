import {
  CollectDoorToDoorEntity,
  CollectDropOffEntity,
  CollectVoluntaryEntity,
  Flow,
  Maybe,
  UploadFileEntity,
} from "../graphql/codegen/generated-types";
import { removeNulls } from "./utilities";

type FlowData = Maybe<Flow> | undefined;
interface IContainers {
  pictos: UploadFileEntity[];
  names: string[];
}

export function filterAndDisplayPictos(
  collectItems: FlowData,
): IContainers | undefined {
  const MAX_PICTOS = 4;
  let displayedPictos = 0;

  const doorToDoorPictos: CollectDoorToDoorEntity[] =
    collectItems?.collectDoorToDoors?.data.filter(
      (item: CollectDoorToDoorEntity) =>
        item?.__typename === "CollectDoorToDoorEntity",
    ) as CollectDoorToDoorEntity[];

  const voluntaryPictos: CollectVoluntaryEntity[] =
    collectItems?.collectVoluntaries?.data.filter(
      (item: CollectVoluntaryEntity) =>
        item?.__typename === "CollectVoluntaryEntity",
    ) as CollectVoluntaryEntity[];

  const dropOffPictos: CollectDropOffEntity[] =
    collectItems?.collectDropOffs?.data.filter(
      (item: CollectDropOffEntity) =>
        item?.__typename === "CollectDropOffEntity",
    ) as CollectDropOffEntity[];

  if (!doorToDoorPictos && !voluntaryPictos && !dropOffPictos) return;

  const displayedDoorToDoorPictos = doorToDoorPictos?.slice(0, MAX_PICTOS);
  displayedPictos += displayedDoorToDoorPictos?.length;

  const displayedVoluntaryPictos = voluntaryPictos?.slice(
    0,
    MAX_PICTOS - displayedPictos,
  );
  displayedPictos += displayedVoluntaryPictos?.length;

  const displayedDropOffPictos =
    displayedPictos < MAX_PICTOS
      ? dropOffPictos?.slice(0, MAX_PICTOS - displayedPictos)
      : [];

  const displayedPictosArray: UploadFileEntity[] = [
    ...displayedDoorToDoorPictos.map((picto) => picto.attributes?.picto?.data),
    ...displayedVoluntaryPictos.map((picto) => picto.attributes?.picto?.data),
    ...displayedDropOffPictos.map((picto) => picto.attributes?.picto?.data),
  ].filter(removeNulls ?? []) as UploadFileEntity[];

  const displayedNamesArray: string[] = [
    ...displayedDoorToDoorPictos.map((picto) => picto.attributes?.name),
    ...displayedVoluntaryPictos.map((picto) => picto.attributes?.name),
    ...displayedDropOffPictos.map((picto) => picto.attributes?.name),
  ].filter(removeNulls ?? []) as string[];

  return {
    pictos: displayedPictosArray,
    names: displayedNamesArray,
  };
}
