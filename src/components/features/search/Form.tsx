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
    <form action='/search' method='get' className='flex justify-center items-center px-8 w-full md:px-8'>
      <label className='relative w-full'>
        <div className='flex absolute top-1/2 left-2 justify-center items-center -translate-y-1/2'>
          <img src='icon/search.svg' alt='search' />
        </div>
        <input
          type='text'
          placeholder='検索する'
          name='q'
          autoFocus
          className='py-5 pr-2 pl-10 w-full'
          value={searchHooks.search}
          onChange={(e) => searchHooks.searchWord(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Index;
