import Tag from 'components/elements/Tag';
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
            <Tag handle={edge.node.handle} />
          </div>
        );
      })}
    </div>
  );
};

export default Index;
