import React from 'react';
import Form from 'components/features/search/Form';
import * as Search from 'components/features/search/Index';
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
    <Search.Back searchHooks={searchHooks}>
      <div className='flex flex-col items-center w-full'>
        <Form searchHooks={searchHooks} />
        <Search.Close text='閉じる' searchHooks={searchHooks} />
      </div>
    </Search.Back>
  );
};

export default Index;
