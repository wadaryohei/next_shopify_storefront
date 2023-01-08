import React from 'react';
import Form from 'components/features/search/Form';
import Container from 'components/layouts/Container';
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
    <div
      className={`absolute top-16 left-0 mt-2 transition-all z-0 ${
        searchHooks.panel ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-50'
      }`}
    >
      <div className='flex justify-center items-center py-4 w-screen bg-gray-200'>
        <Container lg>
          <Form searchHooks={searchHooks} />
        </Container>
      </div>
    </div>
  );
};

export default Index;
