import gql from 'graphql-tag';

//-------------------------------------------------------------------------------------------------
// collections
// @see https://shopify.dev/api/storefront/2022-04/queries/collections
//-------------------------------------------------------------------------------------------------
export type ICollections = {
  collections: {
    edges: {
      node: {
        id: string;
        title: string;
        handle: string;
        metafield: {
          value: string;
        };
        image: {
          id: string;
          width: string;
          height: string;
          url: string;
          altText: string;
        };
        updatedAt: string;
      };
    }[];
  };
};

export const collections = gql`
  query collections($key: String!) {
    collections(first: 100) {
      edges {
        node {
          id
          handle
          title
          metafield(namespace: "my_fields", key: $key) {
            value
          }
          image {
            id
            width
            height
            url
            altText
          }
          updatedAt
        }
      }
    }
  }
`;
