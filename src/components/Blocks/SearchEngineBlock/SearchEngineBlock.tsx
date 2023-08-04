import React, { useEffect, useState } from "react";
import CommonButton from "../../Common/CommonButton/CommonButton";
import "./search-engine-block.scss";

interface ISearchEngineBlock {
  searchTerm: string;
  title?: string;
  subtitle?: string;
  placeholder?: string;
  minLengthSearch?: number;
  onSearchTermChange: (searchTerm: string) => void;
  onSearchSubmit: () => void;
}

export default function SearchEngineBlock({
  searchTerm,
  title,
  subtitle,
  placeholder,
  minLengthSearch = 3,
  onSearchTermChange,
  onSearchSubmit,
}: ISearchEngineBlock) {
  const [isDisabled, setIsDisabled] = useState(true);

  const labels = {
    buttonLabel: "Rechercher",
  };

  useEffect(() => {
    setIsDisabled(searchTerm.length < minLengthSearch);
  }, [searchTerm, minLengthSearch]);

  return (
    <section className="c-SearchEngineBlock">
      {title !== "" || subtitle !== "" ? (
        <div className="c-SearchEngineBlock__Heading">
          {title !== "" ? (
            <span className="c-SearchEngineBlock__Title">{title}</span>
          ) : null}
          {subtitle !== "" ? (
            <h2 className="c-SearchEngineBlock__Subtitle">{subtitle}</h2>
          ) : null}
        </div>
      ) : null}

      <div className="c-SearchEngineBlock__SearchContainer">
        <div className="c-SearchEngineBlock__SearchBar">
          <input
            className="c-SearchEngineBlock__Input"
            placeholder={placeholder}
            type="text"
            onChange={(e) => onSearchTermChange(e.target.value)}
            aria-label="Rechercher un déchet"
          />
          <CommonButton
            label={labels.buttonLabel}
            picto="search"
            type="button"
            style="primary"
            fontStyle="fontLarge"
            paddingStyle="paddingLarge"
            isFullWidth={true}
            isDisabled={isDisabled}
            onClick={onSearchSubmit}
          />
        </div>
      </div>
    </section>
  );
}
