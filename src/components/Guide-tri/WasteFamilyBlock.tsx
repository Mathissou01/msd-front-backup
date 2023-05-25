import React, { useEffect, useRef, useState } from "react";
import WasteFamilyItems from "./WasteFamilyItems/WasteFamilyItems";
import CommonLoader from "../Common/CommonLoader/CommonLoader";
import { useContract } from "../../hooks/useContract";
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
  filteredFamily: Array<WasteFamilyEntity>;
}

interface IWasteFamilyBlockProps {
  filteredData: SearchResult[] | null;
}

export default function WasteFamilyBlock({
  filteredData,
}: IWasteFamilyBlockProps) {
  /* External Data */
  const { contractId } = useContract();
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
    },
  });

  useEffect(
    () => {
      if (getGuideDuTriData) {
        const updatedTableData =
          getGuideDuTriData.recyclingGuideService?.data?.attributes?.wasteFamilies?.data
            .map((item: WasteFamilyEntity) => {
              if (item && item.id && item.attributes) {
                // Filter WasteForm
                const filteredChildren =
                  filteredData?.length === 0 || !filteredData
                    ? item.attributes.wasteForms?.data ?? []
                    : item.attributes.wasteForms?.data?.filter((form) =>
                        filteredData?.some(
                          (searchItem) =>
                            searchItem.id === form.id &&
                            searchItem.typeName === "wasteForm",
                        ),
                      ) ?? [];

                // Filter WasteFamily
                const filteredFamily =
                  filteredData?.length === 0 || !filteredData
                    ? Array.isArray(item.attributes.familyName)
                      ? item.attributes.familyName
                      : []
                    : (Array.isArray(item.attributes.familyName)
                        ? item.attributes.familyName
                        : []
                      ).filter((family) =>
                        filteredData?.some(
                          (searchItem) => searchItem.wasteFamilyName === family,
                        ),
                      ) ?? [];

                return {
                  id: item.id,
                  familyName: item.attributes.familyName,
                  wasteForms: item.attributes.wasteForms?.data ?? [],
                  wasteFamilies: [],
                  filteredChildren,
                  filteredFamily,
                };
              }
            })
            .filter(removeNulls) ?? [];

        const filteredTableData = updatedTableData.filter(
          (data) => data.filteredChildren.length > 0,
        );

        setTableData(filteredTableData);

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
    [getGuideDuTriData, filteredData],
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
