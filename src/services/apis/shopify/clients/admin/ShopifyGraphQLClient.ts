import { GraphQLClient } from 'graphql-request';

//-----------------------------------------------------------------
// class
//-----------------------------------------------------------------
export class ShopifyGraphQLClient {
  public client: GraphQLClient;

  //-----------------------------------------------------------------
  // constructor
  //-----------------------------------------------------------------
  constructor() {
    const endpoint = `${process.env.SHOPIFY_ADMIN_ENDPOINT || ''}/${process.env.SHOPIFY_ADMIN_VERSION || ''}/graphql.json` ?? '';
    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': process.env.SHOPIFY_ADMIN_API ?? ''
    };
    const option = { headers };
    this.client = new GraphQLClient(endpoint, option);
  }
}
