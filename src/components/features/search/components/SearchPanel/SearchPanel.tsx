import React from 'react';
import * as Search from 'components/features/search/components/Index';
import { IUseSearch } from 'hooks/useSearch';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  searchHooks: IUseSearch;
};

/**
 * 商品検索パネルを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ searchHooks }: IProps) => {
  return (
    <Search.SearchPanelBack searchHooks={searchHooks}>
      <div className='flex flex-col items-center w-full'>
        <Search.SearchForm searchHooks={searchHooks} />
        <Search.SearchFormClose text='閉じる' searchHooks={searchHooks} />
      </div>
    </Search.SearchPanelBack>
  );
};

export default Index;
