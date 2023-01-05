import gql from 'graphql-tag';

//-------------------------------------------------------------------------------------------------
// product
// @see https://shopify.dev/api/admin-graphql/2022-04/queries/product
//-------------------------------------------------------------------------------------------------
export type IProduct = {
  product: {
    id: string;
    handle: string;
    title: string;
    description: string;
    descriptionHtml: string;
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
};

export const product = gql`
  query product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
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
`;
