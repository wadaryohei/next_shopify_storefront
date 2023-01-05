import 'shopify-buy';

declare module 'shopify-buy' {
  export interface Product {
    handle: string;
  }

  export interface ProductVariant {
    product: Product;
    selectedOptions: SelectedOption[];
    weight: number;
  }

  export interface SelectedOption {
    name: string;
    value: string;
  }

  export interface Cart {
    webUrl: string;
    orderStatusUrl: string | null;
  }

  export interface CheckoutResource {
    updateAttributes(checkoutId: string | number, customAttributes: CheckoutUpdateAttributesInput): Promise<Cart>;
  }

  export interface CheckoutUpdateAttributesInput {
    allowPartialAddresses?: boolean;
    customAttributes?: CheckoutAttributeInput[];
    note?: string;
  }

  export interface CheckoutAttributeInput {
    key: string;
    value: string;
  }

  export interface LineItem {
    handle: string;
    variant: ProductVariant;
    weight: number;
  }
}
