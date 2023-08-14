import ArrowBack from "public/images/pictos/arrow-back.svg";
import "./common-arrow-and-title.scss";

interface ICommonArrowAndTitleProps {
  title: string;
  handleBackClick: () => void;
}
export default function CommonArrowAndTitle({
  title,
  handleBackClick,
}: ICommonArrowAndTitleProps) {
  return (
    <div className="c-CommonArrowAndTitle">
      <div
        data-testid="common-arrow-and-title"
        onClick={handleBackClick}
        className="c-CommonArrowAndTitle__ArrowIcon"
      >
        <ArrowBack />
      </div>
      <h4 className="c-CommonArrowAndTitle__Title">{title}</h4>
    </div>
  );
}
