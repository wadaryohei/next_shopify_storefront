import gql from 'graphql-tag';

//-------------------------------------------------------------------------------------------------
// collectionByHandle
// @see https://shopify.dev/api/storefront/2022-04/queries/collectionByHandle
//-------------------------------------------------------------------------------------------------
export type ICollectionByHandle = {
  collectionByHandle: {
    id: string;
    title: string;
    handle: string;
    description: string;
    image: {
      url: string;
      altText: string;
    } | null;
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
};

export const collectionByHandle = gql`
  query collectionByHandle($handle: String!, $first: Int!) {
    collectionByHandle(handle: $handle) {
      id
      title
      handle
      description
      image {
        url
        altText
      }
      products(first: $first) {
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
  }
`;
