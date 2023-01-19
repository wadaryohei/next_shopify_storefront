import Text from 'components/elements/Text';
import { IProduct } from 'services/apis/shopify/queries';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  product: IProduct;
};

/**
 * 商品詳細の金額を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ product }: IProps) => {
  return (
    <>
      {product.product.variants.edges.map((edge, i) => {
        return (
          <Text key={i} b size='text-3xl' color='text-red-500' align='text-right'>
            ￥{Number(edge.node.priceV2.amount).toLocaleString()}
          </Text>
        );
      })}
    </>
  );
};

export default Index;
