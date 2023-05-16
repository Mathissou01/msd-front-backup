import React, { useEffect, useRef, useState } from "react";
import WasteFamilyItems from "./WasteFamilyItems/WasteFamilyItems";
import CommonLoader from "../Common/CommonLoader/CommonLoader";
import { useContract } from "../../hooks/useContract";
import { removeNulls } from "../../lib/utilities";
import {
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
}

export default function WasteFamilyBlock() {
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

  useEffect(() => {
    if (getGuideDuTriData) {
      setTableData(
        getGuideDuTriData.recyclingGuideService?.data?.attributes?.wasteFamilies?.data
          .map((item: WasteFamilyEntity) => {
            if (item && item.id && item.attributes) {
              return {
                id: item.id,
                familyName: item.attributes.familyName,
                wasteForms: item.attributes.wasteForms?.data ?? [],
              };
            }
          })
          .filter(removeNulls) ?? [],
      );
    }
  }, [getGuideDuTriData]);
  /* Static properties */
  const [dropdownStates, setDropdownStates] = useState<Array<boolean>>(
    tableData.map(() => false),
  );

  const handleDropdownClick = (index: number) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
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
              {data.wasteForms.map((wasteForm, index) => {
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
