import Button from 'components/elements/Button';
import { IUseCart } from 'hooks/useCart';
import { IUseDisabled } from 'hooks/useDisabled';
import { SetterOrUpdater } from 'recoil';
import { IProduct } from 'services/apis/shopify/queries';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  product: IProduct;
  quantity: number;
  cartHooks: IUseCart;
  disabledHooks: IUseDisabled;
  setLoading: SetterOrUpdater<boolean>;
};

/**
 * 商品詳細のカート追加ボタンを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ product, quantity, cartHooks, disabledHooks, setLoading }: Props) => {
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
      {product.product.variants.edges.map((edge, index) => {
        return (
          <Button
            key={index}
            text='カートに追加'
            isDisabled={disabledHooks.disabled}
            onClick={async () => {
              await onAddCartHandler(edge.node.id, quantity);
            }}
          />
        );
      })}
    </>
  );
};

export default Index;
