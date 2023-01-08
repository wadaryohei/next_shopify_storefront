import { LineItem } from 'shopify-buy';
import * as Cart from 'components/features/cart/Index';
import { IUseCart } from 'hooks/useCart';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  lineItem: LineItem;
  cartHooks: IUseCart;
};

/**
 * カートの商品一覧行を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ lineItem, cartHooks }: Props) => {
  return (
    <>
      <div className='pt-10 w-4/6 text-left md:w-4/6'>
        <div className='flex'>
          <div>
            <Cart.Image lineItem={lineItem} />
          </div>
          <div className='mx-2'>
            <Cart.Title lineItem={lineItem} />
            <div className='block mt-2 md:hidden'>
              <Cart.QuantityButton
                cartHooks={cartHooks}
                quantity={lineItem.quantity}
                quantityAvailable={10}
                checkoutId={cartHooks.cart.checkoutId}
                lineItemId={lineItem.id}
              />
            </div>
            <Cart.DeleteButton text='削除' onClick={() => cartHooks.deleteCart(String(cartHooks.cart.checkoutId), String(lineItem.id))} />
          </div>
        </div>
      </div>

      <div className='hidden w-1/6 text-right md:block'>
        <Cart.QuantityButton
          cartHooks={cartHooks}
          quantity={lineItem.quantity}
          quantityAvailable={10}
          checkoutId={cartHooks.cart.checkoutId}
          lineItemId={lineItem.id}
        />
      </div>

      <div className='w-2/6 font-normal text-right md:w-1/6'>
        <Cart.Price lineItem={lineItem} />
      </div>
    </>
  );
};

export default Index;
