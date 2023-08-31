import { useRouter } from "next/router";
import MyDevelopementHomePage from "public/images/my_developement_homepage.svg";
import MyWasteHomepage from "public/images/my_waste_homepage.svg";
import "./myHomeDataComponent.scss";
import CommonButton from "../../../../Common/CommonButton/CommonButton";
import { ReactNode } from "react";

const MyHomeDataComponent = ({
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
      <div className="c-MyHomeData__Item">
        <a
          href={path}
          className="c-MyHomeData__LinkWrapper"
          onClick={handleClick}
        ></a>
        <div className="c-MyHomeData__Img">
          {isFirstBlock ? <MyWasteHomepage /> : <MyDevelopementHomePage />}
        </div>
        <p className="c-MyHomeData__Title">{title}</p>
        <div className="c-MyHomeData__Data">{logoOrWeight}</div>
        <p className="c-MyHomeData__Desc">{text}</p>
        <CommonButton
          type="button"
          style="secondary"
          label="Voir le détail"
          onClick={() => handleClick()}
        />
      </div>
    </>
  );
};

export default MyHomeDataComponent;
