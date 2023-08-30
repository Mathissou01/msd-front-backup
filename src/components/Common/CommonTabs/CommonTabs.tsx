import React, { ChangeEvent, useEffect, useState } from "react";
import ArrowBold from "public/images/pictos/arrow_bold.svg";
import "./common-tabs.scss";
import classNames from "classnames";
import { useRouter } from "next/router";

interface CommonTabsProps {
  tabData: {
    title: string;
    content: JSX.Element;
    isActive: boolean;
  }[];
  initialTab?: number;
  align?: "left" | "center" | "right";
}

const CommonTabs: React.FC<CommonTabsProps> = ({
  tabData,
  initialTab = 0,
  align = "left",
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tabFromUrl = tabData.findIndex(
      (tab) =>
        tab.title.split(" ").join("-").toLowerCase() === router.query.tab,
    );
    if (tabFromUrl !== -1) {
      setActiveTab(tabFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.tab]);

  const handleTabClick = (tabIndex: number) => {
    if (activeTab !== tabIndex) {
      setActiveTab(tabIndex);
      const newTabTitle = tabData[tabIndex].title
        .split(" ")
        .join("-")
        .toLowerCase();
      const newUrl = `?tab=${newTabTitle}`;
      if (router.query.tab !== newTabTitle) {
        router.push(newUrl);
      }
    }
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const tabIndex = parseInt(event.target.value, 10);
    if (activeTab !== tabIndex) {
      setActiveTab(tabIndex);
      const newTabTitle = tabData[tabIndex].title
        .split(" ")
        .join("-")
        .toLowerCase();
      const newUrl = `?tab=${newTabTitle}`;
      if (router.query.tab !== newTabTitle) {
        router.push(newUrl);
      }
    }
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
