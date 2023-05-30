import { useRouter } from "next/router";
import MyDevelopementHomePage from "public/images/my_developement_homepage.svg";
import MyWasteHomepage from "public/images/my_waste_homepage.svg";
import "./myHouseDataComponent.scss";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import { ReactNode } from "react";

const MyHouseDataComponent = ({
  isFirstBlock,
  title,
  text,
  path,
  logoOrWeight,
}: {
  isFirstBlock: boolean;
  title: string;
  text: string;
  path: string;
  logoOrWeight: ReactNode | null;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <>
      <div className="c-MyHouseData__Item">
        <a
          href={path}
          className="c-MyHouseData__LinkWrapper"
          onClick={handleClick}
        ></a>
        <div className="c-MyHouseData__Img">
          {isFirstBlock ? <MyWasteHomepage /> : <MyDevelopementHomePage />}
        </div>
        <p className="c-MyHouseData__Title">{title}</p>
        <div className="c-MyHouseData__Data">{logoOrWeight}</div>
        <p className="c-MyHouseData__Desc">{text}</p>
        <CommonButton
          type="button"
          style="secondary"
          label="Voir le détail"
          onClick={() => handleClick}
        />
      </div>
    </>
  );
};

export default MyHouseDataComponent;
