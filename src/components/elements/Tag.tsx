import Link from 'next/link';
import Text from 'components/elements/Text';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  handle: string;
};

/**
 * タグで描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ handle }: Props) => {
  return (
    <Link href={`/collection/${handle}`}>
      <a className='block py-1 px-4 rounded-full border'>
        <Text size={'text-sm'} color={'text-gray-400'} align={'text-left'}>
          {handle}
        </Text>
      </a>
    </Link>
  );
};

export default Index;
