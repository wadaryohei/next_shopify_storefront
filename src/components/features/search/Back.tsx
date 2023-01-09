import { IUseSearch } from 'hooks/useSearch';
import React, { ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  children: ReactNode;
  searchHooks: IUseSearch;
};

/**
 * 商品検索パネルのバックを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children, searchHooks }: IProps) => {
  return (
    <div
      className={`
      flex justify-center items-center py-4 w-screen h-screen bg-gray-600
      fixed top-0 left-0 transition-all z-50 duration-200
      ${searchHooks.panel ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}
    `}
    >
      {children}
    </div>
  );
};

export default Index;
