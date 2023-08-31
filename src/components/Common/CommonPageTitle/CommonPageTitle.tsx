import "./common-page-title.scss";

interface CommonPageTitleProps {
  title: string;
  description?: string;
}

const CommonPageTitle: React.FC<CommonPageTitleProps> = ({
  title,
  description,
}) => {
  return (
    <hgroup className="c-PageTitle">
      <h1 className="c-PageTitle__Title" data-testid="title">
        {title}
      </h1>
      {description && (
        <p className="c-PageTitle__Description" data-testid="description">
          {description}
        </p>
      )}
    </hgroup>
  );
};

export default CommonPageTitle;
