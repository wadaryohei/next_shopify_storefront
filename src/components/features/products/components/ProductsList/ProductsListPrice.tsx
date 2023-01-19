import Text from 'components/elements/Text';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  product: {
    edges: {
      node: {
        id: string;
        sku: string;
        priceV2: {
          amount: string;
        };
        quantityAvailable: number;
        image: {
          url: string;
        };
      };
    }[];
  };
};

/**
 * 商品一覧の金額を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ product }: IProps) => {
  return (
    <>
      {product.edges.map((edge, i) => {
        return (
          <Text key={i} b color='text-red-600'>
            ￥{Number(edge.node.priceV2.amount).toLocaleString()}
          </Text>
        );
      })}
    </>
  );
};

export default Index;
