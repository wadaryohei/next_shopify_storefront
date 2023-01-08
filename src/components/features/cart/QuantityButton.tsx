import { IUseCart } from 'hooks/useCart';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  cartHooks: IUseCart;
  quantity: number;
  quantityAvailable: number;
  checkoutId: string | number | null;
  lineItemId: string | number;
};

/**
 * カートの数量変更ボタンを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ cartHooks, quantity, quantityAvailable, checkoutId, lineItemId }: Props) => {
  return (
    <div className='relative'>
      <select
        className='relative rounded-sm border'
        style={{
          width: '64px',
          padding: '8px 10px',
          appearance: 'none',
          backgroundImage: 'url(/icon/arrow.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20px 20px',
          backgroundPosition: '100% 50%'
        }}
        value={quantity}
        onChange={async (e) => {
          await cartHooks.updateCart(String(checkoutId), Number(e.target.value), String(lineItemId));
        }}
      >
        {new Array(quantityAvailable).fill(quantityAvailable).map((_: number, index: number) => {
          return (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Index;
