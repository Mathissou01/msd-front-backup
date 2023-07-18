import React from "react";
import {
  Page,
  Text,
  View,
  Image as PDFImage,
  Document,
  Link,
} from "@react-pdf/renderer";
import { IAddressInfo, IFormattedPickUpDay } from "../../../lib/pickup-days";
import { makeLighterColor } from "../../../lib/utilities";
import { styles } from "./calendarStyleSheet";

interface PickUpDayListPDFProps {
  logoCommunity?: string;
  pickUpDays: IFormattedPickUpDay[];
  addressInfo?: IAddressInfo;
  contributedPictoUrls: {
    [key: string]: string;
  };
  suezLogoUrl: string;
  calendarIconUrl: string;
  infoIconUrl: string;
}

export default function PickUpDayCalendar({
  logoCommunity,
  pickUpDays,
  addressInfo,
  contributedPictoUrls,
  suezLogoUrl,
  calendarIconUrl,
  infoIconUrl,
}: PickUpDayListPDFProps) {
  /* Static Data */
  const dropOffMapRoute = "/service/carte";
  const dropOffMapUrl = `${process.env.NEXT_PUBLIC_BASE_HOST}${
    process.env.NEXT_PUBLIC_BASE_PORT
      ? `:${process.env.NEXT_PUBLIC_BASE_PORT}`
      : ""
  }${dropOffMapRoute}`;

  const labels = {
    includeHolidayDescription: "(Y compris les jours fériés)",
    findRecyclingCenterButtonLabel: "Trouver une décheterie",
  };

  /* Local Data */

  const addressHeading =
    addressInfo?.city && addressInfo.street
      ? `Adresse : ${addressInfo.city} - ${addressInfo?.street.toUpperCase()}`
      : "";

  const renderPickUpDays = () => {
    return pickUpDays.map((value, index) => {
      return renderPickUpDayItem(value, index);
    });
  };

  const renderPickUpDayItem = (
    pickUpDay: IFormattedPickUpDay,
    index: number,
  ) => {
    const customButtonLink =
      pickUpDay?.acceptedWasteBlock?.customButtonExternalLink ??
      `${process.env.NEXT_PUBLIC_BASE_HOST}${
        process.env.NEXT_PUBLIC_BASE_PORT
          ? `:${process.env.NEXT_PUBLIC_BASE_PORT}`
          : ""
      }${pickUpDay.acceptedWasteBlock.customButtonRequestLink}`;

    return (
      <View style={styles.pickUpDayItem} key={index}>
        <View
          style={{
            ...styles.pictoBloc,
            ...(pickUpDay?.pictoBlock?.color && {
              backgroundColor: makeLighterColor(pickUpDay.pictoBlock.color),
            }),
          }}
        >
          <View
            style={{
              ...styles.flowPictoContainer,
              ...(pickUpDay?.pictoBlock?.color && {
                backgroundColor: pickUpDay.pictoBlock.color,
              }),
            }}
          >
            {contributedPictoUrls && contributedPictoUrls[index] && (
              <PDFImage
                src={contributedPictoUrls[index]}
                style={styles.contributedPicto}
              />
            )}
          </View>
          <View style={styles.flowInformation}>
            <Text style={styles.pickUpDayName}>
              {pickUpDay.pictoBlock.pickUpDayName}
            </Text>
            <Text style={styles.flowName}>{pickUpDay.pictoBlock.flowName}</Text>
          </View>
        </View>

        <View style={styles.informationBlock}>
          <View style={styles.calendarContainer}>
            <View style={styles.calendarPictoContainer}>
              {calendarIconUrl && (
                <PDFImage src={calendarIconUrl} style={{ width: 12 }} />
              )}
            </View>
            <View style={styles.description}>
              {pickUpDay?.informationBlock?.periodicityDescription && (
                <Text style={styles.descriptionText}>
                  {pickUpDay.informationBlock.periodicityDescription}
                </Text>
              )}
              {pickUpDay?.informationBlock?.hasIncludeHolidayDescription && (
                <Text style={styles.descriptionText}>
                  {labels.includeHolidayDescription}
                </Text>
              )}
              {pickUpDay?.informationBlock?.pickUpHoursDescription && (
                <Text style={styles.descriptionText}>
                  {pickUpDay.informationBlock.pickUpHoursDescription}
                </Text>
              )}
            </View>
          </View>
          {pickUpDay?.informationBlock?.informationMessage?.isRelevant && (
            <View style={styles.informationMessageContainer}>
              {infoIconUrl && (
                <PDFImage
                  src={infoIconUrl}
                  style={styles.informationMessagePicto}
                />
              )}
              <Text style={styles.informationMessage}>
                {pickUpDay.informationBlock.informationMessage.message}
              </Text>
            </View>
          )}
        </View>
        <View style={styles.verticalLine}></View>
        <View style={styles.acceptedWasteBlock}>
          <View style={styles.buttons}>
            {pickUpDay?.acceptedWasteBlock?.displayCustomButton &&
              pickUpDay.acceptedWasteBlock.customButtonLabel &&
              customButtonLink && (
                <Link src={customButtonLink} style={styles.button}>
                  <Text style={styles.buttonLabel}>
                    {pickUpDay.acceptedWasteBlock.customButtonLabel}
                  </Text>
                </Link>
              )}
            {pickUpDay?.acceptedWasteBlock
              ?.displayFindRecyclingCenterButton && (
              <Link
                src={`${dropOffMapUrl}?pav=${pickUpDay.acceptedWasteBlock.pavName}`}
                style={styles.button}
              >
                <Text style={styles.buttonLabel}>
                  {labels.findRecyclingCenterButtonLabel}
                </Text>
              </Link>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page size="A4" style={styles.container}>
        <View style={styles.header}>
          <PDFImage src={logoCommunity} style={styles.logoCommunity} />
          <Text style={styles.address}>{addressHeading}</Text>
        </View>
        {renderPickUpDays()}
        <View style={styles.footer}>
          {suezLogoUrl && <PDFImage src={suezLogoUrl} style={{ width: 150 }} />}
        </View>
      </Page>
    </Document>
  );
}
