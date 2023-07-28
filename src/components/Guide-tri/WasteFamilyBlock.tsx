import React, { useEffect, useRef, useState } from "react";
import WasteFamilyItems from "./WasteFamilyItems/WasteFamilyItems";
import CommonLoader from "../Common/CommonLoader/CommonLoader";
import { useContract } from "../../hooks/useContract";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { removeNulls } from "../../lib/utilities";
import {
  SearchResult,
  useGetContractByIdQuery,
  useGetRecyclingFamiliesFormsQuery,
  WasteFamilyEntity,
  WasteFormEntity,
} from "../../graphql/codegen/generated-types";
import OpenList from "public/images/pictos/open_list.svg";
import CloseList from "public/images/pictos/close_list.svg";
import "./waste-family-block.scss";

interface IWasteFamilyTable {
  id: string;
  familyName: string;
  wasteForms: Array<WasteFormEntity>;
  wasteFamilies: Array<WasteFamilyEntity>;
  filteredChildren: Array<WasteFormEntity>;
  isFamilyPicked: boolean;
}

interface IWasteFamilyBlockProps {
  filteredData: SearchResult[] | null;
}

export default function WasteFamilyBlock({
  filteredData,
}: IWasteFamilyBlockProps) {
  /* Local Data */
  const noResultSearch = "Aucun résultat ne correspond à votre recherche";

  /* External Data */
  const { contractId } = useContract();
  const { currentAudience } = useCurrentUser();
  const [tableData, setTableData] = useState<Array<IWasteFamilyTable>>([]);
  const {
    data: getContractData,
    loading: getContractLoading,
    error: getContractError,
  } = useGetContractByIdQuery({ variables: { contractId } });

  const {
    data: getGuideDuTriData,
    loading: getGuideDuTriLoading,
    error: getGuideDuTriError,
  } = useGetRecyclingFamiliesFormsQuery({
    variables: {
      recyclingGuideServiceId:
        getContractData?.contract?.data?.attributes?.recyclingGuideService?.data
          ?.id,
      audienceId: currentAudience.id,
    },
  });
  const [filteredTableDataCount, setFilteredTableDataCount] =
    useState<number>(0);

  useEffect(
    () => {
      if (getGuideDuTriData && currentAudience.id !== "0") {
        const updatedTableData =
          getGuideDuTriData.recyclingGuideService?.data?.attributes?.wasteFamilies?.data
            .map((item: WasteFamilyEntity) => {
              if (item && item.id && item.attributes) {
                // Filter WasteFamily
                const isFamilyPicked =
                  (filteredData?.length !== 0 &&
                    filteredData &&
                    filteredData?.some(
                      (searchItem) =>
                        searchItem.id === item.id &&
                        searchItem.typeName === "wasteFamily",
                    )) ??
                  false;

                // Filter WasteForm
                const filteredChildren =
                  filteredData?.length === 0 || !filteredData || isFamilyPicked
                    ? item.attributes.wasteForms?.data ?? []
                    : item.attributes.wasteForms?.data?.filter((form) =>
                        filteredData?.some(
                          (searchItem) =>
                            searchItem.id === form.id &&
                            searchItem.typeName === "wasteForm",
                        ),
                      ) ?? [];

                return {
                  id: item.id,
                  familyName: item.attributes.familyName,
                  wasteForms: item.attributes.wasteForms?.data ?? [],
                  wasteFamilies: [],
                  filteredChildren,
                  isFamilyPicked,
                };
              }
            })
            .filter(removeNulls) ?? [];

        const filteredTableData = updatedTableData.filter(
          (data) => data.filteredChildren.length > 0 || data.isFamilyPicked,
        );

        setTableData(filteredTableData);
        setFilteredTableDataCount(filteredTableData.length);
        if (filteredData && filteredData.length !== 0) {
          setIsSearchActive(true);

          setDropdownStates(tableData.map(() => true));
        } else {
          setIsSearchActive(false);
          setDropdownStates(tableData.map(() => false));
        }
      }
    },
    /* eslint-disable */
    [getGuideDuTriData, filteredData, currentAudience],
  );

  /* Static properties */

  // HandleDropdown if search is active
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const shouldUpdateDropdownStates = isSearchActive;
  const [dropdownStates, setDropdownStates] = useState<Array<boolean>>(
    shouldUpdateDropdownStates
      ? tableData.map(() => true)
      : tableData.map(() => false),
  );
  // Handle opening dropdown state
  const handleDropdownClick = (index: number) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  // Ref Family Block
  const containerRef = useRef<HTMLDivElement>(null);
  /* Render */
  return (
    <CommonLoader
      isLoading={getGuideDuTriLoading || getContractLoading}
      hasDelay={false}
      errors={[getGuideDuTriError, getContractError]}
      isFlexGrow={false}
    >
      {filteredTableDataCount === 0 && (
        <div className="c-WasteFamillyBlock__NoResults">{noResultSearch}</div>
      )}
      {tableData &&
        tableData.map((data, index) => (
          <div key={index} className="c-WasteFamillyBlock">
            <div
              className="c-WasteFamillyBlock__Container"
              ref={containerRef}
              onClick={() => handleDropdownClick(index)}
            >
              <div className="c-WasteFamillyBlock__Name">
                <span>{data.familyName}</span>
              </div>
              <div className="c-WasteFamillyBlock__ButtonContainer">
                <button
                  type="button"
                  className={`c-WasteFamillyBlock__Button ${
                    dropdownStates[index] ? "is-open" : ""
                  }`}
                >
                  {dropdownStates[index] ? (
                    <CloseList className="c-WasteFamillyBlock__Icon" />
                  ) : (
                    <OpenList className="c-WasteFamillyBlock__Icon" />
                  )}
                </button>
              </div>
            </div>
            <div
              key={index}
              className={`c-WasteFamillyBlock__Submenu_${
                dropdownStates[index] ? "display" : "none"
              }`}
            >
              {data.filteredChildren.map((wasteForm, index) => {
                if (wasteForm && wasteForm.attributes) {
                  return (
                    <WasteFamilyItems
                      key={index}
                      name={wasteForm.attributes?.name ?? ""}
                      picto={
                        wasteForm.attributes?.picto?.data?.attributes?.url ?? ""
                      }
                      alt={
                        wasteForm.attributes?.picto?.data?.attributes?.name ??
                        ""
                      }
                      href={`/service/guide-tri/${wasteForm.id}`}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        ))}
    </CommonLoader>
  );
}
