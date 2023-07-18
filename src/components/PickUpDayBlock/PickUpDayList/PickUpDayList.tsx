import { useEffect, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import {
  PickUpDayEntity,
  WasteFormEntity,
} from "../../../graphql/codegen/generated-types";
import {
  IAddressInfo,
  IFormattedPickUpDay,
  formatPickUpDays,
} from "./../../../lib/pickup-days";
import {
  downloadFile,
  getPNGUrlFromSVGUrl,
  makePublicAssetPath,
} from "../../../lib/utilities";
import { useContract } from "../../../hooks/useContract";
import CommonModal from "../../Common/CommonModal/CommonModal";
import CommonButton from "../../Common/CommonButton/CommonButton";
import CommonLoader from "../../Common/CommonLoader/CommonLoader";
import PickUpDayCalendar from "../PickUpDayCalendar/PickUpDayCalendar";
import PickUpDayItem from "../PickUpDayItem/PickUpDayItem";
import "./pick-up-day-list.scss";

interface PickUpDayListProps {
  pickUpDays?: PickUpDayEntity[];
  isLoading: boolean;
  addressInfo?: IAddressInfo;
}

export default function PickUpDayList({
  pickUpDays,
  isLoading,
  addressInfo,
}: PickUpDayListProps) {
  /* Static Data */
  const suezLogoSvgUrl = makePublicAssetPath("/images/suez-logo.svg");
  const calendarIconSvgUrl = makePublicAssetPath("/images/pictos/calendar.svg");
  const infoIconSvgUrl = makePublicAssetPath("/images/pictos/info.svg");
  const labels = {
    fullWeekDescription: "Tous les jours de la semaine",
    fromText: "À partir de ",
    acceptedWasteTitle: "Déchets acceptés",
    noResults: "Aucun résultat",
    downloadPDFLabel: "Télécharger mon calendrier de collecte",
    myPickupDaysLabel: "Mes jours de collecte",
  };

  /* Local Data */
  const { contract } = useContract();
  const logoCommunity = contract.attributes?.logo.data?.attributes?.url;
  const dropOffMapIsActivated =
    contract?.attributes?.dropOffMapService?.data?.attributes?.isActivated;
  const [displayedAcceptedWaste, setDisplayedAcceptedWaste] = useState<
    Array<WasteFormEntity> | undefined
  >(undefined);
  const [formattedPickUpDays, setFormattedPickUpDays] =
    useState<IFormattedPickUpDay[]>();

  const [suezLogoUrl, setSuezLogoUrl] = useState<string>();
  const [calendarIconUrl, setCalendarIconUrl] = useState<string>();
  const [infoIconUrl, setInfoIconUrl] = useState<string>();
  const [contributedPictoUrls, setContributedPictoUrls] = useState<{
    [key: string]: string;
  }>();
  const [pngImagesAreLoading, setPngImagesAreLoading] =
    useState<boolean>(false);

  /* Methods */
  const displayAcceptedWaste = (
    currentAcceptedWaste: Array<WasteFormEntity> | undefined,
  ) => {
    setDisplayedAcceptedWaste(currentAcceptedWaste);
  };

  const hideAcceptedWaste = () => {
    setDisplayedAcceptedWaste(undefined);
  };

  const acceptedWasteModalContent = displayedAcceptedWaste ? (
    <ul>
      {Array.isArray(displayedAcceptedWaste) &&
        displayedAcceptedWaste.map((data, index) => (
          <li key={index}>{data?.attributes?.name}</li>
        ))}
    </ul>
  ) : (
    <p>{labels.noResults}</p>
  );

  const handleDownloadPDF = async () => {
    if (
      formattedPickUpDays &&
      contributedPictoUrls &&
      suezLogoUrl &&
      calendarIconUrl &&
      infoIconUrl
    ) {
      const blob = await pdf(
        <PickUpDayCalendar
          logoCommunity={logoCommunity}
          pickUpDays={formattedPickUpDays}
          addressInfo={addressInfo}
          contributedPictoUrls={contributedPictoUrls}
          suezLogoUrl={suezLogoUrl}
          calendarIconUrl={calendarIconUrl}
          infoIconUrl={infoIconUrl}
        />,
      ).toBlob();
      const pdfBlob = new Blob([blob], { type: "application/pdf" });
      downloadFile(
        pdfBlob,
        `${labels.myPickupDaysLabel} - ${
          addressInfo?.city
        } - ${addressInfo?.street?.toUpperCase()}`,
      );
    }
  };

  useEffect(() => {
    if (pickUpDays) {
      setFormattedPickUpDays(
        formatPickUpDays(
          pickUpDays,
          labels.fullWeekDescription,
          labels.fromText,
          dropOffMapIsActivated,
        ),
      );
    }
  }, [
    pickUpDays,
    dropOffMapIsActivated,
    labels.fullWeekDescription,
    labels.fromText,
  ]);

  useEffect(() => {
    const getPngUrls = async () => {
      if (pickUpDays) {
        try {
          setPngImagesAreLoading(true);
          const suezLogoPngURl = await getPNGUrlFromSVGUrl(suezLogoSvgUrl);
          setSuezLogoUrl(suezLogoPngURl);
          const calendarIconPngUrl = await getPNGUrlFromSVGUrl(
            calendarIconSvgUrl,
          );
          setCalendarIconUrl(calendarIconPngUrl);
          const infoIconPngUrl = await getPNGUrlFromSVGUrl(infoIconSvgUrl);
          setInfoIconUrl(infoIconPngUrl);

          const pictoSvgUrls = pickUpDays.map((pickUpDay, index) => {
            return {
              pictoUrl:
                pickUpDay?.attributes?.collectDoorToDoor?.data?.attributes
                  ?.picto?.data?.attributes?.url ??
                pickUpDay?.attributes?.collectVoluntary?.data?.attributes?.picto
                  ?.data?.attributes?.url,
              key: index,
            };
          });

          for (const pictoSvgUrl of pictoSvgUrls) {
            if (pictoSvgUrl?.pictoUrl && pictoSvgUrl?.key !== undefined) {
              const pictoPngUrl = await getPNGUrlFromSVGUrl(
                pictoSvgUrl?.pictoUrl,
              );
              setContributedPictoUrls((prevState) => ({
                ...prevState,
                [pictoSvgUrl.key]: pictoPngUrl,
              }));
            } else if (pictoSvgUrl?.key !== undefined) {
              setContributedPictoUrls((prevState) => ({
                ...prevState,
                [pictoSvgUrl.key]: undefined,
              }));
            }
          }
          setPngImagesAreLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getPngUrls();
  }, [
    suezLogoSvgUrl,
    calendarIconSvgUrl,
    infoIconSvgUrl,
    pickUpDays,
    dropOffMapIsActivated,
  ]);

  return (
    <CommonLoader isLoading={isLoading}>
      <div className="c-PickUpDayList">
        <ul className="c-PickUpDayList__List">
          {formattedPickUpDays?.map((data, index) => {
            return (
              <PickUpDayItem
                pickUpDay={data}
                key={index}
                onDisplayAcceptedWaste={displayAcceptedWaste}
              />
            );
          })}
        </ul>
        {formattedPickUpDays && formattedPickUpDays?.length > 0 && (
          <div className="c-PickUpDayList__DownloadPDF">
            <CommonButton
              label={labels.downloadPDFLabel}
              style="primary"
              picto="download"
              pictoPosition="right"
              onClick={handleDownloadPDF}
              isDisabled={pngImagesAreLoading}
            />
          </div>
        )}
        {formattedPickUpDays?.length === 0 && (
          <div className="c-PickUpDayList__NoResult">
            <p>{labels.noResults}</p>
          </div>
        )}
      </div>
      {displayedAcceptedWaste && (
        <CommonModal
          handleClose={hideAcceptedWaste}
          headerTitle={`${labels.acceptedWasteTitle} : `}
          content={acceptedWasteModalContent}
        ></CommonModal>
      )}
    </CommonLoader>
  );
}
