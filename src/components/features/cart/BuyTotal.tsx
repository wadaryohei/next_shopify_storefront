import Text from 'components/atoms/Text';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  itemCount: number;
  subTotal: string | undefined;
};

/**
 * カートの合計を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ itemCount, subTotal }: Props) => {
  return (
    <>
      <Text size={'text-base'} align={'text-right'}>
        数量: <span className={'ml-2'}>{itemCount}</span>
      </Text>
      <Text size={'text-base'} align={'text-right'}>
        小計: <span className={'ml-2'}>￥{Number(subTotal).toLocaleString()}(税込)</span>
      </Text>
      <div className={'mt-4'}>
        <Text size={'text-sm'} align={'text-right'}>
          ※送料は次のチェックアウト画面にて確認できます
        </Text>
      </div>
    </>
  );
};

export default Index;
