import React from "react";
import ArticleCard from "./article-card";
import { ImageDataLike } from "gatsby-plugin-image";

type ComponentType = {
  articles: Array<{
    id: number;
    slug: string;
    title: string;
    description: string;
    cover: {
      localFile: ImageDataLike;
      alternativeText: string;
    };
  }>;
};

const ArticlesGrid: React.FunctionComponent<ComponentType> = ({ articles }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id as number} />
      ))}
    </div>
  );
};

export default ArticlesGrid;
