import React from "react";

type ComponentType = {
  data: { richTextBody: { data: { childMarkdownRemark: { html: string } } } };
};

const BlockRichText: React.FunctionComponent<ComponentType> = ({ data }) => {
  return (
    <div className="prose mx-auto py-8">
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
    </div>
  );
};

export default BlockRichText;
