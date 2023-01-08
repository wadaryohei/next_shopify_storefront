import Text from 'components/atoms/Text';
import Link from 'next/link';
import { LineItem } from 'shopify-buy';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  lineItem: LineItem;
};

/**
 * カートのタイトルを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ lineItem }: IProps) => {
  return (
    <Link href={`/product/${lineItem.variant.product.handle}`}>
      <a>
        <Text h4 b size='text-xs md:text-lg'>
          {lineItem.title}
        </Text>
      </a>
    </Link>
  );
};

export default Index;
