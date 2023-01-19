import Icon from 'components/elements/Icon';
import { IUseSearch } from 'hooks/useSearch';
import { NextRouter } from 'next/router';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  searchHooks: IUseSearch;
  router: NextRouter;
};

/**
 * navbarのコンテンツを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ searchHooks, router }: Props) => {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <Icon icon='search' onClick={() => searchHooks.searchPanel(searchHooks.panel)} />
      <Icon icon='cart' onClick={() => router.push('/cart')} />
    </div>
  );
};

export default Index;
