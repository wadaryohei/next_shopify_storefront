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
          variantBySelectedOptions: {
            product: {
              id: string;
              handle: string;
              title: string;
            };
            id: string;
            weight: number;
            image: {
              id: string;
              url: string;
              width: number;
              height: number;
              altText: string | null;
            };
            priceV2: {
              amount: string;
            };
            compareAtPriceV2: {
              amount: string;
            };
            quantityAvailable: number;
          };
        };
      }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
  };
};

export const collectionByHandle = gql`
  query collectionByHandle($handle: String!, $value: String!) {
    collectionByHandle(handle: $handle) {
      id
      title
      handle
      description
      image {
        url
        altText
      }
      products(first: 100) {
        edges {
          node {
            variantBySelectedOptions(selectedOptions: { name: "days", value: $value }) {
              id
              title
              weight
              product {
                id
                handle
                title
              }
              image {
                id
                url
                width
                height
                altText
              }
              priceV2 {
                amount
              }
              compareAtPriceV2 {
                amount
              }
              quantityAvailable
            }
          }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;
