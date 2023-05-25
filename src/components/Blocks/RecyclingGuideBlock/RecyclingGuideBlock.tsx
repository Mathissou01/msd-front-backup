import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  RecyclingGuideBlockEntity,
  SearchResult,
  useGetRecyclingGuideSearchEngineLazyQuery,
} from "../../../graphql/codegen/generated-types";
import { useContract } from "../../../hooks/useContract";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./recycling-guide-block.scss";

interface IRecyclingGuideBlock {
  data: RecyclingGuideBlockEntity;
  onUpdateRecyclingGuideSearchData: (data: (SearchResult | null)[]) => void;
}

interface IFormInput {
  searchTerm: string;
}

export default function RecyclingGuideBlock({
  data,
  onUpdateRecyclingGuideSearchData,
}: IRecyclingGuideBlock) {
  /* Static Data */
  const minLengthSearch = 3;

  /* Methods */
  function onSubmit(search: IFormInput) {
    getRecyclingGuideSearchEngine({
      variables: { contractId: contractId, searchTerm: search.searchTerm },
    });
  }

  function handleChange(event: { target: HTMLInputElement }) {
    setDisabled(event.target.value.length < 3);
    if (event.target.value.length <= 2) {
      onUpdateRecyclingGuideSearchData([]);
    }
  }

  /* Local Data */
  const titleContent = data.attributes?.titleContent;
  const subtitleContent = data.attributes?.subtitleContent;
  const recyclingGuideDisplayContent =
    data.attributes?.recyclingGuideDisplayContent;
  const tags = data.attributes?.tags?.data;
  const { register, handleSubmit } = useForm<IFormInput>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const { contractId } = useContract();
  const [getRecyclingGuideSearchEngine, { data: searchData }] =
    useGetRecyclingGuideSearchEngineLazyQuery();

  //IF NEEDED FOR THE NEXT USE : Result of the query search *
  // const recyclingGuideSearch = searchData?.recyclingGuideSearchEngine;

  useEffect(
    () => {
      if (
        searchData !== undefined &&
        searchData !== null &&
        searchData?.recyclingGuideSearchEngine
      ) {
        onUpdateRecyclingGuideSearchData([
          ...searchData.recyclingGuideSearchEngine,
        ]); // Appel de la fonction de rappel
      }
    },
    /* eslint-disable */
    [searchData],
  );

  return (
    <section className="c-RecyclingGuideBlock">
      <div className="c-RecyclingGuideBlock__Heading">
        <span className="c-RecyclingGuideBlock__Title">{titleContent}</span>
        <h2 className="c-RecyclingGuideBlock__Subtitle">{subtitleContent}</h2>
      </div>
      <div className="c-RecyclingGuideBlock__SearchContainer">
        <form
          className="c-RecyclingGuideBlock__SearchBar"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="c-RecyclingGuideBlock__Input"
            placeholder={recyclingGuideDisplayContent}
            {...register("searchTerm", {
              required: true,
              minLength: minLengthSearch,
            })}
            type="text"
            onChange={handleChange}
          />
          <CommonButton
            label="Rechercher"
            picto="search"
            type="submit"
            style="primary"
            fontStyle="fontLarge"
            paddingStyle="paddingLarge"
            isFullWidth={true}
            isDisabled={disabled}
          />
        </form>
        {tags && (
          <div className="c-RecyclingGuideBlock__Tags">
            {tags.map((tag, index) => {
              if (tag.attributes?.name) {
                return (
                  <button
                    key={index}
                    className="c-RecyclingGuideBlock__Tag"
                    type="button"
                  >
                    {tag.attributes.name}
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>

      {/*IF NEEDED FOR THE NEXT USE : Result of the query search */}
      {/*<ul>*/}
      {/*  {recyclingGuideSearch &&*/}
      {/*    recyclingGuideSearch.map((recyclingGuide) => (*/}
      {/*      <li key={recyclingGuide?.id}>{recyclingGuide?.name}</li>*/}
      {/*    ))}*/}
      {/*</ul>*/}
    </section>
  );
}
