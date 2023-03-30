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
  EventBlocksDynamicZoneInput: any;
  EventLinkToServicesDynamicZoneInput: any;
  FreeContentBlocksDynamicZoneInput: any;
  FreeContentLinkToServicesDynamicZoneInput: any;
  JSON: any;
  Long: any;
  NewBlocksDynamicZoneInput: any;
  NewLinkToServicesDynamicZoneInput: any;
  ServicesBlockServiceLinksDynamicZoneInput: any;
  TipBlocksDynamicZoneInput: any;
  TipLinkToServicesDynamicZoneInput: any;
  Upload: any;
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
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type AccessibilityRelationResponseCollection = {
  __typename?: "AccessibilityRelationResponseCollection";
  data: Array<AccessibilityEntity>;
};

export type AccessibilitySubService = {
  __typename?: "AccessibilitySubService";
  accessibilities?: Maybe<AccessibilityRelationResponseCollection>;
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type AccessibilitySubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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

export type AlertNotification = {
  __typename?: "AlertNotification";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  and?: InputMaybe<Array<InputMaybe<AlertNotificationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AlertNotificationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AlertNotificationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AlertNotificationInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type AlertNotificationRelationResponseCollection = {
  __typename?: "AlertNotificationRelationResponseCollection";
  data: Array<AlertNotificationEntity>;
};

export type AlertNotificationService = {
  __typename?: "AlertNotificationService";
  alertNotifications?: Maybe<AlertNotificationRelationResponseCollection>;
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type AlertNotificationServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type AudienceType = {
  __typename?: "AudienceType";
  createdAt?: Maybe<Scalars["DateTime"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type AudienceTypeEntity = {
  __typename?: "AudienceTypeEntity";
  attributes?: Maybe<AudienceType>;
  id?: Maybe<Scalars["ID"]>;
};

export type AudienceTypeEntityResponse = {
  __typename?: "AudienceTypeEntityResponse";
  data?: Maybe<AudienceTypeEntity>;
};

export type AudienceTypeEntityResponseCollection = {
  __typename?: "AudienceTypeEntityResponseCollection";
  data: Array<AudienceTypeEntity>;
  meta: ResponseCollectionMeta;
};

export type AudienceTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<AudienceTypeFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AudienceTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AudienceTypeFiltersInput>>>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AudienceTypeInput = {
  type?: InputMaybe<Scalars["String"]>;
};

export type AudienceTypeRelationResponseCollection = {
  __typename?: "AudienceTypeRelationResponseCollection";
  data: Array<AudienceTypeEntity>;
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
  CustomId?: Maybe<Scalars["String"]>;
  blocks?: Maybe<Array<Maybe<CguBlocksDynamicZone>>>;
  cguSubService?: Maybe<CguSubServiceEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Cgu_Status>;
  title: Scalars["String"];
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
  CustomId?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CguFiltersInput>>>;
  cguSubService?: InputMaybe<CguSubServiceFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  hasDraft?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CguFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CguFiltersInput>>>;
  publishedDate?: InputMaybe<DateTimeFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  versionNumber?: InputMaybe<IntFilterInput>;
};

export type CguInput = {
  CustomId?: InputMaybe<Scalars["String"]>;
  blocks?: InputMaybe<Array<Scalars["CguBlocksDynamicZoneInput"]>>;
  cguSubService?: InputMaybe<Scalars["ID"]>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Enum_Cgu_Status>;
  title?: InputMaybe<Scalars["String"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type CguRelationResponseCollection = {
  __typename?: "CguRelationResponseCollection";
  data: Array<CguEntity>;
};

export type CguSubService = {
  __typename?: "CguSubService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  cgus?: Maybe<CguRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CguSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cgus?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type ChannelType = {
  __typename?: "ChannelType";
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
  createdAt?: InputMaybe<DateTimeFilterInput>;
  hasWebApp?: InputMaybe<BooleanFilterInput>;
  hasWebSite?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ChannelTypeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChannelTypeFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChannelTypeInput = {
  hasWebApp?: InputMaybe<Scalars["Boolean"]>;
  hasWebSite?: InputMaybe<Scalars["Boolean"]>;
};

export type ChannelTypeRelationResponseCollection = {
  __typename?: "ChannelTypeRelationResponseCollection";
  data: Array<ChannelTypeEntity>;
};

export type City = {
  __typename?: "City";
  createdAt?: Maybe<Scalars["DateTime"]>;
  department?: Maybe<Scalars["String"]>;
  epci?: Maybe<EpciEntityResponse>;
  insee?: Maybe<Scalars["Long"]>;
  name?: Maybe<Scalars["String"]>;
  postalCode?: Maybe<Scalars["Long"]>;
  region?: Maybe<Scalars["String"]>;
  siren?: Maybe<Scalars["Long"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  and?: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  department?: InputMaybe<StringFilterInput>;
  epci?: InputMaybe<EpciFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  insee?: InputMaybe<LongFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CityFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CityFiltersInput>>>;
  postalCode?: InputMaybe<LongFilterInput>;
  region?: InputMaybe<StringFilterInput>;
  siren?: InputMaybe<LongFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CityInput = {
  department?: InputMaybe<Scalars["String"]>;
  epci?: InputMaybe<Scalars["ID"]>;
  insee?: InputMaybe<Scalars["Long"]>;
  name?: InputMaybe<Scalars["String"]>;
  postalCode?: InputMaybe<Scalars["Long"]>;
  region?: InputMaybe<Scalars["String"]>;
  siren?: InputMaybe<Scalars["Long"]>;
};

export type CityRelationResponseCollection = {
  __typename?: "CityRelationResponseCollection";
  data: Array<CityEntity>;
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

export type ClientContactCreateInput = {
  __typename?: "ClientContactCreateInput";
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

export type ComponentBlocksSubHeading = {
  __typename?: "ComponentBlocksSubHeading";
  id: Scalars["ID"];
  subHeadingTag?: Maybe<Enum_Componentblockssubheading_Subheadingtag>;
  subHeadingText?: Maybe<Scalars["String"]>;
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
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type ConfidentialityRelationResponseCollection = {
  __typename?: "ConfidentialityRelationResponseCollection";
  data: Array<ConfidentialityEntity>;
};

export type ConfidentialitySubService = {
  __typename?: "ConfidentialitySubService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  confidentialities?: Maybe<ConfidentialityRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ConfidentialitySubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  confidentialities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
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
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type ContactUsRelationResponseCollection = {
  __typename?: "ContactUsRelationResponseCollection";
  data: Array<ContactUsEntity>;
};

export type ContactUsSubService = {
  __typename?: "ContactUsSubService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  contactUses?: Maybe<ContactUsRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  label: Scalars["String"];
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ContactUsSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  alertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  ccap?: Maybe<Scalars["Long"]>;
  channelType?: Maybe<ChannelTypeEntityResponse>;
  clear?: Maybe<Scalars["Long"]>;
  clientContact?: Maybe<ClientContactEntityResponse>;
  clientName: Scalars["String"];
  clientType: Enum_Contract_Clienttype;
  contractCustomization?: Maybe<ContractCustomizationEntityResponse>;
  contractMenu?: Maybe<ContractMenuEntityResponse>;
  contractStatus: Enum_Contract_Contractstatus;
  contracts?: Maybe<ContractRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  dropOffMapService?: Maybe<DropOffMapServiceEntityResponse>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  isNonExclusive: Scalars["Boolean"];
  isRVFrance: Scalars["Boolean"];
  keyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  logicalDelete?: Maybe<Scalars["Boolean"]>;
  numberOfInhabitants?: Maybe<Scalars["Long"]>;
  oldClientName?: Maybe<Scalars["String"]>;
  pathId?: Maybe<Scalars["Long"]>;
  pickUpDayService?: Maybe<PickUpDayServiceEntityResponse>;
  recyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  requestService?: Maybe<RequestServiceEntityResponse>;
  siret?: Maybe<Scalars["Long"]>;
  tags?: Maybe<TagRelationResponseCollection>;
  territory?: Maybe<TerritoryEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type ContractContractsArgs = {
  filters?: InputMaybe<ContractFiltersInput>;
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

export type ContractAndClientContact =
  | ClientContactCreateInput
  | ContractCreateInput;

export type ContractCreateInput = {
  __typename?: "ContractCreateInput";
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
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContractCustomizationInput = {
  contract?: InputMaybe<Scalars["ID"]>;
  footer?: InputMaybe<Scalars["ID"]>;
  homepage?: InputMaybe<Scalars["ID"]>;
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
  alertNotificationService?: InputMaybe<AlertNotificationServiceFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContractFiltersInput>>>;
  ccap?: InputMaybe<LongFilterInput>;
  channelType?: InputMaybe<ChannelTypeFiltersInput>;
  clear?: InputMaybe<LongFilterInput>;
  clientContact?: InputMaybe<ClientContactFiltersInput>;
  clientName?: InputMaybe<StringFilterInput>;
  clientType?: InputMaybe<StringFilterInput>;
  contractCustomization?: InputMaybe<ContractCustomizationFiltersInput>;
  contractMenu?: InputMaybe<ContractMenuFiltersInput>;
  contractStatus?: InputMaybe<StringFilterInput>;
  contracts?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dropOffMapService?: InputMaybe<DropOffMapServiceFiltersInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
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
  siret?: InputMaybe<LongFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  territory?: InputMaybe<TerritoryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type ContractInput = {
  alertNotificationService?: InputMaybe<Scalars["ID"]>;
  ccap?: InputMaybe<Scalars["Long"]>;
  channelType?: InputMaybe<Scalars["ID"]>;
  clear?: InputMaybe<Scalars["Long"]>;
  clientContact?: InputMaybe<Scalars["ID"]>;
  clientName?: InputMaybe<Scalars["String"]>;
  clientType?: InputMaybe<Enum_Contract_Clienttype>;
  contractCustomization?: InputMaybe<Scalars["ID"]>;
  contractMenu?: InputMaybe<Scalars["ID"]>;
  contractStatus?: InputMaybe<Enum_Contract_Contractstatus>;
  contracts?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  dropOffMapService?: InputMaybe<Scalars["ID"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  isNonExclusive?: InputMaybe<Scalars["Boolean"]>;
  isRVFrance?: InputMaybe<Scalars["Boolean"]>;
  keyMetricsService?: InputMaybe<Scalars["ID"]>;
  logicalDelete?: InputMaybe<Scalars["Boolean"]>;
  numberOfInhabitants?: InputMaybe<Scalars["Long"]>;
  oldClientName?: InputMaybe<Scalars["String"]>;
  pathId?: InputMaybe<Scalars["Long"]>;
  pickUpDayService?: InputMaybe<Scalars["ID"]>;
  recyclingGuideService?: InputMaybe<Scalars["ID"]>;
  requestService?: InputMaybe<Scalars["ID"]>;
  siret?: InputMaybe<Scalars["Long"]>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  territory?: InputMaybe<Scalars["ID"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  | ComponentLinksNews
  | ComponentLinksPickUpDay
  | ComponentLinksQuizzes
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | ComponentLinksTips
  | Error;

export type ContractRelationResponseCollection = {
  __typename?: "ContractRelationResponseCollection";
  data: Array<ContractEntity>;
};

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
  versionNumber?: InputMaybe<Scalars["Int"]>;
};

export type CookieRelationResponseCollection = {
  __typename?: "CookieRelationResponseCollection";
  data: Array<CookieEntity>;
};

export type CookiesSubService = {
  __typename?: "CookiesSubService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  cookies?: Maybe<CookieRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  link?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CookiesSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cookies?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  description?: InputMaybe<Scalars["String"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  link?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
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
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  name?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type DescriptionServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DescriptionServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DescriptionServiceFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DescriptionServiceInput = {
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  and?: InputMaybe<Array<InputMaybe<DropOffMapFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DropOffMapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DropOffMapFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DropOffMapInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type DropOffMapRelationResponseCollection = {
  __typename?: "DropOffMapRelationResponseCollection";
  data: Array<DropOffMapEntity>;
};

export type DropOffMapService = {
  __typename?: "DropOffMapService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type DropOffMapServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  publicationState?: InputMaybe<PublicationState>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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

export enum Enum_Cgu_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
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

export enum Enum_New_Status {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
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

export type EditoBlock = {
  __typename?: "EditoBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayBlock: Scalars["Boolean"];
  editoContents?: Maybe<EditoContentRelationResponseCollection>;
  homepage?: Maybe<HomepageEntityResponse>;
  titleContent: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EditoBlockEditoContentsArgs = {
  filters?: InputMaybe<EditoContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EditoBlockDto = {
  __typename?: "EditoBlockDTO";
  displayBlock: Scalars["Boolean"];
  editoContents?: Maybe<Array<Maybe<EditoContentDto>>>;
  id: Scalars["ID"];
  titleContent: Scalars["String"];
};

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
  editoContents?: InputMaybe<EditoContentFiltersInput>;
  homepage?: InputMaybe<HomepageFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<EditoBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EditoBlockFiltersInput>>>;
  titleContent?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EditoBlockInput = {
  displayBlock?: InputMaybe<Scalars["Boolean"]>;
  editoContents?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  homepage?: InputMaybe<Scalars["ID"]>;
  titleContent?: InputMaybe<Scalars["String"]>;
};

export type EditoContent = {
  __typename?: "EditoContent";
  createdAt?: Maybe<Scalars["DateTime"]>;
  editoBlock?: Maybe<EditoBlockEntityResponse>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  freeContent?: Maybe<FreeContentEntityResponse>;
  news?: Maybe<NewEntityResponse>;
  quiz?: Maybe<QuizEntityResponse>;
  tip?: Maybe<TipEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EditoContentDto = {
  __typename?: "EditoContentDTO";
  attributes: EditoContentDtoAttributes;
  contentType: Scalars["String"];
  id: Scalars["ID"];
  typeName: Scalars["String"];
};

export type EditoContentDtoAttributes = {
  __typename?: "EditoContentDTOAttributes";
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Editocontentdto_Status>;
  title: Scalars["String"];
};

export type EditoContentEntity = {
  __typename?: "EditoContentEntity";
  attributes?: Maybe<EditoContent>;
  id?: Maybe<Scalars["ID"]>;
};

export type EditoContentEntityResponse = {
  __typename?: "EditoContentEntityResponse";
  data?: Maybe<EditoContentEntity>;
};

export type EditoContentEntityResponseCollection = {
  __typename?: "EditoContentEntityResponseCollection";
  data: Array<EditoContentEntity>;
  meta: ResponseCollectionMeta;
};

export type EditoContentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EditoContentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  editoBlock?: InputMaybe<EditoBlockFiltersInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  event?: InputMaybe<EventFiltersInput>;
  freeContent?: InputMaybe<FreeContentFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  news?: InputMaybe<NewFiltersInput>;
  not?: InputMaybe<EditoContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EditoContentFiltersInput>>>;
  quiz?: InputMaybe<QuizFiltersInput>;
  tip?: InputMaybe<TipFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EditoContentInput = {
  editoBlock?: InputMaybe<Scalars["ID"]>;
  editorialService?: InputMaybe<Scalars["ID"]>;
  event?: InputMaybe<Scalars["ID"]>;
  freeContent?: InputMaybe<Scalars["ID"]>;
  news?: InputMaybe<Scalars["ID"]>;
  quiz?: InputMaybe<Scalars["ID"]>;
  tip?: InputMaybe<Scalars["ID"]>;
};

export type EditoContentRelationResponseCollection = {
  __typename?: "EditoContentRelationResponseCollection";
  data: Array<EditoContentEntity>;
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
  editoContents?: Maybe<EditoContentRelationResponseCollection>;
  eventSubService?: Maybe<EventSubServiceEntityResponse>;
  freeContentSubServices?: Maybe<FreeContentSubServiceRelationResponseCollection>;
  newsSubService?: Maybe<NewsSubServiceEntityResponse>;
  quizSubService?: Maybe<QuizSubServiceEntityResponse>;
  tipSubService?: Maybe<TipSubServiceEntityResponse>;
  topContents?: Maybe<TopContentRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type EditorialServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EditorialServiceEditoContentsArgs = {
  filters?: InputMaybe<EditoContentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EditorialServiceFreeContentSubServicesArgs = {
  filters?: InputMaybe<FreeContentSubServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EditorialServiceTopContentsArgs = {
  filters?: InputMaybe<TopContentFiltersInput>;
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
  editoContents?: InputMaybe<EditoContentFiltersInput>;
  eventSubService?: InputMaybe<EventSubServiceFiltersInput>;
  freeContentSubServices?: InputMaybe<FreeContentSubServiceFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  newsSubService?: InputMaybe<NewsSubServiceFiltersInput>;
  not?: InputMaybe<EditorialServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EditorialServiceFiltersInput>>>;
  quizSubService?: InputMaybe<QuizSubServiceFiltersInput>;
  tipSubService?: InputMaybe<TipSubServiceFiltersInput>;
  topContents?: InputMaybe<TopContentFiltersInput>;
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
  editoContents?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  eventSubService?: InputMaybe<Scalars["ID"]>;
  freeContentSubServices?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  newsSubService?: InputMaybe<Scalars["ID"]>;
  quizSubService?: InputMaybe<Scalars["ID"]>;
  tipSubService?: InputMaybe<Scalars["ID"]>;
  topContents?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type Epci = {
  __typename?: "Epci";
  city?: Maybe<CityEntityResponse>;
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
  city?: InputMaybe<CityFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EpciFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EpciFiltersInput>>>;
  territories?: InputMaybe<TerritoryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EpciInput = {
  city?: InputMaybe<Scalars["ID"]>;
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
  documents?: Maybe<DocumentRelationResponseCollection>;
  draftCreationId?: Maybe<Scalars["String"]>;
  editoContent?: Maybe<EditoContentEntityResponse>;
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
  topContent?: Maybe<TopContentEntityResponse>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  documents?: InputMaybe<DocumentFiltersInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  editoContent?: InputMaybe<EditoContentFiltersInput>;
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
  topContent?: InputMaybe<TopContentFiltersInput>;
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type EventInput = {
  blocks?: InputMaybe<Array<Scalars["EventBlocksDynamicZoneInput"]>>;
  documents?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  editoContent?: InputMaybe<Scalars["ID"]>;
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
  topContent?: InputMaybe<Scalars["ID"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
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
};

export type EventRelationResponseCollection = {
  __typename?: "EventRelationResponseCollection";
  data: Array<EventEntity>;
};

export type EventSubService = {
  __typename?: "EventSubService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type EventSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]>;
  caption?: InputMaybe<Scalars["String"]>;
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
  draftCreationId?: Maybe<Scalars["String"]>;
  editoContent?: Maybe<EditoContentEntityResponse>;
  freeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  image: UploadFileEntityResponse;
  linkToServices?: Maybe<Array<Maybe<FreeContentLinkToServicesDynamicZone>>>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Freecontent_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars["String"];
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  draftCreationId?: InputMaybe<StringFilterInput>;
  editoContent?: InputMaybe<EditoContentFiltersInput>;
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
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FreeContentInput = {
  blocks?: InputMaybe<Array<Scalars["FreeContentBlocksDynamicZoneInput"]>>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  editoContent?: InputMaybe<Scalars["ID"]>;
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
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
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
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type FreeContentSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  | AudienceType
  | Cgu
  | CguSubService
  | ChannelType
  | City
  | ClientContact
  | ComponentBlocksFile
  | ComponentBlocksHorizontalRule
  | ComponentBlocksImage
  | ComponentBlocksSubHeading
  | ComponentBlocksVideo
  | ComponentBlocksWysiwyg
  | ComponentLinksAlertNotification
  | ComponentLinksContactUs
  | ComponentLinksDropOffMap
  | ComponentLinksEditorial
  | ComponentLinksEvents
  | ComponentLinksExternal
  | ComponentLinksFrees
  | ComponentLinksKeyMetrics
  | ComponentLinksNews
  | ComponentLinksPickUpDay
  | ComponentLinksQuizzes
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | ComponentLinksTips
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
  | EditoContent
  | EditorialService
  | Epci
  | Event
  | EventSubService
  | ExportEntity
  | Footer
  | FreeContent
  | FreeContentSubService
  | Global
  | Homepage
  | I18NLocale
  | KeyMetric
  | KeyMetricsService
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
  | RequestService
  | SearchEngineBlock
  | ServicesBlock
  | Tag
  | Territory
  | TerritoryType
  | Tip
  | TipSubService
  | TopContent
  | TopContentBlock
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | WasteForm;

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
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type KeyMetricsServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  createAudienceType?: Maybe<AudienceTypeEntityResponse>;
  createCgu?: Maybe<CguEntityResponse>;
  createCguSubService?: Maybe<CguSubServiceEntityResponse>;
  createChannelType?: Maybe<ChannelTypeEntityResponse>;
  createCity?: Maybe<CityEntityResponse>;
  createClientContact?: Maybe<ClientContactEntityResponse>;
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
  createEditoContent?: Maybe<EditoContentEntityResponse>;
  createEditorialService?: Maybe<EditorialServiceEntityResponse>;
  createEmptyContract?: Maybe<Array<Maybe<ContractAndClientContact>>>;
  createEpci?: Maybe<EpciEntityResponse>;
  createEvent?: Maybe<EventEntityResponse>;
  createEventSubService?: Maybe<EventSubServiceEntityResponse>;
  createExportEntity?: Maybe<ExportEntityEntityResponse>;
  createFooter?: Maybe<FooterEntityResponse>;
  createFreeContent?: Maybe<FreeContentEntityResponse>;
  createFreeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  createHomepage?: Maybe<HomepageEntityResponse>;
  createKeyMetric?: Maybe<KeyMetricEntityResponse>;
  createKeyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
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
  createRequestService?: Maybe<RequestServiceEntityResponse>;
  createSearchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  createServicesBlock?: Maybe<ServicesBlockEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createTerritory?: Maybe<TerritoryEntityResponse>;
  createTerritoryType?: Maybe<TerritoryTypeEntityResponse>;
  createTip?: Maybe<TipEntityResponse>;
  createTipSubService?: Maybe<TipSubServiceEntityResponse>;
  createTopContent?: Maybe<TopContentEntityResponse>;
  createTopContentBlock?: Maybe<TopContentBlockEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWasteForm?: Maybe<WasteFormEntityResponse>;
  deleteAccessibility?: Maybe<AccessibilityEntityResponse>;
  deleteAccessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  deleteAlertNotification?: Maybe<AlertNotificationEntityResponse>;
  deleteAlertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  deleteAudienceType?: Maybe<AudienceTypeEntityResponse>;
  deleteCgu?: Maybe<CguEntityResponse>;
  deleteCguSubService?: Maybe<CguSubServiceEntityResponse>;
  deleteChannelType?: Maybe<ChannelTypeEntityResponse>;
  deleteCity?: Maybe<CityEntityResponse>;
  deleteClientContact?: Maybe<ClientContactEntityResponse>;
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
  deleteEditoContent?: Maybe<EditoContentEntityResponse>;
  deleteEditorialService?: Maybe<EditorialServiceEntityResponse>;
  deleteEpci?: Maybe<EpciEntityResponse>;
  deleteEvent?: Maybe<EventEntityResponse>;
  deleteEventSubService?: Maybe<EventSubServiceEntityResponse>;
  deleteExportEntity?: Maybe<ExportEntityEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteFreeContent?: Maybe<FreeContentEntityResponse>;
  deleteFreeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  deleteKeyMetric?: Maybe<KeyMetricEntityResponse>;
  deleteKeyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
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
  deleteRequestService?: Maybe<RequestServiceEntityResponse>;
  deleteSearchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  deleteServicesBlock?: Maybe<ServicesBlockEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteTerritory?: Maybe<TerritoryEntityResponse>;
  deleteTerritoryType?: Maybe<TerritoryTypeEntityResponse>;
  deleteTip?: Maybe<TipEntityResponse>;
  deleteTipSubService?: Maybe<TipSubServiceEntityResponse>;
  deleteTopContent?: Maybe<TopContentEntityResponse>;
  deleteTopContentBlock?: Maybe<TopContentBlockEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWasteForm?: Maybe<WasteFormEntityResponse>;
  duplicateContent?: Maybe<Scalars["Boolean"]>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  endDateServices?: Maybe<Scalars["Boolean"]>;
  exportMunicipalities?: Maybe<Scalars["ID"]>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  logicalDeleteContract?: Maybe<Scalars["Boolean"]>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  servicesActivation?: Maybe<ServiceActivated>;
  updateAccessibility?: Maybe<AccessibilityEntityResponse>;
  updateAccessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  updateAlertNotification?: Maybe<AlertNotificationEntityResponse>;
  updateAlertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  updateAudienceType?: Maybe<AudienceTypeEntityResponse>;
  updateCgu?: Maybe<CguEntityResponse>;
  updateCguSubService?: Maybe<CguSubServiceEntityResponse>;
  updateChannelType?: Maybe<ChannelTypeEntityResponse>;
  updateCity?: Maybe<CityEntityResponse>;
  updateClientContact?: Maybe<ClientContactEntityResponse>;
  updateConfidentiality?: Maybe<ConfidentialityEntityResponse>;
  updateConfidentialitySubService?: Maybe<ConfidentialitySubServiceEntityResponse>;
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
  updateEditoContent?: Maybe<EditoContentEntityResponse>;
  updateEditorialService?: Maybe<EditorialServiceEntityResponse>;
  updateEpci?: Maybe<EpciEntityResponse>;
  updateEvent?: Maybe<EventEntityResponse>;
  updateEventSubService?: Maybe<EventSubServiceEntityResponse>;
  updateExportEntity?: Maybe<ExportEntityEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateFreeContent?: Maybe<FreeContentEntityResponse>;
  updateFreeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  updateFullContract?: Maybe<Scalars["Boolean"]>;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  updateKeyMetric?: Maybe<KeyMetricEntityResponse>;
  updateKeyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
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
  updateRequestService?: Maybe<RequestServiceEntityResponse>;
  updateSearchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  updateServicesBlock?: Maybe<ServicesBlockEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateTerritory?: Maybe<TerritoryEntityResponse>;
  updateTerritoryType?: Maybe<TerritoryTypeEntityResponse>;
  updateTip?: Maybe<TipEntityResponse>;
  updateTipSubService?: Maybe<TipSubServiceEntityResponse>;
  updateTopContent?: Maybe<TopContentEntityResponse>;
  updateTopContentBlock?: Maybe<TopContentBlockEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWasteForm?: Maybe<WasteFormEntityResponse>;
  upload: UploadFileEntityResponse;
  urlUploader?: Maybe<Scalars["Boolean"]>;
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

export type MutationCreateAudienceTypeArgs = {
  data: AudienceTypeInput;
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

export type MutationCreateEditoContentArgs = {
  data: EditoContentInput;
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

export type MutationCreateKeyMetricArgs = {
  data: KeyMetricInput;
};

export type MutationCreateKeyMetricsServiceArgs = {
  data: KeyMetricsServiceInput;
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

export type MutationCreateRequestServiceArgs = {
  data: RequestServiceInput;
};

export type MutationCreateSearchEngineBlockArgs = {
  data: SearchEngineBlockInput;
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

export type MutationCreateTopContentArgs = {
  data: TopContentInput;
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

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationCreateWasteFormArgs = {
  data: WasteFormInput;
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

export type MutationDeleteAudienceTypeArgs = {
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

export type MutationDeleteEditoContentArgs = {
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

export type MutationDeleteKeyMetricArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteKeyMetricsServiceArgs = {
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

export type MutationDeleteRequestServiceArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteSearchEngineBlockArgs = {
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

export type MutationDeleteTopContentArgs = {
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

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteWasteFormArgs = {
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

export type MutationLogicalDeleteContractArgs = {
  clientName: Scalars["String"];
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

export type MutationServicesActivationArgs = {
  ServiceName: Scalars["String"];
  contractId: Scalars["ID"];
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  serviceId: Scalars["ID"];
  startDate?: InputMaybe<Scalars["Date"]>;
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

export type MutationUpdateAudienceTypeArgs = {
  data: AudienceTypeInput;
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

export type MutationUpdateConfidentialityArgs = {
  data: ConfidentialityInput;
  id: Scalars["ID"];
};

export type MutationUpdateConfidentialitySubServiceArgs = {
  data: ConfidentialitySubServiceInput;
  id: Scalars["ID"];
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

export type MutationUpdateEditoContentArgs = {
  data: EditoContentInput;
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

export type MutationUpdateKeyMetricArgs = {
  data: KeyMetricInput;
  id: Scalars["ID"];
};

export type MutationUpdateKeyMetricsServiceArgs = {
  data: KeyMetricsServiceInput;
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

export type MutationUpdateRequestServiceArgs = {
  data: RequestServiceInput;
  id: Scalars["ID"];
};

export type MutationUpdateSearchEngineBlockArgs = {
  data: SearchEngineBlockInput;
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

export type MutationUpdateTopContentArgs = {
  data: TopContentInput;
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

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"];
};

export type MutationUpdateWasteFormArgs = {
  data: WasteFormInput;
  id: Scalars["ID"];
};

export type MutationUploadArgs = {
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

export type New = {
  __typename?: "New";
  audiences?: Maybe<AudienceTypeRelationResponseCollection>;
  blocks?: Maybe<Array<Maybe<NewBlocksDynamicZone>>>;
  channels?: Maybe<ChannelTypeRelationResponseCollection>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  customId?: Maybe<Scalars["String"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  editoContent?: Maybe<EditoContentEntityResponse>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  image?: Maybe<UploadFileEntityResponse>;
  linkToServices?: Maybe<Array<Maybe<NewLinkToServicesDynamicZone>>>;
  newsSubService?: Maybe<NewsSubServiceEntityResponse>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_New_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars["String"];
  topContent?: Maybe<TopContentEntityResponse>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  versionNumber?: Maybe<Scalars["Int"]>;
};

export type NewAudiencesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  audiences?: InputMaybe<AudienceTypeFiltersInput>;
  channels?: InputMaybe<ChannelTypeFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customId?: InputMaybe<StringFilterInput>;
  draftCreationId?: InputMaybe<StringFilterInput>;
  editoContent?: InputMaybe<EditoContentFiltersInput>;
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
  topContent?: InputMaybe<TopContentFiltersInput>;
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
  editoContent?: InputMaybe<Scalars["ID"]>;
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
  topContent?: InputMaybe<Scalars["ID"]>;
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
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type NewsSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  and?: InputMaybe<Array<InputMaybe<PickUpDayFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PickUpDayFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PickUpDayFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PickUpDayInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type PickUpDayRelationResponseCollection = {
  __typename?: "PickUpDayRelationResponseCollection";
  data: Array<PickUpDayEntity>;
};

export type PickUpDayService = {
  __typename?: "PickUpDayService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type PickUpDayServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  publicationState?: InputMaybe<PublicationState>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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

export enum PublicationState {
  Live = "LIVE",
  Preview = "PREVIEW",
}

export type Query = {
  __typename?: "Query";
  accessibilities?: Maybe<AccessibilityEntityResponseCollection>;
  accessibility?: Maybe<AccessibilityEntityResponse>;
  accessibilitySubService?: Maybe<AccessibilitySubServiceEntityResponse>;
  accessibilitySubServices?: Maybe<AccessibilitySubServiceEntityResponseCollection>;
  alertNotification?: Maybe<AlertNotificationEntityResponse>;
  alertNotificationService?: Maybe<AlertNotificationServiceEntityResponse>;
  alertNotificationServices?: Maybe<AlertNotificationServiceEntityResponseCollection>;
  alertNotifications?: Maybe<AlertNotificationEntityResponseCollection>;
  audienceType?: Maybe<AudienceTypeEntityResponse>;
  audienceTypes?: Maybe<AudienceTypeEntityResponseCollection>;
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
  editoContent?: Maybe<EditoContentEntityResponse>;
  editoContents?: Maybe<EditoContentEntityResponseCollection>;
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
  footer?: Maybe<FooterEntityResponse>;
  footers?: Maybe<FooterEntityResponseCollection>;
  freeContent?: Maybe<FreeContentEntityResponse>;
  freeContentSubService?: Maybe<FreeContentSubServiceEntityResponse>;
  freeContentSubServices?: Maybe<FreeContentSubServiceEntityResponseCollection>;
  freeContents?: Maybe<FreeContentEntityResponseCollection>;
  getAllFoldersHierarchy?: Maybe<Array<Maybe<RequestFolders>>>;
  getContentTypeDTOs?: Maybe<Array<Maybe<ContentTypeDto>>>;
  getEditoBlockDTO?: Maybe<EditoBlockDto>;
  getEditoContentDTOs?: Maybe<Array<Maybe<EditoContentDto>>>;
  getFilePath?: Maybe<Scalars["String"]>;
  getFolderHierarchy?: Maybe<Array<Maybe<RequestFolders>>>;
  getNewestTopContents?: Maybe<Array<Maybe<EventOrNews>>>;
  getStatusExport?: Maybe<Scalars["String"]>;
  getTopContentBlockDTO?: Maybe<TopContentBlockDto>;
  getTopContentDTOs?: Maybe<Array<Maybe<TopContentDto>>>;
  global?: Maybe<GlobalEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  homepages?: Maybe<HomepageEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  importMunicipalities?: Maybe<Scalars["String"]>;
  keyMetric?: Maybe<KeyMetricEntityResponse>;
  keyMetrics?: Maybe<KeyMetricEntityResponseCollection>;
  keyMetricsService?: Maybe<KeyMetricsServiceEntityResponse>;
  keyMetricsServices?: Maybe<KeyMetricsServiceEntityResponseCollection>;
  libraryBreadcrumbTrail?: Maybe<Array<Maybe<Folders>>>;
  librarySearchEngine?: Maybe<Array<Maybe<RequestFileOrFolder>>>;
  me?: Maybe<UsersPermissionsMe>;
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
  recyclingGuideService?: Maybe<RecyclingGuideServiceEntityResponse>;
  recyclingGuideServices?: Maybe<RecyclingGuideServiceEntityResponseCollection>;
  request?: Maybe<RequestEntityResponse>;
  requestService?: Maybe<RequestServiceEntityResponse>;
  requestServices?: Maybe<RequestServiceEntityResponseCollection>;
  requests?: Maybe<RequestEntityResponseCollection>;
  searchClientsByName?: Maybe<Array<Maybe<ClientName>>>;
  searchEngineBlock?: Maybe<SearchEngineBlockEntityResponse>;
  searchEngineBlocks?: Maybe<SearchEngineBlockEntityResponseCollection>;
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
  topContent?: Maybe<TopContentEntityResponse>;
  topContentBlock?: Maybe<TopContentBlockEntityResponse>;
  topContentBlocks?: Maybe<TopContentBlockEntityResponseCollection>;
  topContents?: Maybe<TopContentEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  wasteForm?: Maybe<WasteFormEntityResponse>;
  wasteForms?: Maybe<WasteFormEntityResponseCollection>;
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
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryAudienceTypeArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
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
  publicationState?: InputMaybe<PublicationState>;
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

export type QueryEditoContentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryEditoContentsArgs = {
  filters?: InputMaybe<EditoContentFiltersInput>;
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

export type QueryGetAllFoldersHierarchyArgs = {
  path: Scalars["String"];
};

export type QueryGetContentTypeDtOsArgs = {
  contractId: Scalars["ID"];
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

export type QueryImportMunicipalitiesArgs = {
  file: Scalars["String"];
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
  publicationState?: InputMaybe<PublicationState>;
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

export type QueryRequestServiceArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryRequestServicesArgs = {
  filters?: InputMaybe<RequestServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryRequestsArgs = {
  filters?: InputMaybe<RequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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

export type QueryTopContentArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTopContentBlockArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryTopContentBlocksArgs = {
  filters?: InputMaybe<TopContentBlockFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type QueryTopContentsArgs = {
  filters?: InputMaybe<TopContentFiltersInput>;
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

export type QueryWasteFormArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryWasteFormsArgs = {
  filters?: InputMaybe<WasteFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type Quiz = {
  __typename?: "Quiz";
  createdAt?: Maybe<Scalars["DateTime"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  editoContent?: Maybe<EditoContentEntityResponse>;
  hasDraft?: Maybe<Scalars["Boolean"]>;
  publishedDate?: Maybe<Scalars["DateTime"]>;
  quizSubService?: Maybe<QuizSubServiceEntityResponse>;
  shortDescription?: Maybe<Scalars["String"]>;
  status?: Maybe<Enum_Quiz_Status>;
  tags?: Maybe<TagRelationResponseCollection>;
  title?: Maybe<Scalars["String"]>;
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  draftCreationId?: InputMaybe<StringFilterInput>;
  editoContent?: InputMaybe<EditoContentFiltersInput>;
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
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizInput = {
  draftCreationId?: InputMaybe<Scalars["String"]>;
  editoContent?: InputMaybe<Scalars["ID"]>;
  hasDraft?: InputMaybe<Scalars["Boolean"]>;
  publishedDate?: InputMaybe<Scalars["DateTime"]>;
  quizSubService?: InputMaybe<Scalars["ID"]>;
  shortDescription?: InputMaybe<Scalars["String"]>;
  status?: InputMaybe<Enum_Quiz_Status>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  title?: InputMaybe<Scalars["String"]>;
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
};

export type QuizRelationResponseCollection = {
  __typename?: "QuizRelationResponseCollection";
  data: Array<QuizEntity>;
};

export type QuizSubService = {
  __typename?: "QuizSubService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type QuizSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  wasteForms?: Maybe<WasteFormRelationResponseCollection>;
};

export type RecyclingGuideServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RecyclingGuideServiceWasteFormsArgs = {
  filters?: InputMaybe<WasteFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RecyclingGuideServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RecyclingGuideServiceFiltersInput>>>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wasteForms?: InputMaybe<WasteFormFiltersInput>;
};

export type RecyclingGuideServiceInput = {
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  startDate?: InputMaybe<Scalars["Date"]>;
  wasteForms?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
};

export type RecyclingGuideServiceRelationResponseCollection = {
  __typename?: "RecyclingGuideServiceRelationResponseCollection";
  data: Array<RecyclingGuideServiceEntity>;
};

export type Request = {
  __typename?: "Request";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RequestFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
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
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type RequestRelationResponseCollection = {
  __typename?: "RequestRelationResponseCollection";
  data: Array<RequestEntity>;
};

export type RequestService = {
  __typename?: "RequestService";
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
  cities?: Maybe<CityRelationResponseCollection>;
  contract?: Maybe<ContractEntityResponse>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  endDate?: Maybe<Scalars["Date"]>;
  isActivated: Scalars["Boolean"];
  name: Scalars["String"];
  requests?: Maybe<RequestRelationResponseCollection>;
  startDate?: Maybe<Scalars["Date"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type RequestServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestServiceCitiesArgs = {
  filters?: InputMaybe<CityFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type RequestServiceRequestsArgs = {
  filters?: InputMaybe<RequestFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
  cities?: InputMaybe<CityFiltersInput>;
  contract?: InputMaybe<ContractFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isActivated?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<RequestServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RequestServiceFiltersInput>>>;
  requests?: InputMaybe<RequestFiltersInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type RequestServiceInput = {
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  cities?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  contract?: InputMaybe<Scalars["ID"]>;
  endDate?: InputMaybe<Scalars["Date"]>;
  isActivated?: InputMaybe<Scalars["Boolean"]>;
  name?: InputMaybe<Scalars["String"]>;
  requests?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  startDate?: InputMaybe<Scalars["Date"]>;
};

export type RequestServiceRelationResponseCollection = {
  __typename?: "RequestServiceRelationResponseCollection";
  data: Array<RequestServiceEntity>;
};

export type RequestTagEntity = {
  __typename?: "RequestTagEntity";
  contractId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
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
  | ComponentLinksNews
  | ComponentLinksPickUpDay
  | ComponentLinksQuizzes
  | ComponentLinksRecyclingGuide
  | ComponentLinksRequest
  | ComponentLinksTips
  | Error;

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

export type Tip = {
  __typename?: "Tip";
  blocks?: Maybe<Array<Maybe<TipBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  draftCreationId?: Maybe<Scalars["String"]>;
  editoContent?: Maybe<EditoContentEntityResponse>;
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
  unpublishedDate?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
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
  draftCreationId?: InputMaybe<StringFilterInput>;
  editoContent?: InputMaybe<EditoContentFiltersInput>;
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
  unpublishedDate?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TipInput = {
  blocks?: InputMaybe<Array<Scalars["TipBlocksDynamicZoneInput"]>>;
  draftCreationId?: InputMaybe<Scalars["String"]>;
  editoContent?: InputMaybe<Scalars["ID"]>;
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
  unpublishedDate?: InputMaybe<Scalars["DateTime"]>;
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
  audienceTypes?: Maybe<AudienceTypeRelationResponseCollection>;
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

export type TipSubServiceAudienceTypesArgs = {
  filters?: InputMaybe<AudienceTypeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
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
  audienceTypes?: InputMaybe<AudienceTypeFiltersInput>;
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
  audienceTypes?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
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

export type TopContent = {
  __typename?: "TopContent";
  createdAt?: Maybe<Scalars["DateTime"]>;
  editorialService?: Maybe<EditorialServiceEntityResponse>;
  event?: Maybe<EventEntityResponse>;
  news?: Maybe<NewEntityResponse>;
  topContentBlock?: Maybe<TopContentBlockEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TopContentBlock = {
  __typename?: "TopContentBlock";
  createdAt?: Maybe<Scalars["DateTime"]>;
  displayBlock: Scalars["Boolean"];
  displayLastThreeContents: Scalars["Boolean"];
  hasTopContent: Scalars["Boolean"];
  homepage?: Maybe<HomepageEntityResponse>;
  titleContent: Scalars["String"];
  topContent?: Maybe<TopContentEntityResponse>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type TopContentBlockDto = {
  __typename?: "TopContentBlockDTO";
  displayBlock: Scalars["Boolean"];
  displayLastThreeContents: Scalars["Boolean"];
  hasTopContent: Scalars["Boolean"];
  id: Scalars["ID"];
  titleContent: Scalars["String"];
  topContent?: Maybe<TopContentDto>;
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
  topContent?: InputMaybe<TopContentFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TopContentBlockInput = {
  displayBlock?: InputMaybe<Scalars["Boolean"]>;
  displayLastThreeContents?: InputMaybe<Scalars["Boolean"]>;
  hasTopContent?: InputMaybe<Scalars["Boolean"]>;
  homepage?: InputMaybe<Scalars["ID"]>;
  titleContent?: InputMaybe<Scalars["String"]>;
  topContent?: InputMaybe<Scalars["ID"]>;
};

export type TopContentDto = {
  __typename?: "TopContentDTO";
  attributes: TopContentDtoAttributes;
  contentType: Scalars["String"];
  id: Scalars["ID"];
  typeName: Scalars["String"];
};

export type TopContentDtoAttributes = {
  __typename?: "TopContentDTOAttributes";
  publishedDate?: Maybe<Scalars["DateTime"]>;
  status?: Maybe<Enum_Topcontentdto_Status>;
  title: Scalars["String"];
};

export type TopContentEntity = {
  __typename?: "TopContentEntity";
  attributes?: Maybe<TopContent>;
  id?: Maybe<Scalars["ID"]>;
};

export type TopContentEntityResponse = {
  __typename?: "TopContentEntityResponse";
  data?: Maybe<TopContentEntity>;
};

export type TopContentEntityResponseCollection = {
  __typename?: "TopContentEntityResponseCollection";
  data: Array<TopContentEntity>;
  meta: ResponseCollectionMeta;
};

export type TopContentFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TopContentFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  editorialService?: InputMaybe<EditorialServiceFiltersInput>;
  event?: InputMaybe<EventFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  news?: InputMaybe<NewFiltersInput>;
  not?: InputMaybe<TopContentFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TopContentFiltersInput>>>;
  topContentBlock?: InputMaybe<TopContentBlockFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TopContentInput = {
  editorialService?: InputMaybe<Scalars["ID"]>;
  event?: InputMaybe<Scalars["ID"]>;
  news?: InputMaybe<Scalars["ID"]>;
  topContentBlock?: InputMaybe<Scalars["ID"]>;
};

export type TopContentRelationResponseCollection = {
  __typename?: "TopContentRelationResponseCollection";
  data: Array<TopContentEntity>;
};

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

export type WasteForm = {
  __typename?: "WasteForm";
  createdAt?: Maybe<Scalars["DateTime"]>;
  description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

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
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WasteFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WasteFormFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WasteFormInput = {
  description?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
};

export type WasteFormRelationResponseCollection = {
  __typename?: "WasteFormRelationResponseCollection";
  data: Array<WasteFormEntity>;
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

export type GetNewsPathsQueryVariables = Exact<{ [key: string]: never }>;

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
                    editoContents?: {
                      __typename?: "EditoContentRelationResponseCollection";
                      data: Array<{
                        __typename?: "EditoContentEntity";
                        attributes?: {
                          __typename?: "EditoContent";
                          event?: {
                            __typename?: "EventEntityResponse";
                            data?: {
                              __typename?: "EventEntity";
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
                          news?: {
                            __typename?: "NewEntityResponse";
                            data?: {
                              __typename?: "NewEntity";
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

export type GetNewestTopContentsQueryVariables = Exact<{
  contractId: Scalars["ID"];
}>;

export type GetNewestTopContentsQuery = {
  __typename?: "Query";
  getNewestTopContents?: Array<{
    __typename?: "EventOrNews";
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
                          publishedDate?: any | null;
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
              isActivated: boolean;
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
                    topContent?: {
                      __typename?: "TopContentEntityResponse";
                      data?: {
                        __typename?: "TopContentEntity";
                        attributes?: {
                          __typename?: "TopContent";
                          news?: {
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
                        } | null;
                      } | null;
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
  query getNewsPaths {
    news(filters: { status: { eq: "published" } }) {
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
 *   },
 * });
 */
export function useGetNewsPathsQuery(
  baseOptions?: Apollo.QueryHookOptions<
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
                        data {
                          attributes {
                            event {
                              data {
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
                            news {
                              data {
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
export const GetNewestTopContentsDocument = gql`
  query getNewestTopContents($contractId: ID!) {
    getNewestTopContents(contractId: $contractId) {
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
                            publishedDate
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
                        data {
                          attributes {
                            news {
                              data {
                                id
                                attributes {
                                  title
                                  shortDescription
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
                            event {
                              data {
                                id
                                attributes {
                                  title
                                  shortDescription
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