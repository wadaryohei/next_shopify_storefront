import Link from 'next/link';
import Image from 'components/atoms/Image';
import { LineItem } from 'shopify-buy';
import Text from 'components/atoms/Text';
import QuantityButton from 'components/features/button/QuantityButton';
import DeleteButton from 'components/features/button/DeleteButton';
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
      <div className={'pt-10 w-4/6 text-left md:w-4/6'}>
        <div className={'flex'}>
          <div>
            <Link href={`/product/${lineItem.variant.product.handle}`}>
              <a>
                <Image src={lineItem.variant.image.src} width={100} height={100} alt={''} />
              </a>
            </Link>
          </div>
          <div className={'mx-2'}>
            <Link href={`/product/${lineItem.variant.product.handle}`}>
              <a>
                <Text h4 b size={'text-xs md:text-lg'}>
                  {lineItem.title}
                </Text>
              </a>
            </Link>
            <div className={'block mt-2 md:hidden'}>
              <QuantityButton
                cartHooks={cartHooks}
                quantity={lineItem.quantity}
                quantityAvailable={10}
                checkoutId={cartHooks.cart.checkoutId}
                lineItemId={lineItem.id}
              />
            </div>
            <DeleteButton text={'削除'} onClick={() => cartHooks.deleteCart(String(cartHooks.cart.checkoutId), String(lineItem.id))} />
          </div>
        </div>
      </div>

      <div className={'hidden w-1/6 text-right md:block'}>
        <QuantityButton
          cartHooks={cartHooks}
          quantity={lineItem.quantity}
          quantityAvailable={10}
          checkoutId={cartHooks.cart.checkoutId}
          lineItemId={lineItem.id}
        />
      </div>

      <div className={'w-2/6 font-normal text-right md:w-1/6'}>
        <Text size={'text-sm md:text-lg'} align={'text-right'}>
          ￥{(Number(lineItem.variant.price) * Number(lineItem.quantity)).toLocaleString()}
        </Text>
      </div>
    </>
  );
};

export default Index;
