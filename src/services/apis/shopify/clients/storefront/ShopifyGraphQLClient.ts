import { GraphQLClient } from 'graphql-request';
import { collectionByHandle, collections, product, products } from 'services/apis/shopify/queries';

//-----------------------------------------------------------------
// class
//-----------------------------------------------------------------
export class ShopifyGraphQLClient {
  public client: GraphQLClient;

  //-----------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------
  constructor() {
    const endpoint = `${process.env.SHOPIFY_STOREFRONT_ENDPOINT || ''}/${process.env.SHOPIFY_STOREFRONT_VERSION || ''}/graphql.json` ?? '';
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_API ?? ''
    };
    const option = { headers };
    this.client = new GraphQLClient(endpoint, option);
  }

  //-----------------------------------------------------------------
  // collectionsを取得する
  //-----------------------------------------------------------------
  collections = async <T>(variables: { key: string }) => {
    const res = await this.client.request<T>(collections, variables);
    return res;
  };

  //-----------------------------------------------------------------
  // collectionのproductsを全件取得する
  //-----------------------------------------------------------------
  collectionByHandle = async <T>(variables: { handle: string; value: string }) => {
    const res = await this.client.request<T>(collectionByHandle, variables);
    return res;
  };

  //-----------------------------------------------------------------
  // productsを取得する
  //-----------------------------------------------------------------
  products = async <T>(variables: { first: number }) => {
    const res = await this.client.request<T>(products, variables);
    return res;
  };

  //-----------------------------------------------------------------
  // productを取得する
  //-----------------------------------------------------------------
  product = async <T>(variables: { handle: string }) => {
    const res = await this.client.request<T>(product, variables);
    return res;
  };
}
