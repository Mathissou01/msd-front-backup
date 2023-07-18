import Image from "next/image";
import Link from "next/link";
import { WasteFormEntity } from "../../../graphql/codegen/generated-types";
import { IFormattedPickUpDay } from "../../../lib/pickup-days";
import { makeLighterColor, makePublicAssetPath } from "../../../lib/utilities";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./pick-up-day-item.scss";

interface PickUpDayItemProps {
  pickUpDay: IFormattedPickUpDay;
  onDisplayAcceptedWaste: (
    currentAcceptedWaste: Array<WasteFormEntity> | undefined,
  ) => void;
}

export default function PickUpDayItem({
  pickUpDay,
  onDisplayAcceptedWaste,
}: PickUpDayItemProps) {
  /* Static Data */
  const dropOffMapRoute = "/service/carte";
  const labels = {
    includeHolidayDescription: "(Y compris les jours fériés)",
    findRecyclingCenterButtonLabel: "Trouver une décheterie",
    acceptedWasteTitle: "Déchets acceptés",
  };
  const alt = {
    informationIcon: "information icon",
    calendarIcon: "calendar icon",
  };

  /* Local Data */
  const customButtonLink =
    pickUpDay?.acceptedWasteBlock?.customButtonExternalLink ??
    pickUpDay.acceptedWasteBlock.customButtonRequestLink;

  return (
    <li className="c-PickUpDayItem">
      <div
        className="c-PickUpDayItem__FlowContainer"
        style={
          pickUpDay?.pictoBlock?.color
            ? {
                backgroundColor: makeLighterColor(pickUpDay.pictoBlock.color),
              }
            : undefined
        }
      >
        <div
          className="c-PickUpDayItem__FlowPictoContainer"
          style={{
            backgroundColor: pickUpDay?.pictoBlock?.color,
          }}
        >
          {pickUpDay?.pictoBlock?.pictoUrl && (
            <Image
              src={makePublicAssetPath(pickUpDay.pictoBlock.pictoUrl)}
              alt={pickUpDay?.pictoBlock?.pictoAltText ?? ""}
              width="32"
              height="32"
            />
          )}
        </div>

        <div className="c-PickUpDayItem__FlowInformation">
          <h3 className="c-PickUpDayItem__PickUpDayName">
            {pickUpDay?.pictoBlock?.pickUpDayName}
          </h3>
          <p className="c-PickUpDayItem__FlowName">
            {pickUpDay?.pictoBlock?.flowName}
          </p>
        </div>
      </div>
      <div className="c-PickUpDayItem__Information">
        <div className="c-PickUpDayItem__Calendar">
          <div className="c-PickUpDayItem__CalendarPictoContainer">
            <Image
              src={makePublicAssetPath("/images/pictos/calendar.svg")}
              alt={alt.calendarIcon}
              width="16"
              height="16"
            />
          </div>
          <div className="c-PickUpDayItem__Description">
            {pickUpDay?.informationBlock?.periodicityDescription && (
              <p className="c-PickUpDayItem__DescriptionText">
                {pickUpDay.informationBlock.periodicityDescription}
              </p>
            )}
            {pickUpDay?.informationBlock?.hasIncludeHolidayDescription && (
              <p className="c-PickUpDayItem__DescriptionText">
                {labels.includeHolidayDescription}
              </p>
            )}
            {pickUpDay?.informationBlock?.pickUpHoursDescription && (
              <p className="c-PickUpDayItem__DescriptionText">
                {pickUpDay.informationBlock.pickUpHoursDescription}
              </p>
            )}
          </div>
        </div>
        {pickUpDay?.informationBlock?.informationMessage?.isRelevant && (
          <div className="c-PickUpDayItem__InformationMessageContainer">
            <Image
              src={makePublicAssetPath("/images/pictos/info.svg")}
              alt={alt.informationIcon}
              width="36"
              height="36"
            />
            <p className="c-PickUpDayItem__InformationMessage">
              {pickUpDay.informationBlock.informationMessage.message}
            </p>
          </div>
        )}
      </div>
      <div className="c-PickUpDayItem__VerticalLine"></div>
      <div className="c-PickUpDayItem__AcceptedWasteContainer">
        <div className="c-PickUpDayItem__Buttons">
          {pickUpDay?.acceptedWasteBlock?.displayCustomButton &&
            pickUpDay?.acceptedWasteBlock?.customButtonLabel &&
            customButtonLink && (
              <Link href={customButtonLink}>
                <CommonButton
                  label={pickUpDay.acceptedWasteBlock.customButtonLabel}
                  type="button"
                  style="secondary"
                  fontStyle="fontLarge"
                  paddingStyle="paddingSmall"
                />
              </Link>
            )}
          {pickUpDay?.acceptedWasteBlock?.displayFindRecyclingCenterButton && (
            <Link
              href={{
                pathname: dropOffMapRoute,
                query: { pav: pickUpDay.acceptedWasteBlock.pavName },
              }}
            >
              <CommonButton
                label={labels.findRecyclingCenterButtonLabel}
                type="button"
                style="secondary"
                fontStyle="fontLarge"
                paddingStyle="paddingSmall"
              />
            </Link>
          )}
        </div>
        <div className="c-PickUpDayItem__AcceptedWaste">
          <p>{labels.acceptedWasteTitle}</p>
          <div
            className="c-PickUpDayItem__QuestionMarkPicto"
            onClick={() =>
              onDisplayAcceptedWaste(
                pickUpDay?.acceptedWasteBlock?.acceptedWasteList,
              )
            }
          ></div>
        </div>
      </div>
    </li>
  );
}
