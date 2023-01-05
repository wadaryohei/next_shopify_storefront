import { LineItem } from 'shopify-buy';

//-----------------------------------------------------------
// - Model
// カートデータのレスポンス
//-----------------------------------------------------------
export type ModelCart = {
  lineItems: never[] | LineItem[];
  lineItemsCount: number;
  checkoutId: string | number | null;
  subTotal: string | undefined;
  webUrl: string;
};
