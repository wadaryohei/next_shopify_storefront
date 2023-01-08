import Link from 'next/link';
import Text from 'components/atoms/Text';
import Image from 'components/atoms/Image';
import { ICollections } from 'services/apis/shopify/queries';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  collections: ICollections;
};

/**
 * collectionの一覧を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ collections }: Props) => {
  return (
    <>
      {collections.collections.edges.map((edge, index) => {
        return (
          <div key={index}>
            <Link href={`/collection/${edge.node.handle}`}>
              <a>
                <Image src={edge.node.image.url} alt={edge.node.image.altText} />
                <Text size={'text-sm'} align={'text-center'}>
                  {edge.node.handle}
                </Text>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Index;
