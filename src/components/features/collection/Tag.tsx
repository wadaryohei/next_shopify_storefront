import Link from 'next/link';
import Text from 'components/atoms/Text';
import { ICollections } from 'services/apis/shopify/queries';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  collections: ICollections;
};

/**
 * collectionの一覧をタグで描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ collections }: Props) => {
  return (
    <div className='flex gap-2 justify-start items-center'>
      {collections.collections.edges.map((edge, index) => {
        return (
          <div key={index}>
            <Link href={`/collection/${edge.node.handle}`}>
              <a className='block py-1 px-4 rounded-full border'>
                <Text size={'text-sm'} color={'text-gray-400'} align={'text-left'}>
                  {edge.node.handle}
                </Text>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
