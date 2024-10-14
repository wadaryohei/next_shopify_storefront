import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { LineItem } from 'shopify-buy';
import { cartAtom, loadingAtom } from 'stores/atoms';
import { ModelCart } from 'models/response';
import ShopifySDKClient from 'services/apis/shopify/clients/storefront/ShopifySDKClient';

//-----------------------------------------------------------
// type
//-----------------------------------------------------------
export type IUseCart = {
  addCart: (variantId: string, quantity: number) => Promise<void>;
  updateCart: (checkoutId: string | null, quantity: number, lineItemId: string) => Promise<void>;
  deleteCart: (checkoutId: string | null, lineItemId: string) => Promise<void>;
  deleteAllCart: (checkoutId: string | null, removeLineItems: string[]) => Promise<void>;
  cart: ModelCart;
  cartLoading: boolean;
};

//-----------------------------------------------------------
// hooks
//-----------------------------------------------------------
export const useCart = (): IUseCart => {
  const [cart, setCart] = useRecoilState(cartAtom);
  const [checkoutId, setCheckoutId] = useState<string | null>('');
  const setLoading = useSetRecoilState(loadingAtom);
  const [cartLoading, setCartLoading] = useState<boolean>(true);

  useEffect(() => {
    void (async () => {
      await fetchCart();
      setCartLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkoutId, cart]);

  //-----------------------------------------------------------
  // 現在のcart情報を取得する
  //-----------------------------------------------------------
  const fetchCart = async () => {
    const checkoutId = localStorage.getItem('checkoutId');
    if (!checkoutId) return [];

    const checkout = await ShopifySDKClient.checkout.fetch(String(checkoutId));
    const lineItems = JSON.parse(JSON.stringify(checkout.lineItems)) as never[] | LineItem[];
    const lineItemCount = checkout.lineItems.reduce(function (x, lineItem: ShopifyBuy.LineItem) {
      return x + lineItem.quantity;
    }, 0);

    setCart({
      lineItems: lineItems,
      lineItemsCount: lineItemCount,
      checkoutId: checkoutId,
      subTotal: checkout.subtotalPriceV2.amount,
      webUrl: checkout.webUrl
    });
  };

  //-----------------------------------------------------------
  // カートに追加する
  //-----------------------------------------------------------
  const addCart = async (variantId: string, quantity: number): Promise<void> => {
    const currentCheckoutId = localStorage.getItem('checkoutId');
    let checkoutId = '';

    if (!currentCheckoutId) {
      const createCheckout = await ShopifySDKClient.checkout.create();
      localStorage.setItem('checkoutId', String(createCheckout.id));
      setCheckoutId(String(createCheckout.id));
      checkoutId = String(createCheckout.id);

      const checkout = await ShopifySDKClient.checkout.addLineItems(checkoutId ?? '', [{ variantId, quantity }]);
      const lineItems = JSON.parse(JSON.stringify(checkout.lineItems)) as never[] | LineItem[];
      const lineItemCount = checkout.lineItems.reduce(function (x, lineItem: ShopifyBuy.LineItem) {
        return x + lineItem.quantity;
      }, 0);

      setCart({
        lineItems: lineItems,
        lineItemsCount: lineItemCount,
        checkoutId: checkoutId,
        subTotal: checkout.subtotalPriceV2.amount,
        webUrl: checkout.webUrl
      });

      return;
    }

    const checkout = await ShopifySDKClient.checkout.addLineItems(currentCheckoutId ?? '', [{ variantId, quantity }]);
    const lineItems = JSON.parse(JSON.stringify(checkout.lineItems)) as never[] | LineItem[];
    const lineItemCount = checkout.lineItems.reduce(function (x, lineItem: ShopifyBuy.LineItem) {
      return x + lineItem.quantity;
    }, 0);

    setCart({
      lineItems: lineItems,
      lineItemsCount: lineItemCount,
      checkoutId: checkoutId,
      subTotal: checkout.subtotalPriceV2.amount,
      webUrl: checkout.webUrl
    });
  };

  //-----------------------------------------------------------
  // カート数量を更新する
  //-----------------------------------------------------------
  const updateCart = async (checkoutId: string | null, quantity: number, lineItemId: string): Promise<void> => {
    try {
      // setLoading(true);

      if (!checkoutId || quantity < 1) return;

      const checkout = await ShopifySDKClient.checkout.updateLineItems(checkoutId ?? '', [{ id: lineItemId, quantity: quantity }]);
      const lineItems = JSON.parse(JSON.stringify(checkout.lineItems)) as never[] | LineItem[];
      const lineItemCount = checkout.lineItems.reduce(function (x, lineItem: ShopifyBuy.LineItem) {
        return x + lineItem.quantity;
      }, 0);

      setCart({
        lineItems: lineItems,
        lineItemsCount: lineItemCount,
        checkoutId: checkoutId,
        subTotal: checkout.subtotalPriceV2.amount,
        webUrl: checkout.webUrl
      });
    } catch (e) {
      alert('数量を変更できませんでした。');
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  //-----------------------------------------------------------
  // カート削除時の処理
  //-----------------------------------------------------------
  const deleteCart = async (checkoutId: string | null, lineItemId: string): Promise<void> => {
    try {
      setLoading(true);

      const checkout = await ShopifySDKClient.checkout.removeLineItems(checkoutId ?? '', [lineItemId]);
      const lineItems = JSON.parse(JSON.stringify(checkout.lineItems)) as never[] | LineItem[];
      const lineItemCount = checkout.lineItems.reduce(function (x, lineItem: ShopifyBuy.LineItem) {
        return x + lineItem.quantity;
      }, 0);

      setCart({
        lineItems: lineItems,
        lineItemsCount: lineItemCount,
        checkoutId: checkoutId,
        subTotal: checkout.subtotalPriceV2.amount,
        webUrl: checkout.webUrl
      });

      // 削除後に0件であればlocalStorageを空にする
      if (lineItemCount === 0) {
        localStorage.removeItem('checkoutId');
      }

      alert('削除しました');
    } catch (e) {
      alert('削除に失敗しました');
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  //-----------------------------------------------------------
  // カート全削除時の処理
  //-----------------------------------------------------------
  const deleteAllCart = async (checkoutId: string | null, removeLineItems: string[]) => {
    try {
      setLoading(true);
      const checkout = await ShopifySDKClient.checkout.removeLineItems(checkoutId ?? '', [...removeLineItems]);
      const lineItems = JSON.parse(JSON.stringify(checkout.lineItems)) as never[] | LineItem[];
      const lineItemCount = checkout.lineItems.reduce(function (x, lineItem: ShopifyBuy.LineItem) {
        return x + lineItem.quantity;
      }, 0);

      setCart({
        lineItems: lineItems,
        lineItemsCount: lineItemCount,
        checkoutId: checkoutId,
        subTotal: checkout.subtotalPriceV2.amount,
        webUrl: checkout.webUrl
      });

      alert('削除しました');
    } catch (e) {
      alert('削除に失敗しました');
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  return {
    addCart,
    updateCart,
    deleteCart,
    deleteAllCart,
    cart,
    cartLoading
  };
};
