import React from "react";
import { graphql } from "gatsby";
import BlockRichText from "./block-rich-text";
import BlockMedia from "./block-media";
import BlockQuote from "./block-quote";
import BlockSlider from "./block-slider";

const componentsMap = {
  STRAPI__COMPONENT_SHARED_RICH_TEXT: BlockRichText,
  STRAPI__COMPONENT_SHARED_MEDIA: BlockMedia,
  STRAPI__COMPONENT_SHARED_QUOTE: BlockQuote,
  STRAPI__COMPONENT_SHARED_SLIDER: BlockSlider,
};

type BlockType = {
  __typename: keyof typeof componentsMap;
};

type BlockComponentType = {
  block: BlockType;
};

type BlocksRendererComponentType = {
  blocks: Array<BlockType>;
};

const Block: React.FunctionComponent<BlockComponentType> = ({ block }) => {
  const Component = componentsMap[block.__typename];

  if (!Component) {
    return null;
  }

  return <Component data={block as any} />; // eslint-disable-line
};

const BlocksRenderer: React.FunctionComponent<BlocksRendererComponentType> = ({
  blocks,
}) => {
  return (
    <div>
      {blocks.map((block: BlockType, index: number) => (
        <Block key={`${index}${block.__typename}`} block={block} />
      ))}
    </div>
  );
};

export const query = graphql`
  fragment Blocks on STRAPI__COMPONENT_SHARED_MEDIASTRAPI__COMPONENT_SHARED_QUOTESTRAPI__COMPONENT_SHARED_RICH_TEXTSTRAPI__COMPONENT_SHARED_SLIDERUnion {
    __typename
    ... on STRAPI__COMPONENT_SHARED_RICH_TEXT {
      richTextBody: body {
        __typename
        data {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_MEDIA {
      file {
        mime
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    ... on STRAPI__COMPONENT_SHARED_QUOTE {
      title
      quoteBody: body
    }
    ... on STRAPI__COMPONENT_SHARED_SLIDER {
      files {
        id
        mime
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlocksRenderer;
