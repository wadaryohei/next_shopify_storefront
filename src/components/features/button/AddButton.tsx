import Button from 'components/atoms/Button';
import { IUseCart } from 'hooks/useCart';
import { IUseDisabled } from 'hooks/useDisabled';
import { SetterOrUpdater } from 'recoil';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  variantId: string;
  quantity: number;
  cartHooks: IUseCart;
  disabledHooks: IUseDisabled;
  setLoading: SetterOrUpdater<boolean>;
};

/**
 * 商品詳細の詳細コンテンツを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ variantId, quantity, cartHooks, disabledHooks, setLoading }: Props) => {
  //-----------------------------------------------------------
  // カートに追加するハンドラー
  //-----------------------------------------------------------
  const onAddCartHandler = async (variantId: string, quantity: number) => {
    try {
      disabledHooks.diabledStart();
      setLoading(true);
      await cartHooks.addCart(variantId, quantity);
      alert('カートに追加しました');
      setLoading(false);
      disabledHooks.diabledEnd();
    } catch (e) {
      alert('カートに追加できませんでした');
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        text={'カートに追加'}
        isDisabled={disabledHooks.disabled}
        onClick={async () => {
          await onAddCartHandler(variantId, quantity);
        }}
      />
    </>
  );
};

export default Index;
