import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Empty from 'components/atoms/Empty';
import Text from 'components/atoms/Text';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Nav from 'components/layouts/Nav';
import List from 'components/features/products/List';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { IProducts, ISearch } from 'services/apis/shopify/queries';
import { SITE_DESCRIPTION, SITE_IMAGE } from 'constants/base';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  products: IProducts;
  query: string | null;
};

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ products, query }: IProps) => {
  return (
    <Layout title={`「${query ? query : ''}」の検索結果`} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
      <Container>
        {products.products.edges.length >= 1 ? (
          <div className={'grid grid-cols-1 md:flex'}>
            <div className='w-64'>
              <Nav color={'dark'} />
            </div>
            <div className='flex-1 mt-10 w-full md:mt-0'>
              {query && (
                <Text h2 size={'text-2xl'}>
                  「{query ? query : ''}」の検索結果
                </Text>
              )}
              <div className={'grid grid-cols-2 gap-4 mt-4 md:grid-cols-4 md:gap-8'}>
                <List products={products} />
              </div>
            </div>
          </div>
        ) : (
          <Empty text={'情報を取得できませんでした。'} />
        )}
      </Container>
    </Layout>
  );
};

//-----------------------------------------------------------
// ssr
//-----------------------------------------------------------
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = new ShopifyGraphQLClient();
  const query = (context.query?.q as string) || null;

  try {
    if (query) {
      const res = await client.search<ISearch>({ first: 100, query: `title*${query}*` });
      return {
        props: { products: res, query: query }
      };
    }
    return { props: { products: [], query: null } };
  } catch (e) {
    return {
      props: { products: [], query: null }
    };
  }
};

export default Index;
