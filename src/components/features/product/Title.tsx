import Text from 'components/atoms/Text';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  title: string;
};

/**
 * 商品詳細をタイトルを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ title }: IProps) => {
  return (
    <Text h2 b size='text-3xl' color='text-gray-600'>
      {title}
    </Text>
  );
};

export default Index;
