import Client from 'shopify-buy';

const ShopifySDKClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? '',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API ?? ''
});

export default ShopifySDKClient;
