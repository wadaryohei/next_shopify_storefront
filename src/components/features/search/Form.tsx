import React from 'react';
import { IUseSearch } from 'hooks/useSearch';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  searchHooks: IUseSearch;
};

/**
 * 商品検索フォームを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ searchHooks }: IProps) => {
  return (
    <form action='/search' method='get' className='flex justify-center items-center w-full'>
      <input
        type='text'
        placeholder='検索する'
        name='q'
        autoFocus
        className='flex-1 p-3 w-72 md:w-80'
        value={searchHooks.search}
        onChange={(e) => searchHooks.searchWord(e.target.value)}
      />
      <button className='p-4 w-32 h-full text-xs text-white bg-gray-400'>検索する</button>
    </form>
  );
};

export default Index;
