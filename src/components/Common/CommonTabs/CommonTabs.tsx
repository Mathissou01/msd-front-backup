import React, { ChangeEvent, useEffect, useState } from "react";
import ArrowBold from "public/images/pictos/arrow_bold.svg";
import classNames from "classnames";
import "./common-tabs.scss";

interface CommonTabsProps {
  tabData: {
    title: string;
    content: JSX.Element;
    isActive: boolean;
  }[];
  initialTab?: number;
  align?: "left" | "center" | "right";
  changeTab?: number;
}

const CommonTabs: React.FC<CommonTabsProps> = ({
  tabData,
  initialTab = 0,
  align = "left",
  changeTab,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const tabIndex = parseInt(event.target.value, 10);
    setActiveTab(tabIndex);
  };

  const renderContent = () => {
    if (tabData[activeTab]) {
      return tabData[activeTab].content;
    }
    return null;
  };

  const tabsClass = classNames("c-CommonTabs__Tabs", {
    "c-CommonTabs__Tabs_left": align === "left",
    "c-CommonTabs__Tabs_center": align === "center",
    "c-CommonTabs__Tabs_right": align === "right",
  });

  useEffect(() => {
    if (changeTab) {
      setActiveTab(changeTab);
    }
  }, [changeTab]);

  return (
    <div className="c-CommonTabs">
      <div className={tabsClass}>
        {tabData.map(
          (tab, index) =>
            tab.isActive && (
              <div
                key={index}
                className={`c-CommonTabs__Tab ${
                  activeTab === index ? "c-CommonTabs__ActiveTab" : ""
                }`}
                tabIndex={0}
                onClick={() => handleTabClick(index)}
              >
                <span>{tab.title}</span>
              </div>
            ),
        )}
      </div>
      <div className="c-CommonTabs__SelectContainer">
        <select
          value={activeTab}
          onChange={handleSelectChange}
          className="c-CommonTabs__Select"
        >
          {tabData.map(
            (tab, index) =>
              tab.isActive && (
                <option key={index} value={index}>
                  {tab.title}
                </option>
              ),
          )}
        </select>
        <ArrowBold className="c-CommonTabs__CustomArrow" />
      </div>
      <div className="c-CommonTabs__Content">{renderContent()}</div>
    </div>
  );
};

export default CommonTabs;
