import Text from 'components/elements/Text';
import { LineItem } from 'shopify-buy';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  lineItem: LineItem;
};

/**
 * カートの金額を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ lineItem }: IProps) => {
  return (
    <Text size='text-sm md:text-lg' align='text-right'>
      ￥{(Number(lineItem.variant.priceV2.amount) * Number(lineItem.quantity)).toLocaleString()}
    </Text>
  );
};

export default Index;
