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
    <form action='/search' method='get' className='flex justify-center items-center px-4 w-full md:px-8'>
      <label className='relative w-full'>
        <div className='flex absolute top-1/2 left-2 justify-center items-center -translate-y-1/2'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 25 32' width='24' height='24' role='img' aria-hidden='true' aria-label='検索アイコン'>
            <path d='m16.194 21.931 1.958-2.022 6.914 6.695-1.958 2.022-6.914-6.695z'></path>
            <path d='M10.754 24.88C4.824 24.88 0 20.056 0 14.126S4.825 3.373 10.754 3.373s10.754 4.824 10.754 10.753S16.684 24.88 10.754 24.88zm0-18.692c-4.378 0-7.939 3.561-7.939 7.939s3.561 7.939 7.939 7.939 7.939-3.561 7.939-7.939-3.561-7.939-7.939-7.939z'></path>
          </svg>
        </div>
        <input
          type='text'
          placeholder='商品を検索する'
          name='q'
          autoFocus
          className='py-4 pr-2 pl-10 w-full rounded-none appearance-none'
          value={searchHooks.search}
          onChange={(e) => searchHooks.searchWord(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Index;
