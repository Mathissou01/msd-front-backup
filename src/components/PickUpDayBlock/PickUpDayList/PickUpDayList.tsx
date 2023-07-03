import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Enum_Pickupday_Periodicity,
  Maybe,
  PickUpDayEntity,
  WasteFormEntity,
} from "../../../graphql/codegen/generated-types";
import { useContract } from "../../../hooks/useContract";
import {
  EMonthlyStatus,
  IHebdomadireAdvancedSelection,
  IMensuelAdvancedSelection,
  areConsecutiveDays,
  informationMessageIsRelevant,
} from "./../../../lib/pickup-days";
import { makeLighterColor, makePublicAssetPath } from "../../../lib/utilities";
import CommonModal from "../../Common/CommonModal/CommonModal";
import CommonButton from "../../Common/CommonButton/CommonButton";
import CommonSpinner from "../../Common/CommonSpinner/CommonSpinner";
import "./pick-up-day-list.scss";

interface PickUpDayListProps {
  pickUpDays: PickUpDayEntity[];
  isLoading: boolean;
}

export default function PickUpDayList({
  pickUpDays,
  isLoading,
}: PickUpDayListProps) {
  /* Static Data */
  const dropOffMapRoute = "/service/carte";
  const fullWeekDescription = "Tous les jours de la semaine";
  const includeHolidayDescription = "(Y compris les jours fériés)";
  const acceptedWasteTitle = "Déchets acceptés";
  const noResults = "Aucun résultat";
  const findRecyclingCenterLabel = "Trouver une décheterie";

  /* Local Data */
  const { contract } = useContract();
  const dropOffMapIsActivated =
    contract?.attributes?.dropOffMapService?.data?.attributes?.isActivated;
  const [displayedAcceptedWaste, setDisplayedAcceptedWaste] = useState<
    Array<WasteFormEntity> | undefined
  >(undefined);

  /* Methods */

  const displayAcceptedWaste = (
    currentAcceptedWaste: Array<WasteFormEntity> | undefined,
  ) => {
    setDisplayedAcceptedWaste(currentAcceptedWaste);
  };

  const hideAcceptedWaste = () => {
    setDisplayedAcceptedWaste(undefined);
  };

  const getMonthlyText = (advancedSelection: IMensuelAdvancedSelection) => {
    const monthlySelection = advancedSelection.mensuel;
    const weekday = Array.isArray(monthlySelection.selection)
      ? monthlySelection.selection[0]
      : "";
    switch (monthlySelection?.choice) {
      case EMonthlyStatus.MONTHLY_FIRST:
        return "Le premier " + weekday + " du mois";
      case EMonthlyStatus.MONTHLY_LAST:
        return "Le dernier " + weekday + " du mois";
      case EMonthlyStatus.MONTHLY_DATE:
        return "Tous les " + monthlySelection?.selection + " du mois";
    }
  };

  const getWeeklyText = (advancedSelection: IHebdomadireAdvancedSelection) => {
    const weeklySelection = advancedSelection?.hebdomadaire;
    const selectionLength: number = weeklySelection?.selection?.length;
    if (selectionLength === 1) {
      return weeklySelection?.selection[0];
    } else if (selectionLength === 7) {
      return fullWeekDescription;
    } else if (
      selectionLength >= 2 &&
      areConsecutiveDays(weeklySelection?.selection)
    ) {
      const firstDay = weeklySelection?.selection[0];
      const lastDay = weeklySelection?.selection[selectionLength - 1];
      return "Du " + firstDay + " au " + lastDay;
    } else if (selectionLength !== 0) {
      return (
        weeklySelection?.selection?.slice(0, -1).join(", ") +
        " et " +
        weeklySelection?.selection?.slice(-1)
      );
    }
  };

  const getPeriodicityJSX = (
    advancedSelection:
      | IHebdomadireAdvancedSelection
      | IMensuelAdvancedSelection,
    periodicity: Maybe<Enum_Pickupday_Periodicity> | undefined,
  ) => {
    if (periodicity === Enum_Pickupday_Periodicity.Hebdomadaire) {
      return (
        <p className="c-PickUpDayItem__DescriptionText">
          {getWeeklyText(advancedSelection as IHebdomadireAdvancedSelection)}
        </p>
      );
    } else if (periodicity === Enum_Pickupday_Periodicity.Mensuel) {
      return (
        <p className="c-PickUpDayItem__DescriptionText">
          {getMonthlyText(advancedSelection as IMensuelAdvancedSelection)}
        </p>
      );
    }
  };

  const pickUpDaysMapped = pickUpDays.map((data, index) => {
    const pictoUrl =
      data?.attributes?.collectDoorToDoor?.data?.attributes?.picto?.data
        ?.attributes?.url ??
      data?.attributes?.collectVoluntary?.data?.attributes?.picto?.data
        ?.attributes?.url;
    const pictoAlternativeText =
      data?.attributes?.collectDoorToDoor?.data?.attributes?.picto?.data
        ?.attributes?.alternativeText ??
      data?.attributes?.collectVoluntary?.data?.attributes?.picto?.data
        ?.attributes?.alternativeText;

    const pavName =
      data?.attributes?.collectDoorToDoor?.data?.attributes?.name ??
      data?.attributes?.collectVoluntary?.data?.attributes?.name;
    const periodicityJSX = getPeriodicityJSX(
      data?.attributes?.advancedSelection,
      data?.attributes?.periodicity,
    );
    const currentAcceptedWaste =
      data.attributes?.flow?.data?.attributes?.wasteForms?.data;
    const currentInformationMessage = data?.attributes?.informationMessage;
    const displayFindRecyclingCenterButton =
      !!data.attributes?.collectVoluntary?.data?.attributes &&
      dropOffMapIsActivated;

    const customButtonLabel = data?.attributes?.buttonLabel;
    const externalLink = data?.attributes?.externalLink;
    const requestFormId = data?.attributes?.request?.data?.id;
    const displayCustomButton =
      customButtonLabel && (externalLink || requestFormId);
    const requestLink = `/services/demandes/${requestFormId}`;
    const color =
      data?.attributes?.flow?.data?.attributes?.color?.data?.attributes
        ?.hexaCode;
    return (
      <li key={index} className="c-PickUpDayItem">
        <div
          className="c-PickUpDayItem__FlowContainer"
          style={
            color ? { backgroundColor: makeLighterColor(color) } : undefined
          }
        >
          <div
            className="c-PickUpDayItem__FlowPictoContainer"
            style={{
              backgroundColor:
                data?.attributes?.flow?.data?.attributes?.color?.data
                  ?.attributes?.hexaCode,
            }}
          >
            {pictoUrl && (
              <Image
                src={makePublicAssetPath(pictoUrl)}
                alt={pictoAlternativeText ?? ""}
                width="32"
                height="32"
              />
            )}
          </div>

          <div className="c-PickUpDayItem__FlowInformation">
            <h3 className="c-PickUpDayItem__PickUpDayName">
              {data?.attributes?.name}
            </h3>
            <p className="c-PickUpDayItem__FlowName">
              {data?.attributes?.flow?.data?.attributes?.name}
            </p>
          </div>
        </div>
        <div className="c-PickUpDayItem__Information">
          <div className="c-PickUpDayItem__Calendar">
            <div className="c-PickUpDayItem__CalendarPictoContainer">
              <Image
                src={makePublicAssetPath("/images/pictos/calendar.svg")}
                alt={"information icon"}
                width="16"
                height="16"
              />
            </div>
            <div className="c-PickUpDayItem__Description">
              {periodicityJSX}
              {data?.attributes?.includeHoliday && (
                <p className="c-PickUpDayItem__DescriptionText">
                  {includeHolidayDescription}
                </p>
              )}
              {data?.attributes?.pickUpHours && (
                <p className="c-PickUpDayItem__DescriptionText">
                  À partir de {data.attributes.pickUpHours}
                </p>
              )}
            </div>
          </div>
          {!!currentInformationMessage?.data?.attributes &&
            informationMessageIsRelevant(
              currentInformationMessage?.data?.attributes,
            ) && (
              <div className="c-PickUpDayItem__InformationMessageContainer">
                <Image
                  src={makePublicAssetPath("/images/pictos/info.svg")}
                  alt={"information icon"}
                  width="36"
                  height="36"
                />
                <p className="c-PickUpDayItem__InformationMessage">
                  {currentInformationMessage?.data?.attributes?.infoMessage}
                </p>
              </div>
            )}
        </div>
        <div className="c-PickUpDayItem__VerticalLine"></div>
        <div className="c-PickUpDayItem__AcceptedWasteContainer">
          <div className="c-PickUpDayItem__Buttons">
            {displayCustomButton && (
              <Link href={externalLink ?? requestLink}>
                <CommonButton
                  label={customButtonLabel}
                  type="button"
                  style="secondary"
                  fontStyle="fontLarge"
                  paddingStyle="paddingSmall"
                />
              </Link>
            )}
            {displayFindRecyclingCenterButton && pavName && (
              <Link
                href={{
                  pathname: dropOffMapRoute,
                  query: { pav: pavName },
                }}
              >
                <CommonButton
                  label={findRecyclingCenterLabel}
                  type="button"
                  style="secondary"
                  fontStyle="fontLarge"
                  paddingStyle="paddingSmall"
                />
              </Link>
            )}
          </div>
          <div className="c-PickUpDayItem__AcceptedWaste">
            <p>{acceptedWasteTitle}</p>
            <div
              className="c-PickUpDayItem__QuestionMarkPicto"
              onClick={() => displayAcceptedWaste(currentAcceptedWaste)}
            ></div>
          </div>
        </div>
      </li>
    );
  });

  const acceptedWasteContent = (
    <>
      {displayedAcceptedWaste && (
        <ul>
          {Array.isArray(displayedAcceptedWaste) &&
            displayedAcceptedWaste.map((data, index) => (
              <li key={index}>{data?.attributes?.name}</li>
            ))}
        </ul>
      )}
      {!displayedAcceptedWaste && <p>{noResults}</p>}
    </>
  );

  return (
    <>
      <ul className="c-PickUpDayList">{pickUpDays && pickUpDaysMapped}</ul>
      {displayedAcceptedWaste && (
        <CommonModal
          handleClose={hideAcceptedWaste}
          headerTitle={`${acceptedWasteTitle} : `}
          content={acceptedWasteContent}
        ></CommonModal>
      )}
      {isLoading && <CommonSpinner />}
    </>
  );
}
