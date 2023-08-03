import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
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

  function handleChange(event: { target: HTMLInputElement } | string) {
    if (typeof event === "string") {
      setDisabled(event.length < minLengthSearch);
      if (event.length < minLengthSearch) {
        onUpdateRecyclingGuideSearchData([]);
      }
    } else {
      setDisabled(event.target.value.length < minLengthSearch);
      if (event.target.value.length < minLengthSearch) {
        onUpdateRecyclingGuideSearchData([]);
      }
    }
  }

  /* Local Data */
  const router = useRouter();
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

  useEffect(() => {
    if (router.query) {
      const searchData: IFormInput = { searchTerm: `${router.query.search}` };
      onSubmit(searchData);
      handleChange(`${router.query.search}`); // Manually call handleChange
    }
  }, [router.query.search]);

  return (
    <section className="c-RecyclingGuideBlock">
      <div className="c-RecyclingGuideBlock__Heading">
        <span className="c-RecyclingGuideBlock__Title">{titleContent}</span>
        <h2
          id="findRecyclingGuideSubtitle"
          className="c-RecyclingGuideBlock__Subtitle"
        >
          {subtitleContent}
        </h2>
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
            defaultValue={router.query.search}
            onChange={handleChange}
            title="Saisir votre recherche"
            aria-labelledby="findRecyclingGuideSubtitle"
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
    </section>
  );
}
