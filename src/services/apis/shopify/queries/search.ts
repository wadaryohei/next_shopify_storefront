import gql from 'graphql-tag';

//-------------------------------------------------------------------------------------------------
// products
// @see https://shopify.dev/api/admin-graphql/2022-04/queries/products
//-------------------------------------------------------------------------------------------------
export type ISearch = {
  products: {
    edges: {
      node: {
        handle: string;
        title: string;
        updatedAt: string;
        priceRangeV2: number;
        totalInventory: number;
        variants: {
          edges: {
            node: {
              id: string;
              sku: string;
              priceV2: {
                amount: string;
              };
              quantityAvailable: number;
              image: {
                url: string;
              };
            };
          }[];
        };
      };
    }[];
  };
};

export const search = gql`
  query products($first: Int!, $query: String!) {
    products(first: $first, query: $query) {
      edges {
        node {
          handle
          title
          updatedAt
          totalInventory
          variants(first: 1) {
            edges {
              node {
                id
                sku
                priceV2 {
                  amount
                }
                quantityAvailable
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
