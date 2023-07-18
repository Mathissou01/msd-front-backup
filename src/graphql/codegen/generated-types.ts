/* eslint-disable */
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccessibilityBlocksDynamicZoneInput: any;
  CguBlocksDynamicZoneInput: any;
  ConfidentialityBlocksDynamicZoneInput: any;
  ContactUsBlocksDynamicZoneInput: any;
  ContractMenuServiceLinksDynamicZoneInput: any;
  CookieBlocksDynamicZoneInput: any;
  Date: any;
  DateTime: any;
  DropOffMapOpeningHoursBlocksDynamicZoneInput: any;
  EditoBlockEditoContentsDynamicZoneInput: any;
  EventBlocksDynamicZoneInput: any;
  EventLinkToServicesDynamicZoneInput: any;
  FreeContentBlocksDynamicZoneInput: any;
  FreeContentLinkToServicesDynamicZoneInput: any;
  JSON: any;
  Long: any;
  MwcFlowBlocksDynamicZoneInput: any;
  NewBlocksDynamicZoneInput: any;
  NewLinkToServicesDynamicZoneInput: any;
  RequestAddableBlocksDynamicZoneInput: any;
  ServicesBlockServiceLinksDynamicZoneInput: any;
  Time: any;
  TipBlocksDynamicZoneInput: any;
  TipLinkToServicesDynamicZoneInput: any;
  TopContentBlockTopContentDynamicZoneInput: any;
  Upload: any;
  WasteFormContentBlockDynamicZoneInput: any;
};

export type Accessibility = {
  __typename?: "Accessibility";
  blocks?: Maybe<Array<Maybe<AccessibilityBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Accessibility_Status>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type AccessibilityBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksSubHeading
  | ComponentBlocksWysiwyg
  | Error;

export type AccessibilityEntity = {
  __typename?: "AccessibilityEntity";
  attributes?: Maybe<Accessibility>;
  id?: Maybe<Scalars["ID"]>;
};

export type AccessibilityEntityResponse = {
  __typename?: "AccessibilityEntityResponse";
  data?: Maybe<AccessibilityEntity>;
};

export type AccessibilityEntityResponseCollection = {
  __typename?: "AccessibilityEntityResponseCollection";
  data: Array<AccessibilityEntity>;
  meta: ResponseCollectionMeta;
};

export type AccessibilityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AccessibilityFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AccessibilityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AccessibilityFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type AccessibilityInput = {
  blocks?: InputMaybe<Array<Scalars["AccessibilityBlocksDynamicZoneInput"]>>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Accessibility_Status>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type AccessibilityRelationResponseCollection = {
  __typename?: "AccessibilityRelationResponseCollection";
  data: Array<AccessibilityEntity>;
};

export type AccessibilitySubService = {
  __typename?: "AccessibilitySubService";
  accessibilities?: Maybe<AccessibilityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AccessibilitySubServiceAccessibilitiesArgs = {
  filters?: InputMaybe<AccessibilityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AccessibilitySubServiceEntity = {
  __typename?: "AccessibilitySubServiceEntity";
  attributes?: Maybe<AccessibilitySubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type AccessibilitySubServiceEntityResponse = {
  __typename?: "AccessibilitySubServiceEntityResponse";
  data?: Maybe<AccessibilitySubServiceEntity>;
};

export type AccessibilitySubServiceEntityResponseCollection = {
  __typename?: "AccessibilitySubServiceEntityResponseCollection";
  data: Array<AccessibilitySubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type AccessibilitySubServiceFiltersInput = {
  accessibilities?: InputMaybe<AccessibilityFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<AccessibilitySubServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AccessibilitySubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AccessibilitySubServiceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AccessibilitySubServiceInput = {
  accessibilities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Activation = {
  __typename?: "Activation";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  typeActivation?: Maybe<Scalars["String"]>;
};

export type ActivationAndService = Activation | Service;

export type Address = {
  __typename?: "Address";
  city?: Maybe<Scalars["String"]>;
  citycode?: Maybe<Scalars["String"]>;
  context?: Maybe<Scalars["String"]>;
  district?: Maybe<Scalars["String"]>;
  houseNumber?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  importance?: Maybe<Scalars["Float"]>;
  label?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  postcode?: Maybe<Scalars["String"]>;
  score?: Maybe<Scalars["Float"]>;
  street?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["Float"]>;
  y?: Maybe<Scalars["Float"]>;
};

export type AlertNotification = {
  __typename?: "AlertNotification";
  alertDescription: Scalars["String"];
  alertMessage?: Maybe<Scalars["String"]>;
  alertNotifService?: Maybe<AlertNotificationServiceEntityResponse>;
  alertTitle?: Maybe<Scalars["String"]>;
  cities?: Maybe<CityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  scheduledAt: Scalars["Date"];
  scheduledAtTime: Scalars["String"];
  sectorizations?: Maybe<SectorizationRelationResponseCollection>;
  sendMail?: Maybe<Scalars["Boolean"]>;
  sendSMS?: Maybe<Scalars["Boolean"]>;
  subject?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AlertNotificationCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AlertNotificationSectorizationsArgs = {
  filters?: InputMaybe<SectorizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AlertNotificationEntity = {
  __typename?: "AlertNotificationEntity";
  attributes?: Maybe<AlertNotification>;
  id?: Maybe<Scalars["ID"]>;
};

export type AlertNotificationEntityResponse = {
  __typename?: "AlertNotificationEntityResponse";
  data?: Maybe<AlertNotificationEntity>;
};

export type AlertNotificationEntityResponseCollection = {
  __typename?: "AlertNotificationEntityResponseCollection";
  data: Array<AlertNotificationEntity>;
  meta: ResponseCollectionMeta;
};

export type AlertNotificationFiltersInput = {
  alertDescription?: InputMaybe<StringFilterInput>;
  alertMessage?: InputMaybe<StringFilterInput>;
  alertNotifService?: InputMaybe<AlertNotificationServiceFiltersInput>;
  alertTitle?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AlertNotificationFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AlertNotificationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AlertNotificationFiltersInput>>>;
  scheduledAt?: InputMaybe<DateFilterInput>;
  scheduledAtTime?: InputMaybe<StringFilterInput>;
  sectorizations?: InputMaybe<SectorizationFiltersInput>;
  sendMail?: InputMaybe<BooleanFilterInput>;
  sendSMS?: InputMaybe<BooleanFilterInput>;
  subject?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AlertNotificationInput = {
  alertDescription?: InputMaybe<Scalars["String"]>;
  alertMessage?: InputMaybe<Scalars["String"]>;
  alertNotifService?: InputMaybe<Scalars["ID"]>;
  alertTitle?: InputMaybe<Scalars["String"]>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  scheduledAt?: InputMaybe<Scalars["Date"]>;
  scheduledAtTime?: InputMaybe<Scalars["String"]>;
  sectorizations?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sendMail?: InputMaybe<Scalars["Boolean"]>;
  sendSMS?: InputMaybe<Scalars["Boolean"]>;
  subject?: InputMaybe<Scalars["String"]>;
};

export type AlertNotificationRelationResponseCollection = {
  __typename?: "AlertNotificationRelationResponseCollection";
  data: Array<AlertNotificationEntity>;
};

export type AlertNotificationService = {
  __typename?: "AlertNotificationService";
  alertNotifications?: Maybe<AlertNotificationRelationResponseCollection>;
  audiences?: Maybe<AudienceRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AlertNotificationServiceAlertNotificationsArgs = {
  filters?: InputMaybe<AlertNotificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AlertNotificationServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AlertNotificationServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AlertNotificationServiceEntity = {
  __typename?: "AlertNotificationServiceEntity";
  attributes?: Maybe<AlertNotificationService>;
  id?: Maybe<Scalars["ID"]>;
};

export type AlertNotificationServiceEntityResponse = {
  __typename?: "AlertNotificationServiceEntityResponse";
  data?: Maybe<AlertNotificationServiceEntity>;
};

export type AlertNotificationServiceEntityResponseCollection = {
  __typename?: "AlertNotificationServiceEntityResponseCollection";
  data: Array<AlertNotificationServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type AlertNotificationServiceFiltersInput = {
  alertNotifications?: InputMaybe<AlertNotificationFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<AlertNotificationServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AlertNotificationServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AlertNotificationServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AlertNotificationServiceInput = {
  alertNotifications?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type Appointment = {
  __typename?: "Appointment";
  sectorNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
  timeSlotsWithUsers?: Maybe<Array<Maybe<TimeSlotWithUser>>>;
};

export type AppointmentDetails = {
  __typename?: "AppointmentDetails";
  appointments?: Maybe<Array<Maybe<Appointment>>>;
  title?: Maybe<Scalars["String"]>;
};

export type Audience = {
  __typename?: "Audience";
  createdAt?: Maybe<Scalars["DateTime"]>;
  isActive: Scalars["Boolean"];
  type: Enum_Audience_Type;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AudienceEntity = {
  __typename?: "AudienceEntity";
  attributes?: Maybe<Audience>;
  id?: Maybe<Scalars["ID"]>;
};

export type AudienceEntityResponse = {
  __typename?: "AudienceEntityResponse";
  data?: Maybe<AudienceEntity>;
};

export type AudienceEntityResponseCollection = {
  __typename?: "AudienceEntityResponseCollection";
  data: Array<AudienceEntity>;
  meta: ResponseCollectionMeta;
};

export type AudienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AudienceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActive?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<AudienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AudienceFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AudienceInput = {
  isActive?: InputMaybe<Scalars["Boolean"]>;
  type?: InputMaybe<Enum_Audience_Type>;
};

export type AudienceRelationResponseCollection = {
  __typename?: "AudienceRelationResponseCollection";
  data: Array<AudienceEntity>;
};

export type AvailableSlot = {
  __typename?: "AvailableSlot";
  day?: Maybe<Scalars["String"]>;
  exceptionId?: Maybe<Scalars["ID"]>;
  openingTime?: Maybe<Scalars["String"]>;
  slotId: Scalars["ID"];
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]>;
  containsi?: InputMaybe<Scalars["Boolean"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]>;
  eq?: InputMaybe<Scalars["Boolean"]>;
  eqi?: InputMaybe<Scalars["Boolean"]>;
  gt?: InputMaybe<Scalars["Boolean"]>;
  gte?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]>;
  lte?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]>;
};

export type Cgu = {
  __typename?: "Cgu";
  blocks?: Maybe<Array<Maybe<CguBlocksDynamicZone>>>;
  cguSubService?: Maybe<CguSubServiceEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Cgu_Status>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type CguBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksSubHeading
  | ComponentBlocksWysiwyg
  | Error;

export type CguEntity = {
  __typename?: "CguEntity";
  attributes?: Maybe<Cgu>;
  id?: Maybe<Scalars["ID"]>;
};

export type CguEntityResponse = {
  __typename?: "CguEntityResponse";
  data?: Maybe<CguEntity>;
};

export type CguEntityResponseCollection = {
  __typename?: "CguEntityResponseCollection";
  data: Array<CguEntity>;
  meta: ResponseCollectionMeta;
};

export type CguFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CguFiltersInput>>>;
  cguSubService?: InputMaybe<CguSubServiceFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CguFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CguFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type CguInput = {
  blocks?: InputMaybe<Array<Scalars["CguBlocksDynamicZoneInput"]>>;
  cguSubService?: InputMaybe<Scalars["ID"]>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Cgu_Status>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type CguRelationResponseCollection = {
  __typename?: "CguRelationResponseCollection";
  data: Array<CguEntity>;
};

export type CguSubService = {
  __typename?: "CguSubService";
  cgus?: Maybe<CguRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CguSubServiceCgusArgs = {
  filters?: InputMaybe<CguFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CguSubServiceEntity = {
  __typename?: "CguSubServiceEntity";
  attributes?: Maybe<CguSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type CguSubServiceEntityResponse = {
  __typename?: "CguSubServiceEntityResponse";
  data?: Maybe<CguSubServiceEntity>;
};

export type CguSubServiceEntityResponseCollection = {
  __typename?: "CguSubServiceEntityResponseCollection";
  data: Array<CguSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type CguSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CguSubServiceFiltersInput>>>;
  cgus?: InputMaybe<CguFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CguSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CguSubServiceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CguSubServiceInput = {
  cgus?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ChannelType = {
  __typename?: "ChannelType";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  hasWebApp?: Maybe<Scalars["Boolean"]>;
  hasWebSite?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ChannelTypeEntity = {
  __typename?: "ChannelTypeEntity";
  attributes?: Maybe<ChannelType>;
  id?: Maybe<Scalars["ID"]>;
};

export type ChannelTypeEntityResponse = {
  __typename?: "ChannelTypeEntityResponse";
  data?: Maybe<ChannelTypeEntity>;
};

export type ChannelTypeEntityResponseCollection = {
  __typename?: "ChannelTypeEntityResponseCollection";
  data: Array<ChannelTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type ChannelTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ChannelTypeFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hasWebApp?: InputMaybe<BooleanFilterInput>;
  hasWebSite?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ChannelTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChannelTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChannelTypeInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  hasWebApp?: InputMaybe<Scalars["Boolean"]>;
  hasWebSite?: InputMaybe<Scalars["Boolean"]>;
};

export type ChannelTypeRelationResponseCollection = {
  __typename?: "ChannelTypeRelationResponseCollection";
  data: Array<ChannelTypeEntity>;
};

export type City = {
  __typename?: "City";
  MwCounter?: Maybe<MwCounterServiceEntityResponse>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  department?: Maybe<Scalars["String"]>;
  epci?: Maybe<EpciRelationResponseCollection>;
  insee?: Maybe<Scalars["Long"]>;
  name?: Maybe<Scalars["String"]>;
  pickUpDay?: Maybe<PickUpDayEntityResponse>;
  postalCode?: Maybe<Scalars["Long"]>;
  region?: Maybe<Scalars["String"]>;
  siren?: Maybe<Scalars["Long"]>;
  territories?: Maybe<TerritoryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CityEpciArgs = {
  filters?: InputMaybe<EpciFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CityTerritoriesArgs = {
  filters?: InputMaybe<TerritoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CityEntity = {
  __typename?: "CityEntity";
  attributes?: Maybe<City>;
  id?: Maybe<Scalars["ID"]>;
};

export type CityEntityResponse = {
  __typename?: "CityEntityResponse";
  data?: Maybe<CityEntity>;
};

export type CityEntityResponseCollection = {
  __typename?: "CityEntityResponseCollection";
  data: Array<CityEntity>;
  meta: ResponseCollectionMeta;
};

export type CityFiltersInput = {
  MwCounter?: InputMaybe<MwCounterServiceFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<StringFilterInput>;
  epci?: InputMaybe<EpciFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  insee?: InputMaybe<LongFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  pickUpDay?: InputMaybe<PickUpDayFiltersInput>;
  postalCode?: InputMaybe<LongFilterInput>;
  region?: InputMaybe<StringFilterInput>;
  siren?: InputMaybe<LongFilterInput>;
  territories?: InputMaybe<TerritoryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CityInput = {
  MwCounter?: InputMaybe<Scalars["ID"]>;
  contract?: InputMaybe<Scalars["ID"]>;
  department?: InputMaybe<Scalars["String"]>;
  epci?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  insee?: InputMaybe<Scalars["Long"]>;
  name?: InputMaybe<Scalars["String"]>;
  pickUpDay?: InputMaybe<Scalars["ID"]>;
  postalCode?: InputMaybe<Scalars["Long"]>;
  region?: InputMaybe<Scalars["String"]>;
  siren?: InputMaybe<Scalars["Long"]>;
  territories?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type CityRelationResponseCollection = {
  __typename?: "CityRelationResponseCollection";
  data: Array<CityEntity>;
};

export type CityResult = {
  __typename?: "CityResult";
  id: Scalars["ID"];
  insee?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  siren?: Maybe<Scalars["String"]>;
};

export type CitySectorization = {
  __typename?: "CitySectorization";
  GeoJson?: Maybe<Scalars["String"]>;
};

export type ClientContact = {
  __typename?: "ClientContact";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  phoneNumber: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ClientContactCreateOutput = {
  __typename?: "ClientContactCreateOutput";
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
};

export type ClientContactEntity = {
  __typename?: "ClientContactEntity";
  attributes?: Maybe<ClientContact>;
  id?: Maybe<Scalars["ID"]>;
};

export type ClientContactEntityResponse = {
  __typename?: "ClientContactEntityResponse";
  data?: Maybe<ClientContactEntity>;
};

export type ClientContactEntityResponseCollection = {
  __typename?: "ClientContactEntityResponseCollection";
  data: Array<ClientContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ClientContactFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientContactFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClientContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientContactFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientContactInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
};

export type CollectDoorToDoor = {
  __typename?: "CollectDoorToDoor";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  flows?: Maybe<FlowRelationResponseCollection>;
  grammaticalGender?: Maybe<Enum_Collectdoortodoor_Grammaticalgender>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CollectDoorToDoorFlowsArgs = {
  filters?: InputMaybe<FlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CollectDoorToDoorEntity = {
  __typename?: "CollectDoorToDoorEntity";
  attributes?: Maybe<CollectDoorToDoor>;
  id?: Maybe<Scalars["ID"]>;
};

export type CollectDoorToDoorEntityResponse = {
  __typename?: "CollectDoorToDoorEntityResponse";
  data?: Maybe<CollectDoorToDoorEntity>;
};

export type CollectDoorToDoorEntityResponseCollection = {
  __typename?: "CollectDoorToDoorEntityResponseCollection";
  data: Array<CollectDoorToDoorEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectDoorToDoorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectDoorToDoorFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  flows?: InputMaybe<FlowFiltersInput>;
  grammaticalGender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectDoorToDoorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectDoorToDoorFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectDoorToDoorInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  flows?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  grammaticalGender?: InputMaybe<Enum_Collectdoortodoor_Grammaticalgender>;
  name?: InputMaybe<Scalars["String"]>;
  picto?: InputMaybe<Scalars["ID"]>;
};

export type CollectDoorToDoorRelationResponseCollection = {
  __typename?: "CollectDoorToDoorRelationResponseCollection";
  data: Array<CollectDoorToDoorEntity>;
};

export type CollectDropOff = {
  __typename?: "CollectDropOff";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  flows?: Maybe<FlowRelationResponseCollection>;
  grammaticalGender?: Maybe<Enum_Collectdropoff_Grammaticalgender>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CollectDropOffFlowsArgs = {
  filters?: InputMaybe<FlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CollectDropOffEntity = {
  __typename?: "CollectDropOffEntity";
  attributes?: Maybe<CollectDropOff>;
  id?: Maybe<Scalars["ID"]>;
};

export type CollectDropOffEntityResponse = {
  __typename?: "CollectDropOffEntityResponse";
  data?: Maybe<CollectDropOffEntity>;
};

export type CollectDropOffEntityResponseCollection = {
  __typename?: "CollectDropOffEntityResponseCollection";
  data: Array<CollectDropOffEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectDropOffFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectDropOffFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  flows?: InputMaybe<FlowFiltersInput>;
  grammaticalGender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectDropOffFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectDropOffFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectDropOffInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  flows?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  grammaticalGender?: InputMaybe<Enum_Collectdropoff_Grammaticalgender>;
  name?: InputMaybe<Scalars["String"]>;
  picto?: InputMaybe<Scalars["ID"]>;
};

export type CollectDropOffRelationResponseCollection = {
  __typename?: "CollectDropOffRelationResponseCollection";
  data: Array<CollectDropOffEntity>;
};

export type CollectEntity = {
  __typename?: "CollectEntity";
  entityTypeName: Scalars["String"];
  grammaticalGender: Scalars["String"];
  name: Scalars["String"];
  originalId: Scalars["ID"];
  picto: PictoDto;
  uniqueId: Scalars["String"];
};

export type CollectVoluntary = {
  __typename?: "CollectVoluntary";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  flows?: Maybe<FlowRelationResponseCollection>;
  grammaticalGender?: Maybe<Enum_Collectvoluntary_Grammaticalgender>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CollectVoluntaryFlowsArgs = {
  filters?: InputMaybe<FlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CollectVoluntaryEntity = {
  __typename?: "CollectVoluntaryEntity";
  attributes?: Maybe<CollectVoluntary>;
  id?: Maybe<Scalars["ID"]>;
};

export type CollectVoluntaryEntityResponse = {
  __typename?: "CollectVoluntaryEntityResponse";
  data?: Maybe<CollectVoluntaryEntity>;
};

export type CollectVoluntaryEntityResponseCollection = {
  __typename?: "CollectVoluntaryEntityResponseCollection";
  data: Array<CollectVoluntaryEntity>;
  meta: ResponseCollectionMeta;
};

export type CollectVoluntaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CollectVoluntaryFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  flows?: InputMaybe<FlowFiltersInput>;
  grammaticalGender?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CollectVoluntaryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CollectVoluntaryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CollectVoluntaryInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  flows?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  grammaticalGender?: InputMaybe<Enum_Collectvoluntary_Grammaticalgender>;
  name?: InputMaybe<Scalars["String"]>;
  picto?: InputMaybe<Scalars["ID"]>;
};

export type CollectVoluntaryRelationResponseCollection = {
  __typename?: "CollectVoluntaryRelationResponseCollection";
  data: Array<CollectVoluntaryEntity>;
};

export type CommuneInput = {
  insee: Scalars["Int"];
};

export type ComponentBlocksAttachments = {
  __typename?: "ComponentBlocksAttachments";
  attachment?: Maybe<UploadFileRelationResponseCollection>;
  attachmentLabel: Scalars["String"];
  id: Scalars["ID"];
  multipleAttachments?: Maybe<Scalars["Boolean"]>;
  renderField: Scalars["Boolean"];
};

export type ComponentBlocksAttachmentsAttachmentArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentBlocksCheckbox = {
  __typename?: "ComponentBlocksCheckbox";
  fieldStatusCheckbox: Enum_Componentblockscheckbox_Fieldstatuscheckbox;
  id: Scalars["ID"];
  labelCheckbox: Scalars["String"];
};

export type ComponentBlocksCommentary = {
  __typename?: "ComponentBlocksCommentary";
  commentaryLabel: Scalars["String"];
  commentaryPlaceholder?: Maybe<Scalars["String"]>;
  commentaryStatus: Enum_Componentblockscommentary_Commentarystatus;
  id: Scalars["ID"];
};

export type ComponentBlocksCumbersome = {
  __typename?: "ComponentBlocksCumbersome";
  cumbersomeLabel: Scalars["String"];
  cumbersomeLimitMessage: Scalars["String"];
  id: Scalars["ID"];
  isNumberAndVolume: Scalars["Boolean"];
  maxNumberOfCumbersome?: Maybe<Scalars["Int"]>;
  maxVolumeOfCumbersome?: Maybe<Scalars["Float"]>;
};

export type ComponentBlocksDateChoice = {
  __typename?: "ComponentBlocksDateChoice";
  fieldLabelDateChoice: Scalars["String"];
  fieldStatus: Enum_Componentblocksdatechoice_Fieldstatus;
  id: Scalars["ID"];
};

export type ComponentBlocksDownloadBlock = {
  __typename?: "ComponentBlocksDownloadBlock";
  file: UploadFileEntityResponse;
  id: Scalars["ID"];
  linkText: Scalars["String"];
};

export type ComponentBlocksDownloadBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksDownloadBlockFiltersInput>>>;
  linkText?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksDownloadBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksDownloadBlockFiltersInput>>>;
};

export type ComponentBlocksDownloadBlockInput = {
  file?: InputMaybe<Scalars["ID"]>;
  id?: InputMaybe<Scalars["ID"]>;
  linkText?: InputMaybe<Scalars["String"]>;
};

export type ComponentBlocksFile = {
  __typename?: "ComponentBlocksFile";
  document?: Maybe<UploadFileEntityResponse>;
  id: Scalars["ID"];
};

export type ComponentBlocksHorizontalRule = {
  __typename?: "ComponentBlocksHorizontalRule";
  hr?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
};

export type ComponentBlocksImage = {
  __typename?: "ComponentBlocksImage";
  altText?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isDecorative?: Maybe<Scalars["Boolean"]>;
  picture?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBlocksOpeningDay = {
  __typename?: "ComponentBlocksOpeningDay";
  afterNoonEnd?: Maybe<Scalars["Time"]>;
  afterNoonStart?: Maybe<Scalars["Time"]>;
  id: Scalars["ID"];
  morningEnd?: Maybe<Scalars["Time"]>;
  morningStart?: Maybe<Scalars["Time"]>;
  weekDay: Enum_Componentblocksopeningday_Weekday;
};

export type ComponentBlocksQcm = {
  __typename?: "ComponentBlocksQcm";
  fieldLabelQCM: Scalars["String"];
  fieldStatusQCM: Enum_Componentblocksqcm_Fieldstatusqcm;
  id: Scalars["ID"];
  multipleChoice: Scalars["Boolean"];
  responses: Scalars["String"];
};

export type ComponentBlocksQuestions = {
  __typename?: "ComponentBlocksQuestions";
  height: Scalars["Boolean"];
  id: Scalars["ID"];
  questionTextLabel: Scalars["String"];
  questionTextPlaceholder: Scalars["String"];
  textStatus: Enum_Componentblocksquestions_Textstatus;
};

export type ComponentBlocksRequestSlotsExceptions = {
  __typename?: "ComponentBlocksRequestSlotsExceptions";
  exceptionType?: Maybe<Enum_Componentblocksrequestslotsexceptions_Exceptiontype>;
  id: Scalars["ID"];
  slotException?: Maybe<Scalars["JSON"]>;
};

export type ComponentBlocksRequestSlotsExceptionsFiltersInput = {
  and?: InputMaybe<
    Array<InputMaybe<ComponentBlocksRequestSlotsExceptionsFiltersInput>>
  >;
  exceptionType?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentBlocksRequestSlotsExceptionsFiltersInput>;
  or?: InputMaybe<
    Array<InputMaybe<ComponentBlocksRequestSlotsExceptionsFiltersInput>>
  >;
  slotException?: InputMaybe<JsonFilterInput>;
};

export type ComponentBlocksRequestSlotsExceptionsInput = {
  exceptionType?: InputMaybe<Enum_Componentblocksrequestslotsexceptions_Exceptiontype>;
  id?: InputMaybe<Scalars["ID"]>;
  slotException?: InputMaybe<Scalars["JSON"]>;
};

export type ComponentBlocksRequestType = {
  __typename?: "ComponentBlocksRequestType";
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isEmail?: Maybe<Scalars["Boolean"]>;
  isTSMS?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
};

export type ComponentBlocksRequestTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentBlocksRequestTypeFiltersInput>>>;
  email?: InputMaybe<StringFilterInput>;
  isEmail?: InputMaybe<BooleanFilterInput>;
  isTSMS?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentBlocksRequestTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentBlocksRequestTypeFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentBlocksRequestTypeInput = {
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  isEmail?: InputMaybe<Scalars["Boolean"]>;
  isTSMS?: InputMaybe<Scalars["Boolean"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type ComponentBlocksSubHeading = {
  __typename?: "ComponentBlocksSubHeading";
  id: Scalars["ID"];
  subHeadingTag?: Maybe<Enum_Componentblockssubheading_Subheadingtag>;
  subHeadingText?: Maybe<Scalars["String"]>;
};

export type ComponentBlocksTest = {
  __typename?: "ComponentBlocksTest";
  id: Scalars["ID"];
};

export type ComponentBlocksVideo = {
  __typename?: "ComponentBlocksVideo";
  id: Scalars["ID"];
  transcriptText?: Maybe<Scalars["String"]>;
  videoLink?: Maybe<Scalars["String"]>;
};

export type ComponentBlocksWysiwyg = {
  __typename?: "ComponentBlocksWysiwyg";
  id: Scalars["ID"];
  textEditor?: Maybe<Scalars["String"]>;
};

export type ComponentLinksAlertNotification = {
  __typename?: "ComponentLinksAlertNotification";
  alertNotif?: Maybe<AlertNotificationServiceEntityResponse>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksContactUs = {
  __typename?: "ComponentLinksContactUs";
  contactUs?: Maybe<ContactUsSubServiceRelationResponseCollection>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksContactUsContactUsArgs = {
  filters?: InputMaybe<ContactUsSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksDropOffMap = {
  __typename?: "ComponentLinksDropOffMap";
  dropMap?: Maybe<DropOffMapServiceRelationResponseCollection>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  pointToDisplayOnTheMap?: Maybe<Enum_Componentlinksdropoffmap_Pointtodisplayonthemap>;
};

export type ComponentLinksDropOffMapDropMapArgs = {
  filters?: InputMaybe<DropOffMapServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksEditoContent = {
  __typename?: "ComponentLinksEditoContent";
  event?: Maybe<EventEntityResponse>;
  freeContent?: Maybe<FreeContentEntityResponse>;
  id: Scalars["ID"];
  new?: Maybe<NewEntityResponse>;
  quiz?: Maybe<QuizEntityResponse>;
  tip?: Maybe<TipEntityResponse>;
};

export type ComponentLinksEditorial = {
  __typename?: "ComponentLinksEditorial";
  event_sub_service?: Maybe<EventSubServiceEntityResponse>;
  id: Scalars["ID"];
  isDisplayed?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksEvents = {
  __typename?: "ComponentLinksEvents";
  events?: Maybe<EventSubServiceRelationResponseCollection>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksEventsEventsArgs = {
  filters?: InputMaybe<EventSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksExternal = {
  __typename?: "ComponentLinksExternal";
  externalLink?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksFrees = {
  __typename?: "ComponentLinksFrees";
  freeContents?: Maybe<FreeContentSubServiceRelationResponseCollection>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksFreesFreeContentsArgs = {
  filters?: InputMaybe<FreeContentSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksKeyMetrics = {
  __typename?: "ComponentLinksKeyMetrics";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  keyMetrics?: Maybe<KeyMetricsServiceRelationResponseCollection>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksKeyMetricsKeyMetricsArgs = {
  filters?: InputMaybe<KeyMetricsServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksMyWasteCounter = {
  __typename?: "ComponentLinksMyWasteCounter";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  myWCounter?: Maybe<MwCounterServiceRelationResponseCollection>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksMyWasteCounterMyWCounterArgs = {
  filters?: InputMaybe<MwCounterServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksNews = {
  __typename?: "ComponentLinksNews";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  news?: Maybe<NewsSubServiceRelationResponseCollection>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksNewsNewsArgs = {
  filters?: InputMaybe<NewsSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksPickUpDay = {
  __typename?: "ComponentLinksPickUpDay";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  pickDays?: Maybe<PickUpDayServiceRelationResponseCollection>;
  picto?: Maybe<UploadFileEntityResponse>;
};

export type ComponentLinksPickUpDayPickDaysArgs = {
  filters?: InputMaybe<PickUpDayServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksQuizzes = {
  __typename?: "ComponentLinksQuizzes";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  quizzes?: Maybe<QuizSubServiceRelationResponseCollection>;
};

export type ComponentLinksQuizzesQuizzesArgs = {
  filters?: InputMaybe<QuizSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksRecyclingGuide = {
  __typename?: "ComponentLinksRecyclingGuide";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  recyclings?: Maybe<RecyclingGuideServiceRelationResponseCollection>;
};

export type ComponentLinksRecyclingGuideRecyclingsArgs = {
  filters?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksRequest = {
  __typename?: "ComponentLinksRequest";
  demand?: Maybe<Enum_Componentlinksrequest_Demand>;
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  requests?: Maybe<RequestServiceRelationResponseCollection>;
};

export type ComponentLinksRequestRequestsArgs = {
  filters?: InputMaybe<RequestServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksTips = {
  __typename?: "ComponentLinksTips";
  id: Scalars["ID"];
  isDisplayed: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  tips?: Maybe<TipSubServiceRelationResponseCollection>;
};

export type ComponentLinksTipsTipsArgs = {
  filters?: InputMaybe<TipSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ComponentLinksTopContent = {
  __typename?: "ComponentLinksTopContent";
  event?: Maybe<EventEntityResponse>;
  id: Scalars["ID"];
  new?: Maybe<NewEntityResponse>;
};

export type Confidentiality = {
  __typename?: "Confidentiality";
  blocks?: Maybe<Array<Maybe<ConfidentialityBlocksDynamicZone>>>;
  confidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Confidentiality_Status>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type ConfidentialityBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksSubHeading
  | ComponentBlocksWysiwyg
  | Error;

export type ConfidentialityEntity = {
  __typename?: "ConfidentialityEntity";
  attributes?: Maybe<Confidentiality>;
  id?: Maybe<Scalars["ID"]>;
};

export type ConfidentialityEntityResponse = {
  __typename?: "ConfidentialityEntityResponse";
  data?: Maybe<ConfidentialityEntity>;
};

export type ConfidentialityEntityResponseCollection = {
  __typename?: "ConfidentialityEntityResponseCollection";
  data: Array<ConfidentialityEntity>;
  meta: ResponseCollectionMeta;
};

export type ConfidentialityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConfidentialityFiltersInput>>>;
  confidentialitySubService?: InputMaybe<ConfidentialitySubServiceFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ConfidentialityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConfidentialityFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type ConfidentialityInput = {
  blocks?: InputMaybe<Array<Scalars["ConfidentialityBlocksDynamicZoneInput"]>>;
  confidentialitySubService?: InputMaybe<Scalars["ID"]>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Confidentiality_Status>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type ConfidentialityRelationResponseCollection = {
  __typename?: "ConfidentialityRelationResponseCollection";
  data: Array<ConfidentialityEntity>;
};

export type ConfidentialitySubService = {
  __typename?: "ConfidentialitySubService";
  confidentialities?: Maybe<ConfidentialityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ConfidentialitySubServiceConfidentialitiesArgs = {
  filters?: InputMaybe<ConfidentialityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ConfidentialitySubServiceEntity = {
  __typename?: "ConfidentialitySubServiceEntity";
  attributes?: Maybe<ConfidentialitySubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type ConfidentialitySubServiceEntityResponse = {
  __typename?: "ConfidentialitySubServiceEntityResponse";
  data?: Maybe<ConfidentialitySubServiceEntity>;
};

export type ConfidentialitySubServiceEntityResponseCollection = {
  __typename?: "ConfidentialitySubServiceEntityResponseCollection";
  data: Array<ConfidentialitySubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ConfidentialitySubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ConfidentialitySubServiceFiltersInput>>>;
  confidentialities?: InputMaybe<ConfidentialityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ConfidentialitySubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ConfidentialitySubServiceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ConfidentialitySubServiceInput = {
  confidentialities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ContactResponse = {
  __typename?: "ContactResponse";
  city?: Maybe<Scalars["String"]>;
  contactEmail?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  postalAddress?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["String"]>;
  serviceName?: Maybe<Scalars["String"]>;
};

export type ContactUs = {
  __typename?: "ContactUs";
  blocks?: Maybe<Array<Maybe<ContactUsBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Contactus_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type ContactUsTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContactUsBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type ContactUsEntity = {
  __typename?: "ContactUsEntity";
  attributes?: Maybe<ContactUs>;
  id?: Maybe<Scalars["ID"]>;
};

export type ContactUsEntityResponse = {
  __typename?: "ContactUsEntityResponse";
  data?: Maybe<ContactUsEntity>;
};

export type ContactUsEntityResponseCollection = {
  __typename?: "ContactUsEntityResponseCollection";
  data: Array<ContactUsEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactUsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactUsFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContactUsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactUsFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type ContactUsInput = {
  blocks?: InputMaybe<Array<Scalars["ContactUsBlocksDynamicZoneInput"]>>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Contactus_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type ContactUsRelationResponseCollection = {
  __typename?: "ContactUsRelationResponseCollection";
  data: Array<ContactUsEntity>;
};

export type ContactUsSubService = {
  __typename?: "ContactUsSubService";
  contactUses?: Maybe<ContactUsRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated?: Maybe<Scalars["Boolean"]>;
  label: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ContactUsSubServiceContactUsesArgs = {
  filters?: InputMaybe<ContactUsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContactUsSubServiceEntity = {
  __typename?: "ContactUsSubServiceEntity";
  attributes?: Maybe<ContactUsSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type ContactUsSubServiceEntityResponse = {
  __typename?: "ContactUsSubServiceEntityResponse";
  data?: Maybe<ContactUsSubServiceEntity>;
};

export type ContactUsSubServiceEntityResponseCollection = {
  __typename?: "ContactUsSubServiceEntityResponseCollection";
  data: Array<ContactUsSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactUsSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactUsSubServiceFiltersInput>>>;
  contactUses?: InputMaybe<ContactUsFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  label?: InputMaybe<StringFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactUsSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactUsSubServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactUsSubServiceInput = {
  contactUses?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  label?: InputMaybe<Scalars["String"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type ContactUsSubServiceRelationResponseCollection = {
  __typename?: "ContactUsSubServiceRelationResponseCollection";
  data: Array<ContactUsSubServiceEntity>;
};

export type ContentTypeDto = {
  __typename?: "ContentTypeDTO";
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  subServiceId: Scalars["ID"];
  type: Scalars["String"];
};

export type Contract = {
  __typename?: "Contract";
  MwCounterService?: Maybe<MwCounterServiceEntityResponse>;
  alertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  ccap?: Maybe<Scalars["Long"]>;
  channelType?: Maybe<ChannelTypeEntityResponse>;
  cities?: Maybe<CityRelationResponseCollection>;
  clear?: Maybe<Scalars["Long"]>;
  clientContact?: Maybe<ClientContactEntityResponse>;
  clientName: Scalars["String"];
  clientType: Enum_Contract_Clienttype;
  collectDoorToDoors?: Maybe<CollectDoorToDoorRelationResponseCollection>;
  collectDropOffs?: Maybe<CollectDropOffRelationResponseCollection>;
  collectVoluntaries?: Maybe<CollectVoluntaryRelationResponseCollection>;
  contractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  contractMenu?: Maybe<ContractMenuEntityResponse>;
  contractStatus: Enum_Contract_Contractstatus;
  createdAt?: Maybe<Scalars["DateTime"]>;
  dropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  dueDate?: Maybe<Scalars["DateTime"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  flows?: Maybe<FlowRelationResponseCollection>;
  hasYesWeScan?: Maybe<Scalars["Boolean"]>;
  isNonExclusive: Scalars["Boolean"];
  isRVFrance: Scalars["Boolean"];
  keyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  logicalDelete?: Maybe<Scalars["Boolean"]>;
  logo: UploadFileEntityResponse;
  numberOfInhabitants?: Maybe<Scalars["Long"]>;
  oldClientName?: Maybe<Scalars["String"]>;
  pathId?: Maybe<Scalars["Long"]>;
  pickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  recyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  requestService?: Maybe<RequestServiceEntityResponse>;
  sectorizations?: Maybe<SectorizationRelationResponseCollection>;
  siret?: Maybe<Scalars["Long"]>;
  tags?: Maybe<TagRelationResponseCollection>;
  territory?: Maybe<TerritoryEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  yes_we_scan_service?: Maybe<YesWeScanServiceRelationResponseCollection>;
};

export type ContractCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractCollectDoorToDoorsArgs = {
  filters?: InputMaybe<CollectDoorToDoorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractCollectDropOffsArgs = {
  filters?: InputMaybe<CollectDropOffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractCollectVoluntariesArgs = {
  filters?: InputMaybe<CollectVoluntaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractFlowsArgs = {
  filters?: InputMaybe<FlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractSectorizationsArgs = {
  filters?: InputMaybe<SectorizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractYes_We_Scan_ServiceArgs = {
  filters?: InputMaybe<YesWeScanServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContractAndClientContact =
  | ClientContactCreateOutput
  | ContractCreateOutput;

export type ContractCreateOutput = {
  __typename?: "ContractCreateOutput";
  ccap?: Maybe<Scalars["Long"]>;
  clear?: Maybe<Scalars["Long"]>;
  clientName: Scalars["String"];
  clientType?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  isRVFrance: Scalars["Boolean"];
  siret?: Maybe<Scalars["Long"]>;
};

export type ContractCustomization = {
  __typename?: "ContractCustomization";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  footer?: Maybe<FooterEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  primaryColor: Scalars["String"];
  secondaryColor?: Maybe<Scalars["String"]>;
  textContrast: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ContractCustomizationEntity = {
  __typename?: "ContractCustomizationEntity";
  attributes?: Maybe<ContractCustomization>;
  id?: Maybe<Scalars["ID"]>;
};

export type ContractCustomizationEntityResponse = {
  __typename?: "ContractCustomizationEntityResponse";
  data?: Maybe<ContractCustomizationEntity>;
};

export type ContractCustomizationEntityResponseCollection = {
  __typename?: "ContractCustomizationEntityResponseCollection";
  data: Array<ContractCustomizationEntity>;
  meta: ResponseCollectionMeta;
};

export type ContractCustomizationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContractCustomizationFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  footer?: InputMaybe<FooterFiltersInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContractCustomizationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContractCustomizationFiltersInput>>>;
  primaryColor?: InputMaybe<StringFilterInput>;
  secondaryColor?: InputMaybe<StringFilterInput>;
  textContrast?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContractCustomizationInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  footer?: InputMaybe<Scalars["ID"]>;
  homepage?: InputMaybe<Scalars["ID"]>;
  primaryColor?: InputMaybe<Scalars["String"]>;
  secondaryColor?: InputMaybe<Scalars["String"]>;
  textContrast?: InputMaybe<Scalars["String"]>;
};

export type ContractEntity = {
  __typename?: "ContractEntity";
  attributes?: Maybe<Contract>;
  id?: Maybe<Scalars["ID"]>;
};

export type ContractEntityResponse = {
  __typename?: "ContractEntityResponse";
  data?: Maybe<ContractEntity>;
};

export type ContractEntityResponseCollection = {
  __typename?: "ContractEntityResponseCollection";
  data: Array<ContractEntity>;
  meta: ResponseCollectionMeta;
};

export type ContractFiltersInput = {
  MwCounterService?: InputMaybe<MwCounterServiceFiltersInput>;
  alertNotificationService?: InputMaybe<AlertNotificationServiceFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContractFiltersInput>>>;
  ccap?: InputMaybe<LongFilterInput>;
  channelType?: InputMaybe<ChannelTypeFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  clear?: InputMaybe<LongFilterInput>;
  clientContact?: InputMaybe<ClientContactFiltersInput>;
  clientName?: InputMaybe<StringFilterInput>;
  clientType?: InputMaybe<StringFilterInput>;
  collectDoorToDoors?: InputMaybe<CollectDoorToDoorFiltersInput>;
  collectDropOffs?: InputMaybe<CollectDropOffFiltersInput>;
  collectVoluntaries?: InputMaybe<CollectVoluntaryFiltersInput>;
  contractCustomization?: InputMaybe<ContractCustomizationFiltersInput>;
  contractMenu?: InputMaybe<ContractMenuFiltersInput>;
  contractStatus?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dropOffMapService?: InputMaybe<DropOffMapServiceFiltersInput>;
  dueDate?: InputMaybe<DateTimeFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  flows?: InputMaybe<FlowFiltersInput>;
  hasYesWeScan?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isNonExclusive?: InputMaybe<BooleanFilterInput>;
  isRVFrance?: InputMaybe<BooleanFilterInput>;
  keyMetricsService?: InputMaybe<KeyMetricsServiceFiltersInput>;
  logicalDelete?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ContractFiltersInput>;
  numberOfInhabitants?: InputMaybe<LongFilterInput>;
  oldClientName?: InputMaybe<StringFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ContractFiltersInput>>>;
  pathId?: InputMaybe<LongFilterInput>;
  pickUpDayService?: InputMaybe<PickUpDayServiceFiltersInput>;
  recyclingGuideService?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  requestService?: InputMaybe<RequestServiceFiltersInput>;
  sectorizations?: InputMaybe<SectorizationFiltersInput>;
  siret?: InputMaybe<LongFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  territory?: InputMaybe<TerritoryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  yes_we_scan_service?: InputMaybe<YesWeScanServiceFiltersInput>;
};

export type ContractInput = {
  MwCounterService?: InputMaybe<Scalars["ID"]>;
  alertNotificationService?: InputMaybe<Scalars["ID"]>;
  ccap?: InputMaybe<Scalars["Long"]>;
  channelType?: InputMaybe<Scalars["ID"]>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  clear?: InputMaybe<Scalars["Long"]>;
  clientContact?: InputMaybe<Scalars["ID"]>;
  clientName?: InputMaybe<Scalars["String"]>;
  clientType?: InputMaybe<Enum_Contract_Clienttype>;
  collectDoorToDoors?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  collectDropOffs?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  collectVoluntaries?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contractCustomization?: InputMaybe<Scalars["ID"]>;
  contractMenu?: InputMaybe<Scalars["ID"]>;
  contractStatus?: InputMaybe<Enum_Contract_Contractstatus>;
  dropOffMapService?: InputMaybe<Scalars["ID"]>;
  dueDate?: InputMaybe<Scalars["DateTime"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  flows?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  hasYesWeScan?: InputMaybe<Scalars["Boolean"]>;
  isNonExclusive?: InputMaybe<Scalars["Boolean"]>;
  isRVFrance?: InputMaybe<Scalars["Boolean"]>;
  keyMetricsService?: InputMaybe<Scalars["ID"]>;
  logicalDelete?: InputMaybe<Scalars["Boolean"]>;
  logo?: InputMaybe<Scalars["ID"]>;
  numberOfInhabitants?: InputMaybe<Scalars["Long"]>;
  oldClientName?: InputMaybe<Scalars["String"]>;
  pathId?: InputMaybe<Scalars["Long"]>;
  pickUpDayService?: InputMaybe<Scalars["ID"]>;
  recyclingGuideService?: InputMaybe<Scalars["ID"]>;
  requestService?: InputMaybe<Scalars["ID"]>;
  sectorizations?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  siret?: InputMaybe<Scalars["Long"]>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  territory?: InputMaybe<Scalars["ID"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  yes_we_scan_service?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type ContractMenu = {
  __typename?: "ContractMenu";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  serviceLinks?: Maybe<Array<Maybe<ContractMenuServiceLinksDynamicZone>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ContractMenuEntity = {
  __typename?: "ContractMenuEntity";
  attributes?: Maybe<ContractMenu>;
  id?: Maybe<Scalars["ID"]>;
};

export type ContractMenuEntityResponse = {
  __typename?: "ContractMenuEntityResponse";
  data?: Maybe<ContractMenuEntity>;
};

export type ContractMenuEntityResponseCollection = {
  __typename?: "ContractMenuEntityResponseCollection";
  data: Array<ContractMenuEntity>;
  meta: ResponseCollectionMeta;
};

export type ContractMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContractMenuFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ContractMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContractMenuFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContractMenuInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  serviceLinks?: InputMaybe<
    Array<Scalars["ContractMenuServiceLinksDynamicZoneInput"]>
  >;
};

export type ContractMenuServiceLinksDynamicZone =
  | ComponentLinksAlertNotification
  | ComponentLinksContactUs
  | ComponentLinksDropOffMap
  | ComponentLinksEvents
  | ComponentLinksExternal
  | ComponentLinksFrees
  | ComponentLinksKeyMetrics
  | ComponentLinksMyWasteCounter
  | ComponentLinksNews
  | ComponentLinksPickUpDay
  | ComponentLinksQuizzes
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | ComponentLinksTips
  | Error;

export type Cookie = {
  __typename?: "Cookie";
  blocks?: Maybe<Array<Maybe<CookieBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Cookie_Status>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type CookieBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksSubHeading
  | ComponentBlocksWysiwyg
  | Error;

export type CookieEntity = {
  __typename?: "CookieEntity";
  attributes?: Maybe<Cookie>;
  id?: Maybe<Scalars["ID"]>;
};

export type CookieEntityResponse = {
  __typename?: "CookieEntityResponse";
  data?: Maybe<CookieEntity>;
};

export type CookieEntityResponseCollection = {
  __typename?: "CookieEntityResponseCollection";
  data: Array<CookieEntity>;
  meta: ResponseCollectionMeta;
};

export type CookieFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CookieFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CookieFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CookieFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type CookieInput = {
  blocks?: InputMaybe<Array<Scalars["CookieBlocksDynamicZoneInput"]>>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Cookie_Status>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type CookieRelationResponseCollection = {
  __typename?: "CookieRelationResponseCollection";
  data: Array<CookieEntity>;
};

export type CookiesSubService = {
  __typename?: "CookiesSubService";
  cookies?: Maybe<CookieRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CookiesSubServiceCookiesArgs = {
  filters?: InputMaybe<CookieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type CookiesSubServiceEntity = {
  __typename?: "CookiesSubServiceEntity";
  attributes?: Maybe<CookiesSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type CookiesSubServiceEntityResponse = {
  __typename?: "CookiesSubServiceEntityResponse";
  data?: Maybe<CookiesSubServiceEntity>;
};

export type CookiesSubServiceEntityResponseCollection = {
  __typename?: "CookiesSubServiceEntityResponseCollection";
  data: Array<CookiesSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type CookiesSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CookiesSubServiceFiltersInput>>>;
  cookies?: InputMaybe<CookieFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CookiesSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CookiesSubServiceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CookiesSubServiceInput = {
  cookies?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Data = {
  __typename?: "Data";
  chipId?: Maybe<Scalars["String"]>;
  trashFlow?: Maybe<Scalars["String"]>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  contains?: InputMaybe<Scalars["Date"]>;
  containsi?: InputMaybe<Scalars["Date"]>;
  endsWith?: InputMaybe<Scalars["Date"]>;
  eq?: InputMaybe<Scalars["Date"]>;
  eqi?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars["Date"]>;
  notContainsi?: InputMaybe<Scalars["Date"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  startsWith?: InputMaybe<Scalars["Date"]>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]>;
  containsi?: InputMaybe<Scalars["DateTime"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]>;
  eq?: InputMaybe<Scalars["DateTime"]>;
  eqi?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  ne?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]>;
};

export type Deactivation = {
  __typename?: "Deactivation";
  contractId?: Maybe<Scalars["ID"]>;
  hasOtherActivationTypes?: Maybe<Scalars["Boolean"]>;
  typeDeactivation?: Maybe<Scalars["String"]>;
};

export type DeletedMessage = {
  __typename?: "DeletedMessage";
  id?: Maybe<Scalars["ID"]>;
  message?: Maybe<Scalars["String"]>;
};

export type DescriptionService = {
  __typename?: "DescriptionService";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DescriptionServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DescriptionServiceEntity = {
  __typename?: "DescriptionServiceEntity";
  attributes?: Maybe<DescriptionService>;
  id?: Maybe<Scalars["ID"]>;
};

export type DescriptionServiceEntityResponse = {
  __typename?: "DescriptionServiceEntityResponse";
  data?: Maybe<DescriptionServiceEntity>;
};

export type DescriptionServiceEntityResponseCollection = {
  __typename?: "DescriptionServiceEntityResponseCollection";
  data: Array<DescriptionServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type DescriptionServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DescriptionServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DescriptionServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DescriptionServiceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DescriptionServiceInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Document = {
  __typename?: "Document";
  createdAt?: Maybe<Scalars["DateTime"]>;
  document: UploadFileEntityResponse;
  event?: Maybe<EventEntityResponse>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DocumentEntity = {
  __typename?: "DocumentEntity";
  attributes?: Maybe<Document>;
  id?: Maybe<Scalars["ID"]>;
};

export type DocumentEntityResponse = {
  __typename?: "DocumentEntityResponse";
  data?: Maybe<DocumentEntity>;
};

export type DocumentEntityResponseCollection = {
  __typename?: "DocumentEntityResponseCollection";
  data: Array<DocumentEntity>;
  meta: ResponseCollectionMeta;
};

export type DocumentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  event?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DocumentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DocumentFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DocumentInput = {
  document?: InputMaybe<Scalars["ID"]>;
  event?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type DocumentRelationResponseCollection = {
  __typename?: "DocumentRelationResponseCollection";
  data: Array<DocumentEntity>;
};

export type DropOffMap = {
  __typename?: "DropOffMap";
  BANFeatureProperties?: Maybe<Scalars["JSON"]>;
  address?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  collectDropOff?: Maybe<CollectDropOffEntityResponse>;
  collectVoluntary?: Maybe<CollectVoluntaryEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  downloadableFiles?: Maybe<Array<Maybe<ComponentBlocksDownloadBlock>>>;
  dropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  mustKnow?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  openingHoursBlocks?: Maybe<
    Array<Maybe<DropOffMapOpeningHoursBlocksDynamicZone>>
  >;
  phoneNumber?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DropOffMapDownloadableFilesArgs = {
  filters?: InputMaybe<ComponentBlocksDownloadBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DropOffMapDto = {
  __typename?: "DropOffMapDTO";
  BANFeatureProperties?: Maybe<Scalars["JSON"]>;
  address: Scalars["String"];
  city: Scalars["String"];
  collect?: Maybe<CollectEntity>;
  description?: Maybe<Scalars["String"]>;
  downloadableFiles?: Maybe<Array<Maybe<ComponentBlocksDownloadBlock>>>;
  id: Scalars["String"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
  mustKnow?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  openingHoursBlocks?: Maybe<
    Array<Maybe<DropOffMapOpeningHoursBlocksDynamicZone>>
  >;
  phoneNumber?: Maybe<Scalars["String"]>;
};

export type DropOffMapDtoDownloadableFilesArgs = {
  filters?: InputMaybe<ComponentBlocksDownloadBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DropOffMapEntity = {
  __typename?: "DropOffMapEntity";
  attributes?: Maybe<DropOffMap>;
  id?: Maybe<Scalars["ID"]>;
};

export type DropOffMapEntityResponse = {
  __typename?: "DropOffMapEntityResponse";
  data?: Maybe<DropOffMapEntity>;
};

export type DropOffMapEntityResponseCollection = {
  __typename?: "DropOffMapEntityResponseCollection";
  data: Array<DropOffMapEntity>;
  meta: ResponseCollectionMeta;
};

export type DropOffMapFiltersInput = {
  BANFeatureProperties?: InputMaybe<JsonFilterInput>;
  address?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<DropOffMapFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  collectDropOff?: InputMaybe<CollectDropOffFiltersInput>;
  collectVoluntary?: InputMaybe<CollectVoluntaryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  downloadableFiles?: InputMaybe<ComponentBlocksDownloadBlockFiltersInput>;
  dropOffMapService?: InputMaybe<DropOffMapServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  latitude?: InputMaybe<FloatFilterInput>;
  longitude?: InputMaybe<FloatFilterInput>;
  mustKnow?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DropOffMapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DropOffMapFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DropOffMapInput = {
  BANFeatureProperties?: InputMaybe<Scalars["JSON"]>;
  address?: InputMaybe<Scalars["String"]>;
  city?: InputMaybe<Scalars["String"]>;
  collectDropOff?: InputMaybe<Scalars["ID"]>;
  collectVoluntary?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  downloadableFiles?: InputMaybe<
    Array<InputMaybe<ComponentBlocksDownloadBlockInput>>
  >;
  dropOffMapService?: InputMaybe<Scalars["ID"]>;
  latitude?: InputMaybe<Scalars["Float"]>;
  longitude?: InputMaybe<Scalars["Float"]>;
  mustKnow?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  openingHoursBlocks?: InputMaybe<
    Array<Scalars["DropOffMapOpeningHoursBlocksDynamicZoneInput"]>
  >;
  phoneNumber?: InputMaybe<Scalars["String"]>;
};

export type DropOffMapOpeningHoursBlocksDynamicZone =
  | ComponentBlocksOpeningDay
  | Error;

export type DropOffMapRelationResponseCollection = {
  __typename?: "DropOffMapRelationResponseCollection";
  data: Array<DropOffMapEntity>;
};

export type DropOffMapService = {
  __typename?: "DropOffMapService";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  dropOffMaps?: Maybe<DropOffMapRelationResponseCollection>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DropOffMapServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DropOffMapServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DropOffMapServiceDropOffMapsArgs = {
  filters?: InputMaybe<DropOffMapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DropOffMapServiceEntity = {
  __typename?: "DropOffMapServiceEntity";
  attributes?: Maybe<DropOffMapService>;
  id?: Maybe<Scalars["ID"]>;
};

export type DropOffMapServiceEntityResponse = {
  __typename?: "DropOffMapServiceEntityResponse";
  data?: Maybe<DropOffMapServiceEntity>;
};

export type DropOffMapServiceEntityResponseCollection = {
  __typename?: "DropOffMapServiceEntityResponseCollection";
  data: Array<DropOffMapServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type DropOffMapServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DropOffMapServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dropOffMaps?: InputMaybe<DropOffMapFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DropOffMapServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DropOffMapServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DropOffMapServiceInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  dropOffMaps?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type DropOffMapServiceRelationResponseCollection = {
  __typename?: "DropOffMapServiceRelationResponseCollection";
  data: Array<DropOffMapServiceEntity>;
};

export enum Enum_Accessibility_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Audience_Type {
  Bailleurs = "Bailleurs",
  Particuliers = "Particuliers",
  Professionnels = "Professionnels",
}

export enum Enum_Cgu_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Collectdoortodoor_Grammaticalgender {
  Feminin = "feminin",
  Masculin = "masculin",
}

export enum Enum_Collectdropoff_Grammaticalgender {
  Feminin = "feminin",
  Masculin = "masculin",
}

export enum Enum_Collectvoluntary_Grammaticalgender {
  Feminin = "feminin",
  Masculin = "masculin",
}

export enum Enum_Componentblockscheckbox_Fieldstatuscheckbox {
  Obligatoire = "Obligatoire",
  Optionnel = "Optionnel",
}

export enum Enum_Componentblockscommentary_Commentarystatus {
  Facultatif = "Facultatif",
  Obligatoire = "Obligatoire",
}

export enum Enum_Componentblocksdatechoice_Fieldstatus {
  Obligatoire = "Obligatoire",
  Optionnel = "Optionnel",
}

export enum Enum_Componentblocksopeningday_Weekday {
  Dimanche = "Dimanche",
  Jeudi = "Jeudi",
  Lundi = "Lundi",
  Mardi = "Mardi",
  Mercredi = "Mercredi",
  Samedi = "Samedi",
  Vendredi = "Vendredi",
}

export enum Enum_Componentblocksqcm_Fieldstatusqcm {
  Obligatoire = "Obligatoire",
  Optionnel = "Optionnel",
}

export enum Enum_Componentblocksquestions_Textstatus {
  Obligatoire = "Obligatoire",
  Optionnel = "Optionnel",
}

export enum Enum_Componentblocksrequestslotsexceptions_Exceptiontype {
  Daily = "daily",
  DateRange = "dateRange",
}

export enum Enum_Componentblockssubheading_Subheadingtag {
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export enum Enum_Componentlinksdropoffmap_Pointtodisplayonthemap {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

export enum Enum_Componentlinksrequest_Demand {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

export enum Enum_Confidentiality_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Contactus_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Contract_Clienttype {
  City = "city",
  Epci = "epci",
  Union = "union",
}

export enum Enum_Contract_Contractstatus {
  Actif = "Actif",
  EnCours = "En_cours",
  Initialisation = "Initialisation",
}

export enum Enum_Cookie_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Editocontentdto_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Event_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Exportentity_Status {
  Finished = "Finished",
  InProgress = "In_progress",
  New = "New",
}

export enum Enum_Flow_Recyclinggesture {
  NoTrash = "no_trash",
  ToSort = "to_sort",
  ToTrash = "to_trash",
}

export enum Enum_Footer_Accessibilitylevel {
  Conform = "conform",
  NotConform = "not_conform",
  PartiallyConform = "partially_conform",
}

export enum Enum_Freecontent_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Mwcflow_Weightsystem {
  Dynamic = "Dynamic",
  Outlet = "Outlet",
}

export enum Enum_New_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Pickupday_Periodicity {
  Hebdomadaire = "hebdomadaire",
  Mensuel = "mensuel",
}

export enum Enum_Quiz_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Tip_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Topcontentdto_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum Enum_Wasteform_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export type EditoBlock = {
  __typename?: "EditoBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayBlock: Scalars["Boolean"];
  editoContents?: Maybe<Array<Maybe<EditoBlockEditoContentsDynamicZone>>>;
  homepage?: Maybe<HomepageEntityResponse>;
  titleContent: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EditoBlockDto = {
  __typename?: "EditoBlockDTO";
  displayBlock: Scalars["Boolean"];
  editoContents?: Maybe<Array<Maybe<EditoContentDto>>>;
  id: Scalars["ID"];
  titleContent: Scalars["String"];
};

export type EditoBlockEditoContentsDynamicZone =
  | ComponentLinksEditoContent
  | Error;

export type EditoBlockEntity = {
  __typename?: "EditoBlockEntity";
  attributes?: Maybe<EditoBlock>;
  id?: Maybe<Scalars["ID"]>;
};

export type EditoBlockEntityResponse = {
  __typename?: "EditoBlockEntityResponse";
  data?: Maybe<EditoBlockEntity>;
};

export type EditoBlockEntityResponseCollection = {
  __typename?: "EditoBlockEntityResponseCollection";
  data: Array<EditoBlockEntity>;
  meta: ResponseCollectionMeta;
};

export type EditoBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EditoBlockFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displayBlock?: InputMaybe<BooleanFilterInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EditoBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EditoBlockFiltersInput>>>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EditoBlockInput = {
  displayBlock?: InputMaybe<Scalars["Boolean"]>;
  editoContents?: InputMaybe<
    Array<Scalars["EditoBlockEditoContentsDynamicZoneInput"]>
  >;
  homepage?: InputMaybe<Scalars["ID"]>;
  titleContent?: InputMaybe<Scalars["String"]>;
};

export type EditoContentDto = {
  __typename?: "EditoContentDTO";
  attributes: EditoContentDtoAttributes;
  componentId?: Maybe<Scalars["ID"]>;
  contentType: Scalars["String"];
  id: Scalars["ID"];
  typeName: Scalars["String"];
  uniqueId: Scalars["ID"];
};

export type EditoContentDtoAttributes = {
  __typename?: "EditoContentDTOAttributes";
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Editocontentdto_Status>;
  title: Scalars["String"];
};

export type EditorialService = {
  __typename?: "EditorialService";
  accessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  cguSubService?: Maybe<CguSubServiceEntityResponse>;
  cities?: Maybe<CityRelationResponseCollection>;
  confidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  contactUsSubService?: Maybe<ContactUsSubServiceEntityResponse>;
  contract?: Maybe<ContractEntityResponse>;
  cookiesSubService?: Maybe<CookiesSubServiceEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  eventSubService?: Maybe<EventSubServiceEntityResponse>;
  freeContentSubServices?: Maybe<FreeContentSubServiceRelationResponseCollection>;
  newsSubService?: Maybe<NewsSubServiceEntityResponse>;
  quizSubService?: Maybe<QuizSubServiceEntityResponse>;
  tipSubService?: Maybe<TipSubServiceEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EditorialServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EditorialServiceFreeContentSubServicesArgs = {
  filters?: InputMaybe<FreeContentSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EditorialServiceEntity = {
  __typename?: "EditorialServiceEntity";
  attributes?: Maybe<EditorialService>;
  id?: Maybe<Scalars["ID"]>;
};

export type EditorialServiceEntityResponse = {
  __typename?: "EditorialServiceEntityResponse";
  data?: Maybe<EditorialServiceEntity>;
};

export type EditorialServiceEntityResponseCollection = {
  __typename?: "EditorialServiceEntityResponseCollection";
  data: Array<EditorialServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type EditorialServiceFiltersInput = {
  accessibilitySubService?: InputMaybe<AccessibilitySubServiceFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<EditorialServiceFiltersInput>>>;
  cguSubService?: InputMaybe<CguSubServiceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  confidentialitySubService?: InputMaybe<ConfidentialitySubServiceFiltersInput>;
  contactUsSubService?: InputMaybe<ContactUsSubServiceFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  cookiesSubService?: InputMaybe<CookiesSubServiceFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  eventSubService?: InputMaybe<EventSubServiceFiltersInput>;
  freeContentSubServices?: InputMaybe<FreeContentSubServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  newsSubService?: InputMaybe<NewsSubServiceFiltersInput>;
  not?: InputMaybe<EditorialServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EditorialServiceFiltersInput>>>;
  quizSubService?: InputMaybe<QuizSubServiceFiltersInput>;
  tipSubService?: InputMaybe<TipSubServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EditorialServiceInput = {
  accessibilitySubService?: InputMaybe<Scalars["ID"]>;
  cguSubService?: InputMaybe<Scalars["ID"]>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  confidentialitySubService?: InputMaybe<Scalars["ID"]>;
  contactUsSubService?: InputMaybe<Scalars["ID"]>;
  contract?: InputMaybe<Scalars["ID"]>;
  cookiesSubService?: InputMaybe<Scalars["ID"]>;
  eventSubService?: InputMaybe<Scalars["ID"]>;
  freeContentSubServices?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  newsSubService?: InputMaybe<Scalars["ID"]>;
  quizSubService?: InputMaybe<Scalars["ID"]>;
  tipSubService?: InputMaybe<Scalars["ID"]>;
};

export type Epci = {
  __typename?: "Epci";
  cities?: Maybe<CityEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  territories?: Maybe<TerritoryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EpciTerritoriesArgs = {
  filters?: InputMaybe<TerritoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EpciEntity = {
  __typename?: "EpciEntity";
  attributes?: Maybe<Epci>;
  id?: Maybe<Scalars["ID"]>;
};

export type EpciEntityResponse = {
  __typename?: "EpciEntityResponse";
  data?: Maybe<EpciEntity>;
};

export type EpciEntityResponseCollection = {
  __typename?: "EpciEntityResponseCollection";
  data: Array<EpciEntity>;
  meta: ResponseCollectionMeta;
};

export type EpciFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EpciFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EpciFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EpciFiltersInput>>>;
  territories?: InputMaybe<TerritoryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EpciInput = {
  cities?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  territories?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type EpciRelationResponseCollection = {
  __typename?: "EpciRelationResponseCollection";
  data: Array<EpciEntity>;
};

export type Error = {
  __typename?: "Error";
  code: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
};

export type Event = {
  __typename?: "Event";
  blocks?: Maybe<Array<Maybe<EventBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  documents?: Maybe<DocumentRelationResponseCollection>;
  draftCreationId?: Maybe<Scalars["String"]>;
  eventSubService?: Maybe<EventSubServiceEntityResponse>;
  events?: Maybe<EventRelationResponseCollection>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  image: UploadFileEntityResponse;
  linkToServices?: Maybe<Array<Maybe<EventLinkToServicesDynamicZone>>>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Event_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type EventDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type EventEntity = {
  __typename?: "EventEntity";
  attributes?: Maybe<Event>;
  id?: Maybe<Scalars["ID"]>;
};

export type EventEntityResponse = {
  __typename?: "EventEntityResponse";
  data?: Maybe<EventEntity>;
};

export type EventEntityResponseCollection = {
  __typename?: "EventEntityResponseCollection";
  data: Array<EventEntity>;
  meta: ResponseCollectionMeta;
};

export type EventFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  documents?: InputMaybe<DocumentFiltersInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  eventSubService?: InputMaybe<EventSubServiceFiltersInput>;
  events?: InputMaybe<EventFiltersInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type EventInput = {
  blocks?: InputMaybe<Array<Scalars["EventBlocksDynamicZoneInput"]>>;
  customId?: InputMaybe<Scalars["String"]>;
  documents?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  eventSubService?: InputMaybe<Scalars["ID"]>;
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  image?: InputMaybe<Scalars["ID"]>;
  linkToServices?: InputMaybe<
    Array<Scalars["EventLinkToServicesDynamicZoneInput"]>
  >;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_Event_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type EventLinkToServicesDynamicZone =
  | ComponentLinksAlertNotification
  | ComponentLinksDropOffMap
  | ComponentLinksEditorial
  | ComponentLinksPickUpDay
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | Error;

export type EventOrNews = {
  __typename?: "EventOrNews";
  image?: Maybe<UploadFile>;
  originalId: Scalars["ID"];
  publishedDate: Scalars["DateTime"];
  shortDescription?: Maybe<Scalars["String"]>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars["String"];
  type: EventsOrNewsType;
};

export type EventRelationResponseCollection = {
  __typename?: "EventRelationResponseCollection";
  data: Array<EventEntity>;
};

export type EventSubService = {
  __typename?: "EventSubService";
  cities?: Maybe<CityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  events?: Maybe<EventRelationResponseCollection>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EventSubServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventSubServiceEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EventSubServiceEntity = {
  __typename?: "EventSubServiceEntity";
  attributes?: Maybe<EventSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type EventSubServiceEntityResponse = {
  __typename?: "EventSubServiceEntityResponse";
  data?: Maybe<EventSubServiceEntity>;
};

export type EventSubServiceEntityResponseCollection = {
  __typename?: "EventSubServiceEntityResponseCollection";
  data: Array<EventSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type EventSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EventSubServiceFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  events?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EventSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EventSubServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventSubServiceInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  events?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type EventSubServiceRelationResponseCollection = {
  __typename?: "EventSubServiceRelationResponseCollection";
  data: Array<EventSubServiceEntity>;
};

export enum EventsOrNewsType {
  Event = "event",
  New = "new",
}

export type ExportEntity = {
  __typename?: "ExportEntity";
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayName?: Maybe<Scalars["String"]>;
  filePath?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Exportentity_Status>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ExportEntityEntity = {
  __typename?: "ExportEntityEntity";
  attributes?: Maybe<ExportEntity>;
  id?: Maybe<Scalars["ID"]>;
};

export type ExportEntityEntityResponse = {
  __typename?: "ExportEntityEntityResponse";
  data?: Maybe<ExportEntityEntity>;
};

export type ExportEntityEntityResponseCollection = {
  __typename?: "ExportEntityEntityResponseCollection";
  data: Array<ExportEntityEntity>;
  meta: ResponseCollectionMeta;
};

export type ExportEntityFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExportEntityFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displayName?: InputMaybe<StringFilterInput>;
  filePath?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ExportEntityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExportEntityFiltersInput>>>;
  status?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ExportEntityInput = {
  displayName?: InputMaybe<Scalars["String"]>;
  filePath?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_Exportentity_Status>;
};

export type File = {
  __typename?: "File";
  id: Scalars["Int"];
  name: Scalars["String"];
  url: Scalars["String"];
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  folder?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Files = {
  __typename?: "Files";
  alternativeText?: Maybe<Scalars["String"]>;
  folderPath?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  mime?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  contains?: InputMaybe<Scalars["Float"]>;
  containsi?: InputMaybe<Scalars["Float"]>;
  endsWith?: InputMaybe<Scalars["Float"]>;
  eq?: InputMaybe<Scalars["Float"]>;
  eqi?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]>;
  notContainsi?: InputMaybe<Scalars["Float"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]>;
};

export type Flow = {
  __typename?: "Flow";
  code?: Maybe<Scalars["String"]>;
  collectDoorToDoors?: Maybe<CollectDoorToDoorRelationResponseCollection>;
  collectDropOffs?: Maybe<CollectDropOffRelationResponseCollection>;
  collectVoluntaries?: Maybe<CollectVoluntaryRelationResponseCollection>;
  color?: Maybe<FlowColorEntityResponse>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  isActivated?: Maybe<Scalars["Boolean"]>;
  mwcFlow?: Maybe<MwcFlowEntityResponse>;
  name?: Maybe<Scalars["String"]>;
  pickUpDays?: Maybe<PickUpDayRelationResponseCollection>;
  recyclingGesture: Enum_Flow_Recyclinggesture;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  wasteForms?: Maybe<WasteFormRelationResponseCollection>;
};

export type FlowCollectDoorToDoorsArgs = {
  filters?: InputMaybe<CollectDoorToDoorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FlowCollectDropOffsArgs = {
  filters?: InputMaybe<CollectDropOffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FlowCollectVoluntariesArgs = {
  filters?: InputMaybe<CollectVoluntaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FlowPickUpDaysArgs = {
  filters?: InputMaybe<PickUpDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FlowWasteFormsArgs = {
  filters?: InputMaybe<WasteFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FlowColor = {
  __typename?: "FlowColor";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  hexaCode: Scalars["String"];
  name: Scalars["String"];
  shouldChangeHexaCode: Scalars["Boolean"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FlowColorEntity = {
  __typename?: "FlowColorEntity";
  attributes?: Maybe<FlowColor>;
  id?: Maybe<Scalars["ID"]>;
};

export type FlowColorEntityResponse = {
  __typename?: "FlowColorEntityResponse";
  data?: Maybe<FlowColorEntity>;
};

export type FlowColorEntityResponseCollection = {
  __typename?: "FlowColorEntityResponseCollection";
  data: Array<FlowColorEntity>;
  meta: ResponseCollectionMeta;
};

export type FlowColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FlowColorFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hexaCode?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FlowColorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FlowColorFiltersInput>>>;
  shouldChangeHexaCode?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FlowColorInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  hexaCode?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  shouldChangeHexaCode?: InputMaybe<Scalars["Boolean"]>;
};

export type FlowEntity = {
  __typename?: "FlowEntity";
  attributes?: Maybe<Flow>;
  id?: Maybe<Scalars["ID"]>;
};

export type FlowEntityResponse = {
  __typename?: "FlowEntityResponse";
  data?: Maybe<FlowEntity>;
};

export type FlowEntityResponseCollection = {
  __typename?: "FlowEntityResponseCollection";
  data: Array<FlowEntity>;
  meta: ResponseCollectionMeta;
};

export type FlowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FlowFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  collectDoorToDoors?: InputMaybe<CollectDoorToDoorFiltersInput>;
  collectDropOffs?: InputMaybe<CollectDropOffFiltersInput>;
  collectVoluntaries?: InputMaybe<CollectVoluntaryFiltersInput>;
  color?: InputMaybe<FlowColorFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  mwcFlow?: InputMaybe<MwcFlowFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FlowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FlowFiltersInput>>>;
  pickUpDays?: InputMaybe<PickUpDayFiltersInput>;
  recyclingGesture?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wasteForms?: InputMaybe<WasteFormFiltersInput>;
};

export type FlowInput = {
  code?: InputMaybe<Scalars["String"]>;
  collectDoorToDoors?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  collectDropOffs?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  collectVoluntaries?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  color?: InputMaybe<Scalars["ID"]>;
  contract?: InputMaybe<Scalars["ID"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  mwcFlow?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  pickUpDays?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  recyclingGesture?: InputMaybe<Enum_Flow_Recyclinggesture>;
  wasteForms?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type FlowRelationResponseCollection = {
  __typename?: "FlowRelationResponseCollection";
  data: Array<FlowEntity>;
};

export type Folders = {
  __typename?: "Folders";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  pathId?: Maybe<Scalars["String"]>;
};

export type Footer = {
  __typename?: "Footer";
  accessibilityLevel?: Maybe<Enum_Footer_Accessibilitylevel>;
  accessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  cguSubService?: Maybe<CguSubServiceEntityResponse>;
  confidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  contactUsSubService?: Maybe<ContactUsSubServiceEntityResponse>;
  contractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  cookiesSubService?: Maybe<CookiesSubServiceEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FooterEntity = {
  __typename?: "FooterEntity";
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars["ID"]>;
};

export type FooterEntityResponse = {
  __typename?: "FooterEntityResponse";
  data?: Maybe<FooterEntity>;
};

export type FooterEntityResponseCollection = {
  __typename?: "FooterEntityResponseCollection";
  data: Array<FooterEntity>;
  meta: ResponseCollectionMeta;
};

export type FooterFiltersInput = {
  accessibilityLevel?: InputMaybe<StringFilterInput>;
  accessibilitySubService?: InputMaybe<AccessibilitySubServiceFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  cguSubService?: InputMaybe<CguSubServiceFiltersInput>;
  confidentialitySubService?: InputMaybe<ConfidentialitySubServiceFiltersInput>;
  contactUsSubService?: InputMaybe<ContactUsSubServiceFiltersInput>;
  contractCustomization?: InputMaybe<ContractCustomizationFiltersInput>;
  cookiesSubService?: InputMaybe<CookiesSubServiceFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FooterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FooterFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FooterInput = {
  accessibilityLevel?: InputMaybe<Enum_Footer_Accessibilitylevel>;
  accessibilitySubService?: InputMaybe<Scalars["ID"]>;
  cguSubService?: InputMaybe<Scalars["ID"]>;
  confidentialitySubService?: InputMaybe<Scalars["ID"]>;
  contactUsSubService?: InputMaybe<Scalars["ID"]>;
  contractCustomization?: InputMaybe<Scalars["ID"]>;
  cookiesSubService?: InputMaybe<Scalars["ID"]>;
};

export type FreeContent = {
  __typename?: "FreeContent";
  blocks?: Maybe<Array<Maybe<FreeContentBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  freeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  image: UploadFileEntityResponse;
  linkToServices?: Maybe<Array<Maybe<FreeContentLinkToServicesDynamicZone>>>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Freecontent_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type FreeContentTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FreeContentBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type FreeContentEntity = {
  __typename?: "FreeContentEntity";
  attributes?: Maybe<FreeContent>;
  id?: Maybe<Scalars["ID"]>;
};

export type FreeContentEntityResponse = {
  __typename?: "FreeContentEntityResponse";
  data?: Maybe<FreeContentEntity>;
};

export type FreeContentEntityResponseCollection = {
  __typename?: "FreeContentEntityResponseCollection";
  data: Array<FreeContentEntity>;
  meta: ResponseCollectionMeta;
};

export type FreeContentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FreeContentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  freeContentSubService?: InputMaybe<FreeContentSubServiceFiltersInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FreeContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FreeContentFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type FreeContentInput = {
  blocks?: InputMaybe<Array<Scalars["FreeContentBlocksDynamicZoneInput"]>>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  freeContentSubService?: InputMaybe<Scalars["ID"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  image?: InputMaybe<Scalars["ID"]>;
  linkToServices?: InputMaybe<
    Array<Scalars["FreeContentLinkToServicesDynamicZoneInput"]>
  >;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_Freecontent_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type FreeContentLinkToServicesDynamicZone =
  | ComponentLinksAlertNotification
  | ComponentLinksDropOffMap
  | ComponentLinksEditorial
  | ComponentLinksPickUpDay
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | Error;

export type FreeContentRelationResponseCollection = {
  __typename?: "FreeContentRelationResponseCollection";
  data: Array<FreeContentEntity>;
};

export type FreeContentSubService = {
  __typename?: "FreeContentSubService";
  cities?: Maybe<CityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  freeContents?: Maybe<FreeContentRelationResponseCollection>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type FreeContentSubServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FreeContentSubServiceFreeContentsArgs = {
  filters?: InputMaybe<FreeContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type FreeContentSubServiceEntity = {
  __typename?: "FreeContentSubServiceEntity";
  attributes?: Maybe<FreeContentSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type FreeContentSubServiceEntityResponse = {
  __typename?: "FreeContentSubServiceEntityResponse";
  data?: Maybe<FreeContentSubServiceEntity>;
};

export type FreeContentSubServiceEntityResponseCollection = {
  __typename?: "FreeContentSubServiceEntityResponseCollection";
  data: Array<FreeContentSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type FreeContentSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FreeContentSubServiceFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  freeContents?: InputMaybe<FreeContentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<FreeContentSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FreeContentSubServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FreeContentSubServiceInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  freeContents?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type FreeContentSubServiceRelationResponseCollection = {
  __typename?: "FreeContentSubServiceRelationResponseCollection";
  data: Array<FreeContentSubServiceEntity>;
};

export type GenericMorph =
  | Accessibility
  | AccessibilitySubService
  | AlertNotification
  | AlertNotificationService
  | Audience
  | Cgu
  | CguSubService
  | ChannelType
  | City
  | ClientContact
  | CollectDoorToDoor
  | CollectDropOff
  | CollectVoluntary
  | ComponentBlocksAttachments
  | ComponentBlocksCheckbox
  | ComponentBlocksCommentary
  | ComponentBlocksCumbersome
  | ComponentBlocksDateChoice
  | ComponentBlocksDownloadBlock
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksOpeningDay
  | ComponentBlocksQcm
  | ComponentBlocksQuestions
  | ComponentBlocksRequestSlotsExceptions
  | ComponentBlocksRequestType
  | ComponentBlocksSubHeading
  | ComponentBlocksTest
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | ComponentLinksAlertNotification
  | ComponentLinksContactUs
  | ComponentLinksDropOffMap
  | ComponentLinksEditoContent
  | ComponentLinksEditorial
  | ComponentLinksEvents
  | ComponentLinksExternal
  | ComponentLinksFrees
  | ComponentLinksKeyMetrics
  | ComponentLinksMyWasteCounter
  | ComponentLinksNews
  | ComponentLinksPickUpDay
  | ComponentLinksQuizzes
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | ComponentLinksTips
  | ComponentLinksTopContent
  | Confidentiality
  | ConfidentialitySubService
  | ContactUs
  | ContactUsSubService
  | Contract
  | ContractCustomization
  | ContractMenu
  | Cookie
  | CookiesSubService
  | DescriptionService
  | Document
  | DropOffMap
  | DropOffMapService
  | EditoBlock
  | EditorialService
  | Epci
  | Event
  | EventSubService
  | ExportEntity
  | Flow
  | FlowColor
  | Footer
  | FreeContent
  | FreeContentSubService
  | Global
  | Homepage
  | I18NLocale
  | InformationMessage
  | KeyMetric
  | KeyMetricsService
  | MwCounterService
  | MwcFlow
  | New
  | NewsSubService
  | PickUpDay
  | PickUpDayService
  | Quiz
  | QuizAndTipsBlock
  | QuizSubService
  | RecyclingGuideBlock
  | RecyclingGuideService
  | Request
  | RequestAggregate
  | RequestService
  | RequestSlot
  | RequestTaked
  | SearchEngineBlock
  | Sectorization
  | ServicesBlock
  | Tag
  | Territory
  | TerritoryType
  | Tip
  | TipSubService
  | TopContentBlock
  | UploadFile
  | UploadFolder
  | UserDataStorage
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | WasteFamily
  | WasteForm
  | YesWeScanService;

export type Global = {
  __typename?: "Global";
  createdAt?: Maybe<Scalars["DateTime"]>;
  favicon?: Maybe<UploadFileEntityResponse>;
  siteDescription: Scalars["String"];
  siteName: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type GlobalEntity = {
  __typename?: "GlobalEntity";
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars["ID"]>;
};

export type GlobalEntityResponse = {
  __typename?: "GlobalEntityResponse";
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  favicon?: InputMaybe<Scalars["ID"]>;
  siteDescription?: InputMaybe<Scalars["String"]>;
  siteName?: InputMaybe<Scalars["String"]>;
};

export type HomeDataMwc = {
  __typename?: "HomeDataMwc";
  adresse?: Maybe<Scalars["String"]>;
  averageProductionPerPerson?: Maybe<Scalars["Float"]>;
  equivalentOfProduction?: Maybe<Scalars["Float"]>;
  productionCumulee?: Maybe<Scalars["Int"]>;
  variationPercent?: Maybe<Scalars["Float"]>;
};

export type Homepage = {
  __typename?: "Homepage";
  contractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  editoBlock?: Maybe<EditoBlockEntityResponse>;
  quizAndTipsBlock?: Maybe<QuizAndTipsBlockEntityResponse>;
  recyclingGuideBlock?: Maybe<RecyclingGuideBlockEntityResponse>;
  searchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  servicesBlock?: Maybe<ServicesBlockEntityResponse>;
  topContentBlock?: Maybe<TopContentBlockEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type HomepageEntity = {
  __typename?: "HomepageEntity";
  attributes?: Maybe<Homepage>;
  id?: Maybe<Scalars["ID"]>;
};

export type HomepageEntityResponse = {
  __typename?: "HomepageEntityResponse";
  data?: Maybe<HomepageEntity>;
};

export type HomepageEntityResponseCollection = {
  __typename?: "HomepageEntityResponseCollection";
  data: Array<HomepageEntity>;
  meta: ResponseCollectionMeta;
};

export type HomepageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<HomepageFiltersInput>>>;
  contractCustomization?: InputMaybe<ContractCustomizationFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  editoBlock?: InputMaybe<EditoBlockFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<HomepageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<HomepageFiltersInput>>>;
  quizAndTipsBlock?: InputMaybe<QuizAndTipsBlockFiltersInput>;
  recyclingGuideBlock?: InputMaybe<RecyclingGuideBlockFiltersInput>;
  searchEngineBlock?: InputMaybe<SearchEngineBlockFiltersInput>;
  servicesBlock?: InputMaybe<ServicesBlockFiltersInput>;
  topContentBlock?: InputMaybe<TopContentBlockFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type HomepageInput = {
  contractCustomization?: InputMaybe<Scalars["ID"]>;
  editoBlock?: InputMaybe<Scalars["ID"]>;
  quizAndTipsBlock?: InputMaybe<Scalars["ID"]>;
  recyclingGuideBlock?: InputMaybe<Scalars["ID"]>;
  searchEngineBlock?: InputMaybe<Scalars["ID"]>;
  servicesBlock?: InputMaybe<Scalars["ID"]>;
  topContentBlock?: InputMaybe<Scalars["ID"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type I18NLocaleEntity = {
  __typename?: "I18NLocaleEntity";
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars["ID"]>;
};

export type I18NLocaleEntityResponse = {
  __typename?: "I18NLocaleEntityResponse";
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contains?: InputMaybe<Scalars["ID"]>;
  containsi?: InputMaybe<Scalars["ID"]>;
  endsWith?: InputMaybe<Scalars["ID"]>;
  eq?: InputMaybe<Scalars["ID"]>;
  eqi?: InputMaybe<Scalars["ID"]>;
  gt?: InputMaybe<Scalars["ID"]>;
  gte?: InputMaybe<Scalars["ID"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  lt?: InputMaybe<Scalars["ID"]>;
  lte?: InputMaybe<Scalars["ID"]>;
  ne?: InputMaybe<Scalars["ID"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]>;
  notContainsi?: InputMaybe<Scalars["ID"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]>;
};

export type InformationMessage = {
  __typename?: "InformationMessage";
  createdAt?: Maybe<Scalars["DateTime"]>;
  dateEnd?: Maybe<Scalars["String"]>;
  dateStart: Scalars["String"];
  infoMessage: Scalars["String"];
  pickUpDays?: Maybe<PickUpDayRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type InformationMessagePickUpDaysArgs = {
  filters?: InputMaybe<PickUpDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type InformationMessageEntity = {
  __typename?: "InformationMessageEntity";
  attributes?: Maybe<InformationMessage>;
  id?: Maybe<Scalars["ID"]>;
};

export type InformationMessageEntityResponse = {
  __typename?: "InformationMessageEntityResponse";
  data?: Maybe<InformationMessageEntity>;
};

export type InformationMessageEntityResponseCollection = {
  __typename?: "InformationMessageEntityResponseCollection";
  data: Array<InformationMessageEntity>;
  meta: ResponseCollectionMeta;
};

export type InformationMessageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InformationMessageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateEnd?: InputMaybe<StringFilterInput>;
  dateStart?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  infoMessage?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InformationMessageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InformationMessageFiltersInput>>>;
  pickUpDays?: InputMaybe<PickUpDayFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type InformationMessageInput = {
  dateEnd?: InputMaybe<Scalars["String"]>;
  dateStart?: InputMaybe<Scalars["String"]>;
  infoMessage?: InputMaybe<Scalars["String"]>;
  pickUpDays?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  contains?: InputMaybe<Scalars["Int"]>;
  containsi?: InputMaybe<Scalars["Int"]>;
  endsWith?: InputMaybe<Scalars["Int"]>;
  eq?: InputMaybe<Scalars["Int"]>;
  eqi?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]>;
  notContainsi?: InputMaybe<Scalars["Int"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  contains?: InputMaybe<Scalars["JSON"]>;
  containsi?: InputMaybe<Scalars["JSON"]>;
  endsWith?: InputMaybe<Scalars["JSON"]>;
  eq?: InputMaybe<Scalars["JSON"]>;
  eqi?: InputMaybe<Scalars["JSON"]>;
  gt?: InputMaybe<Scalars["JSON"]>;
  gte?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  lt?: InputMaybe<Scalars["JSON"]>;
  lte?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]>;
};

export type KeyMetric = {
  __typename?: "KeyMetric";
  createdAt?: Maybe<Scalars["DateTime"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type KeyMetricEntity = {
  __typename?: "KeyMetricEntity";
  attributes?: Maybe<KeyMetric>;
  id?: Maybe<Scalars["ID"]>;
};

export type KeyMetricEntityResponse = {
  __typename?: "KeyMetricEntityResponse";
  data?: Maybe<KeyMetricEntity>;
};

export type KeyMetricEntityResponseCollection = {
  __typename?: "KeyMetricEntityResponseCollection";
  data: Array<KeyMetricEntity>;
  meta: ResponseCollectionMeta;
};

export type KeyMetricFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<KeyMetricFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<KeyMetricFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<KeyMetricFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type KeyMetricInput = {
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  title?: InputMaybe<Scalars["String"]>;
};

export type KeyMetricRelationResponseCollection = {
  __typename?: "KeyMetricRelationResponseCollection";
  data: Array<KeyMetricEntity>;
};

export type KeyMetricsService = {
  __typename?: "KeyMetricsService";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  keyMetrics?: Maybe<KeyMetricRelationResponseCollection>;
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type KeyMetricsServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type KeyMetricsServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type KeyMetricsServiceKeyMetricsArgs = {
  filters?: InputMaybe<KeyMetricFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type KeyMetricsServiceEntity = {
  __typename?: "KeyMetricsServiceEntity";
  attributes?: Maybe<KeyMetricsService>;
  id?: Maybe<Scalars["ID"]>;
};

export type KeyMetricsServiceEntityResponse = {
  __typename?: "KeyMetricsServiceEntityResponse";
  data?: Maybe<KeyMetricsServiceEntity>;
};

export type KeyMetricsServiceEntityResponseCollection = {
  __typename?: "KeyMetricsServiceEntityResponseCollection";
  data: Array<KeyMetricsServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type KeyMetricsServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<KeyMetricsServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  keyMetrics?: InputMaybe<KeyMetricFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<KeyMetricsServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<KeyMetricsServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type KeyMetricsServiceInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  keyMetrics?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type KeyMetricsServiceRelationResponseCollection = {
  __typename?: "KeyMetricsServiceRelationResponseCollection";
  data: Array<KeyMetricsServiceEntity>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  contains?: InputMaybe<Scalars["Long"]>;
  containsi?: InputMaybe<Scalars["Long"]>;
  endsWith?: InputMaybe<Scalars["Long"]>;
  eq?: InputMaybe<Scalars["Long"]>;
  eqi?: InputMaybe<Scalars["Long"]>;
  gt?: InputMaybe<Scalars["Long"]>;
  gte?: InputMaybe<Scalars["Long"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  lt?: InputMaybe<Scalars["Long"]>;
  lte?: InputMaybe<Scalars["Long"]>;
  ne?: InputMaybe<Scalars["Long"]>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars["Long"]>;
  notContainsi?: InputMaybe<Scalars["Long"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Long"]>>>;
  startsWith?: InputMaybe<Scalars["Long"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addCommuneToContract?: Maybe<ContractEntity>;
  bulkDeleteMedias?: Maybe<Array<Maybe<DeletedMessage>>>;
  bulkMoveMedias?: Maybe<Array<Maybe<RequestFileOrFolder>>>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  channelsActivation?: Maybe<Array<Maybe<ActivationAndService>>>;
  channelsDeactivation?: Maybe<Deactivation>;
  checkUnpublishedDate?: Maybe<Scalars["Boolean"]>;
  createAccessibility?: Maybe<AccessibilityEntityResponse>;
  createAccessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  createAlertNotification?: Maybe<AlertNotificationEntityResponse>;
  createAlertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  createAudience?: Maybe<AudienceEntityResponse>;
  createCgu?: Maybe<CguEntityResponse>;
  createCguSubService?: Maybe<CguSubServiceEntityResponse>;
  createChannelType?: Maybe<ChannelTypeEntityResponse>;
  createCity?: Maybe<CityEntityResponse>;
  createClientContact?: Maybe<ClientContactEntityResponse>;
  createCollectDoorToDoor?: Maybe<CollectDoorToDoorEntityResponse>;
  createCollectDropOff?: Maybe<CollectDropOffEntityResponse>;
  createCollectVoluntary?: Maybe<CollectVoluntaryEntityResponse>;
  createConfidentiality?: Maybe<ConfidentialityEntityResponse>;
  createConfidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  createContactUs?: Maybe<ContactUsEntityResponse>;
  createContactUsSubService?: Maybe<ContactUsSubServiceEntityResponse>;
  createContentTypeForContractId?: Maybe<FreeContentSubServiceEntity>;
  createContract?: Maybe<ContractEntityResponse>;
  createContractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  createContractMenu?: Maybe<ContractMenuEntityResponse>;
  createCookie?: Maybe<CookieEntityResponse>;
  createCookiesSubService?: Maybe<CookiesSubServiceEntityResponse>;
  createDescriptionService?: Maybe<DescriptionServiceEntityResponse>;
  createDocument?: Maybe<DocumentEntityResponse>;
  createDropOffMap?: Maybe<DropOffMapEntityResponse>;
  createDropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  createEditoBlock?: Maybe<EditoBlockEntityResponse>;
  createEditorialService?: Maybe<EditorialServiceEntityResponse>;
  createEmptyContract?: Maybe<Array<Maybe<ContractAndClientContact>>>;
  createEpci?: Maybe<EpciEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventSubService?: Maybe<EventSubServiceEntityResponse>;
  createExportEntity?: Maybe<ExportEntityEntityResponse>;
  createFlow?: Maybe<FlowEntityResponse>;
  createFlowColor?: Maybe<FlowColorEntityResponse>;
  createFooter?: Maybe<FooterEntityResponse>;
  createFreeContent?: Maybe<FreeContentEntityResponse>;
  createFreeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  createHomepage?: Maybe<HomepageEntityResponse>;
  createInformationMessage?: Maybe<InformationMessageEntityResponse>;
  createKeyMetric?: Maybe<KeyMetricEntityResponse>;
  createKeyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  createMwCounterService?: Maybe<MwCounterServiceEntityResponse>;
  createMwcFlow?: Maybe<MwcFlowEntityResponse>;
  createNew?: Maybe<NewEntityResponse>;
  createNewFolder?: Maybe<RequestFolderEntity>;
  createNewTag?: Maybe<RequestTagEntity>;
  createNewsSubService?: Maybe<NewsSubServiceEntityResponse>;
  createPickUpDay?: Maybe<PickUpDayEntityResponse>;
  createPickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  createQuiz?: Maybe<QuizEntityResponse>;
  createQuizAndTipsBlock?: Maybe<QuizAndTipsBlockEntityResponse>;
  createQuizSubService?: Maybe<QuizSubServiceEntityResponse>;
  createRecyclingGuideBlock?: Maybe<RecyclingGuideBlockEntityResponse>;
  createRecyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  createRequest?: Maybe<RequestEntityResponse>;
  createRequestAggregate?: Maybe<RequestAggregateEntityResponse>;
  createRequestService?: Maybe<RequestServiceEntityResponse>;
  createRequestSlot?: Maybe<RequestSlotEntityResponse>;
  createRequestTaked?: Maybe<RequestTakedEntityResponse>;
  createSearchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  createSectorization?: Maybe<SectorizationEntityResponse>;
  createServicesBlock?: Maybe<ServicesBlockEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTerritory?: Maybe<TerritoryEntityResponse>;
  createTerritoryType?: Maybe<TerritoryTypeEntityResponse>;
  createTip?: Maybe<TipEntityResponse>;
  createTipSubService?: Maybe<TipSubServiceEntityResponse>;
  createTopContentBlock?: Maybe<TopContentBlockEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createUserDataStorage?: Maybe<UserDataStorageEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWasteFamily?: Maybe<WasteFamilyEntityResponse>;
  createWasteForm?: Maybe<WasteFormEntityResponse>;
  createYesWeScanService?: Maybe<YesWeScanServiceEntityResponse>;
  createYwsService?: Maybe<Scalars["Boolean"]>;
  deleteAccessibility?: Maybe<AccessibilityEntityResponse>;
  deleteAccessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  deleteAlertNotification?: Maybe<AlertNotificationEntityResponse>;
  deleteAlertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  deleteAudience?: Maybe<AudienceEntityResponse>;
  deleteCgu?: Maybe<CguEntityResponse>;
  deleteCguSubService?: Maybe<CguSubServiceEntityResponse>;
  deleteChannelType?: Maybe<ChannelTypeEntityResponse>;
  deleteCity?: Maybe<CityEntityResponse>;
  deleteClientContact?: Maybe<ClientContactEntityResponse>;
  deleteCollectDoorToDoor?: Maybe<CollectDoorToDoorEntityResponse>;
  deleteCollectDropOff?: Maybe<CollectDropOffEntityResponse>;
  deleteCollectVoluntary?: Maybe<CollectVoluntaryEntityResponse>;
  deleteConfidentiality?: Maybe<ConfidentialityEntityResponse>;
  deleteConfidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  deleteContactUs?: Maybe<ContactUsEntityResponse>;
  deleteContactUsSubService?: Maybe<ContactUsSubServiceEntityResponse>;
  deleteContent?: Maybe<Scalars["Boolean"]>;
  deleteContract?: Maybe<ContractEntityResponse>;
  deleteContractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  deleteContractMenu?: Maybe<ContractMenuEntityResponse>;
  deleteCookie?: Maybe<CookieEntityResponse>;
  deleteCookiesSubService?: Maybe<CookiesSubServiceEntityResponse>;
  deleteDescriptionService?: Maybe<DescriptionServiceEntityResponse>;
  deleteDocument?: Maybe<DocumentEntityResponse>;
  deleteDropOffMap?: Maybe<DropOffMapEntityResponse>;
  deleteDropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  deleteEditoBlock?: Maybe<EditoBlockEntityResponse>;
  deleteEditorialService?: Maybe<EditorialServiceEntityResponse>;
  deleteEpci?: Maybe<EpciEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventSubService?: Maybe<EventSubServiceEntityResponse>;
  deleteExportEntity?: Maybe<ExportEntityEntityResponse>;
  deleteFlow?: Maybe<FlowEntityResponse>;
  deleteFlowColor?: Maybe<FlowColorEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteFreeContent?: Maybe<FreeContentEntityResponse>;
  deleteFreeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteInformationMessage?: Maybe<InformationMessageEntityResponse>;
  deleteKeyMetric?: Maybe<KeyMetricEntityResponse>;
  deleteKeyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  deleteMwCounterService?: Maybe<MwCounterServiceEntityResponse>;
  deleteMwcFlow?: Maybe<MwcFlowEntityResponse>;
  deleteNew?: Maybe<NewEntityResponse>;
  deleteNewsSubService?: Maybe<NewsSubServiceEntityResponse>;
  deletePickUpDay?: Maybe<PickUpDayEntityResponse>;
  deletePickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  deleteQuiz?: Maybe<QuizEntityResponse>;
  deleteQuizAndTipsBlock?: Maybe<QuizAndTipsBlockEntityResponse>;
  deleteQuizSubService?: Maybe<QuizSubServiceEntityResponse>;
  deleteRecyclingGuideBlock?: Maybe<RecyclingGuideBlockEntityResponse>;
  deleteRecyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  deleteRequest?: Maybe<RequestEntityResponse>;
  deleteRequestAggregate?: Maybe<RequestAggregateEntityResponse>;
  deleteRequestService?: Maybe<RequestServiceEntityResponse>;
  deleteRequestSlot?: Maybe<RequestSlotEntityResponse>;
  deleteRequestTaked?: Maybe<RequestTakedEntityResponse>;
  deleteSearchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  deleteSectorization?: Maybe<SectorizationEntityResponse>;
  deleteServicesBlock?: Maybe<ServicesBlockEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTerritory?: Maybe<TerritoryEntityResponse>;
  deleteTerritoryType?: Maybe<TerritoryTypeEntityResponse>;
  deleteTip?: Maybe<TipEntityResponse>;
  deleteTipSubService?: Maybe<TipSubServiceEntityResponse>;
  deleteTopContentBlock?: Maybe<TopContentBlockEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUserDataStorage?: Maybe<UserDataStorageEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWasteFamily?: Maybe<WasteFamilyEntityResponse>;
  deleteWasteForm?: Maybe<WasteFormEntityResponse>;
  deleteYesWeScanService?: Maybe<YesWeScanServiceEntityResponse>;
  deleteYwsService?: Maybe<Scalars["Boolean"]>;
  duplicateContent?: Maybe<Scalars["Boolean"]>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  endDateServices?: Maybe<Array<Maybe<ServicesDeactivated>>>;
  exportMunicipalities?: Maybe<Scalars["ID"]>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  importMunicipalities?: Maybe<Scalars["String"]>;
  importSiren?: Maybe<Scalars["Boolean"]>;
  logicalDeleteContract?: Maybe<Scalars["Boolean"]>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  programmedSend?: Maybe<Scalars["String"]>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  sendEmail?: Maybe<Scalars["String"]>;
  sendSMS?: Maybe<Scalars["String"]>;
  servicesActivation?: Maybe<ServiceActivated>;
  setFlowIsActivated?: Maybe<FlowEntity>;
  singleUploadCustom: File;
  updateAccessibility?: Maybe<AccessibilityEntityResponse>;
  updateAccessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  updateAlertNotification?: Maybe<AlertNotificationEntityResponse>;
  updateAlertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  updateAudience?: Maybe<AudienceEntityResponse>;
  updateCgu?: Maybe<CguEntityResponse>;
  updateCguSubService?: Maybe<CguSubServiceEntityResponse>;
  updateChannelType?: Maybe<ChannelTypeEntityResponse>;
  updateCity?: Maybe<CityEntityResponse>;
  updateClientContact?: Maybe<ClientContactEntityResponse>;
  updateCollectDoorToDoor?: Maybe<CollectDoorToDoorEntityResponse>;
  updateCollectDropOff?: Maybe<CollectDropOffEntityResponse>;
  updateCollectVoluntary?: Maybe<CollectVoluntaryEntityResponse>;
  updateConfidentiality?: Maybe<ConfidentialityEntityResponse>;
  updateConfidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  updateContactMwc?: Maybe<ContactResponse>;
  updateContactUs?: Maybe<ContactUsEntityResponse>;
  updateContactUsSubService?: Maybe<ContactUsSubServiceEntityResponse>;
  updateContract?: Maybe<ContractEntityResponse>;
  updateContractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  updateContractMenu?: Maybe<ContractMenuEntityResponse>;
  updateContractNumberOfInhabitants?: Maybe<Scalars["Boolean"]>;
  updateCookie?: Maybe<CookieEntityResponse>;
  updateCookiesSubService?: Maybe<CookiesSubServiceEntityResponse>;
  updateDescriptionService?: Maybe<DescriptionServiceEntityResponse>;
  updateDocument?: Maybe<DocumentEntityResponse>;
  updateDropOffMap?: Maybe<DropOffMapEntityResponse>;
  updateDropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  updateEditoBlock?: Maybe<EditoBlockEntityResponse>;
  updateEditorialService?: Maybe<EditorialServiceEntityResponse>;
  updateEpci?: Maybe<EpciEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventSubService?: Maybe<EventSubServiceEntityResponse>;
  updateExportEntity?: Maybe<ExportEntityEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFlow?: Maybe<FlowEntityResponse>;
  updateFlowColor?: Maybe<FlowColorEntityResponse>;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateFreeContent?: Maybe<FreeContentEntityResponse>;
  updateFreeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  updateFullContract?: Maybe<Scalars["Boolean"]>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateInformationMessage?: Maybe<InformationMessageEntityResponse>;
  updateKeyMetric?: Maybe<KeyMetricEntityResponse>;
  updateKeyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  updateMwCounterService?: Maybe<MwCounterServiceEntityResponse>;
  updateMwcFlow?: Maybe<MwcFlowEntityResponse>;
  updateNew?: Maybe<NewEntityResponse>;
  updateNewsSubService?: Maybe<NewsSubServiceEntityResponse>;
  updatePickUpDay?: Maybe<PickUpDayEntityResponse>;
  updatePickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  updateQuiz?: Maybe<QuizEntityResponse>;
  updateQuizAndTipsBlock?: Maybe<QuizAndTipsBlockEntityResponse>;
  updateQuizSubService?: Maybe<QuizSubServiceEntityResponse>;
  updateRecyclingGuideBlock?: Maybe<RecyclingGuideBlockEntityResponse>;
  updateRecyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  updateRequest?: Maybe<RequestEntityResponse>;
  updateRequestAggregate?: Maybe<RequestAggregateEntityResponse>;
  updateRequestService?: Maybe<RequestServiceEntityResponse>;
  updateRequestSlot?: Maybe<RequestSlotEntityResponse>;
  updateRequestTaked?: Maybe<RequestTakedEntityResponse>;
  updateSearchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  updateSectorization?: Maybe<SectorizationEntityResponse>;
  updateServicesBlock?: Maybe<ServicesBlockEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTerritory?: Maybe<TerritoryEntityResponse>;
  updateTerritoryType?: Maybe<TerritoryTypeEntityResponse>;
  updateTip?: Maybe<TipEntityResponse>;
  updateTipSubService?: Maybe<TipSubServiceEntityResponse>;
  updateTopContentBlock?: Maybe<TopContentBlockEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUserDataStorage?: Maybe<UserDataStorageEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWasteFamily?: Maybe<WasteFamilyEntityResponse>;
  updateWasteForm?: Maybe<WasteFormEntityResponse>;
  updateYesWeScanService?: Maybe<YesWeScanServiceEntityResponse>;
  upload: UploadFileEntityResponse;
  uploadFileAndGetId?: Maybe<UploadResult>;
  uploadGraphQL?: Maybe<Scalars["Boolean"]>;
  urlUploader?: Maybe<Scalars["Boolean"]>;
  validateRequest?: Maybe<Scalars["Boolean"]>;
  ywsActivation?: Maybe<Scalars["Boolean"]>;
  ywsDeactivation?: Maybe<Scalars["Boolean"]>;
};

export type MutationAddCommuneToContractArgs = {
  ContractId: Scalars["ID"];
  commune: CommuneInput;
};

export type MutationBulkDeleteMediasArgs = {
  fileRequests: Array<InputMaybe<RequestFile>>;
  folderRequests: Array<InputMaybe<RequestFolder>>;
};

export type MutationBulkMoveMediasArgs = {
  fileRequests?: InputMaybe<Array<InputMaybe<RequestFile>>>;
  folderId: Scalars["ID"];
  folderRequests?: InputMaybe<Array<InputMaybe<RequestFolder>>>;
  path: Scalars["String"];
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationChannelsActivationArgs = {
  contractId: Scalars["ID"];
  typeActivation: Scalars["String"];
};

export type MutationChannelsDeactivationArgs = {
  contractId: Scalars["ID"];
  typeDeactivation: Scalars["String"];
};

export type MutationCheckUnpublishedDateArgs = {
  date?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateAccessibilityArgs = {
  data: AccessibilityInput;
};

export type MutationCreateAccessibilitySubServiceArgs = {
  data: AccessibilitySubServiceInput;
};

export type MutationCreateAlertNotificationArgs = {
  data: AlertNotificationInput;
};

export type MutationCreateAlertNotificationServiceArgs = {
  data: AlertNotificationServiceInput;
};

export type MutationCreateAudienceArgs = {
  data: AudienceInput;
};

export type MutationCreateCguArgs = {
  data: CguInput;
};

export type MutationCreateCguSubServiceArgs = {
  data: CguSubServiceInput;
};

export type MutationCreateChannelTypeArgs = {
  data: ChannelTypeInput;
};

export type MutationCreateCityArgs = {
  data: CityInput;
};

export type MutationCreateClientContactArgs = {
  data: ClientContactInput;
};

export type MutationCreateCollectDoorToDoorArgs = {
  data: CollectDoorToDoorInput;
};

export type MutationCreateCollectDropOffArgs = {
  data: CollectDropOffInput;
};

export type MutationCreateCollectVoluntaryArgs = {
  data: CollectVoluntaryInput;
};

export type MutationCreateConfidentialityArgs = {
  data: ConfidentialityInput;
};

export type MutationCreateConfidentialitySubServiceArgs = {
  data: ConfidentialitySubServiceInput;
};

export type MutationCreateContactUsArgs = {
  data: ContactUsInput;
};

export type MutationCreateContactUsSubServiceArgs = {
  data: ContactUsSubServiceInput;
};

export type MutationCreateContentTypeForContractIdArgs = {
  contractId?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type MutationCreateContractArgs = {
  data: ContractInput;
};

export type MutationCreateContractCustomizationArgs = {
  data: ContractCustomizationInput;
};

export type MutationCreateContractMenuArgs = {
  data: ContractMenuInput;
};

export type MutationCreateCookieArgs = {
  data: CookieInput;
};

export type MutationCreateCookiesSubServiceArgs = {
  data: CookiesSubServiceInput;
};

export type MutationCreateDescriptionServiceArgs = {
  data: DescriptionServiceInput;
};

export type MutationCreateDocumentArgs = {
  data: DocumentInput;
};

export type MutationCreateDropOffMapArgs = {
  data: DropOffMapInput;
};

export type MutationCreateDropOffMapServiceArgs = {
  data: DropOffMapServiceInput;
};

export type MutationCreateEditoBlockArgs = {
  data: EditoBlockInput;
};

export type MutationCreateEditorialServiceArgs = {
  data: EditorialServiceInput;
};

export type MutationCreateEmptyContractArgs = {
  ccap?: InputMaybe<Scalars["Long"]>;
  clear?: InputMaybe<Scalars["Long"]>;
  clientName: Scalars["String"];
  clientType: Scalars["String"];
  contactEmail: Scalars["String"];
  contactFirstName: Scalars["String"];
  contactLastName: Scalars["String"];
  contactPhoneNumber: Scalars["String"];
  isNonExclusive: Scalars["Boolean"];
  isRVFrance: Scalars["Boolean"];
  siretNumber?: InputMaybe<Scalars["Long"]>;
};

export type MutationCreateEpciArgs = {
  data: EpciInput;
};

export type MutationCreateEventArgs = {
  data: EventInput;
};

export type MutationCreateEventSubServiceArgs = {
  data: EventSubServiceInput;
};

export type MutationCreateExportEntityArgs = {
  data: ExportEntityInput;
};

export type MutationCreateFlowArgs = {
  data: FlowInput;
};

export type MutationCreateFlowColorArgs = {
  data: FlowColorInput;
};

export type MutationCreateFooterArgs = {
  data: FooterInput;
};

export type MutationCreateFreeContentArgs = {
  data: FreeContentInput;
};

export type MutationCreateFreeContentSubServiceArgs = {
  data: FreeContentSubServiceInput;
};

export type MutationCreateHomepageArgs = {
  data: HomepageInput;
};

export type MutationCreateInformationMessageArgs = {
  data: InformationMessageInput;
};

export type MutationCreateKeyMetricArgs = {
  data: KeyMetricInput;
};

export type MutationCreateKeyMetricsServiceArgs = {
  data: KeyMetricsServiceInput;
};

export type MutationCreateMwCounterServiceArgs = {
  data: MwCounterServiceInput;
};

export type MutationCreateMwcFlowArgs = {
  data: MwcFlowInput;
};

export type MutationCreateNewArgs = {
  data: NewInput;
};

export type MutationCreateNewFolderArgs = {
  name: Scalars["String"];
  parentFolderPath: Scalars["String"];
  parentFolderPathId: Scalars["ID"];
};

export type MutationCreateNewTagArgs = {
  contractId: Scalars["ID"];
  tagName: Scalars["String"];
};

export type MutationCreateNewsSubServiceArgs = {
  data: NewsSubServiceInput;
};

export type MutationCreatePickUpDayArgs = {
  data: PickUpDayInput;
};

export type MutationCreatePickUpDayServiceArgs = {
  data: PickUpDayServiceInput;
};

export type MutationCreateQuizArgs = {
  data: QuizInput;
};

export type MutationCreateQuizAndTipsBlockArgs = {
  data: QuizAndTipsBlockInput;
};

export type MutationCreateQuizSubServiceArgs = {
  data: QuizSubServiceInput;
};

export type MutationCreateRecyclingGuideBlockArgs = {
  data: RecyclingGuideBlockInput;
};

export type MutationCreateRecyclingGuideServiceArgs = {
  data: RecyclingGuideServiceInput;
};

export type MutationCreateRequestArgs = {
  data: RequestInput;
};

export type MutationCreateRequestAggregateArgs = {
  data: RequestAggregateInput;
};

export type MutationCreateRequestServiceArgs = {
  data: RequestServiceInput;
};

export type MutationCreateRequestSlotArgs = {
  data: RequestSlotInput;
};

export type MutationCreateRequestTakedArgs = {
  data: RequestTakedInput;
};

export type MutationCreateSearchEngineBlockArgs = {
  data: SearchEngineBlockInput;
};

export type MutationCreateSectorizationArgs = {
  data: SectorizationInput;
};

export type MutationCreateServicesBlockArgs = {
  data: ServicesBlockInput;
};

export type MutationCreateTagArgs = {
  data: TagInput;
};

export type MutationCreateTerritoryArgs = {
  data: TerritoryInput;
};

export type MutationCreateTerritoryTypeArgs = {
  data: TerritoryTypeInput;
};

export type MutationCreateTipArgs = {
  data: TipInput;
};

export type MutationCreateTipSubServiceArgs = {
  data: TipSubServiceInput;
};

export type MutationCreateTopContentBlockArgs = {
  data: TopContentBlockInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUserDataStorageArgs = {
  data: UserDataStorageInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCreateWasteFamilyArgs = {
  data: WasteFamilyInput;
};

export type MutationCreateWasteFormArgs = {
  data: WasteFormInput;
};

export type MutationCreateYesWeScanServiceArgs = {
  data: YesWeScanServiceInput;
};

export type MutationCreateYwsServiceArgs = {
  contractId: Scalars["ID"];
  service: ServiceInput;
};

export type MutationDeleteAccessibilityArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteAccessibilitySubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteAlertNotificationArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteAlertNotificationServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteAudienceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCguArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCguSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteChannelTypeArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCityArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteClientContactArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCollectDoorToDoorArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCollectDropOffArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCollectVoluntaryArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteConfidentialityArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteConfidentialitySubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteContactUsArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteContactUsSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteContentArgs = {
  id: Scalars["ID"];
  type?: InputMaybe<Scalars["String"]>;
};

export type MutationDeleteContractArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteContractCustomizationArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteContractMenuArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCookieArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteCookiesSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDescriptionServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDocumentArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDropOffMapArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteDropOffMapServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteEditoBlockArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteEditorialServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteEpciArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteEventArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteEventSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteExportEntityArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteFlowArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteFlowColorArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteFooterArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteFreeContentArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteFreeContentSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteHomepageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteInformationMessageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteKeyMetricArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteKeyMetricsServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteMwCounterServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteMwcFlowArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteNewArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteNewsSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePickUpDayArgs = {
  id: Scalars["ID"];
};

export type MutationDeletePickUpDayServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteQuizArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteQuizAndTipsBlockArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteQuizSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRecyclingGuideBlockArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRecyclingGuideServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRequestArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRequestAggregateArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRequestServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRequestSlotArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteRequestTakedArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteSearchEngineBlockArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteSectorizationArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteServicesBlockArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTagArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTerritoryArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTerritoryTypeArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTipArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTipSubServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteTopContentBlockArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUserDataStorageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteWasteFamilyArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteWasteFormArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteYesWeScanServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteYwsServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDuplicateContentArgs = {
  id: Scalars["ID"];
  type?: InputMaybe<Scalars["String"]>;
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"];
};

export type MutationForgotPasswordArgs = {
  email: Scalars["String"];
};

export type MutationImportMunicipalitiesArgs = {
  contractId?: InputMaybe<Scalars["ID"]>;
  file: Scalars["String"];
};

export type MutationImportSirenArgs = {
  contractId?: InputMaybe<Scalars["ID"]>;
  file: Scalars["String"];
};

export type MutationLogicalDeleteContractArgs = {
  contractId: Scalars["ID"];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  files: Array<InputMaybe<Scalars["Upload"]>>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationProgrammedSendArgs = {
  alertMessage?: InputMaybe<Scalars["String"]>;
  isEmail?: InputMaybe<Scalars["Boolean"]>;
  isImmediate?: InputMaybe<Scalars["Boolean"]>;
  isSMS?: InputMaybe<Scalars["Boolean"]>;
  mailSubject?: InputMaybe<Scalars["String"]>;
  recipientEmail?: InputMaybe<Scalars["String"]>;
  scheduledAt?: InputMaybe<Scalars["Date"]>;
  smsTitle?: InputMaybe<Scalars["String"]>;
  time?: InputMaybe<Scalars["String"]>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars["ID"];
};

export type MutationResetPasswordArgs = {
  code: Scalars["String"];
  password: Scalars["String"];
  passwordConfirmation: Scalars["String"];
};

export type MutationSendEmailArgs = {
  content?: InputMaybe<Scalars["String"]>;
  recipientEmail: Scalars["String"];
  subject?: InputMaybe<Scalars["String"]>;
  templateId?: InputMaybe<Scalars["Int"]>;
};

export type MutationSendSmsArgs = {
  content: Scalars["String"];
  phoneNumber: Array<InputMaybe<Scalars["String"]>>;
  scheduledAt?: InputMaybe<Scalars["String"]>;
  sendMultiple?: InputMaybe<Scalars["Boolean"]>;
};

export type MutationServicesActivationArgs = {
  ServiceName: Scalars["String"];
  contractId: Scalars["ID"];
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  serviceId: Scalars["ID"];
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type MutationSetFlowIsActivatedArgs = {
  code: Scalars["String"];
  id: Scalars["ID"];
  isActivated: Scalars["Boolean"];
};

export type MutationSingleUploadCustomArgs = {
  file: Scalars["Upload"];
};

export type MutationUpdateAccessibilityArgs = {
  data: AccessibilityInput;
  id: Scalars["ID"];
};

export type MutationUpdateAccessibilitySubServiceArgs = {
  data: AccessibilitySubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateAlertNotificationArgs = {
  data: AlertNotificationInput;
  id: Scalars["ID"];
};

export type MutationUpdateAlertNotificationServiceArgs = {
  data: AlertNotificationServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateAudienceArgs = {
  data: AudienceInput;
  id: Scalars["ID"];
};

export type MutationUpdateCguArgs = {
  data: CguInput;
  id: Scalars["ID"];
};

export type MutationUpdateCguSubServiceArgs = {
  data: CguSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateChannelTypeArgs = {
  data: ChannelTypeInput;
  id: Scalars["ID"];
};

export type MutationUpdateCityArgs = {
  data: CityInput;
  id: Scalars["ID"];
};

export type MutationUpdateClientContactArgs = {
  data: ClientContactInput;
  id: Scalars["ID"];
};

export type MutationUpdateCollectDoorToDoorArgs = {
  data: CollectDoorToDoorInput;
  id: Scalars["ID"];
};

export type MutationUpdateCollectDropOffArgs = {
  data: CollectDropOffInput;
  id: Scalars["ID"];
};

export type MutationUpdateCollectVoluntaryArgs = {
  data: CollectVoluntaryInput;
  id: Scalars["ID"];
};

export type MutationUpdateConfidentialityArgs = {
  data: ConfidentialityInput;
  id: Scalars["ID"];
};

export type MutationUpdateConfidentialitySubServiceArgs = {
  data: ConfidentialitySubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateContactMwcArgs = {
  city?: InputMaybe<Scalars["String"]>;
  contactEmail?: InputMaybe<Scalars["String"]>;
  contractId: Scalars["ID"];
  phoneNumber?: InputMaybe<Scalars["String"]>;
  postalAddress?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["String"]>;
  serviceName?: InputMaybe<Scalars["String"]>;
};

export type MutationUpdateContactUsArgs = {
  data: ContactUsInput;
  id: Scalars["ID"];
};

export type MutationUpdateContactUsSubServiceArgs = {
  data: ContactUsSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateContractArgs = {
  data: ContractInput;
  id: Scalars["ID"];
};

export type MutationUpdateContractCustomizationArgs = {
  data: ContractCustomizationInput;
  id: Scalars["ID"];
};

export type MutationUpdateContractMenuArgs = {
  data: ContractMenuInput;
  id: Scalars["ID"];
};

export type MutationUpdateContractNumberOfInhabitantsArgs = {
  contractId: Scalars["ID"];
  numberOfInhabitants: Scalars["Int"];
};

export type MutationUpdateCookieArgs = {
  data: CookieInput;
  id: Scalars["ID"];
};

export type MutationUpdateCookiesSubServiceArgs = {
  data: CookiesSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateDescriptionServiceArgs = {
  data: DescriptionServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateDocumentArgs = {
  data: DocumentInput;
  id: Scalars["ID"];
};

export type MutationUpdateDropOffMapArgs = {
  data: DropOffMapInput;
  id: Scalars["ID"];
};

export type MutationUpdateDropOffMapServiceArgs = {
  data: DropOffMapServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateEditoBlockArgs = {
  data: EditoBlockInput;
  id: Scalars["ID"];
};

export type MutationUpdateEditorialServiceArgs = {
  data: EditorialServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateEpciArgs = {
  data: EpciInput;
  id: Scalars["ID"];
};

export type MutationUpdateEventArgs = {
  data: EventInput;
  id: Scalars["ID"];
};

export type MutationUpdateEventSubServiceArgs = {
  data: EventSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateExportEntityArgs = {
  data: ExportEntityInput;
  id: Scalars["ID"];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars["ID"];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationUpdateFlowArgs = {
  data: FlowInput;
  id: Scalars["ID"];
};

export type MutationUpdateFlowColorArgs = {
  data: FlowColorInput;
  id: Scalars["ID"];
};

export type MutationUpdateFooterArgs = {
  data: FooterInput;
  id: Scalars["ID"];
};

export type MutationUpdateFreeContentArgs = {
  data: FreeContentInput;
  id: Scalars["ID"];
};

export type MutationUpdateFreeContentSubServiceArgs = {
  data: FreeContentSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateFullContractArgs = {
  clientData: ClientContactInput;
  contractData: ContractInput;
  contractId: Scalars["ID"];
};

export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};

export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  id: Scalars["ID"];
};

export type MutationUpdateInformationMessageArgs = {
  data: InformationMessageInput;
  id: Scalars["ID"];
};

export type MutationUpdateKeyMetricArgs = {
  data: KeyMetricInput;
  id: Scalars["ID"];
};

export type MutationUpdateKeyMetricsServiceArgs = {
  data: KeyMetricsServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateMwCounterServiceArgs = {
  data: MwCounterServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateMwcFlowArgs = {
  data: MwcFlowInput;
  id: Scalars["ID"];
};

export type MutationUpdateNewArgs = {
  data: NewInput;
  id: Scalars["ID"];
};

export type MutationUpdateNewsSubServiceArgs = {
  data: NewsSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdatePickUpDayArgs = {
  data: PickUpDayInput;
  id: Scalars["ID"];
};

export type MutationUpdatePickUpDayServiceArgs = {
  data: PickUpDayServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateQuizArgs = {
  data: QuizInput;
  id: Scalars["ID"];
};

export type MutationUpdateQuizAndTipsBlockArgs = {
  data: QuizAndTipsBlockInput;
  id: Scalars["ID"];
};

export type MutationUpdateQuizSubServiceArgs = {
  data: QuizSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateRecyclingGuideBlockArgs = {
  data: RecyclingGuideBlockInput;
  id: Scalars["ID"];
};

export type MutationUpdateRecyclingGuideServiceArgs = {
  data: RecyclingGuideServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateRequestArgs = {
  data: RequestInput;
  id: Scalars["ID"];
};

export type MutationUpdateRequestAggregateArgs = {
  data: RequestAggregateInput;
  id: Scalars["ID"];
};

export type MutationUpdateRequestServiceArgs = {
  data: RequestServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateRequestSlotArgs = {
  data: RequestSlotInput;
  id: Scalars["ID"];
};

export type MutationUpdateRequestTakedArgs = {
  data: RequestTakedInput;
  id: Scalars["ID"];
};

export type MutationUpdateSearchEngineBlockArgs = {
  data: SearchEngineBlockInput;
  id: Scalars["ID"];
};

export type MutationUpdateSectorizationArgs = {
  data: SectorizationInput;
  id: Scalars["ID"];
};

export type MutationUpdateServicesBlockArgs = {
  data: ServicesBlockInput;
  id: Scalars["ID"];
};

export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars["ID"];
};

export type MutationUpdateTerritoryArgs = {
  data: TerritoryInput;
  id: Scalars["ID"];
};

export type MutationUpdateTerritoryTypeArgs = {
  data: TerritoryTypeInput;
  id: Scalars["ID"];
};

export type MutationUpdateTipArgs = {
  data: TipInput;
  id: Scalars["ID"];
};

export type MutationUpdateTipSubServiceArgs = {
  data: TipSubServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateTopContentBlockArgs = {
  data: TopContentBlockInput;
  id: Scalars["ID"];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars["ID"];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars["ID"];
};

export type MutationUpdateUserDataStorageArgs = {
  data: UserDataStorageInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
};

export type MutationUpdateWasteFamilyArgs = {
  data: WasteFamilyInput;
  id: Scalars["ID"];
};

export type MutationUpdateWasteFormArgs = {
  data: WasteFormInput;
  id: Scalars["ID"];
};

export type MutationUpdateYesWeScanServiceArgs = {
  data: YesWeScanServiceInput;
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUploadFileAndGetIdArgs = {
  path: Scalars["String"];
};

export type MutationUploadGraphQlArgs = {
  field?: InputMaybe<Scalars["String"]>;
  file: Scalars["Upload"];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars["String"]>;
  refId?: InputMaybe<Scalars["ID"]>;
};

export type MutationUrlUploaderArgs = {
  imageName: Scalars["String"];
  url: Scalars["String"];
};

export type MutationValidateRequestArgs = {
  requestJSON?: InputMaybe<Scalars["JSON"]>;
};

export type MutationYwsActivationArgs = {
  contractId: Scalars["ID"];
};

export type MutationYwsDeactivationArgs = {
  contractId: Scalars["ID"];
};

export type MwCounterService = {
  __typename?: "MwCounterService";
  cities?: Maybe<CityRelationResponseCollection>;
  city?: Maybe<Scalars["String"]>;
  contactEmail?: Maybe<Scalars["String"]>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  mwcFlows?: Maybe<MwcFlowRelationResponseCollection>;
  name?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["Long"]>;
  postalAddress?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["Long"]>;
  serviceName?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type MwCounterServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MwCounterServiceMwcFlowsArgs = {
  filters?: InputMaybe<MwcFlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type MwCounterServiceEntity = {
  __typename?: "MwCounterServiceEntity";
  attributes?: Maybe<MwCounterService>;
  id?: Maybe<Scalars["ID"]>;
};

export type MwCounterServiceEntityResponse = {
  __typename?: "MwCounterServiceEntityResponse";
  data?: Maybe<MwCounterServiceEntity>;
};

export type MwCounterServiceEntityResponseCollection = {
  __typename?: "MwCounterServiceEntityResponseCollection";
  data: Array<MwCounterServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type MwCounterServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MwCounterServiceFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  city?: InputMaybe<StringFilterInput>;
  contactEmail?: InputMaybe<StringFilterInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  mwcFlows?: InputMaybe<MwcFlowFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<MwCounterServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MwCounterServiceFiltersInput>>>;
  phoneNumber?: InputMaybe<LongFilterInput>;
  postalAddress?: InputMaybe<StringFilterInput>;
  postalCode?: InputMaybe<LongFilterInput>;
  serviceName?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MwCounterServiceInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  city?: InputMaybe<Scalars["String"]>;
  contactEmail?: InputMaybe<Scalars["String"]>;
  contract?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  mwcFlows?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["Long"]>;
  postalAddress?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["Long"]>;
  serviceName?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type MwCounterServiceRelationResponseCollection = {
  __typename?: "MwCounterServiceRelationResponseCollection";
  data: Array<MwCounterServiceEntity>;
};

export type MwcFlow = {
  __typename?: "MwcFlow";
  averageProductionPerson?: Maybe<Scalars["Long"]>;
  blocks?: Maybe<Array<Maybe<MwcFlowBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  flow?: Maybe<FlowEntityResponse>;
  mwCounterService?: Maybe<MwCounterServiceEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  weightSystem?: Maybe<Enum_Mwcflow_Weightsystem>;
};

export type MwcFlowBlocksDynamicZone =
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type MwcFlowEntity = {
  __typename?: "MwcFlowEntity";
  attributes?: Maybe<MwcFlow>;
  id?: Maybe<Scalars["ID"]>;
};

export type MwcFlowEntityResponse = {
  __typename?: "MwcFlowEntityResponse";
  data?: Maybe<MwcFlowEntity>;
};

export type MwcFlowEntityResponseCollection = {
  __typename?: "MwcFlowEntityResponseCollection";
  data: Array<MwcFlowEntity>;
  meta: ResponseCollectionMeta;
};

export type MwcFlowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MwcFlowFiltersInput>>>;
  averageProductionPerson?: InputMaybe<LongFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  flow?: InputMaybe<FlowFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  mwCounterService?: InputMaybe<MwCounterServiceFiltersInput>;
  not?: InputMaybe<MwcFlowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MwcFlowFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  weightSystem?: InputMaybe<StringFilterInput>;
};

export type MwcFlowInput = {
  averageProductionPerson?: InputMaybe<Scalars["Long"]>;
  blocks?: InputMaybe<Array<Scalars["MwcFlowBlocksDynamicZoneInput"]>>;
  flow?: InputMaybe<Scalars["ID"]>;
  mwCounterService?: InputMaybe<Scalars["ID"]>;
  weightSystem?: InputMaybe<Enum_Mwcflow_Weightsystem>;
};

export type MwcFlowRelationResponseCollection = {
  __typename?: "MwcFlowRelationResponseCollection";
  data: Array<MwcFlowEntity>;
};

export type New = {
  __typename?: "New";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  blocks?: Maybe<Array<Maybe<NewBlocksDynamicZone>>>;
  channels?: Maybe<ChannelTypeRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<UploadFileEntityResponse>;
  linkToServices?: Maybe<Array<Maybe<NewLinkToServicesDynamicZone>>>;
  newsSubService?: Maybe<NewsSubServiceEntityResponse>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_New_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars["String"];
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type NewAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type NewChannelsArgs = {
  filters?: InputMaybe<ChannelTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type NewTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type NewBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type NewEntity = {
  __typename?: "NewEntity";
  attributes?: Maybe<New>;
  id?: Maybe<Scalars["ID"]>;
};

export type NewEntityResponse = {
  __typename?: "NewEntityResponse";
  data?: Maybe<NewEntity>;
};

export type NewEntityResponseCollection = {
  __typename?: "NewEntityResponseCollection";
  data: Array<NewEntity>;
  meta: ResponseCollectionMeta;
};

export type NewFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  channels?: InputMaybe<ChannelTypeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  newsSubService?: InputMaybe<NewsSubServiceFiltersInput>;
  not?: InputMaybe<NewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type NewInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  blocks?: InputMaybe<Array<Scalars["NewBlocksDynamicZoneInput"]>>;
  channels?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  image?: InputMaybe<Scalars["ID"]>;
  linkToServices?: InputMaybe<
    Array<Scalars["NewLinkToServicesDynamicZoneInput"]>
  >;
  newsSubService?: InputMaybe<Scalars["ID"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_New_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type NewLinkToServicesDynamicZone =
  | ComponentLinksAlertNotification
  | ComponentLinksDropOffMap
  | ComponentLinksEditorial
  | ComponentLinksPickUpDay
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | Error;

export type NewRelationResponseCollection = {
  __typename?: "NewRelationResponseCollection";
  data: Array<NewEntity>;
};

export type NewsSubService = {
  __typename?: "NewsSubService";
  cities?: Maybe<CityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  news?: Maybe<NewRelationResponseCollection>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NewsSubServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type NewsSubServiceNewsArgs = {
  filters?: InputMaybe<NewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type NewsSubServiceEntity = {
  __typename?: "NewsSubServiceEntity";
  attributes?: Maybe<NewsSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type NewsSubServiceEntityResponse = {
  __typename?: "NewsSubServiceEntityResponse";
  data?: Maybe<NewsSubServiceEntity>;
};

export type NewsSubServiceEntityResponseCollection = {
  __typename?: "NewsSubServiceEntityResponseCollection";
  data: Array<NewsSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewsSubServiceFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  news?: InputMaybe<NewFiltersInput>;
  not?: InputMaybe<NewsSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsSubServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type NewsSubServiceInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  news?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type NewsSubServiceRelationResponseCollection = {
  __typename?: "NewsSubServiceRelationResponseCollection";
  data: Array<NewsSubServiceEntity>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"];
  pageCount: Scalars["Int"];
  pageSize: Scalars["Int"];
  total: Scalars["Int"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]>;
  page?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  start?: InputMaybe<Scalars["Int"]>;
};

export type PickUpDay = {
  __typename?: "PickUpDay";
  advancedSelection: Scalars["JSON"];
  buttonLabel?: Maybe<Scalars["String"]>;
  cities?: Maybe<CityRelationResponseCollection>;
  collectDoorToDoor?: Maybe<CollectDoorToDoorEntityResponse>;
  collectVoluntary?: Maybe<CollectVoluntaryEntityResponse>;
  complementaryMention?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  externalLink?: Maybe<Scalars["String"]>;
  flow: FlowEntityResponse;
  includeHoliday: Scalars["Boolean"];
  informationMessage?: Maybe<InformationMessageEntityResponse>;
  name: Scalars["String"];
  periodicity?: Maybe<Enum_Pickupday_Periodicity>;
  pickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  pickUpHours?: Maybe<Scalars["String"]>;
  request?: Maybe<RequestEntityResponse>;
  sectorizations?: Maybe<SectorizationRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PickUpDayCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PickUpDaySectorizationsArgs = {
  filters?: InputMaybe<SectorizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PickUpDayEntity = {
  __typename?: "PickUpDayEntity";
  attributes?: Maybe<PickUpDay>;
  id?: Maybe<Scalars["ID"]>;
};

export type PickUpDayEntityResponse = {
  __typename?: "PickUpDayEntityResponse";
  data?: Maybe<PickUpDayEntity>;
};

export type PickUpDayEntityResponseCollection = {
  __typename?: "PickUpDayEntityResponseCollection";
  data: Array<PickUpDayEntity>;
  meta: ResponseCollectionMeta;
};

export type PickUpDayFiltersInput = {
  advancedSelection?: InputMaybe<JsonFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PickUpDayFiltersInput>>>;
  buttonLabel?: InputMaybe<StringFilterInput>;
  cities?: InputMaybe<CityFiltersInput>;
  collectDoorToDoor?: InputMaybe<CollectDoorToDoorFiltersInput>;
  collectVoluntary?: InputMaybe<CollectVoluntaryFiltersInput>;
  complementaryMention?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  externalLink?: InputMaybe<StringFilterInput>;
  flow?: InputMaybe<FlowFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  includeHoliday?: InputMaybe<BooleanFilterInput>;
  informationMessage?: InputMaybe<InformationMessageFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PickUpDayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PickUpDayFiltersInput>>>;
  periodicity?: InputMaybe<StringFilterInput>;
  pickUpDayService?: InputMaybe<PickUpDayServiceFiltersInput>;
  pickUpHours?: InputMaybe<StringFilterInput>;
  request?: InputMaybe<RequestFiltersInput>;
  sectorizations?: InputMaybe<SectorizationFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PickUpDayInput = {
  advancedSelection?: InputMaybe<Scalars["JSON"]>;
  buttonLabel?: InputMaybe<Scalars["String"]>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  collectDoorToDoor?: InputMaybe<Scalars["ID"]>;
  collectVoluntary?: InputMaybe<Scalars["ID"]>;
  complementaryMention?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  externalLink?: InputMaybe<Scalars["String"]>;
  flow?: InputMaybe<Scalars["ID"]>;
  includeHoliday?: InputMaybe<Scalars["Boolean"]>;
  informationMessage?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
  periodicity?: InputMaybe<Enum_Pickupday_Periodicity>;
  pickUpDayService?: InputMaybe<Scalars["ID"]>;
  pickUpHours?: InputMaybe<Scalars["String"]>;
  request?: InputMaybe<Scalars["ID"]>;
  sectorizations?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type PickUpDayRelationResponseCollection = {
  __typename?: "PickUpDayRelationResponseCollection";
  data: Array<PickUpDayEntity>;
};

export type PickUpDayService = {
  __typename?: "PickUpDayService";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  pickUpDays?: Maybe<PickUpDayRelationResponseCollection>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PickUpDayServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PickUpDayServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PickUpDayServicePickUpDaysArgs = {
  filters?: InputMaybe<PickUpDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type PickUpDayServiceEntity = {
  __typename?: "PickUpDayServiceEntity";
  attributes?: Maybe<PickUpDayService>;
  id?: Maybe<Scalars["ID"]>;
};

export type PickUpDayServiceEntityResponse = {
  __typename?: "PickUpDayServiceEntityResponse";
  data?: Maybe<PickUpDayServiceEntity>;
};

export type PickUpDayServiceEntityResponseCollection = {
  __typename?: "PickUpDayServiceEntityResponseCollection";
  data: Array<PickUpDayServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type PickUpDayServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PickUpDayServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PickUpDayServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PickUpDayServiceFiltersInput>>>;
  pickUpDays?: InputMaybe<PickUpDayFiltersInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PickUpDayServiceInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  pickUpDays?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type PickUpDayServiceRelationResponseCollection = {
  __typename?: "PickUpDayServiceRelationResponseCollection";
  data: Array<PickUpDayServiceEntity>;
};

export type PictoDto = {
  __typename?: "PictoDTO";
  alternativeText?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  name: Scalars["String"];
  url: Scalars["String"];
};

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  GetHomeDataMwc?: Maybe<HomeDataMwc>;
  accessibilities?: Maybe<AccessibilityEntityResponseCollection>;
  accessibility?: Maybe<AccessibilityEntityResponse>;
  accessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  accessibilitySubServices?: Maybe<AccessibilitySubServiceEntityResponseCollection>;
  alertNotification?: Maybe<AlertNotificationEntityResponse>;
  alertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  alertNotificationServices?: Maybe<AlertNotificationServiceEntityResponseCollection>;
  alertNotifications?: Maybe<AlertNotificationEntityResponseCollection>;
  audience?: Maybe<AudienceEntityResponse>;
  audiences?: Maybe<AudienceEntityResponseCollection>;
  cgu?: Maybe<CguEntityResponse>;
  cguSubService?: Maybe<CguSubServiceEntityResponse>;
  cguSubServices?: Maybe<CguSubServiceEntityResponseCollection>;
  cgus?: Maybe<CguEntityResponseCollection>;
  channelType?: Maybe<ChannelTypeEntityResponse>;
  channelTypes?: Maybe<ChannelTypeEntityResponseCollection>;
  cities?: Maybe<CityEntityResponseCollection>;
  city?: Maybe<CityEntityResponse>;
  clientContact?: Maybe<ClientContactEntityResponse>;
  clientContacts?: Maybe<ClientContactEntityResponseCollection>;
  collectDoorToDoor?: Maybe<CollectDoorToDoorEntityResponse>;
  collectDoorToDoors?: Maybe<CollectDoorToDoorEntityResponseCollection>;
  collectDropOff?: Maybe<CollectDropOffEntityResponse>;
  collectDropOffs?: Maybe<CollectDropOffEntityResponseCollection>;
  collectVoluntaries?: Maybe<CollectVoluntaryEntityResponseCollection>;
  collectVoluntary?: Maybe<CollectVoluntaryEntityResponse>;
  confidentialities?: Maybe<ConfidentialityEntityResponseCollection>;
  confidentiality?: Maybe<ConfidentialityEntityResponse>;
  confidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
  confidentialitySubServices?: Maybe<ConfidentialitySubServiceEntityResponseCollection>;
  contactUs?: Maybe<ContactUsEntityResponse>;
  contactUsSubService?: Maybe<ContactUsSubServiceEntityResponse>;
  contactUsSubServices?: Maybe<ContactUsSubServiceEntityResponseCollection>;
  contactUses?: Maybe<ContactUsEntityResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  contractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  contractCustomizations?: Maybe<ContractCustomizationEntityResponseCollection>;
  contractMenu?: Maybe<ContractMenuEntityResponse>;
  contractMenus?: Maybe<ContractMenuEntityResponseCollection>;
  contractPublication?: Maybe<ContractStatus>;
  contracts?: Maybe<ContractEntityResponseCollection>;
  cookie?: Maybe<CookieEntityResponse>;
  cookies?: Maybe<CookieEntityResponseCollection>;
  cookiesSubService?: Maybe<CookiesSubServiceEntityResponse>;
  cookiesSubServices?: Maybe<CookiesSubServiceEntityResponseCollection>;
  countContentPerTag?: Maybe<Array<Maybe<TotalCountPerTag>>>;
  descriptionService?: Maybe<DescriptionServiceEntityResponse>;
  descriptionServices?: Maybe<DescriptionServiceEntityResponseCollection>;
  document?: Maybe<DocumentEntityResponse>;
  documents?: Maybe<DocumentEntityResponseCollection>;
  dropOffMap?: Maybe<DropOffMapEntityResponse>;
  dropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  dropOffMapServices?: Maybe<DropOffMapServiceEntityResponseCollection>;
  dropOffMaps?: Maybe<DropOffMapEntityResponseCollection>;
  editoBlock?: Maybe<EditoBlockEntityResponse>;
  editoBlocks?: Maybe<EditoBlockEntityResponseCollection>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  editorialServices?: Maybe<EditorialServiceEntityResponseCollection>;
  epci?: Maybe<EpciEntityResponse>;
  epcis?: Maybe<EpciEntityResponseCollection>;
  event?: Maybe<EventEntityResponse>;
  eventSubService?: Maybe<EventSubServiceEntityResponse>;
  eventSubServices?: Maybe<EventSubServiceEntityResponseCollection>;
  events?: Maybe<EventEntityResponseCollection>;
  exportEntities?: Maybe<ExportEntityEntityResponseCollection>;
  exportEntity?: Maybe<ExportEntityEntityResponse>;
  files: Array<Maybe<File>>;
  flow?: Maybe<FlowEntityResponse>;
  flowColor?: Maybe<FlowColorEntityResponse>;
  flowColors?: Maybe<FlowColorEntityResponseCollection>;
  flows?: Maybe<FlowEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  footers?: Maybe<FooterEntityResponseCollection>;
  freeContent?: Maybe<FreeContentEntityResponse>;
  freeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  freeContentSubServices?: Maybe<FreeContentSubServiceEntityResponseCollection>;
  freeContents?: Maybe<FreeContentEntityResponseCollection>;
  getAddressCoordinates?: Maybe<Array<Maybe<SearchResultAddress>>>;
  getAllFoldersHierarchy?: Maybe<Array<Maybe<RequestFolders>>>;
  getAppointmentsDetails?: Maybe<AppointmentDetails>;
  getBinId?: Maybe<Array<Maybe<Data>>>;
  getContentTypeDTOs?: Maybe<Array<Maybe<ContentTypeDto>>>;
  getDropOffCollectType?: Maybe<Array<Maybe<CollectEntity>>>;
  getDropOffMaps?: Maybe<Array<Maybe<DropOffMapDto>>>;
  getEditoBlockDTO?: Maybe<EditoBlockDto>;
  getEditoContentDTOs?: Maybe<Array<Maybe<EditoContentDto>>>;
  getFilePath?: Maybe<Scalars["String"]>;
  getFolderHierarchy?: Maybe<Array<Maybe<RequestFolders>>>;
  getNewestTopContents?: Maybe<Array<Maybe<EventOrNews>>>;
  getNextAvailableSlots?: Maybe<Array<Maybe<AvailableSlot>>>;
  getPickUpDaysByCoordinates?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  getStatusExport?: Maybe<Scalars["String"]>;
  getTopContentBlockDTO?: Maybe<TopContentBlockDto>;
  getTopContentDTOs?: Maybe<Array<Maybe<EditoContentDto>>>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  homepages?: Maybe<HomepageEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  informationMessage?: Maybe<InformationMessageEntityResponse>;
  informationMessages?: Maybe<InformationMessageEntityResponseCollection>;
  keyMetric?: Maybe<KeyMetricEntityResponse>;
  keyMetrics?: Maybe<KeyMetricEntityResponseCollection>;
  keyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  keyMetricsServices?: Maybe<KeyMetricsServiceEntityResponseCollection>;
  libraryBreadcrumbTrail?: Maybe<Array<Maybe<Folders>>>;
  librarySearchEngine?: Maybe<Array<Maybe<RequestFileOrFolder>>>;
  me?: Maybe<UsersPermissionsMe>;
  mwCounterService?: Maybe<MwCounterServiceEntityResponse>;
  mwCounterServices?: Maybe<MwCounterServiceEntityResponseCollection>;
  mwcFlow?: Maybe<MwcFlowEntityResponse>;
  mwcFlows?: Maybe<MwcFlowEntityResponseCollection>;
  new?: Maybe<NewEntityResponse>;
  news?: Maybe<NewEntityResponseCollection>;
  newsSubService?: Maybe<NewsSubServiceEntityResponse>;
  newsSubServices?: Maybe<NewsSubServiceEntityResponseCollection>;
  pickUpDay?: Maybe<PickUpDayEntityResponse>;
  pickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  pickUpDayServices?: Maybe<PickUpDayServiceEntityResponseCollection>;
  pickUpDays?: Maybe<PickUpDayEntityResponseCollection>;
  quiz?: Maybe<QuizEntityResponse>;
  quizAndTipsBlock?: Maybe<QuizAndTipsBlockEntityResponse>;
  quizAndTipsBlocks?: Maybe<QuizAndTipsBlockEntityResponseCollection>;
  quizSubService?: Maybe<QuizSubServiceEntityResponse>;
  quizSubServices?: Maybe<QuizSubServiceEntityResponseCollection>;
  quizzes?: Maybe<QuizEntityResponseCollection>;
  recyclingGuideBlock?: Maybe<RecyclingGuideBlockEntityResponse>;
  recyclingGuideBlocks?: Maybe<RecyclingGuideBlockEntityResponseCollection>;
  recyclingGuideSearchEngine?: Maybe<Array<Maybe<SearchResult>>>;
  recyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  recyclingGuideServices?: Maybe<RecyclingGuideServiceEntityResponseCollection>;
  request?: Maybe<RequestEntityResponse>;
  requestAggregate?: Maybe<RequestAggregateEntityResponse>;
  requestAggregates?: Maybe<RequestAggregateEntityResponseCollection>;
  requestService?: Maybe<RequestServiceEntityResponse>;
  requestServices?: Maybe<RequestServiceEntityResponseCollection>;
  requestSlot?: Maybe<RequestSlotEntityResponse>;
  requestSlots?: Maybe<RequestSlotEntityResponseCollection>;
  requestTaked?: Maybe<RequestTakedEntityResponse>;
  requestTakeds?: Maybe<RequestTakedEntityResponseCollection>;
  requests?: Maybe<RequestEntityResponseCollection>;
  searchAddress?: Maybe<Array<Maybe<Address>>>;
  searchCities?: Maybe<Array<Maybe<CityResult>>>;
  searchClientsByName?: Maybe<Array<Maybe<ClientName>>>;
  searchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  searchEngineBlocks?: Maybe<SearchEngineBlockEntityResponseCollection>;
  sectorization?: Maybe<SectorizationEntityResponse>;
  sectorizationByCity?: Maybe<CitySectorization>;
  sectorizations?: Maybe<SectorizationEntityResponseCollection>;
  servicesBlock?: Maybe<ServicesBlockEntityResponse>;
  servicesBlocks?: Maybe<ServicesBlockEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  territories?: Maybe<TerritoryEntityResponseCollection>;
  territory?: Maybe<TerritoryEntityResponse>;
  territoryType?: Maybe<TerritoryTypeEntityResponse>;
  territoryTypes?: Maybe<TerritoryTypeEntityResponseCollection>;
  tip?: Maybe<TipEntityResponse>;
  tipSubService?: Maybe<TipSubServiceEntityResponse>;
  tipSubServices?: Maybe<TipSubServiceEntityResponseCollection>;
  tips?: Maybe<TipEntityResponseCollection>;
  topContentBlock?: Maybe<TopContentBlockEntityResponse>;
  topContentBlocks?: Maybe<TopContentBlockEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  userDataStorage?: Maybe<UserDataStorageEntityResponse>;
  userDataStorages?: Maybe<UserDataStorageEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  wasteFamilies?: Maybe<WasteFamilyEntityResponseCollection>;
  wasteFamily?: Maybe<WasteFamilyEntityResponse>;
  wasteFamilyLength?: Maybe<Scalars["Int"]>;
  wasteForm?: Maybe<WasteFormEntityResponse>;
  wasteForms?: Maybe<WasteFormEntityResponseCollection>;
  yesWeScanService?: Maybe<YesWeScanServiceEntityResponse>;
  yesWeScanServices?: Maybe<YesWeScanServiceEntityResponseCollection>;
};

export type QueryGetHomeDataMwcArgs = {
  Agregation: Scalars["String"];
  address: Scalars["String"];
  averageProductionPerPerson: Scalars["Int"];
  dateDebut: Scalars["String"];
  dateFin: Scalars["String"];
  numberOfPeopleIntheHousehold: Scalars["Int"];
  typeUsager: Scalars["String"];
};

export type QueryAccessibilitiesArgs = {
  filters?: InputMaybe<AccessibilityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryAccessibilityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAccessibilitySubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAccessibilitySubServicesArgs = {
  filters?: InputMaybe<AccessibilitySubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryAlertNotificationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAlertNotificationServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAlertNotificationServicesArgs = {
  filters?: InputMaybe<AlertNotificationServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryAlertNotificationsArgs = {
  filters?: InputMaybe<AlertNotificationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryAudienceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCguArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCguSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCguSubServicesArgs = {
  filters?: InputMaybe<CguSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCgusArgs = {
  filters?: InputMaybe<CguFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryChannelTypeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryChannelTypesArgs = {
  filters?: InputMaybe<ChannelTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryClientContactArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryClientContactsArgs = {
  filters?: InputMaybe<ClientContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCollectDoorToDoorArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCollectDoorToDoorsArgs = {
  filters?: InputMaybe<CollectDoorToDoorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCollectDropOffArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCollectDropOffsArgs = {
  filters?: InputMaybe<CollectDropOffFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCollectVoluntariesArgs = {
  filters?: InputMaybe<CollectVoluntaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCollectVoluntaryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryConfidentialitiesArgs = {
  filters?: InputMaybe<ConfidentialityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryConfidentialityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryConfidentialitySubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryConfidentialitySubServicesArgs = {
  filters?: InputMaybe<ConfidentialitySubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryContactUsArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryContactUsSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryContactUsSubServicesArgs = {
  filters?: InputMaybe<ContactUsSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryContactUsesArgs = {
  filters?: InputMaybe<ContactUsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryContractArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryContractCustomizationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryContractCustomizationsArgs = {
  filters?: InputMaybe<ContractCustomizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryContractMenuArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryContractMenusArgs = {
  filters?: InputMaybe<ContractMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryContractPublicationArgs = {
  contractId: Scalars["ID"];
};

export type QueryContractsArgs = {
  filters?: InputMaybe<ContractFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCookieArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCookiesArgs = {
  filters?: InputMaybe<CookieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCookiesSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCookiesSubServicesArgs = {
  filters?: InputMaybe<CookiesSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryCountContentPerTagArgs = {
  contractId: Scalars["ID"];
};

export type QueryDescriptionServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryDescriptionServicesArgs = {
  filters?: InputMaybe<DescriptionServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryDocumentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryDocumentsArgs = {
  filters?: InputMaybe<DocumentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryDropOffMapArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryDropOffMapServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryDropOffMapServicesArgs = {
  filters?: InputMaybe<DropOffMapServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryDropOffMapsArgs = {
  filters?: InputMaybe<DropOffMapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryEditoBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEditoBlocksArgs = {
  filters?: InputMaybe<EditoBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryEditorialServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEditorialServicesArgs = {
  filters?: InputMaybe<EditorialServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryEpciArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEpcisArgs = {
  filters?: InputMaybe<EpciFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryEventArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEventSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEventSubServicesArgs = {
  filters?: InputMaybe<EventSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryEventsArgs = {
  filters?: InputMaybe<EventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryExportEntitiesArgs = {
  filters?: InputMaybe<ExportEntityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryExportEntityArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFlowArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFlowColorArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFlowColorsArgs = {
  filters?: InputMaybe<FlowColorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryFlowsArgs = {
  filters?: InputMaybe<FlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryFooterArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFootersArgs = {
  filters?: InputMaybe<FooterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryFreeContentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFreeContentSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryFreeContentSubServicesArgs = {
  filters?: InputMaybe<FreeContentSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryFreeContentsArgs = {
  filters?: InputMaybe<FreeContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryGetAddressCoordinatesArgs = {
  searchTerm: Scalars["String"];
};

export type QueryGetAllFoldersHierarchyArgs = {
  path: Scalars["String"];
};

export type QueryGetAppointmentsDetailsArgs = {
  requestId: Scalars["ID"];
};

export type QueryGetBinIdArgs = {
  city?: InputMaybe<Scalars["String"]>;
  contractMetadataKey?: InputMaybe<Scalars["String"]>;
  houseNumber?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
};

export type QueryGetContentTypeDtOsArgs = {
  contractId: Scalars["ID"];
};

export type QueryGetDropOffCollectTypeArgs = {
  contractId: Scalars["ID"];
};

export type QueryGetDropOffMapsArgs = {
  dropOffMapServiceId: Scalars["ID"];
};

export type QueryGetEditoBlockDtoArgs = {
  contractId: Scalars["ID"];
  status?: InputMaybe<Enum_Editocontentdto_Status>;
};

export type QueryGetEditoContentDtOsArgs = {
  contractId: Scalars["ID"];
  status?: InputMaybe<Enum_Editocontentdto_Status>;
};

export type QueryGetFilePathArgs = {
  id: Scalars["ID"];
};

export type QueryGetFolderHierarchyArgs = {
  path: Scalars["String"];
};

export type QueryGetNewestTopContentsArgs = {
  contractId: Scalars["ID"];
};

export type QueryGetNextAvailableSlotsArgs = {
  lat: Scalars["Float"];
  long: Scalars["Float"];
  requestId: Scalars["ID"];
};

export type QueryGetPickUpDaysByCoordinatesArgs = {
  lat: Scalars["Float"];
  long: Scalars["Float"];
  pickUpDayServiceId: Scalars["ID"];
};

export type QueryGetStatusExportArgs = {
  id: Scalars["ID"];
};

export type QueryGetTopContentBlockDtoArgs = {
  contractId: Scalars["ID"];
  status?: InputMaybe<Enum_Topcontentdto_Status>;
};

export type QueryGetTopContentDtOsArgs = {
  contractId: Scalars["ID"];
  status?: InputMaybe<Enum_Topcontentdto_Status>;
};

export type QueryHomepageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryHomepagesArgs = {
  filters?: InputMaybe<HomepageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryInformationMessageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryInformationMessagesArgs = {
  filters?: InputMaybe<InformationMessageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryKeyMetricArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryKeyMetricsArgs = {
  filters?: InputMaybe<KeyMetricFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryKeyMetricsServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryKeyMetricsServicesArgs = {
  filters?: InputMaybe<KeyMetricsServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryLibraryBreadcrumbTrailArgs = {
  path: Scalars["String"];
};

export type QueryLibrarySearchEngineArgs = {
  path: Scalars["String"];
  query: Scalars["String"];
};

export type QueryMwCounterServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryMwCounterServicesArgs = {
  filters?: InputMaybe<MwCounterServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryMwcFlowArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryMwcFlowsArgs = {
  filters?: InputMaybe<MwcFlowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryNewArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryNewsArgs = {
  filters?: InputMaybe<NewFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryNewsSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryNewsSubServicesArgs = {
  filters?: InputMaybe<NewsSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryPickUpDayArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPickUpDayServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPickUpDayServicesArgs = {
  filters?: InputMaybe<PickUpDayServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryPickUpDaysArgs = {
  filters?: InputMaybe<PickUpDayFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryQuizArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryQuizAndTipsBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryQuizAndTipsBlocksArgs = {
  filters?: InputMaybe<QuizAndTipsBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryQuizSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryQuizSubServicesArgs = {
  filters?: InputMaybe<QuizSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryQuizzesArgs = {
  filters?: InputMaybe<QuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRecyclingGuideBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRecyclingGuideBlocksArgs = {
  filters?: InputMaybe<RecyclingGuideBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRecyclingGuideSearchEngineArgs = {
  contractId: Scalars["ID"];
  searchTerm: Scalars["String"];
};

export type QueryRecyclingGuideServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRecyclingGuideServicesArgs = {
  filters?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRequestArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRequestAggregateArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRequestAggregatesArgs = {
  filters?: InputMaybe<RequestAggregateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRequestServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRequestServicesArgs = {
  filters?: InputMaybe<RequestServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRequestSlotArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRequestSlotsArgs = {
  filters?: InputMaybe<RequestSlotFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRequestTakedArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRequestTakedsArgs = {
  filters?: InputMaybe<RequestTakedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRequestsArgs = {
  filters?: InputMaybe<RequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuerySearchAddressArgs = {
  address?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QuerySearchCitiesArgs = {
  contractId: Scalars["ID"];
  searchTerm: Scalars["String"];
};

export type QuerySearchClientsByNameArgs = {
  name: Scalars["String"];
};

export type QuerySearchEngineBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySearchEngineBlocksArgs = {
  filters?: InputMaybe<SearchEngineBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuerySectorizationArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySectorizationByCityArgs = {
  postalCode: Scalars["Int"];
};

export type QuerySectorizationsArgs = {
  filters?: InputMaybe<SectorizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryServicesBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryServicesBlocksArgs = {
  filters?: InputMaybe<ServicesBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTagArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTerritoriesArgs = {
  filters?: InputMaybe<TerritoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTerritoryArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTerritoryTypeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTerritoryTypesArgs = {
  filters?: InputMaybe<TerritoryTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTipArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTipSubServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTipSubServicesArgs = {
  filters?: InputMaybe<TipSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTipsArgs = {
  filters?: InputMaybe<TipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTopContentBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTopContentBlocksArgs = {
  filters?: InputMaybe<TopContentBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUserDataStorageArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUserDataStoragesArgs = {
  filters?: InputMaybe<UserDataStorageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryWasteFamiliesArgs = {
  filters?: InputMaybe<WasteFamilyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryWasteFamilyArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryWasteFamilyLengthArgs = {
  id: Scalars["ID"];
};

export type QueryWasteFormArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryWasteFormsArgs = {
  filters?: InputMaybe<WasteFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryYesWeScanServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryYesWeScanServicesArgs = {
  filters?: InputMaybe<YesWeScanServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Quiz = {
  __typename?: "Quiz";
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  quizSubService?: Maybe<QuizSubServiceEntityResponse>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Quiz_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars["String"]>;
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type QuizTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuizAndTipsBlock = {
  __typename?: "QuizAndTipsBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayBlock: Scalars["Boolean"];
  displayQuiz: Scalars["Boolean"];
  displayTips: Scalars["Boolean"];
  homepage?: Maybe<HomepageEntityResponse>;
  quiz?: Maybe<QuizEntityResponse>;
  tips?: Maybe<TipRelationResponseCollection>;
  titleContent: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuizAndTipsBlockTipsArgs = {
  filters?: InputMaybe<TipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuizAndTipsBlockEntity = {
  __typename?: "QuizAndTipsBlockEntity";
  attributes?: Maybe<QuizAndTipsBlock>;
  id?: Maybe<Scalars["ID"]>;
};

export type QuizAndTipsBlockEntityResponse = {
  __typename?: "QuizAndTipsBlockEntityResponse";
  data?: Maybe<QuizAndTipsBlockEntity>;
};

export type QuizAndTipsBlockEntityResponseCollection = {
  __typename?: "QuizAndTipsBlockEntityResponseCollection";
  data: Array<QuizAndTipsBlockEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizAndTipsBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizAndTipsBlockFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displayBlock?: InputMaybe<BooleanFilterInput>;
  displayQuiz?: InputMaybe<BooleanFilterInput>;
  displayTips?: InputMaybe<BooleanFilterInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuizAndTipsBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizAndTipsBlockFiltersInput>>>;
  quiz?: InputMaybe<QuizFiltersInput>;
  tips?: InputMaybe<TipFiltersInput>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizAndTipsBlockInput = {
  displayBlock?: InputMaybe<Scalars["Boolean"]>;
  displayQuiz?: InputMaybe<Scalars["Boolean"]>;
  displayTips?: InputMaybe<Scalars["Boolean"]>;
  homepage?: InputMaybe<Scalars["ID"]>;
  quiz?: InputMaybe<Scalars["ID"]>;
  tips?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  titleContent?: InputMaybe<Scalars["String"]>;
};

export type QuizEntity = {
  __typename?: "QuizEntity";
  attributes?: Maybe<Quiz>;
  id?: Maybe<Scalars["ID"]>;
};

export type QuizEntityResponse = {
  __typename?: "QuizEntityResponse";
  data?: Maybe<QuizEntity>;
};

export type QuizEntityResponseCollection = {
  __typename?: "QuizEntityResponseCollection";
  data: Array<QuizEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuizFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  quizSubService?: InputMaybe<QuizSubServiceFiltersInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type QuizInput = {
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  quizSubService?: InputMaybe<Scalars["ID"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_Quiz_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type QuizRelationResponseCollection = {
  __typename?: "QuizRelationResponseCollection";
  data: Array<QuizEntity>;
};

export type QuizSubService = {
  __typename?: "QuizSubService";
  cities?: Maybe<CityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  quizzes?: Maybe<QuizRelationResponseCollection>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type QuizSubServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuizSubServiceQuizzesArgs = {
  filters?: InputMaybe<QuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QuizSubServiceEntity = {
  __typename?: "QuizSubServiceEntity";
  attributes?: Maybe<QuizSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type QuizSubServiceEntityResponse = {
  __typename?: "QuizSubServiceEntityResponse";
  data?: Maybe<QuizSubServiceEntity>;
};

export type QuizSubServiceEntityResponseCollection = {
  __typename?: "QuizSubServiceEntityResponseCollection";
  data: Array<QuizSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizSubServiceFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<QuizSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizSubServiceFiltersInput>>>;
  quizzes?: InputMaybe<QuizFiltersInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizSubServiceInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  quizzes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type QuizSubServiceRelationResponseCollection = {
  __typename?: "QuizSubServiceRelationResponseCollection";
  data: Array<QuizSubServiceEntity>;
};

export type RecyclingGuideBlock = {
  __typename?: "RecyclingGuideBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  homepage?: Maybe<HomepageEntityResponse>;
  recyclingGuideDisplayContent: Scalars["String"];
  subtitleContent: Scalars["String"];
  tags?: Maybe<TagRelationResponseCollection>;
  titleContent: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RecyclingGuideBlockTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideBlockEntity = {
  __typename?: "RecyclingGuideBlockEntity";
  attributes?: Maybe<RecyclingGuideBlock>;
  id?: Maybe<Scalars["ID"]>;
};

export type RecyclingGuideBlockEntityResponse = {
  __typename?: "RecyclingGuideBlockEntityResponse";
  data?: Maybe<RecyclingGuideBlockEntity>;
};

export type RecyclingGuideBlockEntityResponseCollection = {
  __typename?: "RecyclingGuideBlockEntityResponseCollection";
  data: Array<RecyclingGuideBlockEntity>;
  meta: ResponseCollectionMeta;
};

export type RecyclingGuideBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RecyclingGuideBlockFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RecyclingGuideBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecyclingGuideBlockFiltersInput>>>;
  recyclingGuideDisplayContent?: InputMaybe<StringFilterInput>;
  subtitleContent?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RecyclingGuideBlockInput = {
  homepage?: InputMaybe<Scalars["ID"]>;
  recyclingGuideDisplayContent?: InputMaybe<Scalars["String"]>;
  subtitleContent?: InputMaybe<Scalars["String"]>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  titleContent?: InputMaybe<Scalars["String"]>;
};

export type RecyclingGuideService = {
  __typename?: "RecyclingGuideService";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  memoDesc?: Maybe<Scalars["String"]>;
  memoFile?: Maybe<UploadFileEntityResponse>;
  memoName: Scalars["String"];
  name: Scalars["String"];
  orderExtension?: Maybe<Scalars["Boolean"]>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  wasteFamilies?: Maybe<WasteFamilyRelationResponseCollection>;
  wasteForms?: Maybe<WasteFormRelationResponseCollection>;
};

export type RecyclingGuideServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideServiceWasteFamiliesArgs = {
  filters?: InputMaybe<WasteFamilyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideServiceWasteFormsArgs = {
  filters?: InputMaybe<WasteFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideServiceEntity = {
  __typename?: "RecyclingGuideServiceEntity";
  attributes?: Maybe<RecyclingGuideService>;
  id?: Maybe<Scalars["ID"]>;
};

export type RecyclingGuideServiceEntityResponse = {
  __typename?: "RecyclingGuideServiceEntityResponse";
  data?: Maybe<RecyclingGuideServiceEntity>;
};

export type RecyclingGuideServiceEntityResponseCollection = {
  __typename?: "RecyclingGuideServiceEntityResponseCollection";
  data: Array<RecyclingGuideServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type RecyclingGuideServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RecyclingGuideServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  memoDesc?: InputMaybe<StringFilterInput>;
  memoName?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecyclingGuideServiceFiltersInput>>>;
  orderExtension?: InputMaybe<BooleanFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wasteFamilies?: InputMaybe<WasteFamilyFiltersInput>;
  wasteForms?: InputMaybe<WasteFormFiltersInput>;
};

export type RecyclingGuideServiceInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  memoDesc?: InputMaybe<Scalars["String"]>;
  memoFile?: InputMaybe<Scalars["ID"]>;
  memoName?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  orderExtension?: InputMaybe<Scalars["Boolean"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
  wasteFamilies?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  wasteForms?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type RecyclingGuideServiceRelationResponseCollection = {
  __typename?: "RecyclingGuideServiceRelationResponseCollection";
  data: Array<RecyclingGuideServiceEntity>;
};

export type Request = {
  __typename?: "Request";
  addableBlocks?: Maybe<Array<Maybe<RequestAddableBlocksDynamicZone>>>;
  blockText?: Maybe<Scalars["String"]>;
  confirmationMessage?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  displayUserCivility?: Maybe<Scalars["Boolean"]>;
  fieldAddressLabel?: Maybe<Scalars["String"]>;
  hasAddress: Scalars["Boolean"];
  hasAppointmentSlots?: Maybe<Scalars["Boolean"]>;
  hasSeveralRequestTypes: Scalars["Boolean"];
  hasUser: Scalars["Boolean"];
  hoursBeforeReservationIsActivated?: Maybe<Scalars["Int"]>;
  isActivated?: Maybe<Scalars["Boolean"]>;
  isUserEmailMandatory?: Maybe<Scalars["Boolean"]>;
  isUserNameMandatory?: Maybe<Scalars["Boolean"]>;
  isUserPhoneMandatory?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  numberOfRequiredSlots?: Maybe<Scalars["Int"]>;
  proofOfReceiptHeader?: Maybe<Scalars["String"]>;
  proofOfReceiptSubject?: Maybe<Scalars["String"]>;
  requestAggregate?: Maybe<RequestAggregateEntityResponse>;
  requestService?: Maybe<RequestServiceEntityResponse>;
  requestSlots?: Maybe<RequestSlotRelationResponseCollection>;
  requestType?: Maybe<Array<Maybe<ComponentBlocksRequestType>>>;
  sendProofOfReceipt?: Maybe<Scalars["Boolean"]>;
  slotsReservationRules?: Maybe<Scalars["JSON"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userAllowSMSNotification?: Maybe<Scalars["Boolean"]>;
};

export type RequestRequestSlotsArgs = {
  filters?: InputMaybe<RequestSlotFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestRequestTypeArgs = {
  filters?: InputMaybe<ComponentBlocksRequestTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestAddableBlocksDynamicZone =
  | ComponentBlocksAttachments
  | ComponentBlocksCheckbox
  | ComponentBlocksCommentary
  | ComponentBlocksCumbersome
  | ComponentBlocksDateChoice
  | ComponentBlocksQcm
  | ComponentBlocksQuestions
  | Error;

export type RequestAggregate = {
  __typename?: "RequestAggregate";
  createdAt?: Maybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  requestService?: Maybe<RequestServiceEntityResponse>;
  requests?: Maybe<RequestRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RequestAggregateRequestsArgs = {
  filters?: InputMaybe<RequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestAggregateEntity = {
  __typename?: "RequestAggregateEntity";
  attributes?: Maybe<RequestAggregate>;
  id?: Maybe<Scalars["ID"]>;
};

export type RequestAggregateEntityResponse = {
  __typename?: "RequestAggregateEntityResponse";
  data?: Maybe<RequestAggregateEntity>;
};

export type RequestAggregateEntityResponseCollection = {
  __typename?: "RequestAggregateEntityResponseCollection";
  data: Array<RequestAggregateEntity>;
  meta: ResponseCollectionMeta;
};

export type RequestAggregateFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RequestAggregateFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestAggregateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RequestAggregateFiltersInput>>>;
  requestService?: InputMaybe<RequestServiceFiltersInput>;
  requests?: InputMaybe<RequestFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RequestAggregateInput = {
  name?: InputMaybe<Scalars["String"]>;
  requestService?: InputMaybe<Scalars["ID"]>;
  requests?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type RequestAggregateRelationResponseCollection = {
  __typename?: "RequestAggregateRelationResponseCollection";
  data: Array<RequestAggregateEntity>;
};

export type RequestEntity = {
  __typename?: "RequestEntity";
  attributes?: Maybe<Request>;
  id?: Maybe<Scalars["ID"]>;
};

export type RequestEntityResponse = {
  __typename?: "RequestEntityResponse";
  data?: Maybe<RequestEntity>;
};

export type RequestEntityResponseCollection = {
  __typename?: "RequestEntityResponseCollection";
  data: Array<RequestEntity>;
  meta: ResponseCollectionMeta;
};

export type RequestFile = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type RequestFileOrFolder = Files | Folders;

export type RequestFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RequestFiltersInput>>>;
  blockText?: InputMaybe<StringFilterInput>;
  confirmationMessage?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  displayUserCivility?: InputMaybe<BooleanFilterInput>;
  fieldAddressLabel?: InputMaybe<StringFilterInput>;
  hasAddress?: InputMaybe<BooleanFilterInput>;
  hasAppointmentSlots?: InputMaybe<BooleanFilterInput>;
  hasSeveralRequestTypes?: InputMaybe<BooleanFilterInput>;
  hasUser?: InputMaybe<BooleanFilterInput>;
  hoursBeforeReservationIsActivated?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  isUserEmailMandatory?: InputMaybe<BooleanFilterInput>;
  isUserNameMandatory?: InputMaybe<BooleanFilterInput>;
  isUserPhoneMandatory?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestFiltersInput>;
  numberOfRequiredSlots?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<RequestFiltersInput>>>;
  proofOfReceiptHeader?: InputMaybe<StringFilterInput>;
  proofOfReceiptSubject?: InputMaybe<StringFilterInput>;
  requestAggregate?: InputMaybe<RequestAggregateFiltersInput>;
  requestService?: InputMaybe<RequestServiceFiltersInput>;
  requestSlots?: InputMaybe<RequestSlotFiltersInput>;
  requestType?: InputMaybe<ComponentBlocksRequestTypeFiltersInput>;
  sendProofOfReceipt?: InputMaybe<BooleanFilterInput>;
  slotsReservationRules?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userAllowSMSNotification?: InputMaybe<BooleanFilterInput>;
};

export type RequestFolder = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type RequestFolderEntity = {
  __typename?: "RequestFolderEntity";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  pathId?: Maybe<Scalars["ID"]>;
};

export type RequestFolders = {
  __typename?: "RequestFolders";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  pathId?: Maybe<Scalars["String"]>;
};

export type RequestInput = {
  addableBlocks?: InputMaybe<
    Array<Scalars["RequestAddableBlocksDynamicZoneInput"]>
  >;
  blockText?: InputMaybe<Scalars["String"]>;
  confirmationMessage?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  displayUserCivility?: InputMaybe<Scalars["Boolean"]>;
  fieldAddressLabel?: InputMaybe<Scalars["String"]>;
  hasAddress?: InputMaybe<Scalars["Boolean"]>;
  hasAppointmentSlots?: InputMaybe<Scalars["Boolean"]>;
  hasSeveralRequestTypes?: InputMaybe<Scalars["Boolean"]>;
  hasUser?: InputMaybe<Scalars["Boolean"]>;
  hoursBeforeReservationIsActivated?: InputMaybe<Scalars["Int"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  isUserEmailMandatory?: InputMaybe<Scalars["Boolean"]>;
  isUserNameMandatory?: InputMaybe<Scalars["Boolean"]>;
  isUserPhoneMandatory?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  numberOfRequiredSlots?: InputMaybe<Scalars["Int"]>;
  proofOfReceiptHeader?: InputMaybe<Scalars["String"]>;
  proofOfReceiptSubject?: InputMaybe<Scalars["String"]>;
  requestAggregate?: InputMaybe<Scalars["ID"]>;
  requestService?: InputMaybe<Scalars["ID"]>;
  requestSlots?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  requestType?: InputMaybe<Array<InputMaybe<ComponentBlocksRequestTypeInput>>>;
  sendProofOfReceipt?: InputMaybe<Scalars["Boolean"]>;
  slotsReservationRules?: InputMaybe<Scalars["JSON"]>;
  userAllowSMSNotification?: InputMaybe<Scalars["Boolean"]>;
};

export type RequestRelationResponseCollection = {
  __typename?: "RequestRelationResponseCollection";
  data: Array<RequestEntity>;
};

export type RequestService = {
  __typename?: "RequestService";
  audiences?: Maybe<AudienceRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  requestAggregates?: Maybe<RequestAggregateRelationResponseCollection>;
  requests?: Maybe<RequestRelationResponseCollection>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RequestServiceAudiencesArgs = {
  filters?: InputMaybe<AudienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestServiceRequestAggregatesArgs = {
  filters?: InputMaybe<RequestAggregateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestServiceRequestsArgs = {
  filters?: InputMaybe<RequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestServiceEntity = {
  __typename?: "RequestServiceEntity";
  attributes?: Maybe<RequestService>;
  id?: Maybe<Scalars["ID"]>;
};

export type RequestServiceEntityResponse = {
  __typename?: "RequestServiceEntityResponse";
  data?: Maybe<RequestServiceEntity>;
};

export type RequestServiceEntityResponseCollection = {
  __typename?: "RequestServiceEntityResponseCollection";
  data: Array<RequestServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type RequestServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RequestServiceFiltersInput>>>;
  audiences?: InputMaybe<AudienceFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RequestServiceFiltersInput>>>;
  requestAggregates?: InputMaybe<RequestAggregateFiltersInput>;
  requests?: InputMaybe<RequestFiltersInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RequestServiceInput = {
  audiences?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  requestAggregates?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  requests?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type RequestServiceRelationResponseCollection = {
  __typename?: "RequestServiceRelationResponseCollection";
  data: Array<RequestServiceEntity>;
};

export type RequestSlot = {
  __typename?: "RequestSlot";
  createdAt?: Maybe<Scalars["DateTime"]>;
  noSlotMessage?: Maybe<Scalars["String"]>;
  requestTakeds?: Maybe<RequestTakedRelationResponseCollection>;
  sectorizations?: Maybe<SectorizationRelationResponseCollection>;
  slotMessage?: Maybe<Scalars["String"]>;
  slotsExceptions?: Maybe<Array<Maybe<ComponentBlocksRequestSlotsExceptions>>>;
  timeSlots?: Maybe<Scalars["JSON"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RequestSlotRequestTakedsArgs = {
  filters?: InputMaybe<RequestTakedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestSlotSectorizationsArgs = {
  filters?: InputMaybe<SectorizationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestSlotSlotsExceptionsArgs = {
  filters?: InputMaybe<ComponentBlocksRequestSlotsExceptionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestSlotEntity = {
  __typename?: "RequestSlotEntity";
  attributes?: Maybe<RequestSlot>;
  id?: Maybe<Scalars["ID"]>;
};

export type RequestSlotEntityResponse = {
  __typename?: "RequestSlotEntityResponse";
  data?: Maybe<RequestSlotEntity>;
};

export type RequestSlotEntityResponseCollection = {
  __typename?: "RequestSlotEntityResponseCollection";
  data: Array<RequestSlotEntity>;
  meta: ResponseCollectionMeta;
};

export type RequestSlotFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RequestSlotFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  noSlotMessage?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestSlotFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RequestSlotFiltersInput>>>;
  requestTakeds?: InputMaybe<RequestTakedFiltersInput>;
  sectorizations?: InputMaybe<SectorizationFiltersInput>;
  slotMessage?: InputMaybe<StringFilterInput>;
  slotsExceptions?: InputMaybe<ComponentBlocksRequestSlotsExceptionsFiltersInput>;
  timeSlots?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RequestSlotInput = {
  noSlotMessage?: InputMaybe<Scalars["String"]>;
  requestTakeds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  sectorizations?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  slotMessage?: InputMaybe<Scalars["String"]>;
  slotsExceptions?: InputMaybe<
    Array<InputMaybe<ComponentBlocksRequestSlotsExceptionsInput>>
  >;
  timeSlots?: InputMaybe<Scalars["JSON"]>;
};

export type RequestSlotRelationResponseCollection = {
  __typename?: "RequestSlotRelationResponseCollection";
  data: Array<RequestSlotEntity>;
};

export type RequestTagEntity = {
  __typename?: "RequestTagEntity";
  contractId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
};

export type RequestTaked = {
  __typename?: "RequestTaked";
  city?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  requestSlot?: Maybe<RequestSlotEntityResponse>;
  requestType?: Maybe<ComponentBlocksRequestType>;
  slotTaken?: Maybe<Scalars["JSON"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  userDataStorage?: Maybe<UserDataStorageEntityResponse>;
};

export type RequestTakedEntity = {
  __typename?: "RequestTakedEntity";
  attributes?: Maybe<RequestTaked>;
  id?: Maybe<Scalars["ID"]>;
};

export type RequestTakedEntityResponse = {
  __typename?: "RequestTakedEntityResponse";
  data?: Maybe<RequestTakedEntity>;
};

export type RequestTakedEntityResponseCollection = {
  __typename?: "RequestTakedEntityResponseCollection";
  data: Array<RequestTakedEntity>;
  meta: ResponseCollectionMeta;
};

export type RequestTakedFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RequestTakedFiltersInput>>>;
  city?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestTakedFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RequestTakedFiltersInput>>>;
  requestSlot?: InputMaybe<RequestSlotFiltersInput>;
  requestType?: InputMaybe<ComponentBlocksRequestTypeFiltersInput>;
  slotTaken?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  userDataStorage?: InputMaybe<UserDataStorageFiltersInput>;
};

export type RequestTakedInput = {
  city?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  requestSlot?: InputMaybe<Scalars["ID"]>;
  requestType?: InputMaybe<ComponentBlocksRequestTypeInput>;
  slotTaken?: InputMaybe<Scalars["JSON"]>;
  userDataStorage?: InputMaybe<Scalars["ID"]>;
};

export type RequestTakedRelationResponseCollection = {
  __typename?: "RequestTakedRelationResponseCollection";
  data: Array<RequestTakedEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: "ResponseCollectionMeta";
  pagination: Pagination;
};

export type SearchEngineBlock = {
  __typename?: "SearchEngineBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  homepage?: Maybe<HomepageEntityResponse>;
  titleContent: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SearchEngineBlockEntity = {
  __typename?: "SearchEngineBlockEntity";
  attributes?: Maybe<SearchEngineBlock>;
  id?: Maybe<Scalars["ID"]>;
};

export type SearchEngineBlockEntityResponse = {
  __typename?: "SearchEngineBlockEntityResponse";
  data?: Maybe<SearchEngineBlockEntity>;
};

export type SearchEngineBlockEntityResponseCollection = {
  __typename?: "SearchEngineBlockEntityResponseCollection";
  data: Array<SearchEngineBlockEntity>;
  meta: ResponseCollectionMeta;
};

export type SearchEngineBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SearchEngineBlockFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SearchEngineBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SearchEngineBlockFiltersInput>>>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SearchEngineBlockInput = {
  homepage?: InputMaybe<Scalars["ID"]>;
  titleContent?: InputMaybe<Scalars["String"]>;
};

export type SearchResult = {
  __typename?: "SearchResult";
  id: Scalars["ID"];
  name: Scalars["String"];
  typeName: Scalars["String"];
  wasteFamilyName?: Maybe<Scalars["String"]>;
};

export type SearchResultAddress = {
  __typename?: "SearchResultAddress";
  banFeaturesProperties?: Maybe<Scalars["JSON"]>;
  latitude?: Maybe<Scalars["Float"]>;
  longitude?: Maybe<Scalars["Float"]>;
  name?: Maybe<Scalars["String"]>;
};

export type Sectorization = {
  __typename?: "Sectorization";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description: Scalars["String"];
  name: Scalars["String"];
  polygonCoordinates?: Maybe<Scalars["JSON"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SectorizationEntity = {
  __typename?: "SectorizationEntity";
  attributes?: Maybe<Sectorization>;
  id?: Maybe<Scalars["ID"]>;
};

export type SectorizationEntityResponse = {
  __typename?: "SectorizationEntityResponse";
  data?: Maybe<SectorizationEntity>;
};

export type SectorizationEntityResponseCollection = {
  __typename?: "SectorizationEntityResponseCollection";
  data: Array<SectorizationEntity>;
  meta: ResponseCollectionMeta;
};

export type SectorizationFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SectorizationFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SectorizationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SectorizationFiltersInput>>>;
  polygonCoordinates?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SectorizationInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  polygonCoordinates?: InputMaybe<Scalars["JSON"]>;
};

export type SectorizationRelationResponseCollection = {
  __typename?: "SectorizationRelationResponseCollection";
  data: Array<SectorizationEntity>;
};

export type Service = {
  __typename?: "Service";
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  serviceName?: Maybe<Scalars["String"]>;
};

export type ServiceActivated = {
  __typename?: "ServiceActivated";
  contractId: Scalars["ID"];
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  serviceId: Scalars["ID"];
  serviceName: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
};

export type ServiceInput = {
  endDate: Scalars["String"];
  name: Scalars["String"];
  startDate: Scalars["String"];
};

export type ServicesBlock = {
  __typename?: "ServicesBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  homepage?: Maybe<HomepageEntityResponse>;
  serviceLinks?: Maybe<Array<Maybe<ServicesBlockServiceLinksDynamicZone>>>;
  titleContent: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ServicesBlockEntity = {
  __typename?: "ServicesBlockEntity";
  attributes?: Maybe<ServicesBlock>;
  id?: Maybe<Scalars["ID"]>;
};

export type ServicesBlockEntityResponse = {
  __typename?: "ServicesBlockEntityResponse";
  data?: Maybe<ServicesBlockEntity>;
};

export type ServicesBlockEntityResponseCollection = {
  __typename?: "ServicesBlockEntityResponseCollection";
  data: Array<ServicesBlockEntity>;
  meta: ResponseCollectionMeta;
};

export type ServicesBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServicesBlockFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ServicesBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServicesBlockFiltersInput>>>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServicesBlockInput = {
  homepage?: InputMaybe<Scalars["ID"]>;
  serviceLinks?: InputMaybe<
    Array<Scalars["ServicesBlockServiceLinksDynamicZoneInput"]>
  >;
  titleContent?: InputMaybe<Scalars["String"]>;
};

export type ServicesBlockServiceLinksDynamicZone =
  | ComponentLinksAlertNotification
  | ComponentLinksContactUs
  | ComponentLinksDropOffMap
  | ComponentLinksEvents
  | ComponentLinksExternal
  | ComponentLinksFrees
  | ComponentLinksKeyMetrics
  | ComponentLinksMyWasteCounter
  | ComponentLinksNews
  | ComponentLinksPickUpDay
  | ComponentLinksQuizzes
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | ComponentLinksTips
  | Error;

export type ServicesDeactivated = {
  __typename?: "ServicesDeactivated";
  contractId?: Maybe<Scalars["ID"]>;
  serviceId?: Maybe<Scalars["ID"]>;
  serviceName?: Maybe<Scalars["String"]>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contains?: InputMaybe<Scalars["String"]>;
  containsi?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  eq?: InputMaybe<Scalars["String"]>;
  eqi?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]>;
  notContainsi?: InputMaybe<Scalars["String"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]>;
  null?: InputMaybe<Scalars["Boolean"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Tag = {
  __typename?: "Tag";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TagEntity = {
  __typename?: "TagEntity";
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars["ID"]>;
};

export type TagEntityResponse = {
  __typename?: "TagEntityResponse";
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: "TagEntityResponseCollection";
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TagInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type TagRelationResponseCollection = {
  __typename?: "TagRelationResponseCollection";
  data: Array<TagEntity>;
};

export type Territory = {
  __typename?: "Territory";
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  epcis?: Maybe<EpciRelationResponseCollection>;
  name?: Maybe<Scalars["String"]>;
  territoryType?: Maybe<TerritoryTypeEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TerritoryCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TerritoryEpcisArgs = {
  filters?: InputMaybe<EpciFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TerritoryEntity = {
  __typename?: "TerritoryEntity";
  attributes?: Maybe<Territory>;
  id?: Maybe<Scalars["ID"]>;
};

export type TerritoryEntityResponse = {
  __typename?: "TerritoryEntityResponse";
  data?: Maybe<TerritoryEntity>;
};

export type TerritoryEntityResponseCollection = {
  __typename?: "TerritoryEntityResponseCollection";
  data: Array<TerritoryEntity>;
  meta: ResponseCollectionMeta;
};

export type TerritoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TerritoryFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  epcis?: InputMaybe<EpciFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TerritoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TerritoryFiltersInput>>>;
  territoryType?: InputMaybe<TerritoryTypeFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TerritoryInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  epcis?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  territoryType?: InputMaybe<Scalars["ID"]>;
};

export type TerritoryRelationResponseCollection = {
  __typename?: "TerritoryRelationResponseCollection";
  data: Array<TerritoryEntity>;
};

export type TerritoryType = {
  __typename?: "TerritoryType";
  createdAt?: Maybe<Scalars["DateTime"]>;
  territoryType?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TerritoryTypeEntity = {
  __typename?: "TerritoryTypeEntity";
  attributes?: Maybe<TerritoryType>;
  id?: Maybe<Scalars["ID"]>;
};

export type TerritoryTypeEntityResponse = {
  __typename?: "TerritoryTypeEntityResponse";
  data?: Maybe<TerritoryTypeEntity>;
};

export type TerritoryTypeEntityResponseCollection = {
  __typename?: "TerritoryTypeEntityResponseCollection";
  data: Array<TerritoryTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type TerritoryTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TerritoryTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TerritoryTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TerritoryTypeFiltersInput>>>;
  territoryType?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TerritoryTypeInput = {
  territoryType?: InputMaybe<Scalars["String"]>;
};

export type TimeSlotWithUser = {
  __typename?: "TimeSlotWithUser";
  date?: Maybe<Scalars["String"]>;
  dynamic?: Maybe<Scalars["String"]>;
  fixed?: Maybe<Scalars["String"]>;
  slot?: Maybe<Scalars["String"]>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type Tip = {
  __typename?: "Tip";
  blocks?: Maybe<Array<Maybe<TipBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  image: UploadFileEntityResponse;
  link?: Maybe<Scalars["String"]>;
  linkToServices?: Maybe<Array<Maybe<TipLinkToServicesDynamicZone>>>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Tip_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  tipSubService?: Maybe<TipSubServiceEntityResponse>;
  title: Scalars["String"];
  titleLabel?: Maybe<Scalars["String"]>;
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type TipTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TipBlocksDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type TipEntity = {
  __typename?: "TipEntity";
  attributes?: Maybe<Tip>;
  id?: Maybe<Scalars["ID"]>;
};

export type TipEntityResponse = {
  __typename?: "TipEntityResponse";
  data?: Maybe<TipEntity>;
};

export type TipEntityResponseCollection = {
  __typename?: "TipEntityResponseCollection";
  data: Array<TipEntity>;
  meta: ResponseCollectionMeta;
};

export type TipFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TipFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isSystem?: InputMaybe<BooleanFilterInput>;
  link?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TipFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TipFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  tipSubService?: InputMaybe<TipSubServiceFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  titleLabel?: InputMaybe<StringFilterInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type TipInput = {
  blocks?: InputMaybe<Array<Scalars["TipBlocksDynamicZoneInput"]>>;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  image?: InputMaybe<Scalars["ID"]>;
  isSystem?: InputMaybe<Scalars["Boolean"]>;
  link?: InputMaybe<Scalars["String"]>;
  linkToServices?: InputMaybe<
    Array<Scalars["TipLinkToServicesDynamicZoneInput"]>
  >;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_Tip_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  tipSubService?: InputMaybe<Scalars["ID"]>;
  title?: InputMaybe<Scalars["String"]>;
  titleLabel?: InputMaybe<Scalars["String"]>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type TipLinkToServicesDynamicZone =
  | ComponentLinksAlertNotification
  | ComponentLinksDropOffMap
  | ComponentLinksEditorial
  | ComponentLinksPickUpDay
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | Error;

export type TipRelationResponseCollection = {
  __typename?: "TipRelationResponseCollection";
  data: Array<TipEntity>;
};

export type TipSubService = {
  __typename?: "TipSubService";
  cities?: Maybe<CityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  tips?: Maybe<TipRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TipSubServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TipSubServiceTipsArgs = {
  filters?: InputMaybe<TipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type TipSubServiceEntity = {
  __typename?: "TipSubServiceEntity";
  attributes?: Maybe<TipSubService>;
  id?: Maybe<Scalars["ID"]>;
};

export type TipSubServiceEntityResponse = {
  __typename?: "TipSubServiceEntityResponse";
  data?: Maybe<TipSubServiceEntity>;
};

export type TipSubServiceEntityResponseCollection = {
  __typename?: "TipSubServiceEntityResponseCollection";
  data: Array<TipSubServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type TipSubServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TipSubServiceFiltersInput>>>;
  cities?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TipSubServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TipSubServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  tips?: InputMaybe<TipFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TipSubServiceInput = {
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
  tips?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type TipSubServiceRelationResponseCollection = {
  __typename?: "TipSubServiceRelationResponseCollection";
  data: Array<TipSubServiceEntity>;
};

export type TopContentBlock = {
  __typename?: "TopContentBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayBlock: Scalars["Boolean"];
  displayLastThreeContents: Scalars["Boolean"];
  hasTopContent: Scalars["Boolean"];
  homepage?: Maybe<HomepageEntityResponse>;
  titleContent: Scalars["String"];
  topContent?: Maybe<Array<Maybe<TopContentBlockTopContentDynamicZone>>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TopContentBlockDto = {
  __typename?: "TopContentBlockDTO";
  displayBlock: Scalars["Boolean"];
  displayLastThreeContents: Scalars["Boolean"];
  hasTopContent: Scalars["Boolean"];
  id: Scalars["ID"];
  titleContent: Scalars["String"];
  topContent?: Maybe<EditoContentDto>;
};

export type TopContentBlockEntity = {
  __typename?: "TopContentBlockEntity";
  attributes?: Maybe<TopContentBlock>;
  id?: Maybe<Scalars["ID"]>;
};

export type TopContentBlockEntityResponse = {
  __typename?: "TopContentBlockEntityResponse";
  data?: Maybe<TopContentBlockEntity>;
};

export type TopContentBlockEntityResponseCollection = {
  __typename?: "TopContentBlockEntityResponseCollection";
  data: Array<TopContentBlockEntity>;
  meta: ResponseCollectionMeta;
};

export type TopContentBlockFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TopContentBlockFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  displayBlock?: InputMaybe<BooleanFilterInput>;
  displayLastThreeContents?: InputMaybe<BooleanFilterInput>;
  hasTopContent?: InputMaybe<BooleanFilterInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TopContentBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TopContentBlockFiltersInput>>>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TopContentBlockInput = {
  displayBlock?: InputMaybe<Scalars["Boolean"]>;
  displayLastThreeContents?: InputMaybe<Scalars["Boolean"]>;
  hasTopContent?: InputMaybe<Scalars["Boolean"]>;
  homepage?: InputMaybe<Scalars["ID"]>;
  titleContent?: InputMaybe<Scalars["String"]>;
  topContent?: InputMaybe<
    Array<Scalars["TopContentBlockTopContentDynamicZoneInput"]>
  >;
};

export type TopContentBlockTopContentDynamicZone =
  | ComponentLinksTopContent
  | Error;

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]>;
  caption?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  ext?: Maybe<Scalars["String"]>;
  formats?: Maybe<Scalars["JSON"]>;
  hash: Scalars["String"];
  height?: Maybe<Scalars["Int"]>;
  mime: Scalars["String"];
  name: Scalars["String"];
  previewUrl?: Maybe<Scalars["String"]>;
  provider: Scalars["String"];
  provider_metadata?: Maybe<Scalars["JSON"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export type UploadFileEntity = {
  __typename?: "UploadFileEntity";
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFileEntityResponse = {
  __typename?: "UploadFileEntityResponse";
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
  ext?: InputMaybe<Scalars["String"]>;
  folder?: InputMaybe<Scalars["ID"]>;
  folderPath?: InputMaybe<Scalars["String"]>;
  formats?: InputMaybe<Scalars["JSON"]>;
  hash?: InputMaybe<Scalars["String"]>;
  height?: InputMaybe<Scalars["Int"]>;
  mime?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  previewUrl?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  provider_metadata?: InputMaybe<Scalars["JSON"]>;
  size?: InputMaybe<Scalars["Float"]>;
  url?: InputMaybe<Scalars["String"]>;
  width?: InputMaybe<Scalars["Int"]>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: "UploadFolder";
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars["String"];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars["String"];
  pathId: Scalars["Int"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UploadFolderEntity = {
  __typename?: "UploadFolderEntity";
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars["ID"]>;
};

export type UploadFolderEntityResponse = {
  __typename?: "UploadFolderEntityResponse";
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: "UploadFolderEntityResponseCollection";
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  name?: InputMaybe<Scalars["String"]>;
  parent?: InputMaybe<Scalars["ID"]>;
  path?: InputMaybe<Scalars["String"]>;
  pathId?: InputMaybe<Scalars["Int"]>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: "UploadFolderRelationResponseCollection";
  data: Array<UploadFolderEntity>;
};

export type UploadResult = {
  __typename?: "UploadResult";
  id: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
};

export type UserDataStorage = {
  __typename?: "UserDataStorage";
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  firstname?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  requestTakeds?: Maybe<RequestTakedRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UserDataStorageRequestTakedsArgs = {
  filters?: InputMaybe<RequestTakedFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UserDataStorageEntity = {
  __typename?: "UserDataStorageEntity";
  attributes?: Maybe<UserDataStorage>;
  id?: Maybe<Scalars["ID"]>;
};

export type UserDataStorageEntityResponse = {
  __typename?: "UserDataStorageEntityResponse";
  data?: Maybe<UserDataStorageEntity>;
};

export type UserDataStorageEntityResponseCollection = {
  __typename?: "UserDataStorageEntityResponseCollection";
  data: Array<UserDataStorageEntity>;
  meta: ResponseCollectionMeta;
};

export type UserDataStorageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UserDataStorageFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstname?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UserDataStorageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UserDataStorageFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  requestTakeds?: InputMaybe<RequestTakedFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UserDataStorageInput = {
  email?: InputMaybe<Scalars["String"]>;
  firstname?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  phone?: InputMaybe<Scalars["String"]>;
  requestTakeds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"];
  password: Scalars["String"];
  provider?: Scalars["String"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  email?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: "UsersPermissionsPermissionEntity";
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: "UsersPermissionsRoleEntity";
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: "UsersPermissionsRoleEntityResponse";
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  type?: InputMaybe<Scalars["String"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]>;
  confirmed?: Maybe<Scalars["Boolean"]>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  email: Scalars["String"];
  provider?: Maybe<Scalars["String"]>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  username: Scalars["String"];
};

export type UsersPermissionsUserEntity = {
  __typename?: "UsersPermissionsUserEntity";
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars["ID"]>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]>;
  confirmationToken?: InputMaybe<Scalars["String"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]>;
  contract?: InputMaybe<Scalars["ID"]>;
  email?: InputMaybe<Scalars["String"]>;
  password?: InputMaybe<Scalars["String"]>;
  provider?: InputMaybe<Scalars["String"]>;
  resetPasswordToken?: InputMaybe<Scalars["String"]>;
  role?: InputMaybe<Scalars["ID"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  data: Array<UsersPermissionsUserEntity>;
};

export type WasteFamily = {
  __typename?: "WasteFamily";
  createdAt?: Maybe<Scalars["DateTime"]>;
  familyName: Scalars["String"];
  isSystem: Scalars["Boolean"];
  recyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  wasteForms?: Maybe<WasteFormRelationResponseCollection>;
};

export type WasteFamilyWasteFormsArgs = {
  filters?: InputMaybe<WasteFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type WasteFamilyEntity = {
  __typename?: "WasteFamilyEntity";
  attributes?: Maybe<WasteFamily>;
  id?: Maybe<Scalars["ID"]>;
};

export type WasteFamilyEntityResponse = {
  __typename?: "WasteFamilyEntityResponse";
  data?: Maybe<WasteFamilyEntity>;
};

export type WasteFamilyEntityResponseCollection = {
  __typename?: "WasteFamilyEntityResponseCollection";
  data: Array<WasteFamilyEntity>;
  meta: ResponseCollectionMeta;
};

export type WasteFamilyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WasteFamilyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  familyName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isSystem?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<WasteFamilyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WasteFamilyFiltersInput>>>;
  recyclingGuideService?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wasteForms?: InputMaybe<WasteFormFiltersInput>;
};

export type WasteFamilyInput = {
  familyName?: InputMaybe<Scalars["String"]>;
  isSystem?: InputMaybe<Scalars["Boolean"]>;
  recyclingGuideService?: InputMaybe<Scalars["ID"]>;
  wasteForms?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type WasteFamilyRelationResponseCollection = {
  __typename?: "WasteFamilyRelationResponseCollection";
  data: Array<WasteFamilyEntity>;
};

export type WasteForm = {
  __typename?: "WasteForm";
  contentBlock?: Maybe<Array<Maybe<WasteFormContentBlockDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  flow?: Maybe<FlowEntityResponse>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  isHidden?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  picto?: Maybe<UploadFileEntityResponse>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  recyclingGestureText?: Maybe<Scalars["String"]>;
  recyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  status?: Maybe<Enum_Wasteform_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  toBeUpdated?: Maybe<Scalars["Boolean"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
  wasteFamily?: Maybe<WasteFamilyEntityResponse>;
};

export type WasteFormTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type WasteFormContentBlockDynamicZone =
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | Error;

export type WasteFormEntity = {
  __typename?: "WasteFormEntity";
  attributes?: Maybe<WasteForm>;
  id?: Maybe<Scalars["ID"]>;
};

export type WasteFormEntityResponse = {
  __typename?: "WasteFormEntityResponse";
  data?: Maybe<WasteFormEntity>;
};

export type WasteFormEntityResponseCollection = {
  __typename?: "WasteFormEntityResponseCollection";
  data: Array<WasteFormEntity>;
  meta: ResponseCollectionMeta;
};

export type WasteFormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WasteFormFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  flow?: InputMaybe<FlowFiltersInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isHidden?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WasteFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WasteFormFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  recyclingGestureText?: InputMaybe<StringFilterInput>;
  recyclingGuideService?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  status?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  toBeUpdated?: InputMaybe<BooleanFilterInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
  wasteFamily?: InputMaybe<WasteFamilyFiltersInput>;
};

export type WasteFormInput = {
  contentBlock?: InputMaybe<
    Array<Scalars["WasteFormContentBlockDynamicZoneInput"]>
  >;
  customId?: InputMaybe<Scalars["String"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  flow?: InputMaybe<Scalars["ID"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  isHidden?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  picto?: InputMaybe<Scalars["ID"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  recyclingGestureText?: InputMaybe<Scalars["String"]>;
  recyclingGuideService?: InputMaybe<Scalars["ID"]>;
  status?: InputMaybe<Enum_Wasteform_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  toBeUpdated?: InputMaybe<Scalars["Boolean"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
  wasteFamily?: InputMaybe<Scalars["ID"]>;
};

export type WasteFormRelationResponseCollection = {
  __typename?: "WasteFormRelationResponseCollection";
  data: Array<WasteFormEntity>;
};

export type YesWeScanService = {
  __typename?: "YesWeScanService";
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["DateTime"]>;
  serviceName?: Maybe<Scalars["String"]>;
  startDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type YesWeScanServiceEntity = {
  __typename?: "YesWeScanServiceEntity";
  attributes?: Maybe<YesWeScanService>;
  id?: Maybe<Scalars["ID"]>;
};

export type YesWeScanServiceEntityResponse = {
  __typename?: "YesWeScanServiceEntityResponse";
  data?: Maybe<YesWeScanServiceEntity>;
};

export type YesWeScanServiceEntityResponseCollection = {
  __typename?: "YesWeScanServiceEntityResponseCollection";
  data: Array<YesWeScanServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type YesWeScanServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<YesWeScanServiceFiltersInput>>>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<YesWeScanServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<YesWeScanServiceFiltersInput>>>;
  serviceName?: InputMaybe<StringFilterInput>;
  startDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type YesWeScanServiceInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["DateTime"]>;
  serviceName?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["DateTime"]>;
};

export type YesWeScanServiceRelationResponseCollection = {
  __typename?: "YesWeScanServiceRelationResponseCollection";
  data: Array<YesWeScanServiceEntity>;
};

export type ClientName = {
  __typename?: "clientName";
  clientName?: Maybe<Scalars["String"]>;
};

export type ContractStatus = {
  __typename?: "contractStatus";
  contractId?: Maybe<Scalars["ID"]>;
};

export type TotalCountPerTag = {
  __typename?: "totalCountPerTag";
  count: Scalars["Int"];
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type GetNewByIdQueryVariables = Exact<{
  newId: Scalars["ID"];
}>;

export type GetNewByIdQuery = {
  __typename?: "Query";
  new?: {
    __typename?: "NewEntityResponse";
    data?: {
      __typename?: "NewEntity";
      id?: string | null;
      attributes?: {
        __typename?: "New";
        title: string;
        shortDescription?: string | null;
        status?: Enum_New_Status | null;
        publishedDate?: any | null;
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
        image?: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              hash: string;
              mime: string;
              name: string;
              provider: string;
              size: number;
              url: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        } | null;
        blocks?: Array<
          | {
              __typename?: "ComponentBlocksFile";
              id: string;
              document?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UploadFile";
                    hash: string;
                    mime: string;
                    name: string;
                    provider: string;
                    size: number;
                    url: string;
                    alternativeText?: string | null;
                    ext?: string | null;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksHorizontalRule";
              id: string;
              hr?: string | null;
            }
          | {
              __typename?: "ComponentBlocksImage";
              id: string;
              isDecorative?: boolean | null;
              altText?: string | null;
              picture?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UploadFile";
                    hash: string;
                    mime: string;
                    name: string;
                    provider: string;
                    size: number;
                    url: string;
                    alternativeText?: string | null;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksSubHeading";
              id: string;
              subHeadingText?: string | null;
              subHeadingTag?: Enum_Componentblockssubheading_Subheadingtag | null;
            }
          | {
              __typename?: "ComponentBlocksVideo";
              id: string;
              videoLink?: string | null;
              transcriptText?: string | null;
            }
          | {
              __typename?: "ComponentBlocksWysiwyg";
              id: string;
              textEditor?: string | null;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
      } | null;
    } | null;
  } | null;
};

export type GetNewsAndEventsByContractIdQueryVariables = Exact<{
  contractId: Scalars["ID"];
  pagination?: InputMaybe<PaginationArg>;
}>;

export type GetNewsAndEventsByContractIdQuery = {
  __typename?: "Query";
  news?: {
    __typename?: "NewEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: {
        __typename?: "Pagination";
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
    data: Array<{
      __typename?: "NewEntity";
      id?: string | null;
      attributes?: {
        __typename?: "New";
        title: string;
        shortDescription?: string | null;
        status?: Enum_New_Status | null;
        publishedDate?: any | null;
        image?: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              url: string;
              size: number;
              mime: string;
              hash: string;
              provider: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        } | null;
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
  events?: {
    __typename?: "EventEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: {
        __typename?: "Pagination";
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
    data: Array<{
      __typename?: "EventEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Event";
        title: string;
        shortDescription?: string | null;
        status?: Enum_Event_Status | null;
        publishedDate?: any | null;
        image: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              url: string;
              size: number;
              mime: string;
              hash: string;
              provider: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        };
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetNewsPathsQueryVariables = Exact<{
  contractId: Scalars["ID"];
  total: Scalars["Int"];
}>;

export type GetNewsPathsQuery = {
  __typename?: "Query";
  news?: {
    __typename?: "NewEntityResponseCollection";
    data: Array<{
      __typename?: "NewEntity";
      id?: string | null;
      attributes?: {
        __typename?: "New";
        status?: Enum_New_Status | null;
      } | null;
    }>;
  } | null;
};

export type GetNewsPathsTotalQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetNewsPathsTotalQuery = {
  __typename?: "Query";
  news?: {
    __typename?: "NewEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: { __typename?: "Pagination"; total: number };
    };
  } | null;
};

export type GetFreeContentsByFreeContentSubServiceIdQueryVariables = Exact<{
  freeContentSubServiceId: Scalars["ID"];
  pagination?: InputMaybe<PaginationArg>;
}>;

export type GetFreeContentsByFreeContentSubServiceIdQuery = {
  __typename?: "Query";
  freeContents?: {
    __typename?: "FreeContentEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: {
        __typename?: "Pagination";
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
    data: Array<{
      __typename?: "FreeContentEntity";
      id?: string | null;
      attributes?: {
        __typename?: "FreeContent";
        title: string;
        shortDescription?: string | null;
        status?: Enum_Freecontent_Status | null;
        publishedDate?: any | null;
        unpublishedDate?: any | null;
        image: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              url: string;
              size: number;
              mime: string;
              hash: string;
              provider: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        };
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetFreeContentByIdQueryVariables = Exact<{
  freeContentId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetFreeContentByIdQuery = {
  __typename?: "Query";
  freeContent?: {
    __typename?: "FreeContentEntityResponse";
    data?: {
      __typename?: "FreeContentEntity";
      id?: string | null;
      attributes?: {
        __typename?: "FreeContent";
        title: string;
        shortDescription?: string | null;
        status?: Enum_Freecontent_Status | null;
        publishedDate?: any | null;
        freeContentSubService?: {
          __typename?: "FreeContentSubServiceEntityResponse";
          data?: {
            __typename?: "FreeContentSubServiceEntity";
            id?: string | null;
            attributes?: {
              __typename?: "FreeContentSubService";
              name: string;
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
        image: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              hash: string;
              mime: string;
              name: string;
              provider: string;
              size: number;
              url: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        };
        blocks?: Array<
          | {
              __typename?: "ComponentBlocksFile";
              id: string;
              document?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                    mime: string;
                    url: string;
                    size: number;
                    hash: string;
                    provider: string;
                    alternativeText?: string | null;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksHorizontalRule";
              id: string;
              hr?: string | null;
            }
          | {
              __typename?: "ComponentBlocksImage";
              id: string;
              isDecorative?: boolean | null;
              altText?: string | null;
              picture?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    hash: string;
                    mime: string;
                    name: string;
                    provider: string;
                    size: number;
                    url: string;
                    alternativeText?: string | null;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksSubHeading";
              id: string;
              subHeadingText?: string | null;
              subHeadingTag?: Enum_Componentblockssubheading_Subheadingtag | null;
            }
          | {
              __typename?: "ComponentBlocksVideo";
              id: string;
              videoLink?: string | null;
              transcriptText?: string | null;
            }
          | {
              __typename?: "ComponentBlocksWysiwyg";
              id: string;
              textEditor?: string | null;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
      } | null;
    } | null;
  } | null;
};

export type GetFreeContentSubServiceByIdQueryVariables = Exact<{
  freeContentSubServiceId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetFreeContentSubServiceByIdQuery = {
  __typename?: "Query";
  freeContentSubService?: {
    __typename?: "FreeContentSubServiceEntityResponse";
    data?: {
      __typename?: "FreeContentSubServiceEntity";
      id?: string | null;
      attributes?: {
        __typename?: "FreeContentSubService";
        name: string;
        isActivated: boolean;
      } | null;
    } | null;
  } | null;
};

export type GetFreeContentSubServicesPathsQueryVariables = Exact<{
  contractId: Scalars["ID"];
  total: Scalars["Int"];
}>;

export type GetFreeContentSubServicesPathsQuery = {
  __typename?: "Query";
  freeContentSubServices?: {
    __typename?: "FreeContentSubServiceEntityResponseCollection";
    data: Array<{
      __typename?: "FreeContentSubServiceEntity";
      id?: string | null;
      attributes?: {
        __typename?: "FreeContentSubService";
        isActivated: boolean;
      } | null;
    }>;
  } | null;
};

export type GetFreeContentSubServicesPathsTotalQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetFreeContentSubServicesPathsTotalQuery = {
  __typename?: "Query";
  freeContentSubServices?: {
    __typename?: "FreeContentSubServiceEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: { __typename?: "Pagination"; total: number };
    };
  } | null;
};

export type GetFreeContentsPathsQueryVariables = Exact<{
  contractId: Scalars["ID"];
  total: Scalars["Int"];
}>;

export type GetFreeContentsPathsQuery = {
  __typename?: "Query";
  freeContents?: {
    __typename?: "FreeContentEntityResponseCollection";
    data: Array<{
      __typename?: "FreeContentEntity";
      id?: string | null;
      attributes?: {
        __typename?: "FreeContent";
        status?: Enum_Freecontent_Status | null;
      } | null;
    }>;
  } | null;
};

export type GetFreeContentsPathsTotalQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetFreeContentsPathsTotalQuery = {
  __typename?: "Query";
  freeContents?: {
    __typename?: "FreeContentEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: { __typename?: "Pagination"; total: number };
    };
  } | null;
};

export type GetBanAddressesAutoCompleteQueryVariables = Exact<{
  searchTerm: Scalars["String"];
}>;

export type GetBanAddressesAutoCompleteQuery = {
  __typename?: "Query";
  getAddressCoordinates?: Array<{
    __typename?: "SearchResultAddress";
    name?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    banFeaturesProperties?: any | null;
  } | null> | null;
};

export type GetContractByIdQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetContractByIdQuery = {
  __typename?: "Query";
  contract?: {
    __typename?: "ContractEntityResponse";
    data?: {
      __typename?: "ContractEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Contract";
        clientName: string;
        clientType: Enum_Contract_Clienttype;
        contractStatus: Enum_Contract_Contractstatus;
        siret?: any | null;
        clear?: any | null;
        ccap?: any | null;
        isNonExclusive: boolean;
        isRVFrance: boolean;
        pathId?: any | null;
        logo: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              hash: string;
              mime: string;
              name: string;
              provider: string;
              size: number;
              url: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        };
        channelType?: {
          __typename?: "ChannelTypeEntityResponse";
          data?: {
            __typename?: "ChannelTypeEntity";
            id?: string | null;
            attributes?: {
              __typename?: "ChannelType";
              hasWebApp?: boolean | null;
              hasWebSite?: boolean | null;
            } | null;
          } | null;
        } | null;
        clientContact?: {
          __typename?: "ClientContactEntityResponse";
          data?: {
            __typename?: "ClientContactEntity";
            id?: string | null;
            attributes?: {
              __typename?: "ClientContact";
              firstName: string;
              lastName: string;
              email: string;
              phoneNumber: string;
            } | null;
          } | null;
        } | null;
        contractCustomization?: {
          __typename?: "ContractCustomizationEntityResponse";
          data?: {
            __typename?: "ContractCustomizationEntity";
            id?: string | null;
            attributes?: {
              __typename?: "ContractCustomization";
              primaryColor: string;
              secondaryColor?: string | null;
              textContrast: string;
            } | null;
          } | null;
        } | null;
        editorialService?: {
          __typename?: "EditorialServiceEntityResponse";
          data?: {
            __typename?: "EditorialServiceEntity";
            id?: string | null;
            attributes?: {
              __typename?: "EditorialService";
              eventSubService?: {
                __typename?: "EventSubServiceEntityResponse";
                data?: {
                  __typename?: "EventSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "EventSubService";
                    name: string;
                    isActivated: boolean;
                  } | null;
                } | null;
              } | null;
              freeContentSubServices?: {
                __typename?: "FreeContentSubServiceRelationResponseCollection";
                data: Array<{
                  __typename?: "FreeContentSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "FreeContentSubService";
                    name: string;
                    isActivated: boolean;
                  } | null;
                }>;
              } | null;
              newsSubService?: {
                __typename?: "NewsSubServiceEntityResponse";
                data?: {
                  __typename?: "NewsSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "NewsSubService";
                    name: string;
                    isActivated: boolean;
                  } | null;
                } | null;
              } | null;
              quizSubService?: {
                __typename?: "QuizSubServiceEntityResponse";
                data?: {
                  __typename?: "QuizSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "QuizSubService";
                    name: string;
                    isActivated: boolean;
                  } | null;
                } | null;
              } | null;
              tipSubService?: {
                __typename?: "TipSubServiceEntityResponse";
                data?: {
                  __typename?: "TipSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "TipSubService";
                    name: string;
                    isActivated: boolean;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
        recyclingGuideService?: {
          __typename?: "RecyclingGuideServiceEntityResponse";
          data?: {
            __typename?: "RecyclingGuideServiceEntity";
            id?: string | null;
            attributes?: {
              __typename?: "RecyclingGuideService";
              name: string;
              isActivated: boolean;
              memoName: string;
            } | null;
          } | null;
        } | null;
        pickUpDayService?: {
          __typename?: "PickUpDayServiceEntityResponse";
          data?: {
            __typename?: "PickUpDayServiceEntity";
            id?: string | null;
            attributes?: {
              __typename?: "PickUpDayService";
              name: string;
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        dropOffMapService?: {
          __typename?: "DropOffMapServiceEntityResponse";
          data?: {
            __typename?: "DropOffMapServiceEntity";
            id?: string | null;
            attributes?: {
              __typename?: "DropOffMapService";
              name?: string | null;
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        requestService?: {
          __typename?: "RequestServiceEntityResponse";
          data?: {
            __typename?: "RequestServiceEntity";
            id?: string | null;
            attributes?: {
              __typename?: "RequestService";
              name: string;
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetContractMenuQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetContractMenuQuery = {
  __typename?: "Query";
  contract?: {
    __typename?: "ContractEntityResponse";
    data?: {
      __typename?: "ContractEntity";
      attributes?: {
        __typename?: "Contract";
        contractMenu?: {
          __typename?: "ContractMenuEntityResponse";
          data?: {
            __typename?: "ContractMenuEntity";
            attributes?: {
              __typename?: "ContractMenu";
              serviceLinks?: Array<
                | { __typename?: "ComponentLinksAlertNotification" }
                | {
                    __typename?: "ComponentLinksContactUs";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksDropOffMap";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksEvents";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksExternal";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    externalLink?: string | null;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksFrees";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | { __typename?: "ComponentLinksKeyMetrics" }
                | {
                    __typename?: "ComponentLinksMyWasteCounter";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksNews";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksPickUpDay";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksQuizzes";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksRecyclingGuide";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksRequest";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | {
                    __typename?: "ComponentLinksTips";
                    id: string;
                    name?: string | null;
                    isDisplayed: boolean;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        attributes?: {
                          __typename?: "UploadFile";
                          url: string;
                        } | null;
                      } | null;
                    } | null;
                  }
                | { __typename?: "Error" }
                | null
              > | null;
            } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetEditoBlockQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetEditoBlockQuery = {
  __typename?: "Query";
  contractCustomizations?: {
    __typename?: "ContractCustomizationEntityResponseCollection";
    data: Array<{
      __typename?: "ContractCustomizationEntity";
      id?: string | null;
      attributes?: {
        __typename?: "ContractCustomization";
        homepage?: {
          __typename?: "HomepageEntityResponse";
          data?: {
            __typename?: "HomepageEntity";
            attributes?: {
              __typename?: "Homepage";
              editoBlock?: {
                __typename?: "EditoBlockEntityResponse";
                data?: {
                  __typename?: "EditoBlockEntity";
                  attributes?: {
                    __typename?: "EditoBlock";
                    titleContent: string;
                    displayBlock: boolean;
                    editoContents?: Array<
                      | {
                          __typename?: "ComponentLinksEditoContent";
                          id: string;
                          event?: {
                            __typename?: "EventEntityResponse";
                            data?: {
                              __typename?: "EventEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "Event";
                                title: string;
                                shortDescription?: string | null;
                                publishedDate?: any | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                                image: {
                                  __typename?: "UploadFileEntityResponse";
                                  data?: {
                                    __typename?: "UploadFileEntity";
                                    attributes?: {
                                      __typename?: "UploadFile";
                                      hash: string;
                                      mime: string;
                                      name: string;
                                      provider: string;
                                      size: number;
                                      url: string;
                                      alternativeText?: string | null;
                                    } | null;
                                  } | null;
                                };
                              } | null;
                            } | null;
                          } | null;
                          freeContent?: {
                            __typename?: "FreeContentEntityResponse";
                            data?: {
                              __typename?: "FreeContentEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "FreeContent";
                                title: string;
                                shortDescription?: string | null;
                                publishedDate?: any | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                                image: {
                                  __typename?: "UploadFileEntityResponse";
                                  data?: {
                                    __typename?: "UploadFileEntity";
                                    attributes?: {
                                      __typename?: "UploadFile";
                                      hash: string;
                                      mime: string;
                                      name: string;
                                      provider: string;
                                      size: number;
                                      url: string;
                                      alternativeText?: string | null;
                                    } | null;
                                  } | null;
                                };
                              } | null;
                            } | null;
                          } | null;
                          new?: {
                            __typename?: "NewEntityResponse";
                            data?: {
                              __typename?: "NewEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "New";
                                title: string;
                                shortDescription?: string | null;
                                publishedDate?: any | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                                image?: {
                                  __typename?: "UploadFileEntityResponse";
                                  data?: {
                                    __typename?: "UploadFileEntity";
                                    attributes?: {
                                      __typename?: "UploadFile";
                                      hash: string;
                                      mime: string;
                                      name: string;
                                      provider: string;
                                      size: number;
                                      url: string;
                                      alternativeText?: string | null;
                                    } | null;
                                  } | null;
                                } | null;
                              } | null;
                            } | null;
                          } | null;
                          quiz?: {
                            __typename?: "QuizEntityResponse";
                            data?: {
                              __typename?: "QuizEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "Quiz";
                                title?: string | null;
                                shortDescription?: string | null;
                                publishedDate?: any | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                              } | null;
                            } | null;
                          } | null;
                          tip?: {
                            __typename?: "TipEntityResponse";
                            data?: {
                              __typename?: "TipEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "Tip";
                                title: string;
                                shortDescription?: string | null;
                                link?: string | null;
                                publishedDate?: any | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                                image: {
                                  __typename?: "UploadFileEntityResponse";
                                  data?: {
                                    __typename?: "UploadFileEntity";
                                    attributes?: {
                                      __typename?: "UploadFile";
                                      hash: string;
                                      mime: string;
                                      name: string;
                                      provider: string;
                                      size: number;
                                      url: string;
                                      alternativeText?: string | null;
                                    } | null;
                                  } | null;
                                };
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "Error";
                          code: string;
                          message?: string | null;
                        }
                      | null
                    > | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetFooterQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetFooterQuery = {
  __typename?: "Query";
  contractCustomizations?: {
    __typename?: "ContractCustomizationEntityResponseCollection";
    data: Array<{
      __typename?: "ContractCustomizationEntity";
      attributes?: {
        __typename?: "ContractCustomization";
        footer?: {
          __typename?: "FooterEntityResponse";
          data?: {
            __typename?: "FooterEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Footer";
              accessibilityLevel?: Enum_Footer_Accessibilitylevel | null;
              cguSubService?: {
                __typename?: "CguSubServiceEntityResponse";
                data?: {
                  __typename?: "CguSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "CguSubService";
                    link?: string | null;
                  } | null;
                } | null;
              } | null;
              accessibilitySubService?: {
                __typename?: "AccessibilitySubServiceEntityResponse";
                data?: {
                  __typename?: "AccessibilitySubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "AccessibilitySubService";
                    link?: string | null;
                  } | null;
                } | null;
              } | null;
              confidentialitySubService?: {
                __typename?: "ConfidentialitySubServiceEntityResponse";
                data?: {
                  __typename?: "ConfidentialitySubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "ConfidentialitySubService";
                    link?: string | null;
                  } | null;
                } | null;
              } | null;
              cookiesSubService?: {
                __typename?: "CookiesSubServiceEntityResponse";
                data?: {
                  __typename?: "CookiesSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "CookiesSubService";
                    link?: string | null;
                  } | null;
                } | null;
              } | null;
              contactUsSubService?: {
                __typename?: "ContactUsSubServiceEntityResponse";
                data?: {
                  __typename?: "ContactUsSubServiceEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "ContactUsSubService";
                    label: string;
                    link?: string | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetLogoQueryVariables = Exact<{
  contractId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetLogoQuery = {
  __typename?: "Query";
  contract?: {
    __typename?: "ContractEntityResponse";
    data?: {
      __typename?: "ContractEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Contract";
        logo: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              mime: string;
              size: number;
              url: string;
              provider: string;
              hash: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        };
      } | null;
    } | null;
  } | null;
};

export type GetNewestTopContentsQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetNewestTopContentsQuery = {
  __typename?: "Query";
  getNewestTopContents?: Array<{
    __typename?: "EventOrNews";
    type: EventsOrNewsType;
    originalId: string;
    title: string;
    shortDescription?: string | null;
    publishedDate: any;
    tags?: Array<{ __typename?: "Tag"; name: string } | null> | null;
    image?: {
      __typename?: "UploadFile";
      hash: string;
      mime: string;
      name: string;
      provider: string;
      size: number;
      url: string;
      alternativeText?: string | null;
    } | null;
  } | null> | null;
};

export type GetQuizAndTipsBlockQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetQuizAndTipsBlockQuery = {
  __typename?: "Query";
  contractCustomizations?: {
    __typename?: "ContractCustomizationEntityResponseCollection";
    data: Array<{
      __typename?: "ContractCustomizationEntity";
      attributes?: {
        __typename?: "ContractCustomization";
        homepage?: {
          __typename?: "HomepageEntityResponse";
          data?: {
            __typename?: "HomepageEntity";
            attributes?: {
              __typename?: "Homepage";
              quizAndTipsBlock?: {
                __typename?: "QuizAndTipsBlockEntityResponse";
                data?: {
                  __typename?: "QuizAndTipsBlockEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "QuizAndTipsBlock";
                    titleContent: string;
                    displayBlock: boolean;
                    displayQuiz: boolean;
                    displayTips: boolean;
                    quiz?: {
                      __typename?: "QuizEntityResponse";
                      data?: {
                        __typename?: "QuizEntity";
                        id?: string | null;
                        attributes?: {
                          __typename?: "Quiz";
                          title?: string | null;
                        } | null;
                      } | null;
                    } | null;
                    tips?: {
                      __typename?: "TipRelationResponseCollection";
                      data: Array<{
                        __typename?: "TipEntity";
                        id?: string | null;
                        attributes?: {
                          __typename?: "Tip";
                          title: string;
                          shortDescription?: string | null;
                          link?: string | null;
                          publishedDate?: any | null;
                          tags?: {
                            __typename?: "TagRelationResponseCollection";
                            data: Array<{
                              __typename?: "TagEntity";
                              attributes?: {
                                __typename?: "Tag";
                                name: string;
                              } | null;
                            }>;
                          } | null;
                          image: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                hash: string;
                                mime: string;
                                name: string;
                                provider: string;
                                size: number;
                                url: string;
                                alternativeText?: string | null;
                              } | null;
                            } | null;
                          };
                        } | null;
                      }>;
                    } | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetRecyclingGuideBlockQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetRecyclingGuideBlockQuery = {
  __typename?: "Query";
  contractCustomizations?: {
    __typename?: "ContractCustomizationEntityResponseCollection";
    data: Array<{
      __typename?: "ContractCustomizationEntity";
      attributes?: {
        __typename?: "ContractCustomization";
        homepage?: {
          __typename?: "HomepageEntityResponse";
          data?: {
            __typename?: "HomepageEntity";
            attributes?: {
              __typename?: "Homepage";
              recyclingGuideBlock?: {
                __typename?: "RecyclingGuideBlockEntityResponse";
                data?: {
                  __typename?: "RecyclingGuideBlockEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "RecyclingGuideBlock";
                    titleContent: string;
                    subtitleContent: string;
                    recyclingGuideDisplayContent: string;
                    tags?: {
                      __typename?: "TagRelationResponseCollection";
                      data: Array<{
                        __typename?: "TagEntity";
                        attributes?: {
                          __typename?: "Tag";
                          name: string;
                        } | null;
                      }>;
                    } | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetRecyclingGuideSearchEngineQueryVariables = Exact<{
  searchTerm: Scalars["String"];
  contractId: Scalars["ID"];
}>;

export type GetRecyclingGuideSearchEngineQuery = {
  __typename?: "Query";
  recyclingGuideSearchEngine?: Array<{
    __typename?: "SearchResult";
    typeName: string;
    id: string;
    name: string;
    wasteFamilyName?: string | null;
  } | null> | null;
};

export type GetServicesActiveQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetServicesActiveQuery = {
  __typename?: "Query";
  editorialServices?: {
    __typename?: "EditorialServiceEntityResponseCollection";
    data: Array<{
      __typename?: "EditorialServiceEntity";
      id?: string | null;
      attributes?: {
        __typename?: "EditorialService";
        eventSubService?: {
          __typename?: "EventSubServiceEntityResponse";
          data?: {
            __typename?: "EventSubServiceEntity";
            attributes?: {
              __typename?: "EventSubService";
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        newsSubService?: {
          __typename?: "NewsSubServiceEntityResponse";
          data?: {
            __typename?: "NewsSubServiceEntity";
            attributes?: {
              __typename?: "NewsSubService";
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        quizSubService?: {
          __typename?: "QuizSubServiceEntityResponse";
          data?: {
            __typename?: "QuizSubServiceEntity";
            attributes?: {
              __typename?: "QuizSubService";
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        tipSubService?: {
          __typename?: "TipSubServiceEntityResponse";
          data?: {
            __typename?: "TipSubServiceEntity";
            attributes?: {
              __typename?: "TipSubService";
              isActivated: boolean;
            } | null;
          } | null;
        } | null;
        freeContentSubServices?: {
          __typename?: "FreeContentSubServiceRelationResponseCollection";
          data: Array<{
            __typename?: "FreeContentSubServiceEntity";
            attributes?: {
              __typename?: "FreeContentSubService";
              isActivated: boolean;
            } | null;
          }>;
        } | null;
        contactUsSubService?: {
          __typename?: "ContactUsSubServiceEntityResponse";
          data?: {
            __typename?: "ContactUsSubServiceEntity";
            attributes?: {
              __typename?: "ContactUsSubService";
              isActivated?: boolean | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
  recyclingGuideServices?: {
    __typename?: "RecyclingGuideServiceEntityResponseCollection";
    data: Array<{
      __typename?: "RecyclingGuideServiceEntity";
      attributes?: {
        __typename?: "RecyclingGuideService";
        isActivated: boolean;
      } | null;
    }>;
  } | null;
  requestServices?: {
    __typename?: "RequestServiceEntityResponseCollection";
    data: Array<{
      __typename?: "RequestServiceEntity";
      attributes?: {
        __typename?: "RequestService";
        isActivated: boolean;
      } | null;
    }>;
  } | null;
};

export type GetServicesBlockQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetServicesBlockQuery = {
  __typename?: "Query";
  contractCustomizations?: {
    __typename?: "ContractCustomizationEntityResponseCollection";
    data: Array<{
      __typename?: "ContractCustomizationEntity";
      id?: string | null;
      attributes?: {
        __typename?: "ContractCustomization";
        homepage?: {
          __typename?: "HomepageEntityResponse";
          data?: {
            __typename?: "HomepageEntity";
            attributes?: {
              __typename?: "Homepage";
              servicesBlock?: {
                __typename?: "ServicesBlockEntityResponse";
                data?: {
                  __typename?: "ServicesBlockEntity";
                  attributes?: {
                    __typename?: "ServicesBlock";
                    titleContent: string;
                    serviceLinks?: Array<
                      | { __typename?: "ComponentLinksAlertNotification" }
                      | {
                          __typename?: "ComponentLinksContactUs";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksDropOffMap";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksEvents";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksExternal";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          externalLink?: string | null;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksFrees";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | { __typename?: "ComponentLinksKeyMetrics" }
                      | { __typename?: "ComponentLinksMyWasteCounter" }
                      | {
                          __typename?: "ComponentLinksNews";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksPickUpDay";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksQuizzes";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksRecyclingGuide";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksRequest";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "ComponentLinksTips";
                          id: string;
                          name?: string | null;
                          isDisplayed: boolean;
                          picto?: {
                            __typename?: "UploadFileEntityResponse";
                            data?: {
                              __typename?: "UploadFileEntity";
                              attributes?: {
                                __typename?: "UploadFile";
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | { __typename?: "Error" }
                      | null
                    > | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetTopContentBlockQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetTopContentBlockQuery = {
  __typename?: "Query";
  contractCustomizations?: {
    __typename?: "ContractCustomizationEntityResponseCollection";
    data: Array<{
      __typename?: "ContractCustomizationEntity";
      attributes?: {
        __typename?: "ContractCustomization";
        homepage?: {
          __typename?: "HomepageEntityResponse";
          data?: {
            __typename?: "HomepageEntity";
            attributes?: {
              __typename?: "Homepage";
              topContentBlock?: {
                __typename?: "TopContentBlockEntityResponse";
                data?: {
                  __typename?: "TopContentBlockEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "TopContentBlock";
                    titleContent: string;
                    displayBlock: boolean;
                    displayLastThreeContents: boolean;
                    hasTopContent: boolean;
                    topContent?: Array<
                      | {
                          __typename?: "ComponentLinksTopContent";
                          id: string;
                          event?: {
                            __typename?: "EventEntityResponse";
                            data?: {
                              __typename?: "EventEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "Event";
                                title: string;
                                shortDescription?: string | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                                image: {
                                  __typename?: "UploadFileEntityResponse";
                                  data?: {
                                    __typename?: "UploadFileEntity";
                                    attributes?: {
                                      __typename?: "UploadFile";
                                      hash: string;
                                      mime: string;
                                      name: string;
                                      provider: string;
                                      size: number;
                                      url: string;
                                      alternativeText?: string | null;
                                    } | null;
                                  } | null;
                                };
                              } | null;
                            } | null;
                          } | null;
                          new?: {
                            __typename?: "NewEntityResponse";
                            data?: {
                              __typename?: "NewEntity";
                              id?: string | null;
                              attributes?: {
                                __typename?: "New";
                                title: string;
                                shortDescription?: string | null;
                                tags?: {
                                  __typename?: "TagRelationResponseCollection";
                                  data: Array<{
                                    __typename?: "TagEntity";
                                    attributes?: {
                                      __typename?: "Tag";
                                      name: string;
                                    } | null;
                                  }>;
                                } | null;
                                image?: {
                                  __typename?: "UploadFileEntityResponse";
                                  data?: {
                                    __typename?: "UploadFileEntity";
                                    attributes?: {
                                      __typename?: "UploadFile";
                                      hash: string;
                                      mime: string;
                                      name: string;
                                      provider: string;
                                      size: number;
                                      url: string;
                                      alternativeText?: string | null;
                                    } | null;
                                  } | null;
                                } | null;
                              } | null;
                            } | null;
                          } | null;
                        }
                      | {
                          __typename?: "Error";
                          code: string;
                          message?: string | null;
                        }
                      | null
                    > | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetBinIdQueryVariables = Exact<{
  city?: InputMaybe<Scalars["String"]>;
  contractMetadataKey?: InputMaybe<Scalars["String"]>;
  street?: InputMaybe<Scalars["String"]>;
  houseNumber?: InputMaybe<Scalars["String"]>;
}>;

export type GetBinIdQuery = {
  __typename?: "Query";
  getBinId?: Array<{
    __typename?: "Data";
    chipId?: string | null;
    trashFlow?: string | null;
  } | null> | null;
};

export type GetDataHomePageMwcQueryVariables = Exact<{
  address: Scalars["String"];
  typeUsager: Scalars["String"];
  dateDebut: Scalars["String"];
  dateFin: Scalars["String"];
  agregation: Scalars["String"];
  averageProductionPerPerson: Scalars["Int"];
  numberOfPeopleIntheHousehold: Scalars["Int"];
}>;

export type GetDataHomePageMwcQuery = {
  __typename?: "Query";
  GetHomeDataMwc?: {
    __typename?: "HomeDataMwc";
    productionCumulee?: number | null;
    adresse?: string | null;
    averageProductionPerPerson?: number | null;
    equivalentOfProduction?: number | null;
    variationPercent?: number | null;
  } | null;
};

export type GetMwcFlowsByContractIdQueryVariables = Exact<{
  filters?: InputMaybe<MwcFlowFiltersInput>;
}>;

export type GetMwcFlowsByContractIdQuery = {
  __typename?: "Query";
  mwcFlows?: {
    __typename?: "MwcFlowEntityResponseCollection";
    data: Array<{
      __typename?: "MwcFlowEntity";
      id?: string | null;
      attributes?: {
        __typename?: "MwcFlow";
        weightSystem?: Enum_Mwcflow_Weightsystem | null;
        averageProductionPerson?: any | null;
        blocks?: Array<
          | {
              __typename?: "ComponentBlocksImage";
              id: string;
              isDecorative?: boolean | null;
              altText?: string | null;
              picture?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksSubHeading";
              id: string;
              subHeadingText?: string | null;
              subHeadingTag?: Enum_Componentblockssubheading_Subheadingtag | null;
            }
          | {
              __typename?: "ComponentBlocksVideo";
              id: string;
              videoLink?: string | null;
              transcriptText?: string | null;
            }
          | {
              __typename?: "ComponentBlocksWysiwyg";
              id: string;
              textEditor?: string | null;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
        flow?: {
          __typename?: "FlowEntityResponse";
          data?: {
            __typename?: "FlowEntity";
            attributes?: {
              __typename?: "Flow";
              isActivated?: boolean | null;
              code?: string | null;
              name?: string | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type SearchAddressQueryVariables = Exact<{
  address?: InputMaybe<Scalars["String"]>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type SearchAddressQuery = {
  __typename?: "Query";
  searchAddress?: Array<{
    __typename?: "Address";
    label?: string | null;
    score?: number | null;
    id?: string | null;
    name?: string | null;
    postcode?: string | null;
    citycode?: string | null;
    x?: number | null;
    y?: number | null;
    city?: string | null;
    district?: string | null;
    context?: string | null;
    type?: string | null;
    importance?: number | null;
    street?: string | null;
    houseNumber?: number | null;
  } | null> | null;
};

export type GetContactQueryVariables = Exact<{
  filters?: InputMaybe<MwCounterServiceFiltersInput>;
}>;

export type GetContactQuery = {
  __typename?: "Query";
  mwCounterServices?: {
    __typename?: "MwCounterServiceEntityResponseCollection";
    data: Array<{
      __typename?: "MwCounterServiceEntity";
      attributes?: {
        __typename?: "MwCounterService";
        serviceName?: string | null;
        contactEmail?: string | null;
        phoneNumber?: any | null;
        postalAddress?: string | null;
        postalCode?: any | null;
        city?: string | null;
      } | null;
    }>;
  } | null;
};

export type GetDropOffMapByDropOffMapByServiceIdQueryVariables = Exact<{
  dropOffMapServiceId: Scalars["ID"];
}>;

export type GetDropOffMapByDropOffMapByServiceIdQuery = {
  __typename?: "Query";
  getDropOffMaps?: Array<{
    __typename: "DropOffMapDTO";
    id: string;
    name: string;
    BANFeatureProperties?: any | null;
    address: string;
    city: string;
    latitude: number;
    longitude: number;
    mustKnow?: string | null;
    description?: string | null;
    phoneNumber?: string | null;
    collect?: {
      __typename?: "CollectEntity";
      entityTypeName: string;
      name: string;
      originalId: string;
      uniqueId: string;
      grammaticalGender: string;
      picto: {
        __typename?: "PictoDTO";
        alternativeText?: string | null;
        id: string;
        name: string;
        url: string;
      };
    } | null;
    downloadableFiles?: Array<{
      __typename?: "ComponentBlocksDownloadBlock";
      id: string;
      linkText: string;
      file: {
        __typename?: "UploadFileEntityResponse";
        data?: {
          __typename?: "UploadFileEntity";
          id?: string | null;
          attributes?: {
            __typename?: "UploadFile";
            name: string;
            alternativeText?: string | null;
            caption?: string | null;
            formats?: any | null;
            hash: string;
            ext?: string | null;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string | null;
            provider: string;
            provider_metadata?: any | null;
          } | null;
        } | null;
      };
    } | null> | null;
    openingHoursBlocks?: Array<
      | {
          __typename: "ComponentBlocksOpeningDay";
          id: string;
          afterNoonEnd?: any | null;
          afterNoonStart?: any | null;
          morningStart?: any | null;
          morningEnd?: any | null;
          weekDay: Enum_Componentblocksopeningday_Weekday;
        }
      | { __typename: "Error"; code: string; message?: string | null }
      | null
    > | null;
  } | null> | null;
};

export type GetAddressCoordinatesQueryVariables = Exact<{
  searchTerm: Scalars["String"];
}>;

export type GetAddressCoordinatesQuery = {
  __typename?: "Query";
  getAddressCoordinates?: Array<{
    __typename?: "SearchResultAddress";
    name?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    banFeaturesProperties?: any | null;
  } | null> | null;
};

export type GetPickUpDaysByCoordinatesLocalQueryVariables = Exact<{
  pickUpDayServiceId: Scalars["ID"];
  lat: Scalars["Float"];
  long: Scalars["Float"];
}>;

export type GetPickUpDaysByCoordinatesLocalQuery = {
  __typename?: "Query";
  getPickUpDaysByCoordinates?: Array<string | null> | null;
};

export type GetPickUpDaysByIdsAndContratIdQueryVariables = Exact<{
  pickUpDayIds?: InputMaybe<
    Array<InputMaybe<Scalars["ID"]>> | InputMaybe<Scalars["ID"]>
  >;
  contractId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetPickUpDaysByIdsAndContratIdQuery = {
  __typename?: "Query";
  pickUpDays?: {
    __typename?: "PickUpDayEntityResponseCollection";
    data: Array<{
      __typename?: "PickUpDayEntity";
      id?: string | null;
      attributes?: {
        __typename?: "PickUpDay";
        name: string;
        updatedAt?: any | null;
        pickUpHours?: string | null;
        periodicity?: Enum_Pickupday_Periodicity | null;
        includeHoliday: boolean;
        advancedSelection: any;
        buttonLabel?: string | null;
        externalLink?: string | null;
        flow: {
          __typename?: "FlowEntityResponse";
          data?: {
            __typename?: "FlowEntity";
            attributes?: {
              __typename?: "Flow";
              name?: string | null;
              color?: {
                __typename?: "FlowColorEntityResponse";
                data?: {
                  __typename?: "FlowColorEntity";
                  attributes?: {
                    __typename?: "FlowColor";
                    name: string;
                    hexaCode: string;
                  } | null;
                } | null;
              } | null;
              wasteForms?: {
                __typename?: "WasteFormRelationResponseCollection";
                data: Array<{
                  __typename?: "WasteFormEntity";
                  attributes?: {
                    __typename?: "WasteForm";
                    name?: string | null;
                  } | null;
                }>;
              } | null;
            } | null;
          } | null;
        };
        collectDoorToDoor?: {
          __typename?: "CollectDoorToDoorEntityResponse";
          data?: {
            __typename?: "CollectDoorToDoorEntity";
            attributes?: {
              __typename?: "CollectDoorToDoor";
              picto?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    url: string;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
        collectVoluntary?: {
          __typename?: "CollectVoluntaryEntityResponse";
          data?: {
            __typename?: "CollectVoluntaryEntity";
            attributes?: {
              __typename?: "CollectVoluntary";
              name?: string | null;
              picto?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    url: string;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
        informationMessage?: {
          __typename?: "InformationMessageEntityResponse";
          data?: {
            __typename?: "InformationMessageEntity";
            attributes?: {
              __typename?: "InformationMessage";
              dateEnd?: string | null;
              dateStart: string;
              infoMessage: string;
            } | null;
          } | null;
        } | null;
        request?: {
          __typename?: "RequestEntityResponse";
          data?: { __typename?: "RequestEntity"; id?: string | null } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetContactUsSubServiceByContractIdQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetContactUsSubServiceByContractIdQuery = {
  __typename?: "Query";
  contactUsSubServices?: {
    __typename?: "ContactUsSubServiceEntityResponseCollection";
    data: Array<{
      __typename?: "ContactUsSubServiceEntity";
      id?: string | null;
      attributes?: {
        __typename?: "ContactUsSubService";
        name: string;
        isActivated?: boolean | null;
      } | null;
    }>;
  } | null;
  contactUses?: {
    __typename?: "ContactUsEntityResponseCollection";
    data: Array<{
      __typename?: "ContactUsEntity";
      id?: string | null;
      attributes?: {
        __typename?: "ContactUs";
        title: string;
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
        blocks?: Array<
          | {
              __typename?: "ComponentBlocksFile";
              id: string;
              document?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    url: string;
                    size: number;
                    formats?: any | null;
                    name: string;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksHorizontalRule";
              id: string;
              hr?: string | null;
            }
          | {
              __typename?: "ComponentBlocksImage";
              id: string;
              isDecorative?: boolean | null;
              altText?: string | null;
              picture?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                    url: string;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksSubHeading";
              id: string;
              subHeadingText?: string | null;
              subHeadingTag?: Enum_Componentblockssubheading_Subheadingtag | null;
            }
          | {
              __typename?: "ComponentBlocksVideo";
              id: string;
              videoLink?: string | null;
              transcriptText?: string | null;
            }
          | {
              __typename?: "ComponentBlocksWysiwyg";
              id: string;
              textEditor?: string | null;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
      } | null;
    }>;
  } | null;
};

export type GetRequestByIdQueryVariables = Exact<{
  requestId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetRequestByIdQuery = {
  __typename?: "Query";
  request?: {
    __typename?: "RequestEntityResponse";
    data?: {
      __typename?: "RequestEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Request";
        name?: string | null;
        blockText?: string | null;
        confirmationMessage?: string | null;
        description?: string | null;
        isActivated?: boolean | null;
        hasAppointmentSlots?: boolean | null;
        hasUser: boolean;
        displayUserCivility?: boolean | null;
        isUserNameMandatory?: boolean | null;
        isUserEmailMandatory?: boolean | null;
        isUserPhoneMandatory?: boolean | null;
        userAllowSMSNotification?: boolean | null;
        hasAddress: boolean;
        fieldAddressLabel?: string | null;
        slotsReservationRules?: any | null;
        numberOfRequiredSlots?: number | null;
        hoursBeforeReservationIsActivated?: number | null;
        proofOfReceiptHeader?: string | null;
        proofOfReceiptSubject?: string | null;
        sendProofOfReceipt?: boolean | null;
        hasSeveralRequestTypes: boolean;
        requestSlots?: {
          __typename?: "RequestSlotRelationResponseCollection";
          data: Array<{
            __typename?: "RequestSlotEntity";
            id?: string | null;
            attributes?: {
              __typename?: "RequestSlot";
              slotMessage?: string | null;
              noSlotMessage?: string | null;
              timeSlots?: any | null;
              sectorizations?: {
                __typename?: "SectorizationRelationResponseCollection";
                data: Array<{
                  __typename?: "SectorizationEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "Sectorization";
                    name: string;
                    polygonCoordinates?: any | null;
                    description: string;
                  } | null;
                }>;
              } | null;
              slotsExceptions?: Array<{
                __typename?: "ComponentBlocksRequestSlotsExceptions";
                exceptionType?: Enum_Componentblocksrequestslotsexceptions_Exceptiontype | null;
                id: string;
                slotException?: any | null;
              } | null> | null;
            } | null;
          }>;
        } | null;
        requestService?: {
          __typename?: "RequestServiceEntityResponse";
          data?: {
            __typename?: "RequestServiceEntity";
            id?: string | null;
          } | null;
        } | null;
        requestAggregate?: {
          __typename?: "RequestAggregateEntityResponse";
          data?: {
            __typename?: "RequestAggregateEntity";
            id?: string | null;
          } | null;
        } | null;
        addableBlocks?: Array<
          | {
              __typename?: "ComponentBlocksAttachments";
              id: string;
              attachmentLabel: string;
              multipleAttachments?: boolean | null;
              renderField: boolean;
              attachment?: {
                __typename?: "UploadFileRelationResponseCollection";
                data: Array<{
                  __typename?: "UploadFileEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                    alternativeText?: string | null;
                    caption?: string | null;
                    width?: number | null;
                    height?: number | null;
                    formats?: any | null;
                    hash: string;
                    ext?: string | null;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl?: string | null;
                    provider: string;
                    provider_metadata?: any | null;
                    createdAt?: any | null;
                    updatedAt?: any | null;
                  } | null;
                }>;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksCheckbox";
              id: string;
              labelCheckbox: string;
              fieldStatusCheckbox: Enum_Componentblockscheckbox_Fieldstatuscheckbox;
            }
          | {
              __typename?: "ComponentBlocksCommentary";
              id: string;
              commentaryLabel: string;
              commentaryPlaceholder?: string | null;
              commentaryStatus: Enum_Componentblockscommentary_Commentarystatus;
            }
          | {
              __typename?: "ComponentBlocksCumbersome";
              id: string;
              cumbersomeLabel: string;
              maxNumberOfCumbersome?: number | null;
              maxVolumeOfCumbersome?: number | null;
              cumbersomeLimitMessage: string;
              isNumberAndVolume: boolean;
            }
          | {
              __typename?: "ComponentBlocksDateChoice";
              id: string;
              fieldLabelDateChoice: string;
              fieldStatus: Enum_Componentblocksdatechoice_Fieldstatus;
            }
          | {
              __typename?: "ComponentBlocksQcm";
              id: string;
              fieldLabelQCM: string;
              fieldStatusQCM: Enum_Componentblocksqcm_Fieldstatusqcm;
              multipleChoice: boolean;
              responses: string;
            }
          | {
              __typename?: "ComponentBlocksQuestions";
              id: string;
              height: boolean;
              questionTextLabel: string;
              questionTextPlaceholder: string;
              textStatus: Enum_Componentblocksquestions_Textstatus;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
        requestType?: Array<{
          __typename?: "ComponentBlocksRequestType";
          id: string;
          title: string;
          isEmail?: boolean | null;
          email?: string | null;
        } | null> | null;
      } | null;
    } | null;
  } | null;
};

export type GetRequestsByRequestAggregateIdQueryVariables = Exact<{
  requestAggregateId: Scalars["ID"];
}>;

export type GetRequestsByRequestAggregateIdQuery = {
  __typename?: "Query";
  requests?: {
    __typename?: "RequestEntityResponseCollection";
    data: Array<{
      __typename?: "RequestEntity";
      id?: string | null;
      attributes?: { __typename?: "Request"; name?: string | null } | null;
    }>;
  } | null;
};

export type GetRequestsLevelsQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetRequestsLevelsQuery = {
  __typename?: "Query";
  requestAggregates?: {
    __typename?: "RequestAggregateEntityResponseCollection";
    data: Array<{
      __typename?: "RequestAggregateEntity";
      id?: string | null;
      attributes?: { __typename?: "RequestAggregate"; name: string } | null;
    }>;
  } | null;
  requests?: {
    __typename?: "RequestEntityResponseCollection";
    data: Array<{
      __typename?: "RequestEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Request";
        name?: string | null;
        requestAggregate?: {
          __typename?: "RequestAggregateEntityResponse";
          data?: {
            __typename?: "RequestAggregateEntity";
            id?: string | null;
            attributes?: {
              __typename?: "RequestAggregate";
              name: string;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetMemoTriBlockByContractIdQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetMemoTriBlockByContractIdQuery = {
  __typename?: "Query";
  recyclingGuideServices?: {
    __typename?: "RecyclingGuideServiceEntityResponseCollection";
    data: Array<{
      __typename?: "RecyclingGuideServiceEntity";
      id?: string | null;
      attributes?: {
        __typename?: "RecyclingGuideService";
        isActivated: boolean;
        memoName: string;
        memoDesc?: string | null;
        memoFile?: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              formats?: any | null;
              hash: string;
              ext?: string | null;
              mime: string;
              size: number;
              url: string;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetRecyclingFamiliesFormsQueryVariables = Exact<{
  recyclingGuideServiceId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetRecyclingFamiliesFormsQuery = {
  __typename?: "Query";
  recyclingGuideService?: {
    __typename?: "RecyclingGuideServiceEntityResponse";
    data?: {
      __typename: "RecyclingGuideServiceEntity";
      id?: string | null;
      attributes?: {
        __typename?: "RecyclingGuideService";
        isActivated: boolean;
        wasteFamilies?: {
          __typename?: "WasteFamilyRelationResponseCollection";
          data: Array<{
            __typename: "WasteFamilyEntity";
            id?: string | null;
            attributes?: {
              __typename?: "WasteFamily";
              createdAt?: any | null;
              familyName: string;
              isSystem: boolean;
              updatedAt?: any | null;
              wasteForms?: {
                __typename?: "WasteFormRelationResponseCollection";
                data: Array<{
                  __typename: "WasteFormEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "WasteForm";
                    name?: string | null;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        id?: string | null;
                        attributes?: {
                          __typename?: "UploadFile";
                          name: string;
                          url: string;
                          hash: string;
                          size: number;
                          mime: string;
                          provider: string;
                        } | null;
                      } | null;
                    } | null;
                  } | null;
                }>;
              } | null;
            } | null;
          }>;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetRecyclingWasteFormItemByIdQueryVariables = Exact<{
  wasteFormId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetRecyclingWasteFormItemByIdQuery = {
  __typename?: "Query";
  wasteForm?: {
    __typename?: "WasteFormEntityResponse";
    data?: {
      __typename: "WasteFormEntity";
      id?: string | null;
      attributes?: {
        __typename?: "WasteForm";
        name?: string | null;
        recyclingGestureText?: string | null;
        isHidden?: boolean | null;
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
        picto?: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              name: string;
              url: string;
              hash: string;
              size: number;
              mime: string;
              provider: string;
            } | null;
          } | null;
        } | null;
        flow?: {
          __typename?: "FlowEntityResponse";
          data?: {
            __typename?: "FlowEntity";
            id?: string | null;
            attributes?: {
              __typename?: "Flow";
              name?: string | null;
              recyclingGesture: Enum_Flow_Recyclinggesture;
              code?: string | null;
              isActivated?: boolean | null;
              color?: {
                __typename?: "FlowColorEntityResponse";
                data?: {
                  __typename?: "FlowColorEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "FlowColor";
                    name: string;
                    hexaCode: string;
                    shouldChangeHexaCode: boolean;
                  } | null;
                } | null;
              } | null;
              collectVoluntaries?: {
                __typename?: "CollectVoluntaryRelationResponseCollection";
                data: Array<{
                  __typename?: "CollectVoluntaryEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "CollectVoluntary";
                    name?: string | null;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        id?: string | null;
                        attributes?: {
                          __typename?: "UploadFile";
                          name: string;
                          hash: string;
                          mime: string;
                          size: number;
                          url: string;
                          provider: string;
                          alternativeText?: string | null;
                        } | null;
                      } | null;
                    } | null;
                  } | null;
                }>;
              } | null;
              collectDropOffs?: {
                __typename?: "CollectDropOffRelationResponseCollection";
                data: Array<{
                  __typename?: "CollectDropOffEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "CollectDropOff";
                    name?: string | null;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        id?: string | null;
                        attributes?: {
                          __typename?: "UploadFile";
                          name: string;
                          hash: string;
                          mime: string;
                          size: number;
                          url: string;
                          provider: string;
                          alternativeText?: string | null;
                        } | null;
                      } | null;
                    } | null;
                  } | null;
                }>;
              } | null;
              collectDoorToDoors?: {
                __typename?: "CollectDoorToDoorRelationResponseCollection";
                data: Array<{
                  __typename?: "CollectDoorToDoorEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "CollectDoorToDoor";
                    name?: string | null;
                    picto?: {
                      __typename?: "UploadFileEntityResponse";
                      data?: {
                        __typename?: "UploadFileEntity";
                        id?: string | null;
                        attributes?: {
                          __typename?: "UploadFile";
                          name: string;
                          hash: string;
                          mime: string;
                          size: number;
                          url: string;
                          provider: string;
                          alternativeText?: string | null;
                        } | null;
                      } | null;
                    } | null;
                  } | null;
                }>;
              } | null;
            } | null;
          } | null;
        } | null;
        contentBlock?: Array<
          | {
              __typename?: "ComponentBlocksFile";
              id: string;
              document?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                    alternativeText?: string | null;
                    caption?: string | null;
                    width?: number | null;
                    height?: number | null;
                    formats?: any | null;
                    hash: string;
                    ext?: string | null;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl?: string | null;
                    provider: string;
                    provider_metadata?: any | null;
                    createdAt?: any | null;
                    updatedAt?: any | null;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksHorizontalRule";
              id: string;
              hr?: string | null;
            }
          | {
              __typename: "ComponentBlocksImage";
              id: string;
              isDecorative?: boolean | null;
              altText?: string | null;
              picture?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                    alternativeText?: string | null;
                    caption?: string | null;
                    width?: number | null;
                    height?: number | null;
                    formats?: any | null;
                    hash: string;
                    ext?: string | null;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl?: string | null;
                    provider: string;
                    provider_metadata?: any | null;
                    createdAt?: any | null;
                    updatedAt?: any | null;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksSubHeading";
              id: string;
              subHeadingText?: string | null;
              subHeadingTag?: Enum_Componentblockssubheading_Subheadingtag | null;
            }
          | {
              __typename?: "ComponentBlocksVideo";
              id: string;
              videoLink?: string | null;
              transcriptText?: string | null;
            }
          | {
              __typename?: "ComponentBlocksWysiwyg";
              id: string;
              textEditor?: string | null;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
      } | null;
    } | null;
  } | null;
};

export type GetWasteFormsPathsQueryVariables = Exact<{
  contractId: Scalars["ID"];
  total: Scalars["Int"];
}>;

export type GetWasteFormsPathsQuery = {
  __typename?: "Query";
  wasteForms?: {
    __typename?: "WasteFormEntityResponseCollection";
    data: Array<{
      __typename: "WasteFormEntity";
      id?: string | null;
      attributes?: {
        __typename?: "WasteForm";
        isHidden?: boolean | null;
      } | null;
    }>;
  } | null;
};

export type GetWasteFormsPathsTotalQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetWasteFormsPathsTotalQuery = {
  __typename?: "Query";
  wasteForms?: {
    __typename?: "WasteFormEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: { __typename?: "Pagination"; total: number };
    };
  } | null;
};

export type GetTipByIdQueryVariables = Exact<{
  tipId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetTipByIdQuery = {
  __typename?: "Query";
  tip?: {
    __typename?: "TipEntityResponse";
    data?: {
      __typename?: "TipEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Tip";
        title: string;
        link?: string | null;
        titleLabel?: string | null;
        shortDescription?: string | null;
        status?: Enum_Tip_Status | null;
        publishedDate?: any | null;
        unpublishedDate?: any | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        tipSubService?: {
          __typename?: "TipSubServiceEntityResponse";
          data?: {
            __typename?: "TipSubServiceEntity";
            id?: string | null;
          } | null;
        } | null;
        tags?: {
          __typename?: "TagRelationResponseCollection";
          data: Array<{
            __typename?: "TagEntity";
            id?: string | null;
            attributes?: { __typename?: "Tag"; name: string } | null;
          }>;
        } | null;
        image: {
          __typename?: "UploadFileEntityResponse";
          data?: {
            __typename?: "UploadFileEntity";
            id?: string | null;
            attributes?: {
              __typename?: "UploadFile";
              hash: string;
              mime: string;
              name: string;
              provider: string;
              size: number;
              url: string;
              alternativeText?: string | null;
            } | null;
          } | null;
        };
        blocks?: Array<
          | {
              __typename?: "ComponentBlocksFile";
              id: string;
              document?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  attributes?: {
                    __typename?: "UploadFile";
                    hash: string;
                    mime: string;
                    provider: string;
                    size: number;
                    name: string;
                    url: string;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksHorizontalRule";
              id: string;
              hr?: string | null;
            }
          | {
              __typename?: "ComponentBlocksImage";
              id: string;
              isDecorative?: boolean | null;
              altText?: string | null;
              picture?: {
                __typename?: "UploadFileEntityResponse";
                data?: {
                  __typename?: "UploadFileEntity";
                  id?: string | null;
                  attributes?: {
                    __typename?: "UploadFile";
                    name: string;
                    url: string;
                    hash: string;
                    mime: string;
                    provider: string;
                    size: number;
                  } | null;
                } | null;
              } | null;
            }
          | {
              __typename?: "ComponentBlocksSubHeading";
              id: string;
              subHeadingText?: string | null;
              subHeadingTag?: Enum_Componentblockssubheading_Subheadingtag | null;
            }
          | {
              __typename?: "ComponentBlocksVideo";
              id: string;
              videoLink?: string | null;
              transcriptText?: string | null;
            }
          | {
              __typename?: "ComponentBlocksWysiwyg";
              id: string;
              textEditor?: string | null;
            }
          | { __typename?: "Error"; code: string; message?: string | null }
          | null
        > | null;
      } | null;
    } | null;
  } | null;
};

export type GetTipsPathsQueryVariables = Exact<{
  contractId: Scalars["ID"];
  total: Scalars["Int"];
}>;

export type GetTipsPathsQuery = {
  __typename?: "Query";
  tips?: {
    __typename?: "TipEntityResponseCollection";
    data: Array<{
      __typename?: "TipEntity";
      id?: string | null;
      attributes?: {
        __typename?: "Tip";
        status?: Enum_Tip_Status | null;
      } | null;
    }>;
  } | null;
};

export type GetTipsPathsTotalQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetTipsPathsTotalQuery = {
  __typename?: "Query";
  tips?: {
    __typename?: "TipEntityResponseCollection";
    meta: {
      __typename?: "ResponseCollectionMeta";
      pagination: { __typename?: "Pagination"; total: number };
    };
  } | null;
};

export const GetNewByIdDocument = gql`
  query getNewById($newId: ID!) {
    new(id: $newId) {
      data {
        id
        attributes {
          title
          shortDescription
          status
          publishedDate
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
          image {
            data {
              id
              attributes {
                hash
                mime
                name
                provider
                size
                url
                alternativeText
              }
            }
          }
          blocks {
            ... on ComponentBlocksSubHeading {
              id
              subHeadingText
              subHeadingTag
            }
            ... on ComponentBlocksVideo {
              id
              videoLink
              transcriptText
            }
            ... on ComponentBlocksWysiwyg {
              id
              textEditor
            }
            ... on ComponentBlocksHorizontalRule {
              id
              hr
            }
            ... on ComponentBlocksImage {
              id
              picture {
                data {
                  id
                  attributes {
                    hash
                    mime
                    name
                    provider
                    size
                    url
                    alternativeText
                  }
                }
              }
              isDecorative
              altText
            }
            ... on ComponentBlocksFile {
              id
              document {
                data {
                  id
                  attributes {
                    hash
                    mime
                    name
                    provider
                    size
                    url
                    alternativeText
                    ext
                  }
                }
              }
            }
            ... on Error {
              code
              message
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetNewByIdQuery__
 *
 * To run a query within a React component, call `useGetNewByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewByIdQuery({
 *   variables: {
 *      newId: // value for 'newId'
 *   },
 * });
 */
export function useGetNewByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNewByIdQuery,
    GetNewByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNewByIdQuery, GetNewByIdQueryVariables>(
    GetNewByIdDocument,
    options,
  );
}
export function useGetNewByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewByIdQuery,
    GetNewByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNewByIdQuery, GetNewByIdQueryVariables>(
    GetNewByIdDocument,
    options,
  );
}
export type GetNewByIdQueryHookResult = ReturnType<typeof useGetNewByIdQuery>;
export type GetNewByIdLazyQueryHookResult = ReturnType<
  typeof useGetNewByIdLazyQuery
>;
export type GetNewByIdQueryResult = Apollo.QueryResult<
  GetNewByIdQuery,
  GetNewByIdQueryVariables
>;
export const GetNewsAndEventsByContractIdDocument = gql`
  query getNewsAndEventsByContractId(
    $contractId: ID!
    $pagination: PaginationArg
  ) {
    news(
      filters: {
        newsSubService: {
          editorialService: { contract: { id: { eq: $contractId } } }
        }
        status: { eq: "published" }
      }
      sort: "publishedDate:desc"
      pagination: $pagination
    ) {
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
      data {
        id
        attributes {
          title
          shortDescription
          status
          publishedDate
          image {
            data {
              id
              attributes {
                name
                url
                size
                mime
                hash
                provider
                alternativeText
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
    events(
      filters: {
        eventSubService: {
          editorialService: { contract: { id: { eq: $contractId } } }
        }
        status: { eq: "published" }
      }
      sort: "publishedDate:desc"
      pagination: $pagination
    ) {
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
      data {
        id
        attributes {
          title
          shortDescription
          status
          publishedDate
          image {
            data {
              id
              attributes {
                name
                url
                size
                mime
                hash
                provider
                alternativeText
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetNewsAndEventsByContractIdQuery__
 *
 * To run a query within a React component, call `useGetNewsAndEventsByContractIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsAndEventsByContractIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsAndEventsByContractIdQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetNewsAndEventsByContractIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNewsAndEventsByContractIdQuery,
    GetNewsAndEventsByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNewsAndEventsByContractIdQuery,
    GetNewsAndEventsByContractIdQueryVariables
  >(GetNewsAndEventsByContractIdDocument, options);
}
export function useGetNewsAndEventsByContractIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewsAndEventsByContractIdQuery,
    GetNewsAndEventsByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNewsAndEventsByContractIdQuery,
    GetNewsAndEventsByContractIdQueryVariables
  >(GetNewsAndEventsByContractIdDocument, options);
}
export type GetNewsAndEventsByContractIdQueryHookResult = ReturnType<
  typeof useGetNewsAndEventsByContractIdQuery
>;
export type GetNewsAndEventsByContractIdLazyQueryHookResult = ReturnType<
  typeof useGetNewsAndEventsByContractIdLazyQuery
>;
export type GetNewsAndEventsByContractIdQueryResult = Apollo.QueryResult<
  GetNewsAndEventsByContractIdQuery,
  GetNewsAndEventsByContractIdQueryVariables
>;
export const GetNewsPathsDocument = gql`
  query getNewsPaths($contractId: ID!, $total: Int!) {
    news(
      filters: {
        status: { eq: "published" }
        newsSubService: {
          isActivated: { eq: true }
          editorialService: { contract: { id: { eq: $contractId } } }
        }
      }
      pagination: { limit: $total }
    ) {
      data {
        id
        attributes {
          status
        }
      }
    }
  }
`;

/**
 * __useGetNewsPathsQuery__
 *
 * To run a query within a React component, call `useGetNewsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsPathsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useGetNewsPathsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNewsPathsQuery,
    GetNewsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNewsPathsQuery, GetNewsPathsQueryVariables>(
    GetNewsPathsDocument,
    options,
  );
}
export function useGetNewsPathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewsPathsQuery,
    GetNewsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNewsPathsQuery, GetNewsPathsQueryVariables>(
    GetNewsPathsDocument,
    options,
  );
}
export type GetNewsPathsQueryHookResult = ReturnType<
  typeof useGetNewsPathsQuery
>;
export type GetNewsPathsLazyQueryHookResult = ReturnType<
  typeof useGetNewsPathsLazyQuery
>;
export type GetNewsPathsQueryResult = Apollo.QueryResult<
  GetNewsPathsQuery,
  GetNewsPathsQueryVariables
>;
export const GetNewsPathsTotalDocument = gql`
  query getNewsPathsTotal($contractId: ID!) {
    news(
      filters: {
        status: { eq: "published" }
        newsSubService: {
          isActivated: { eq: true }
          editorialService: { contract: { id: { eq: $contractId } } }
        }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

/**
 * __useGetNewsPathsTotalQuery__
 *
 * To run a query within a React component, call `useGetNewsPathsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsPathsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsPathsTotalQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetNewsPathsTotalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNewsPathsTotalQuery,
    GetNewsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNewsPathsTotalQuery,
    GetNewsPathsTotalQueryVariables
  >(GetNewsPathsTotalDocument, options);
}
export function useGetNewsPathsTotalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewsPathsTotalQuery,
    GetNewsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNewsPathsTotalQuery,
    GetNewsPathsTotalQueryVariables
  >(GetNewsPathsTotalDocument, options);
}
export type GetNewsPathsTotalQueryHookResult = ReturnType<
  typeof useGetNewsPathsTotalQuery
>;
export type GetNewsPathsTotalLazyQueryHookResult = ReturnType<
  typeof useGetNewsPathsTotalLazyQuery
>;
export type GetNewsPathsTotalQueryResult = Apollo.QueryResult<
  GetNewsPathsTotalQuery,
  GetNewsPathsTotalQueryVariables
>;
export const GetFreeContentsByFreeContentSubServiceIdDocument = gql`
  query getFreeContentsByFreeContentSubServiceId(
    $freeContentSubServiceId: ID!
    $pagination: PaginationArg
  ) {
    freeContents(
      filters: {
        freeContentSubService: { id: { eq: $freeContentSubServiceId } }
        status: { eq: "published" }
      }
      sort: "publishedDate:desc"
      pagination: $pagination
    ) {
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
      data {
        id
        attributes {
          title
          shortDescription
          status
          publishedDate
          unpublishedDate
          image {
            data {
              id
              attributes {
                name
                url
                size
                mime
                hash
                provider
                alternativeText
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentsByFreeContentSubServiceIdQuery__
 *
 * To run a query within a React component, call `useGetFreeContentsByFreeContentSubServiceIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentsByFreeContentSubServiceIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentsByFreeContentSubServiceIdQuery({
 *   variables: {
 *      freeContentSubServiceId: // value for 'freeContentSubServiceId'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetFreeContentsByFreeContentSubServiceIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFreeContentsByFreeContentSubServiceIdQuery,
    GetFreeContentsByFreeContentSubServiceIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentsByFreeContentSubServiceIdQuery,
    GetFreeContentsByFreeContentSubServiceIdQueryVariables
  >(GetFreeContentsByFreeContentSubServiceIdDocument, options);
}
export function useGetFreeContentsByFreeContentSubServiceIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentsByFreeContentSubServiceIdQuery,
    GetFreeContentsByFreeContentSubServiceIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentsByFreeContentSubServiceIdQuery,
    GetFreeContentsByFreeContentSubServiceIdQueryVariables
  >(GetFreeContentsByFreeContentSubServiceIdDocument, options);
}
export type GetFreeContentsByFreeContentSubServiceIdQueryHookResult =
  ReturnType<typeof useGetFreeContentsByFreeContentSubServiceIdQuery>;
export type GetFreeContentsByFreeContentSubServiceIdLazyQueryHookResult =
  ReturnType<typeof useGetFreeContentsByFreeContentSubServiceIdLazyQuery>;
export type GetFreeContentsByFreeContentSubServiceIdQueryResult =
  Apollo.QueryResult<
    GetFreeContentsByFreeContentSubServiceIdQuery,
    GetFreeContentsByFreeContentSubServiceIdQueryVariables
  >;
export const GetFreeContentByIdDocument = gql`
  query getFreeContentById($freeContentId: ID) {
    freeContent(id: $freeContentId) {
      data {
        id
        attributes {
          title
          shortDescription
          status
          publishedDate
          freeContentSubService {
            data {
              id
              attributes {
                name
                isActivated
              }
            }
          }
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
          image {
            data {
              id
              attributes {
                hash
                mime
                name
                provider
                size
                url
                alternativeText
              }
            }
          }
          blocks {
            ... on ComponentBlocksSubHeading {
              id
              subHeadingText
              subHeadingTag
            }
            ... on ComponentBlocksVideo {
              id
              videoLink
              transcriptText
            }
            ... on ComponentBlocksWysiwyg {
              id
              textEditor
            }
            ... on ComponentBlocksHorizontalRule {
              id
              hr
            }
            ... on ComponentBlocksImage {
              id
              picture {
                data {
                  attributes {
                    hash
                    mime
                    name
                    provider
                    size
                    url
                    alternativeText
                  }
                }
              }
              isDecorative
              altText
            }
            ... on ComponentBlocksFile {
              id
              document {
                data {
                  id
                  attributes {
                    name
                    mime
                    url
                    size
                    hash
                    provider
                    alternativeText
                  }
                }
              }
            }
            ... on Error {
              code
              message
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentByIdQuery__
 *
 * To run a query within a React component, call `useGetFreeContentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentByIdQuery({
 *   variables: {
 *      freeContentId: // value for 'freeContentId'
 *   },
 * });
 */
export function useGetFreeContentByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFreeContentByIdQuery,
    GetFreeContentByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentByIdQuery,
    GetFreeContentByIdQueryVariables
  >(GetFreeContentByIdDocument, options);
}
export function useGetFreeContentByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentByIdQuery,
    GetFreeContentByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentByIdQuery,
    GetFreeContentByIdQueryVariables
  >(GetFreeContentByIdDocument, options);
}
export type GetFreeContentByIdQueryHookResult = ReturnType<
  typeof useGetFreeContentByIdQuery
>;
export type GetFreeContentByIdLazyQueryHookResult = ReturnType<
  typeof useGetFreeContentByIdLazyQuery
>;
export type GetFreeContentByIdQueryResult = Apollo.QueryResult<
  GetFreeContentByIdQuery,
  GetFreeContentByIdQueryVariables
>;
export const GetFreeContentSubServiceByIdDocument = gql`
  query getFreeContentSubServiceById($freeContentSubServiceId: ID) {
    freeContentSubService(id: $freeContentSubServiceId) {
      data {
        id
        attributes {
          name
          isActivated
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentSubServiceByIdQuery__
 *
 * To run a query within a React component, call `useGetFreeContentSubServiceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentSubServiceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentSubServiceByIdQuery({
 *   variables: {
 *      freeContentSubServiceId: // value for 'freeContentSubServiceId'
 *   },
 * });
 */
export function useGetFreeContentSubServiceByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetFreeContentSubServiceByIdQuery,
    GetFreeContentSubServiceByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentSubServiceByIdQuery,
    GetFreeContentSubServiceByIdQueryVariables
  >(GetFreeContentSubServiceByIdDocument, options);
}
export function useGetFreeContentSubServiceByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentSubServiceByIdQuery,
    GetFreeContentSubServiceByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentSubServiceByIdQuery,
    GetFreeContentSubServiceByIdQueryVariables
  >(GetFreeContentSubServiceByIdDocument, options);
}
export type GetFreeContentSubServiceByIdQueryHookResult = ReturnType<
  typeof useGetFreeContentSubServiceByIdQuery
>;
export type GetFreeContentSubServiceByIdLazyQueryHookResult = ReturnType<
  typeof useGetFreeContentSubServiceByIdLazyQuery
>;
export type GetFreeContentSubServiceByIdQueryResult = Apollo.QueryResult<
  GetFreeContentSubServiceByIdQuery,
  GetFreeContentSubServiceByIdQueryVariables
>;
export const GetFreeContentSubServicesPathsDocument = gql`
  query getFreeContentSubServicesPaths($contractId: ID!, $total: Int!) {
    freeContentSubServices(
      filters: {
        isActivated: { eq: true }
        editorialService: { contract: { id: { eq: $contractId } } }
      }
      pagination: { limit: $total }
    ) {
      data {
        id
        attributes {
          isActivated
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentSubServicesPathsQuery__
 *
 * To run a query within a React component, call `useGetFreeContentSubServicesPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentSubServicesPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentSubServicesPathsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useGetFreeContentSubServicesPathsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFreeContentSubServicesPathsQuery,
    GetFreeContentSubServicesPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentSubServicesPathsQuery,
    GetFreeContentSubServicesPathsQueryVariables
  >(GetFreeContentSubServicesPathsDocument, options);
}
export function useGetFreeContentSubServicesPathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentSubServicesPathsQuery,
    GetFreeContentSubServicesPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentSubServicesPathsQuery,
    GetFreeContentSubServicesPathsQueryVariables
  >(GetFreeContentSubServicesPathsDocument, options);
}
export type GetFreeContentSubServicesPathsQueryHookResult = ReturnType<
  typeof useGetFreeContentSubServicesPathsQuery
>;
export type GetFreeContentSubServicesPathsLazyQueryHookResult = ReturnType<
  typeof useGetFreeContentSubServicesPathsLazyQuery
>;
export type GetFreeContentSubServicesPathsQueryResult = Apollo.QueryResult<
  GetFreeContentSubServicesPathsQuery,
  GetFreeContentSubServicesPathsQueryVariables
>;
export const GetFreeContentSubServicesPathsTotalDocument = gql`
  query getFreeContentSubServicesPathsTotal($contractId: ID!) {
    freeContentSubServices(
      filters: {
        isActivated: { eq: true }
        editorialService: { contract: { id: { eq: $contractId } } }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentSubServicesPathsTotalQuery__
 *
 * To run a query within a React component, call `useGetFreeContentSubServicesPathsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentSubServicesPathsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentSubServicesPathsTotalQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetFreeContentSubServicesPathsTotalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFreeContentSubServicesPathsTotalQuery,
    GetFreeContentSubServicesPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentSubServicesPathsTotalQuery,
    GetFreeContentSubServicesPathsTotalQueryVariables
  >(GetFreeContentSubServicesPathsTotalDocument, options);
}
export function useGetFreeContentSubServicesPathsTotalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentSubServicesPathsTotalQuery,
    GetFreeContentSubServicesPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentSubServicesPathsTotalQuery,
    GetFreeContentSubServicesPathsTotalQueryVariables
  >(GetFreeContentSubServicesPathsTotalDocument, options);
}
export type GetFreeContentSubServicesPathsTotalQueryHookResult = ReturnType<
  typeof useGetFreeContentSubServicesPathsTotalQuery
>;
export type GetFreeContentSubServicesPathsTotalLazyQueryHookResult = ReturnType<
  typeof useGetFreeContentSubServicesPathsTotalLazyQuery
>;
export type GetFreeContentSubServicesPathsTotalQueryResult = Apollo.QueryResult<
  GetFreeContentSubServicesPathsTotalQuery,
  GetFreeContentSubServicesPathsTotalQueryVariables
>;
export const GetFreeContentsPathsDocument = gql`
  query getFreeContentsPaths($contractId: ID!, $total: Int!) {
    freeContents(
      filters: {
        status: { eq: "published" }
        freeContentSubService: {
          isActivated: { eq: true }
          editorialService: { contract: { id: { eq: $contractId } } }
        }
      }
      pagination: { limit: $total }
    ) {
      data {
        id
        attributes {
          status
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentsPathsQuery__
 *
 * To run a query within a React component, call `useGetFreeContentsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentsPathsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useGetFreeContentsPathsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFreeContentsPathsQuery,
    GetFreeContentsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentsPathsQuery,
    GetFreeContentsPathsQueryVariables
  >(GetFreeContentsPathsDocument, options);
}
export function useGetFreeContentsPathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentsPathsQuery,
    GetFreeContentsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentsPathsQuery,
    GetFreeContentsPathsQueryVariables
  >(GetFreeContentsPathsDocument, options);
}
export type GetFreeContentsPathsQueryHookResult = ReturnType<
  typeof useGetFreeContentsPathsQuery
>;
export type GetFreeContentsPathsLazyQueryHookResult = ReturnType<
  typeof useGetFreeContentsPathsLazyQuery
>;
export type GetFreeContentsPathsQueryResult = Apollo.QueryResult<
  GetFreeContentsPathsQuery,
  GetFreeContentsPathsQueryVariables
>;
export const GetFreeContentsPathsTotalDocument = gql`
  query getFreeContentsPathsTotal($contractId: ID!) {
    freeContents(
      filters: {
        status: { eq: "published" }
        freeContentSubService: {
          isActivated: { eq: true }
          editorialService: { contract: { id: { eq: $contractId } } }
        }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

/**
 * __useGetFreeContentsPathsTotalQuery__
 *
 * To run a query within a React component, call `useGetFreeContentsPathsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeContentsPathsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeContentsPathsTotalQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetFreeContentsPathsTotalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFreeContentsPathsTotalQuery,
    GetFreeContentsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFreeContentsPathsTotalQuery,
    GetFreeContentsPathsTotalQueryVariables
  >(GetFreeContentsPathsTotalDocument, options);
}
export function useGetFreeContentsPathsTotalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFreeContentsPathsTotalQuery,
    GetFreeContentsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFreeContentsPathsTotalQuery,
    GetFreeContentsPathsTotalQueryVariables
  >(GetFreeContentsPathsTotalDocument, options);
}
export type GetFreeContentsPathsTotalQueryHookResult = ReturnType<
  typeof useGetFreeContentsPathsTotalQuery
>;
export type GetFreeContentsPathsTotalLazyQueryHookResult = ReturnType<
  typeof useGetFreeContentsPathsTotalLazyQuery
>;
export type GetFreeContentsPathsTotalQueryResult = Apollo.QueryResult<
  GetFreeContentsPathsTotalQuery,
  GetFreeContentsPathsTotalQueryVariables
>;
export const GetBanAddressesAutoCompleteDocument = gql`
  query getBanAddressesAutoComplete($searchTerm: String!) {
    getAddressCoordinates(searchTerm: $searchTerm) {
      name
      latitude
      longitude
      banFeaturesProperties
    }
  }
`;

/**
 * __useGetBanAddressesAutoCompleteQuery__
 *
 * To run a query within a React component, call `useGetBanAddressesAutoCompleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBanAddressesAutoCompleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBanAddressesAutoCompleteQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetBanAddressesAutoCompleteQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBanAddressesAutoCompleteQuery,
    GetBanAddressesAutoCompleteQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetBanAddressesAutoCompleteQuery,
    GetBanAddressesAutoCompleteQueryVariables
  >(GetBanAddressesAutoCompleteDocument, options);
}
export function useGetBanAddressesAutoCompleteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBanAddressesAutoCompleteQuery,
    GetBanAddressesAutoCompleteQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBanAddressesAutoCompleteQuery,
    GetBanAddressesAutoCompleteQueryVariables
  >(GetBanAddressesAutoCompleteDocument, options);
}
export type GetBanAddressesAutoCompleteQueryHookResult = ReturnType<
  typeof useGetBanAddressesAutoCompleteQuery
>;
export type GetBanAddressesAutoCompleteLazyQueryHookResult = ReturnType<
  typeof useGetBanAddressesAutoCompleteLazyQuery
>;
export type GetBanAddressesAutoCompleteQueryResult = Apollo.QueryResult<
  GetBanAddressesAutoCompleteQuery,
  GetBanAddressesAutoCompleteQueryVariables
>;
export const GetContractByIdDocument = gql`
  query getContractById($contractId: ID!) {
    contract(id: $contractId) {
      data {
        id
        attributes {
          clientName
          clientType
          contractStatus
          siret
          clear
          ccap
          isNonExclusive
          isRVFrance
          pathId
          logo {
            data {
              id
              attributes {
                hash
                mime
                name
                provider
                size
                url
                alternativeText
              }
            }
          }
          channelType {
            data {
              id
              attributes {
                hasWebApp
                hasWebSite
              }
            }
          }
          clientContact {
            data {
              id
              attributes {
                firstName
                lastName
                email
                phoneNumber
              }
            }
          }
          contractCustomization {
            data {
              id
              attributes {
                primaryColor
                secondaryColor
                textContrast
              }
            }
          }
          editorialService {
            data {
              id
              attributes {
                eventSubService {
                  data {
                    id
                    attributes {
                      name
                      isActivated
                    }
                  }
                }
                freeContentSubServices {
                  data {
                    id
                    attributes {
                      name
                      isActivated
                    }
                  }
                }
                newsSubService {
                  data {
                    id
                    attributes {
                      name
                      isActivated
                    }
                  }
                }
                quizSubService {
                  data {
                    id
                    attributes {
                      name
                      isActivated
                    }
                  }
                }
                tipSubService {
                  data {
                    id
                    attributes {
                      name
                      isActivated
                    }
                  }
                }
              }
            }
          }
          recyclingGuideService {
            data {
              id
              attributes {
                name
                isActivated
                memoName
              }
            }
          }
          pickUpDayService {
            data {
              id
              attributes {
                name
                isActivated
              }
            }
          }
          dropOffMapService {
            data {
              id
              attributes {
                name
                isActivated
              }
            }
          }
          requestService {
            data {
              id
              attributes {
                name
                isActivated
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetContractByIdQuery__
 *
 * To run a query within a React component, call `useGetContractByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractByIdQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetContractByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetContractByIdQuery,
    GetContractByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContractByIdQuery, GetContractByIdQueryVariables>(
    GetContractByIdDocument,
    options,
  );
}
export function useGetContractByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContractByIdQuery,
    GetContractByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetContractByIdQuery,
    GetContractByIdQueryVariables
  >(GetContractByIdDocument, options);
}
export type GetContractByIdQueryHookResult = ReturnType<
  typeof useGetContractByIdQuery
>;
export type GetContractByIdLazyQueryHookResult = ReturnType<
  typeof useGetContractByIdLazyQuery
>;
export type GetContractByIdQueryResult = Apollo.QueryResult<
  GetContractByIdQuery,
  GetContractByIdQueryVariables
>;
export const GetContractMenuDocument = gql`
  query getContractMenu($contractId: ID!) {
    contract(id: $contractId) {
      data {
        attributes {
          contractMenu {
            data {
              attributes {
                serviceLinks {
                  ... on ComponentLinksDropOffMap {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksPickUpDay {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksRecyclingGuide {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksRequest {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksContactUs {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksNews {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksEvents {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksQuizzes {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksTips {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksFrees {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksMyWasteCounter {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  ... on ComponentLinksExternal {
                    id
                    name
                    isDisplayed
                    picto {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                    externalLink
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetContractMenuQuery__
 *
 * To run a query within a React component, call `useGetContractMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContractMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContractMenuQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetContractMenuQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetContractMenuQuery,
    GetContractMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContractMenuQuery, GetContractMenuQueryVariables>(
    GetContractMenuDocument,
    options,
  );
}
export function useGetContractMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContractMenuQuery,
    GetContractMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetContractMenuQuery,
    GetContractMenuQueryVariables
  >(GetContractMenuDocument, options);
}
export type GetContractMenuQueryHookResult = ReturnType<
  typeof useGetContractMenuQuery
>;
export type GetContractMenuLazyQueryHookResult = ReturnType<
  typeof useGetContractMenuLazyQuery
>;
export type GetContractMenuQueryResult = Apollo.QueryResult<
  GetContractMenuQuery,
  GetContractMenuQueryVariables
>;
export const GetEditoBlockDocument = gql`
  query getEditoBlock($contractId: ID!) {
    contractCustomizations(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        id
        attributes {
          homepage {
            data {
              attributes {
                editoBlock {
                  data {
                    attributes {
                      titleContent
                      editoContents {
                        ... on ComponentLinksEditoContent {
                          id
                          event {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                image {
                                  data {
                                    attributes {
                                      hash
                                      mime
                                      name
                                      provider
                                      size
                                      url
                                      alternativeText
                                    }
                                  }
                                }
                                publishedDate
                              }
                            }
                          }
                          freeContent {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                image {
                                  data {
                                    attributes {
                                      hash
                                      mime
                                      name
                                      provider
                                      size
                                      url
                                      alternativeText
                                    }
                                  }
                                }
                                publishedDate
                              }
                            }
                          }
                          new {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                image {
                                  data {
                                    attributes {
                                      hash
                                      mime
                                      name
                                      provider
                                      size
                                      url
                                      alternativeText
                                    }
                                  }
                                }
                                publishedDate
                              }
                            }
                          }
                          quiz {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                publishedDate
                              }
                            }
                          }
                          tip {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                link
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                image {
                                  data {
                                    attributes {
                                      hash
                                      mime
                                      name
                                      provider
                                      size
                                      url
                                      alternativeText
                                    }
                                  }
                                }
                                publishedDate
                              }
                            }
                          }
                        }
                        ... on Error {
                          code
                          message
                        }
                      }
                      displayBlock
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetEditoBlockQuery__
 *
 * To run a query within a React component, call `useGetEditoBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEditoBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEditoBlockQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetEditoBlockQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetEditoBlockQuery,
    GetEditoBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetEditoBlockQuery, GetEditoBlockQueryVariables>(
    GetEditoBlockDocument,
    options,
  );
}
export function useGetEditoBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetEditoBlockQuery,
    GetEditoBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetEditoBlockQuery, GetEditoBlockQueryVariables>(
    GetEditoBlockDocument,
    options,
  );
}
export type GetEditoBlockQueryHookResult = ReturnType<
  typeof useGetEditoBlockQuery
>;
export type GetEditoBlockLazyQueryHookResult = ReturnType<
  typeof useGetEditoBlockLazyQuery
>;
export type GetEditoBlockQueryResult = Apollo.QueryResult<
  GetEditoBlockQuery,
  GetEditoBlockQueryVariables
>;
export const GetFooterDocument = gql`
  query getFooter($contractId: ID!) {
    contractCustomizations(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        attributes {
          footer {
            data {
              id
              attributes {
                accessibilityLevel
                cguSubService {
                  data {
                    id
                    attributes {
                      link
                    }
                  }
                }
                accessibilitySubService {
                  data {
                    id
                    attributes {
                      link
                    }
                  }
                }
                confidentialitySubService {
                  data {
                    id
                    attributes {
                      link
                    }
                  }
                }
                cookiesSubService {
                  data {
                    id
                    attributes {
                      link
                    }
                  }
                }
                contactUsSubService {
                  data {
                    id
                    attributes {
                      label
                      link
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetFooterQuery__
 *
 * To run a query within a React component, call `useGetFooterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFooterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFooterQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetFooterQuery(
  baseOptions: Apollo.QueryHookOptions<GetFooterQuery, GetFooterQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetFooterQuery, GetFooterQueryVariables>(
    GetFooterDocument,
    options,
  );
}
export function useGetFooterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFooterQuery,
    GetFooterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetFooterQuery, GetFooterQueryVariables>(
    GetFooterDocument,
    options,
  );
}
export type GetFooterQueryHookResult = ReturnType<typeof useGetFooterQuery>;
export type GetFooterLazyQueryHookResult = ReturnType<
  typeof useGetFooterLazyQuery
>;
export type GetFooterQueryResult = Apollo.QueryResult<
  GetFooterQuery,
  GetFooterQueryVariables
>;
export const GetLogoDocument = gql`
  query getLogo($contractId: ID) {
    contract(id: $contractId) {
      data {
        id
        attributes {
          logo {
            data {
              id
              attributes {
                name
                mime
                size
                url
                provider
                hash
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetLogoQuery__
 *
 * To run a query within a React component, call `useGetLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogoQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetLogoQuery(
  baseOptions?: Apollo.QueryHookOptions<GetLogoQuery, GetLogoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLogoQuery, GetLogoQueryVariables>(
    GetLogoDocument,
    options,
  );
}
export function useGetLogoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLogoQuery,
    GetLogoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetLogoQuery, GetLogoQueryVariables>(
    GetLogoDocument,
    options,
  );
}
export type GetLogoQueryHookResult = ReturnType<typeof useGetLogoQuery>;
export type GetLogoLazyQueryHookResult = ReturnType<typeof useGetLogoLazyQuery>;
export type GetLogoQueryResult = Apollo.QueryResult<
  GetLogoQuery,
  GetLogoQueryVariables
>;
export const GetNewestTopContentsDocument = gql`
  query getNewestTopContents($contractId: ID!) {
    getNewestTopContents(contractId: $contractId) {
      type
      originalId
      title
      shortDescription
      publishedDate
      tags {
        name
      }
      image {
        hash
        mime
        name
        provider
        size
        url
        alternativeText
      }
    }
  }
`;

/**
 * __useGetNewestTopContentsQuery__
 *
 * To run a query within a React component, call `useGetNewestTopContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewestTopContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewestTopContentsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetNewestTopContentsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNewestTopContentsQuery,
    GetNewestTopContentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetNewestTopContentsQuery,
    GetNewestTopContentsQueryVariables
  >(GetNewestTopContentsDocument, options);
}
export function useGetNewestTopContentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewestTopContentsQuery,
    GetNewestTopContentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetNewestTopContentsQuery,
    GetNewestTopContentsQueryVariables
  >(GetNewestTopContentsDocument, options);
}
export type GetNewestTopContentsQueryHookResult = ReturnType<
  typeof useGetNewestTopContentsQuery
>;
export type GetNewestTopContentsLazyQueryHookResult = ReturnType<
  typeof useGetNewestTopContentsLazyQuery
>;
export type GetNewestTopContentsQueryResult = Apollo.QueryResult<
  GetNewestTopContentsQuery,
  GetNewestTopContentsQueryVariables
>;
export const GetQuizAndTipsBlockDocument = gql`
  query getQuizAndTipsBlock($contractId: ID!) {
    contractCustomizations(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        attributes {
          homepage {
            data {
              attributes {
                quizAndTipsBlock {
                  data {
                    id
                    attributes {
                      titleContent
                      displayBlock
                      displayQuiz
                      quiz {
                        data {
                          id
                          attributes {
                            title
                          }
                        }
                      }
                      displayTips
                      tips {
                        data {
                          id
                          attributes {
                            title
                            shortDescription
                            link
                            publishedDate
                            tags {
                              data {
                                attributes {
                                  name
                                }
                              }
                            }
                            image {
                              data {
                                attributes {
                                  hash
                                  mime
                                  name
                                  provider
                                  size
                                  url
                                  alternativeText
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetQuizAndTipsBlockQuery__
 *
 * To run a query within a React component, call `useGetQuizAndTipsBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizAndTipsBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizAndTipsBlockQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetQuizAndTipsBlockQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetQuizAndTipsBlockQuery,
    GetQuizAndTipsBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetQuizAndTipsBlockQuery,
    GetQuizAndTipsBlockQueryVariables
  >(GetQuizAndTipsBlockDocument, options);
}
export function useGetQuizAndTipsBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetQuizAndTipsBlockQuery,
    GetQuizAndTipsBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetQuizAndTipsBlockQuery,
    GetQuizAndTipsBlockQueryVariables
  >(GetQuizAndTipsBlockDocument, options);
}
export type GetQuizAndTipsBlockQueryHookResult = ReturnType<
  typeof useGetQuizAndTipsBlockQuery
>;
export type GetQuizAndTipsBlockLazyQueryHookResult = ReturnType<
  typeof useGetQuizAndTipsBlockLazyQuery
>;
export type GetQuizAndTipsBlockQueryResult = Apollo.QueryResult<
  GetQuizAndTipsBlockQuery,
  GetQuizAndTipsBlockQueryVariables
>;
export const GetRecyclingGuideBlockDocument = gql`
  query getRecyclingGuideBlock($contractId: ID!) {
    contractCustomizations(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        attributes {
          homepage {
            data {
              attributes {
                recyclingGuideBlock {
                  data {
                    id
                    attributes {
                      titleContent
                      subtitleContent
                      recyclingGuideDisplayContent
                      tags {
                        data {
                          attributes {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetRecyclingGuideBlockQuery__
 *
 * To run a query within a React component, call `useGetRecyclingGuideBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecyclingGuideBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecyclingGuideBlockQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetRecyclingGuideBlockQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRecyclingGuideBlockQuery,
    GetRecyclingGuideBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecyclingGuideBlockQuery,
    GetRecyclingGuideBlockQueryVariables
  >(GetRecyclingGuideBlockDocument, options);
}
export function useGetRecyclingGuideBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecyclingGuideBlockQuery,
    GetRecyclingGuideBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecyclingGuideBlockQuery,
    GetRecyclingGuideBlockQueryVariables
  >(GetRecyclingGuideBlockDocument, options);
}
export type GetRecyclingGuideBlockQueryHookResult = ReturnType<
  typeof useGetRecyclingGuideBlockQuery
>;
export type GetRecyclingGuideBlockLazyQueryHookResult = ReturnType<
  typeof useGetRecyclingGuideBlockLazyQuery
>;
export type GetRecyclingGuideBlockQueryResult = Apollo.QueryResult<
  GetRecyclingGuideBlockQuery,
  GetRecyclingGuideBlockQueryVariables
>;
export const GetRecyclingGuideSearchEngineDocument = gql`
  query getRecyclingGuideSearchEngine($searchTerm: String!, $contractId: ID!) {
    recyclingGuideSearchEngine(
      searchTerm: $searchTerm
      contractId: $contractId
    ) {
      typeName
      id
      name
      wasteFamilyName
    }
  }
`;

/**
 * __useGetRecyclingGuideSearchEngineQuery__
 *
 * To run a query within a React component, call `useGetRecyclingGuideSearchEngineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecyclingGuideSearchEngineQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecyclingGuideSearchEngineQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetRecyclingGuideSearchEngineQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRecyclingGuideSearchEngineQuery,
    GetRecyclingGuideSearchEngineQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecyclingGuideSearchEngineQuery,
    GetRecyclingGuideSearchEngineQueryVariables
  >(GetRecyclingGuideSearchEngineDocument, options);
}
export function useGetRecyclingGuideSearchEngineLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecyclingGuideSearchEngineQuery,
    GetRecyclingGuideSearchEngineQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecyclingGuideSearchEngineQuery,
    GetRecyclingGuideSearchEngineQueryVariables
  >(GetRecyclingGuideSearchEngineDocument, options);
}
export type GetRecyclingGuideSearchEngineQueryHookResult = ReturnType<
  typeof useGetRecyclingGuideSearchEngineQuery
>;
export type GetRecyclingGuideSearchEngineLazyQueryHookResult = ReturnType<
  typeof useGetRecyclingGuideSearchEngineLazyQuery
>;
export type GetRecyclingGuideSearchEngineQueryResult = Apollo.QueryResult<
  GetRecyclingGuideSearchEngineQuery,
  GetRecyclingGuideSearchEngineQueryVariables
>;
export const GetServicesActiveDocument = gql`
  query getServicesActive($contractId: ID!) {
    editorialServices(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        id
        attributes {
          eventSubService {
            data {
              attributes {
                isActivated
              }
            }
          }
          newsSubService {
            data {
              attributes {
                isActivated
              }
            }
          }
          quizSubService {
            data {
              attributes {
                isActivated
              }
            }
          }
          tipSubService {
            data {
              attributes {
                isActivated
              }
            }
          }
          freeContentSubServices {
            data {
              attributes {
                isActivated
              }
            }
          }
          contactUsSubService {
            data {
              attributes {
                isActivated
              }
            }
          }
        }
      }
    }
    recyclingGuideServices(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        attributes {
          isActivated
        }
      }
    }
    requestServices(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        attributes {
          isActivated
        }
      }
    }
  }
`;

/**
 * __useGetServicesActiveQuery__
 *
 * To run a query within a React component, call `useGetServicesActiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesActiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesActiveQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetServicesActiveQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetServicesActiveQuery,
    GetServicesActiveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetServicesActiveQuery,
    GetServicesActiveQueryVariables
  >(GetServicesActiveDocument, options);
}
export function useGetServicesActiveLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServicesActiveQuery,
    GetServicesActiveQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServicesActiveQuery,
    GetServicesActiveQueryVariables
  >(GetServicesActiveDocument, options);
}
export type GetServicesActiveQueryHookResult = ReturnType<
  typeof useGetServicesActiveQuery
>;
export type GetServicesActiveLazyQueryHookResult = ReturnType<
  typeof useGetServicesActiveLazyQuery
>;
export type GetServicesActiveQueryResult = Apollo.QueryResult<
  GetServicesActiveQuery,
  GetServicesActiveQueryVariables
>;
export const GetServicesBlockDocument = gql`
  query getServicesBlock($contractId: ID!) {
    contractCustomizations(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        id
        attributes {
          homepage {
            data {
              attributes {
                servicesBlock {
                  data {
                    attributes {
                      titleContent
                      serviceLinks {
                        ... on ComponentLinksDropOffMap {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksPickUpDay {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksRecyclingGuide {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksRequest {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksContactUs {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksNews {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksEvents {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksQuizzes {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksTips {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksFrees {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                        }
                        ... on ComponentLinksExternal {
                          id
                          name
                          isDisplayed
                          picto {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                          externalLink
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetServicesBlockQuery__
 *
 * To run a query within a React component, call `useGetServicesBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServicesBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServicesBlockQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetServicesBlockQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetServicesBlockQuery,
    GetServicesBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetServicesBlockQuery, GetServicesBlockQueryVariables>(
    GetServicesBlockDocument,
    options,
  );
}
export function useGetServicesBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetServicesBlockQuery,
    GetServicesBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetServicesBlockQuery,
    GetServicesBlockQueryVariables
  >(GetServicesBlockDocument, options);
}
export type GetServicesBlockQueryHookResult = ReturnType<
  typeof useGetServicesBlockQuery
>;
export type GetServicesBlockLazyQueryHookResult = ReturnType<
  typeof useGetServicesBlockLazyQuery
>;
export type GetServicesBlockQueryResult = Apollo.QueryResult<
  GetServicesBlockQuery,
  GetServicesBlockQueryVariables
>;
export const GetTopContentBlockDocument = gql`
  query getTopContentBlock($contractId: ID!) {
    contractCustomizations(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        attributes {
          homepage {
            data {
              attributes {
                topContentBlock {
                  data {
                    id
                    attributes {
                      titleContent
                      displayBlock
                      displayLastThreeContents
                      hasTopContent
                      topContent {
                        ... on ComponentLinksTopContent {
                          id
                          event {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                image {
                                  data {
                                    attributes {
                                      hash
                                      mime
                                      name
                                      provider
                                      size
                                      url
                                      alternativeText
                                    }
                                  }
                                }
                              }
                            }
                          }
                          new {
                            data {
                              id
                              attributes {
                                title
                                shortDescription
                                tags {
                                  data {
                                    attributes {
                                      name
                                    }
                                  }
                                }
                                image {
                                  data {
                                    attributes {
                                      hash
                                      mime
                                      name
                                      provider
                                      size
                                      url
                                      alternativeText
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        ... on Error {
                          code
                          message
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetTopContentBlockQuery__
 *
 * To run a query within a React component, call `useGetTopContentBlockQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopContentBlockQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopContentBlockQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetTopContentBlockQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTopContentBlockQuery,
    GetTopContentBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTopContentBlockQuery,
    GetTopContentBlockQueryVariables
  >(GetTopContentBlockDocument, options);
}
export function useGetTopContentBlockLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTopContentBlockQuery,
    GetTopContentBlockQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTopContentBlockQuery,
    GetTopContentBlockQueryVariables
  >(GetTopContentBlockDocument, options);
}
export type GetTopContentBlockQueryHookResult = ReturnType<
  typeof useGetTopContentBlockQuery
>;
export type GetTopContentBlockLazyQueryHookResult = ReturnType<
  typeof useGetTopContentBlockLazyQuery
>;
export type GetTopContentBlockQueryResult = Apollo.QueryResult<
  GetTopContentBlockQuery,
  GetTopContentBlockQueryVariables
>;
export const GetBinIdDocument = gql`
  query getBinId(
    $city: String
    $contractMetadataKey: String
    $street: String
    $houseNumber: String
  ) {
    getBinId(
      city: $city
      contractMetadataKey: $contractMetadataKey
      street: $street
      houseNumber: $houseNumber
    ) {
      chipId
      trashFlow
    }
  }
`;

/**
 * __useGetBinIdQuery__
 *
 * To run a query within a React component, call `useGetBinIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBinIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBinIdQuery({
 *   variables: {
 *      city: // value for 'city'
 *      contractMetadataKey: // value for 'contractMetadataKey'
 *      street: // value for 'street'
 *      houseNumber: // value for 'houseNumber'
 *   },
 * });
 */
export function useGetBinIdQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBinIdQuery, GetBinIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBinIdQuery, GetBinIdQueryVariables>(
    GetBinIdDocument,
    options,
  );
}
export function useGetBinIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBinIdQuery,
    GetBinIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBinIdQuery, GetBinIdQueryVariables>(
    GetBinIdDocument,
    options,
  );
}
export type GetBinIdQueryHookResult = ReturnType<typeof useGetBinIdQuery>;
export type GetBinIdLazyQueryHookResult = ReturnType<
  typeof useGetBinIdLazyQuery
>;
export type GetBinIdQueryResult = Apollo.QueryResult<
  GetBinIdQuery,
  GetBinIdQueryVariables
>;
export const GetDataHomePageMwcDocument = gql`
  query getDataHomePageMwc(
    $address: String!
    $typeUsager: String!
    $dateDebut: String!
    $dateFin: String!
    $agregation: String!
    $averageProductionPerPerson: Int!
    $numberOfPeopleIntheHousehold: Int!
  ) {
    GetHomeDataMwc(
      address: $address
      typeUsager: $typeUsager
      dateDebut: $dateDebut
      dateFin: $dateFin
      Agregation: $agregation
      averageProductionPerPerson: $averageProductionPerPerson
      numberOfPeopleIntheHousehold: $numberOfPeopleIntheHousehold
    ) {
      productionCumulee
      adresse
      averageProductionPerPerson
      equivalentOfProduction
      variationPercent
    }
  }
`;

/**
 * __useGetDataHomePageMwcQuery__
 *
 * To run a query within a React component, call `useGetDataHomePageMwcQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataHomePageMwcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataHomePageMwcQuery({
 *   variables: {
 *      address: // value for 'address'
 *      typeUsager: // value for 'typeUsager'
 *      dateDebut: // value for 'dateDebut'
 *      dateFin: // value for 'dateFin'
 *      agregation: // value for 'agregation'
 *      averageProductionPerPerson: // value for 'averageProductionPerPerson'
 *      numberOfPeopleIntheHousehold: // value for 'numberOfPeopleIntheHousehold'
 *   },
 * });
 */
export function useGetDataHomePageMwcQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDataHomePageMwcQuery,
    GetDataHomePageMwcQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDataHomePageMwcQuery,
    GetDataHomePageMwcQueryVariables
  >(GetDataHomePageMwcDocument, options);
}
export function useGetDataHomePageMwcLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDataHomePageMwcQuery,
    GetDataHomePageMwcQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDataHomePageMwcQuery,
    GetDataHomePageMwcQueryVariables
  >(GetDataHomePageMwcDocument, options);
}
export type GetDataHomePageMwcQueryHookResult = ReturnType<
  typeof useGetDataHomePageMwcQuery
>;
export type GetDataHomePageMwcLazyQueryHookResult = ReturnType<
  typeof useGetDataHomePageMwcLazyQuery
>;
export type GetDataHomePageMwcQueryResult = Apollo.QueryResult<
  GetDataHomePageMwcQuery,
  GetDataHomePageMwcQueryVariables
>;
export const GetMwcFlowsByContractIdDocument = gql`
  query getMwcFlowsByContractId($filters: MwcFlowFiltersInput) {
    mwcFlows(filters: $filters) {
      data {
        id
        attributes {
          weightSystem
          averageProductionPerson
          blocks {
            ... on ComponentBlocksSubHeading {
              id
              subHeadingText
              subHeadingTag
            }
            ... on ComponentBlocksVideo {
              id
              videoLink
              transcriptText
            }
            ... on ComponentBlocksWysiwyg {
              id
              textEditor
            }
            ... on ComponentBlocksImage {
              id
              picture {
                data {
                  attributes {
                    name
                  }
                }
              }
              isDecorative
              altText
            }
            ... on Error {
              code
              message
            }
          }
          flow {
            data {
              attributes {
                isActivated
                code
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetMwcFlowsByContractIdQuery__
 *
 * To run a query within a React component, call `useGetMwcFlowsByContractIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMwcFlowsByContractIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMwcFlowsByContractIdQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetMwcFlowsByContractIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMwcFlowsByContractIdQuery,
    GetMwcFlowsByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMwcFlowsByContractIdQuery,
    GetMwcFlowsByContractIdQueryVariables
  >(GetMwcFlowsByContractIdDocument, options);
}
export function useGetMwcFlowsByContractIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMwcFlowsByContractIdQuery,
    GetMwcFlowsByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMwcFlowsByContractIdQuery,
    GetMwcFlowsByContractIdQueryVariables
  >(GetMwcFlowsByContractIdDocument, options);
}
export type GetMwcFlowsByContractIdQueryHookResult = ReturnType<
  typeof useGetMwcFlowsByContractIdQuery
>;
export type GetMwcFlowsByContractIdLazyQueryHookResult = ReturnType<
  typeof useGetMwcFlowsByContractIdLazyQuery
>;
export type GetMwcFlowsByContractIdQueryResult = Apollo.QueryResult<
  GetMwcFlowsByContractIdQuery,
  GetMwcFlowsByContractIdQueryVariables
>;
export const SearchAddressDocument = gql`
  query SearchAddress($address: String, $limit: Int) {
    searchAddress(address: $address, limit: $limit) {
      label
      score
      id
      name
      postcode
      citycode
      x
      y
      city
      district
      context
      type
      importance
      street
      houseNumber
    }
  }
`;

/**
 * __useSearchAddressQuery__
 *
 * To run a query within a React component, call `useSearchAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchAddressQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchAddressQuery,
    SearchAddressQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SearchAddressQuery, SearchAddressQueryVariables>(
    SearchAddressDocument,
    options,
  );
}
export function useSearchAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchAddressQuery,
    SearchAddressQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SearchAddressQuery, SearchAddressQueryVariables>(
    SearchAddressDocument,
    options,
  );
}
export type SearchAddressQueryHookResult = ReturnType<
  typeof useSearchAddressQuery
>;
export type SearchAddressLazyQueryHookResult = ReturnType<
  typeof useSearchAddressLazyQuery
>;
export type SearchAddressQueryResult = Apollo.QueryResult<
  SearchAddressQuery,
  SearchAddressQueryVariables
>;
export const GetContactDocument = gql`
  query getContact($filters: MwCounterServiceFiltersInput) {
    mwCounterServices(filters: $filters) {
      data {
        attributes {
          serviceName
          contactEmail
          phoneNumber
          postalAddress
          postalCode
          city
        }
      }
    }
  }
`;

/**
 * __useGetContactQuery__
 *
 * To run a query within a React component, call `useGetContactQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useGetContactQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetContactQuery,
    GetContactQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetContactQuery, GetContactQueryVariables>(
    GetContactDocument,
    options,
  );
}
export function useGetContactLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContactQuery,
    GetContactQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetContactQuery, GetContactQueryVariables>(
    GetContactDocument,
    options,
  );
}
export type GetContactQueryHookResult = ReturnType<typeof useGetContactQuery>;
export type GetContactLazyQueryHookResult = ReturnType<
  typeof useGetContactLazyQuery
>;
export type GetContactQueryResult = Apollo.QueryResult<
  GetContactQuery,
  GetContactQueryVariables
>;
export const GetDropOffMapByDropOffMapByServiceIdDocument = gql`
  query getDropOffMapByDropOffMapByServiceId($dropOffMapServiceId: ID!) {
    getDropOffMaps(dropOffMapServiceId: $dropOffMapServiceId) {
      id
      __typename
      name
      collect {
        entityTypeName
        name
        originalId
        uniqueId
        grammaticalGender
        picto {
          alternativeText
          id
          name
          url
        }
      }
      BANFeatureProperties
      address
      city
      latitude
      longitude
      mustKnow
      description
      phoneNumber
      downloadableFiles {
        id
        linkText
        file {
          data {
            id
            attributes {
              name
              alternativeText
              caption
              formats
              hash
              ext
              mime
              size
              url
              previewUrl
              provider
              provider_metadata
            }
          }
        }
      }
      openingHoursBlocks {
        ... on ComponentBlocksOpeningDay {
          id
          __typename
          afterNoonEnd
          afterNoonStart
          morningStart
          morningEnd
          weekDay
        }
        ... on Error {
          __typename
          code
          message
        }
      }
    }
  }
`;

/**
 * __useGetDropOffMapByDropOffMapByServiceIdQuery__
 *
 * To run a query within a React component, call `useGetDropOffMapByDropOffMapByServiceIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDropOffMapByDropOffMapByServiceIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDropOffMapByDropOffMapByServiceIdQuery({
 *   variables: {
 *      dropOffMapServiceId: // value for 'dropOffMapServiceId'
 *   },
 * });
 */
export function useGetDropOffMapByDropOffMapByServiceIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetDropOffMapByDropOffMapByServiceIdQuery,
    GetDropOffMapByDropOffMapByServiceIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetDropOffMapByDropOffMapByServiceIdQuery,
    GetDropOffMapByDropOffMapByServiceIdQueryVariables
  >(GetDropOffMapByDropOffMapByServiceIdDocument, options);
}
export function useGetDropOffMapByDropOffMapByServiceIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDropOffMapByDropOffMapByServiceIdQuery,
    GetDropOffMapByDropOffMapByServiceIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetDropOffMapByDropOffMapByServiceIdQuery,
    GetDropOffMapByDropOffMapByServiceIdQueryVariables
  >(GetDropOffMapByDropOffMapByServiceIdDocument, options);
}
export type GetDropOffMapByDropOffMapByServiceIdQueryHookResult = ReturnType<
  typeof useGetDropOffMapByDropOffMapByServiceIdQuery
>;
export type GetDropOffMapByDropOffMapByServiceIdLazyQueryHookResult =
  ReturnType<typeof useGetDropOffMapByDropOffMapByServiceIdLazyQuery>;
export type GetDropOffMapByDropOffMapByServiceIdQueryResult =
  Apollo.QueryResult<
    GetDropOffMapByDropOffMapByServiceIdQuery,
    GetDropOffMapByDropOffMapByServiceIdQueryVariables
  >;
export const GetAddressCoordinatesDocument = gql`
  query GetAddressCoordinates($searchTerm: String!) {
    getAddressCoordinates(searchTerm: $searchTerm) {
      name
      latitude
      longitude
      banFeaturesProperties
    }
  }
`;

/**
 * __useGetAddressCoordinatesQuery__
 *
 * To run a query within a React component, call `useGetAddressCoordinatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressCoordinatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressCoordinatesQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useGetAddressCoordinatesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAddressCoordinatesQuery,
    GetAddressCoordinatesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAddressCoordinatesQuery,
    GetAddressCoordinatesQueryVariables
  >(GetAddressCoordinatesDocument, options);
}
export function useGetAddressCoordinatesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAddressCoordinatesQuery,
    GetAddressCoordinatesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAddressCoordinatesQuery,
    GetAddressCoordinatesQueryVariables
  >(GetAddressCoordinatesDocument, options);
}
export type GetAddressCoordinatesQueryHookResult = ReturnType<
  typeof useGetAddressCoordinatesQuery
>;
export type GetAddressCoordinatesLazyQueryHookResult = ReturnType<
  typeof useGetAddressCoordinatesLazyQuery
>;
export type GetAddressCoordinatesQueryResult = Apollo.QueryResult<
  GetAddressCoordinatesQuery,
  GetAddressCoordinatesQueryVariables
>;
export const GetPickUpDaysByCoordinatesLocalDocument = gql`
  query getPickUpDaysByCoordinatesLocal(
    $pickUpDayServiceId: ID!
    $lat: Float!
    $long: Float!
  ) {
    getPickUpDaysByCoordinates(
      pickUpDayServiceId: $pickUpDayServiceId
      lat: $lat
      long: $long
    )
  }
`;

/**
 * __useGetPickUpDaysByCoordinatesLocalQuery__
 *
 * To run a query within a React component, call `useGetPickUpDaysByCoordinatesLocalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPickUpDaysByCoordinatesLocalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPickUpDaysByCoordinatesLocalQuery({
 *   variables: {
 *      pickUpDayServiceId: // value for 'pickUpDayServiceId'
 *      lat: // value for 'lat'
 *      long: // value for 'long'
 *   },
 * });
 */
export function useGetPickUpDaysByCoordinatesLocalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPickUpDaysByCoordinatesLocalQuery,
    GetPickUpDaysByCoordinatesLocalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPickUpDaysByCoordinatesLocalQuery,
    GetPickUpDaysByCoordinatesLocalQueryVariables
  >(GetPickUpDaysByCoordinatesLocalDocument, options);
}
export function useGetPickUpDaysByCoordinatesLocalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPickUpDaysByCoordinatesLocalQuery,
    GetPickUpDaysByCoordinatesLocalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPickUpDaysByCoordinatesLocalQuery,
    GetPickUpDaysByCoordinatesLocalQueryVariables
  >(GetPickUpDaysByCoordinatesLocalDocument, options);
}
export type GetPickUpDaysByCoordinatesLocalQueryHookResult = ReturnType<
  typeof useGetPickUpDaysByCoordinatesLocalQuery
>;
export type GetPickUpDaysByCoordinatesLocalLazyQueryHookResult = ReturnType<
  typeof useGetPickUpDaysByCoordinatesLocalLazyQuery
>;
export type GetPickUpDaysByCoordinatesLocalQueryResult = Apollo.QueryResult<
  GetPickUpDaysByCoordinatesLocalQuery,
  GetPickUpDaysByCoordinatesLocalQueryVariables
>;
export const GetPickUpDaysByIdsAndContratIdDocument = gql`
  query getPickUpDaysByIdsAndContratId($pickUpDayIds: [ID], $contractId: ID) {
    pickUpDays(
      filters: {
        id: { in: $pickUpDayIds }
        pickUpDayService: { contract: { id: { eq: $contractId } } }
      }
    ) {
      data {
        id
        attributes {
          name
          updatedAt
          flow {
            data {
              attributes {
                name
                color {
                  data {
                    attributes {
                      name
                      hexaCode
                    }
                  }
                }
                wasteForms {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
          pickUpHours
          periodicity
          includeHoliday
          advancedSelection
          collectDoorToDoor {
            data {
              attributes {
                picto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          collectVoluntary {
            data {
              attributes {
                picto {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                name
              }
            }
          }
          informationMessage {
            data {
              attributes {
                dateEnd
                dateStart
                infoMessage
              }
            }
          }
          buttonLabel
          externalLink
          request {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetPickUpDaysByIdsAndContratIdQuery__
 *
 * To run a query within a React component, call `useGetPickUpDaysByIdsAndContratIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPickUpDaysByIdsAndContratIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPickUpDaysByIdsAndContratIdQuery({
 *   variables: {
 *      pickUpDayIds: // value for 'pickUpDayIds'
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetPickUpDaysByIdsAndContratIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPickUpDaysByIdsAndContratIdQuery,
    GetPickUpDaysByIdsAndContratIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetPickUpDaysByIdsAndContratIdQuery,
    GetPickUpDaysByIdsAndContratIdQueryVariables
  >(GetPickUpDaysByIdsAndContratIdDocument, options);
}
export function useGetPickUpDaysByIdsAndContratIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPickUpDaysByIdsAndContratIdQuery,
    GetPickUpDaysByIdsAndContratIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetPickUpDaysByIdsAndContratIdQuery,
    GetPickUpDaysByIdsAndContratIdQueryVariables
  >(GetPickUpDaysByIdsAndContratIdDocument, options);
}
export type GetPickUpDaysByIdsAndContratIdQueryHookResult = ReturnType<
  typeof useGetPickUpDaysByIdsAndContratIdQuery
>;
export type GetPickUpDaysByIdsAndContratIdLazyQueryHookResult = ReturnType<
  typeof useGetPickUpDaysByIdsAndContratIdLazyQuery
>;
export type GetPickUpDaysByIdsAndContratIdQueryResult = Apollo.QueryResult<
  GetPickUpDaysByIdsAndContratIdQuery,
  GetPickUpDaysByIdsAndContratIdQueryVariables
>;
export const GetContactUsSubServiceByContractIdDocument = gql`
  query getContactUsSubServiceByContractId($contractId: ID!) {
    contactUsSubServices(
      filters: {
        editorialService: { contract: { id: { eq: $contractId } } }
        isActivated: { eq: true }
      }
    ) {
      data {
        id
        attributes {
          name
          isActivated
        }
      }
    }
    contactUses(filters: { status: { eq: "published" } }) {
      data {
        id
        attributes {
          title
          tags {
            data {
              attributes {
                name
              }
            }
          }
          blocks {
            ... on ComponentBlocksHorizontalRule {
              id
              hr
            }
            ... on ComponentBlocksSubHeading {
              id
              subHeadingText
              subHeadingTag
            }
            ... on ComponentBlocksVideo {
              id
              videoLink
              transcriptText
            }
            ... on ComponentBlocksWysiwyg {
              id
              textEditor
            }
            ... on ComponentBlocksImage {
              id
              picture {
                data {
                  attributes {
                    name
                    url
                  }
                }
              }
              isDecorative
              altText
            }
            ... on ComponentBlocksFile {
              id
              document {
                data {
                  attributes {
                    url
                    size
                    formats
                    name
                  }
                }
              }
            }
            ... on Error {
              code
              message
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetContactUsSubServiceByContractIdQuery__
 *
 * To run a query within a React component, call `useGetContactUsSubServiceByContractIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContactUsSubServiceByContractIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContactUsSubServiceByContractIdQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetContactUsSubServiceByContractIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetContactUsSubServiceByContractIdQuery,
    GetContactUsSubServiceByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetContactUsSubServiceByContractIdQuery,
    GetContactUsSubServiceByContractIdQueryVariables
  >(GetContactUsSubServiceByContractIdDocument, options);
}
export function useGetContactUsSubServiceByContractIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContactUsSubServiceByContractIdQuery,
    GetContactUsSubServiceByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetContactUsSubServiceByContractIdQuery,
    GetContactUsSubServiceByContractIdQueryVariables
  >(GetContactUsSubServiceByContractIdDocument, options);
}
export type GetContactUsSubServiceByContractIdQueryHookResult = ReturnType<
  typeof useGetContactUsSubServiceByContractIdQuery
>;
export type GetContactUsSubServiceByContractIdLazyQueryHookResult = ReturnType<
  typeof useGetContactUsSubServiceByContractIdLazyQuery
>;
export type GetContactUsSubServiceByContractIdQueryResult = Apollo.QueryResult<
  GetContactUsSubServiceByContractIdQuery,
  GetContactUsSubServiceByContractIdQueryVariables
>;
export const GetRequestByIdDocument = gql`
  query getRequestById($requestId: ID) {
    request(id: $requestId) {
      data {
        id
        attributes {
          name
          blockText
          confirmationMessage
          description
          isActivated
          hasAppointmentSlots
          hasUser
          displayUserCivility
          isUserNameMandatory
          isUserEmailMandatory
          isUserPhoneMandatory
          userAllowSMSNotification
          hasAddress
          fieldAddressLabel
          slotsReservationRules
          numberOfRequiredSlots
          hoursBeforeReservationIsActivated
          proofOfReceiptHeader
          proofOfReceiptSubject
          sendProofOfReceipt
          requestSlots {
            data {
              id
              attributes {
                sectorizations {
                  data {
                    id
                    attributes {
                      name
                      polygonCoordinates
                      description
                    }
                  }
                }
                slotMessage
                noSlotMessage
                slotsExceptions {
                  exceptionType
                  id
                  slotException
                }
                timeSlots
              }
            }
          }
          requestService {
            data {
              id
            }
          }
          requestAggregate {
            data {
              id
            }
          }
          addableBlocks {
            ... on ComponentBlocksAttachments {
              id
              attachmentLabel
              multipleAttachments
              renderField
              attachment {
                data {
                  id
                  attributes {
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                    createdAt
                    updatedAt
                  }
                }
              }
            }
            ... on ComponentBlocksCheckbox {
              id
              labelCheckbox
              fieldStatusCheckbox
            }
            ... on ComponentBlocksCommentary {
              id
              commentaryLabel
              commentaryPlaceholder
              commentaryStatus
            }
            ... on ComponentBlocksCumbersome {
              id
              cumbersomeLabel
              maxNumberOfCumbersome
              maxVolumeOfCumbersome
              cumbersomeLimitMessage
              isNumberAndVolume
            }
            ... on ComponentBlocksDateChoice {
              id
              fieldLabelDateChoice
              fieldStatus
            }
            ... on ComponentBlocksQcm {
              id
              fieldLabelQCM
              fieldStatusQCM
              multipleChoice
              responses
            }
            ... on ComponentBlocksQuestions {
              id
              height
              questionTextLabel
              questionTextPlaceholder
              textStatus
            }
            ... on Error {
              code
              message
            }
          }
          hasSeveralRequestTypes
          requestType {
            ... on ComponentBlocksRequestType {
              id
              title
              isEmail
              email
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetRequestByIdQuery__
 *
 * To run a query within a React component, call `useGetRequestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestByIdQuery({
 *   variables: {
 *      requestId: // value for 'requestId'
 *   },
 * });
 */
export function useGetRequestByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRequestByIdQuery,
    GetRequestByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRequestByIdQuery, GetRequestByIdQueryVariables>(
    GetRequestByIdDocument,
    options,
  );
}
export function useGetRequestByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRequestByIdQuery,
    GetRequestByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRequestByIdQuery, GetRequestByIdQueryVariables>(
    GetRequestByIdDocument,
    options,
  );
}
export type GetRequestByIdQueryHookResult = ReturnType<
  typeof useGetRequestByIdQuery
>;
export type GetRequestByIdLazyQueryHookResult = ReturnType<
  typeof useGetRequestByIdLazyQuery
>;
export type GetRequestByIdQueryResult = Apollo.QueryResult<
  GetRequestByIdQuery,
  GetRequestByIdQueryVariables
>;
export const GetRequestsByRequestAggregateIdDocument = gql`
  query getRequestsByRequestAggregateId($requestAggregateId: ID!) {
    requests(
      filters: {
        requestAggregate: { id: { eq: $requestAggregateId } }
        isActivated: { eq: true }
      }
    ) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;

/**
 * __useGetRequestsByRequestAggregateIdQuery__
 *
 * To run a query within a React component, call `useGetRequestsByRequestAggregateIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsByRequestAggregateIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsByRequestAggregateIdQuery({
 *   variables: {
 *      requestAggregateId: // value for 'requestAggregateId'
 *   },
 * });
 */
export function useGetRequestsByRequestAggregateIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRequestsByRequestAggregateIdQuery,
    GetRequestsByRequestAggregateIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRequestsByRequestAggregateIdQuery,
    GetRequestsByRequestAggregateIdQueryVariables
  >(GetRequestsByRequestAggregateIdDocument, options);
}
export function useGetRequestsByRequestAggregateIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRequestsByRequestAggregateIdQuery,
    GetRequestsByRequestAggregateIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRequestsByRequestAggregateIdQuery,
    GetRequestsByRequestAggregateIdQueryVariables
  >(GetRequestsByRequestAggregateIdDocument, options);
}
export type GetRequestsByRequestAggregateIdQueryHookResult = ReturnType<
  typeof useGetRequestsByRequestAggregateIdQuery
>;
export type GetRequestsByRequestAggregateIdLazyQueryHookResult = ReturnType<
  typeof useGetRequestsByRequestAggregateIdLazyQuery
>;
export type GetRequestsByRequestAggregateIdQueryResult = Apollo.QueryResult<
  GetRequestsByRequestAggregateIdQuery,
  GetRequestsByRequestAggregateIdQueryVariables
>;
export const GetRequestsLevelsDocument = gql`
  query getRequestsLevels($contractId: ID!) {
    requestAggregates(
      filters: { requestService: { contract: { id: { eq: $contractId } } } }
    ) {
      data {
        id
        attributes {
          name
        }
      }
    }
    requests(
      filters: {
        requestAggregate: { id: { eq: null } }
        requestService: { contract: { id: { eq: $contractId } } }
        isActivated: { eq: true }
      }
    ) {
      data {
        id
        attributes {
          name
          requestAggregate {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetRequestsLevelsQuery__
 *
 * To run a query within a React component, call `useGetRequestsLevelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRequestsLevelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRequestsLevelsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetRequestsLevelsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetRequestsLevelsQuery,
    GetRequestsLevelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRequestsLevelsQuery,
    GetRequestsLevelsQueryVariables
  >(GetRequestsLevelsDocument, options);
}
export function useGetRequestsLevelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRequestsLevelsQuery,
    GetRequestsLevelsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRequestsLevelsQuery,
    GetRequestsLevelsQueryVariables
  >(GetRequestsLevelsDocument, options);
}
export type GetRequestsLevelsQueryHookResult = ReturnType<
  typeof useGetRequestsLevelsQuery
>;
export type GetRequestsLevelsLazyQueryHookResult = ReturnType<
  typeof useGetRequestsLevelsLazyQuery
>;
export type GetRequestsLevelsQueryResult = Apollo.QueryResult<
  GetRequestsLevelsQuery,
  GetRequestsLevelsQueryVariables
>;
export const GetMemoTriBlockByContractIdDocument = gql`
  query getMemoTriBlockByContractId($contractId: ID!) {
    recyclingGuideServices(filters: { contract: { id: { eq: $contractId } } }) {
      data {
        id
        attributes {
          isActivated
          memoName
          memoDesc
          memoFile {
            data {
              id
              attributes {
                name
                formats
                hash
                ext
                mime
                size
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetMemoTriBlockByContractIdQuery__
 *
 * To run a query within a React component, call `useGetMemoTriBlockByContractIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemoTriBlockByContractIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemoTriBlockByContractIdQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetMemoTriBlockByContractIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMemoTriBlockByContractIdQuery,
    GetMemoTriBlockByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetMemoTriBlockByContractIdQuery,
    GetMemoTriBlockByContractIdQueryVariables
  >(GetMemoTriBlockByContractIdDocument, options);
}
export function useGetMemoTriBlockByContractIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMemoTriBlockByContractIdQuery,
    GetMemoTriBlockByContractIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetMemoTriBlockByContractIdQuery,
    GetMemoTriBlockByContractIdQueryVariables
  >(GetMemoTriBlockByContractIdDocument, options);
}
export type GetMemoTriBlockByContractIdQueryHookResult = ReturnType<
  typeof useGetMemoTriBlockByContractIdQuery
>;
export type GetMemoTriBlockByContractIdLazyQueryHookResult = ReturnType<
  typeof useGetMemoTriBlockByContractIdLazyQuery
>;
export type GetMemoTriBlockByContractIdQueryResult = Apollo.QueryResult<
  GetMemoTriBlockByContractIdQuery,
  GetMemoTriBlockByContractIdQueryVariables
>;
export const GetRecyclingFamiliesFormsDocument = gql`
  query getRecyclingFamiliesForms($recyclingGuideServiceId: ID) {
    recyclingGuideService(id: $recyclingGuideServiceId) {
      data {
        __typename
        id
        attributes {
          isActivated
          wasteFamilies {
            data {
              __typename
              id
              attributes {
                createdAt
                familyName
                isSystem
                updatedAt
                wasteForms(filters: { status: { eq: "published" } }) {
                  data {
                    __typename
                    id
                    attributes {
                      name
                      picto {
                        data {
                          id
                          attributes {
                            name
                            url
                            hash
                            size
                            mime
                            provider
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetRecyclingFamiliesFormsQuery__
 *
 * To run a query within a React component, call `useGetRecyclingFamiliesFormsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecyclingFamiliesFormsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecyclingFamiliesFormsQuery({
 *   variables: {
 *      recyclingGuideServiceId: // value for 'recyclingGuideServiceId'
 *   },
 * });
 */
export function useGetRecyclingFamiliesFormsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRecyclingFamiliesFormsQuery,
    GetRecyclingFamiliesFormsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecyclingFamiliesFormsQuery,
    GetRecyclingFamiliesFormsQueryVariables
  >(GetRecyclingFamiliesFormsDocument, options);
}
export function useGetRecyclingFamiliesFormsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecyclingFamiliesFormsQuery,
    GetRecyclingFamiliesFormsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecyclingFamiliesFormsQuery,
    GetRecyclingFamiliesFormsQueryVariables
  >(GetRecyclingFamiliesFormsDocument, options);
}
export type GetRecyclingFamiliesFormsQueryHookResult = ReturnType<
  typeof useGetRecyclingFamiliesFormsQuery
>;
export type GetRecyclingFamiliesFormsLazyQueryHookResult = ReturnType<
  typeof useGetRecyclingFamiliesFormsLazyQuery
>;
export type GetRecyclingFamiliesFormsQueryResult = Apollo.QueryResult<
  GetRecyclingFamiliesFormsQuery,
  GetRecyclingFamiliesFormsQueryVariables
>;
export const GetRecyclingWasteFormItemByIdDocument = gql`
  query getRecyclingWasteFormItemById($wasteFormId: ID) {
    wasteForm(id: $wasteFormId) {
      data {
        id
        __typename
        attributes {
          name
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
          recyclingGestureText
          isHidden
          picto {
            data {
              id
              attributes {
                name
                url
                hash
                size
                mime
                provider
              }
            }
          }
          flow {
            data {
              attributes {
                name
                color {
                  data {
                    attributes {
                      name
                      hexaCode
                      shouldChangeHexaCode
                    }
                    id
                  }
                }
                recyclingGesture
                code
                isActivated
                collectVoluntaries {
                  data {
                    id
                    attributes {
                      name
                      picto {
                        data {
                          id
                          attributes {
                            name
                            hash
                            mime
                            size
                            url
                            provider
                            alternativeText
                          }
                        }
                      }
                    }
                  }
                }
                collectDropOffs {
                  data {
                    id
                    attributes {
                      name
                      picto {
                        data {
                          id
                          attributes {
                            name
                            hash
                            mime
                            size
                            url
                            provider
                            alternativeText
                          }
                        }
                      }
                    }
                  }
                }
                collectDoorToDoors {
                  data {
                    id
                    attributes {
                      name
                      picto {
                        data {
                          id
                          attributes {
                            name
                            hash
                            mime
                            size
                            url
                            provider
                            alternativeText
                          }
                        }
                      }
                    }
                  }
                }
              }
              id
            }
          }
          contentBlock {
            ... on ComponentBlocksImage {
              id
              __typename
              picture {
                data {
                  attributes {
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                    createdAt
                    updatedAt
                  }
                }
              }
              isDecorative
              altText
            }
            ... on ComponentBlocksFile {
              id
              document {
                data {
                  attributes {
                    name
                    alternativeText
                    caption
                    width
                    height
                    formats
                    hash
                    ext
                    mime
                    size
                    url
                    previewUrl
                    provider
                    provider_metadata
                    createdAt
                    updatedAt
                  }
                }
              }
            }
            ... on ComponentBlocksWysiwyg {
              id
              textEditor
            }
            ... on ComponentBlocksVideo {
              id
              videoLink
              transcriptText
            }
            ... on ComponentBlocksSubHeading {
              id
              subHeadingText
              subHeadingTag
            }
            ... on ComponentBlocksHorizontalRule {
              id
              hr
            }
            ... on Error {
              code
              message
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetRecyclingWasteFormItemByIdQuery__
 *
 * To run a query within a React component, call `useGetRecyclingWasteFormItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecyclingWasteFormItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecyclingWasteFormItemByIdQuery({
 *   variables: {
 *      wasteFormId: // value for 'wasteFormId'
 *   },
 * });
 */
export function useGetRecyclingWasteFormItemByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRecyclingWasteFormItemByIdQuery,
    GetRecyclingWasteFormItemByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetRecyclingWasteFormItemByIdQuery,
    GetRecyclingWasteFormItemByIdQueryVariables
  >(GetRecyclingWasteFormItemByIdDocument, options);
}
export function useGetRecyclingWasteFormItemByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRecyclingWasteFormItemByIdQuery,
    GetRecyclingWasteFormItemByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetRecyclingWasteFormItemByIdQuery,
    GetRecyclingWasteFormItemByIdQueryVariables
  >(GetRecyclingWasteFormItemByIdDocument, options);
}
export type GetRecyclingWasteFormItemByIdQueryHookResult = ReturnType<
  typeof useGetRecyclingWasteFormItemByIdQuery
>;
export type GetRecyclingWasteFormItemByIdLazyQueryHookResult = ReturnType<
  typeof useGetRecyclingWasteFormItemByIdLazyQuery
>;
export type GetRecyclingWasteFormItemByIdQueryResult = Apollo.QueryResult<
  GetRecyclingWasteFormItemByIdQuery,
  GetRecyclingWasteFormItemByIdQueryVariables
>;
export const GetWasteFormsPathsDocument = gql`
  query getWasteFormsPaths($contractId: ID!, $total: Int!) {
    wasteForms(
      filters: {
        recyclingGuideService: {
          isActivated: { eq: true }
          contract: { id: { eq: $contractId } }
        }
      }
      pagination: { limit: $total }
    ) {
      data {
        id
        __typename
        attributes {
          isHidden
        }
      }
    }
  }
`;

/**
 * __useGetWasteFormsPathsQuery__
 *
 * To run a query within a React component, call `useGetWasteFormsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWasteFormsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWasteFormsPathsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useGetWasteFormsPathsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetWasteFormsPathsQuery,
    GetWasteFormsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWasteFormsPathsQuery,
    GetWasteFormsPathsQueryVariables
  >(GetWasteFormsPathsDocument, options);
}
export function useGetWasteFormsPathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWasteFormsPathsQuery,
    GetWasteFormsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWasteFormsPathsQuery,
    GetWasteFormsPathsQueryVariables
  >(GetWasteFormsPathsDocument, options);
}
export type GetWasteFormsPathsQueryHookResult = ReturnType<
  typeof useGetWasteFormsPathsQuery
>;
export type GetWasteFormsPathsLazyQueryHookResult = ReturnType<
  typeof useGetWasteFormsPathsLazyQuery
>;
export type GetWasteFormsPathsQueryResult = Apollo.QueryResult<
  GetWasteFormsPathsQuery,
  GetWasteFormsPathsQueryVariables
>;
export const GetWasteFormsPathsTotalDocument = gql`
  query getWasteFormsPathsTotal($contractId: ID!) {
    wasteForms(
      filters: {
        recyclingGuideService: {
          isActivated: { eq: true }
          contract: { id: { eq: $contractId } }
        }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

/**
 * __useGetWasteFormsPathsTotalQuery__
 *
 * To run a query within a React component, call `useGetWasteFormsPathsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWasteFormsPathsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWasteFormsPathsTotalQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetWasteFormsPathsTotalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetWasteFormsPathsTotalQuery,
    GetWasteFormsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetWasteFormsPathsTotalQuery,
    GetWasteFormsPathsTotalQueryVariables
  >(GetWasteFormsPathsTotalDocument, options);
}
export function useGetWasteFormsPathsTotalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWasteFormsPathsTotalQuery,
    GetWasteFormsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetWasteFormsPathsTotalQuery,
    GetWasteFormsPathsTotalQueryVariables
  >(GetWasteFormsPathsTotalDocument, options);
}
export type GetWasteFormsPathsTotalQueryHookResult = ReturnType<
  typeof useGetWasteFormsPathsTotalQuery
>;
export type GetWasteFormsPathsTotalLazyQueryHookResult = ReturnType<
  typeof useGetWasteFormsPathsTotalLazyQuery
>;
export type GetWasteFormsPathsTotalQueryResult = Apollo.QueryResult<
  GetWasteFormsPathsTotalQuery,
  GetWasteFormsPathsTotalQueryVariables
>;
export const GetTipByIdDocument = gql`
  query getTipById($tipId: ID) {
    tip(id: $tipId) {
      data {
        id
        attributes {
          title
          link
          titleLabel
          shortDescription
          tipSubService {
            data {
              id
            }
          }
          status
          publishedDate
          unpublishedDate
          createdAt
          updatedAt
          tags {
            data {
              id
              attributes {
                name
              }
            }
          }
          image {
            data {
              id
              attributes {
                hash
                mime
                name
                provider
                size
                url
                alternativeText
              }
            }
          }
          blocks {
            ... on ComponentBlocksSubHeading {
              id
              subHeadingText
              subHeadingTag
            }
            ... on ComponentBlocksVideo {
              id
              videoLink
              transcriptText
            }
            ... on ComponentBlocksWysiwyg {
              id
              textEditor
            }
            ... on ComponentBlocksHorizontalRule {
              id
              hr
            }
            ... on ComponentBlocksImage {
              id
              picture {
                data {
                  id
                  attributes {
                    name
                    url
                    hash
                    mime
                    provider
                    size
                  }
                }
              }
              isDecorative
              altText
            }
            ... on ComponentBlocksFile {
              id
              document {
                data {
                  attributes {
                    hash
                    mime
                    provider
                    size
                    name
                    url
                  }
                }
              }
            }
            ... on Error {
              code
              message
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetTipByIdQuery__
 *
 * To run a query within a React component, call `useGetTipByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTipByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTipByIdQuery({
 *   variables: {
 *      tipId: // value for 'tipId'
 *   },
 * });
 */
export function useGetTipByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTipByIdQuery,
    GetTipByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTipByIdQuery, GetTipByIdQueryVariables>(
    GetTipByIdDocument,
    options,
  );
}
export function useGetTipByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTipByIdQuery,
    GetTipByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTipByIdQuery, GetTipByIdQueryVariables>(
    GetTipByIdDocument,
    options,
  );
}
export type GetTipByIdQueryHookResult = ReturnType<typeof useGetTipByIdQuery>;
export type GetTipByIdLazyQueryHookResult = ReturnType<
  typeof useGetTipByIdLazyQuery
>;
export type GetTipByIdQueryResult = Apollo.QueryResult<
  GetTipByIdQuery,
  GetTipByIdQueryVariables
>;
export const GetTipsPathsDocument = gql`
  query getTipsPaths($contractId: ID!, $total: Int!) {
    tips(
      filters: {
        status: { eq: "published" }
        tipSubService: {
          isActivated: { eq: true }
          editorialService: { contract: { id: { eq: $contractId } } }
        }
      }
      pagination: { limit: $total }
    ) {
      data {
        id
        attributes {
          status
        }
      }
    }
  }
`;

/**
 * __useGetTipsPathsQuery__
 *
 * To run a query within a React component, call `useGetTipsPathsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTipsPathsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTipsPathsQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useGetTipsPathsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTipsPathsQuery,
    GetTipsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTipsPathsQuery, GetTipsPathsQueryVariables>(
    GetTipsPathsDocument,
    options,
  );
}
export function useGetTipsPathsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTipsPathsQuery,
    GetTipsPathsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTipsPathsQuery, GetTipsPathsQueryVariables>(
    GetTipsPathsDocument,
    options,
  );
}
export type GetTipsPathsQueryHookResult = ReturnType<
  typeof useGetTipsPathsQuery
>;
export type GetTipsPathsLazyQueryHookResult = ReturnType<
  typeof useGetTipsPathsLazyQuery
>;
export type GetTipsPathsQueryResult = Apollo.QueryResult<
  GetTipsPathsQuery,
  GetTipsPathsQueryVariables
>;
export const GetTipsPathsTotalDocument = gql`
  query getTipsPathsTotal($contractId: ID!) {
    tips(
      filters: {
        status: { eq: "published" }
        tipSubService: {
          isActivated: { eq: true }
          editorialService: { contract: { id: { eq: $contractId } } }
        }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;

/**
 * __useGetTipsPathsTotalQuery__
 *
 * To run a query within a React component, call `useGetTipsPathsTotalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTipsPathsTotalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTipsPathsTotalQuery({
 *   variables: {
 *      contractId: // value for 'contractId'
 *   },
 * });
 */
export function useGetTipsPathsTotalQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTipsPathsTotalQuery,
    GetTipsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTipsPathsTotalQuery,
    GetTipsPathsTotalQueryVariables
  >(GetTipsPathsTotalDocument, options);
}
export function useGetTipsPathsTotalLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTipsPathsTotalQuery,
    GetTipsPathsTotalQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTipsPathsTotalQuery,
    GetTipsPathsTotalQueryVariables
  >(GetTipsPathsTotalDocument, options);
}
export type GetTipsPathsTotalQueryHookResult = ReturnType<
  typeof useGetTipsPathsTotalQuery
>;
export type GetTipsPathsTotalLazyQueryHookResult = ReturnType<
  typeof useGetTipsPathsTotalLazyQuery
>;
export type GetTipsPathsTotalQueryResult = Apollo.QueryResult<
  GetTipsPathsTotalQuery,
  GetTipsPathsTotalQueryVariables
>;
