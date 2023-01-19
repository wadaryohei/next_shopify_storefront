import React from 'react';
import Empty from 'components/elements/Empty';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Nav from 'components/layouts/Nav';
import * as Products from 'components/features/products/components/Index';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { IProducts } from 'services/apis/shopify/queries';
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE } from 'constants/base';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  products: IProducts;
};

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ products }: IProps) => {
  return (
    <>
      <Layout title={SITE_TITLE} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
        <Container>
          {products.products ? (
            <div className={'grid grid-cols-1 md:flex'}>
              <div className='w-64'>
                <Nav color={'dark'} />
              </div>
              <div className='flex-1 mt-10 w-full md:mt-0'>
                <div className={'grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8'}>
                  <Products.ProductsList products={products} />
                </div>
              </div>
            </div>
          ) : (
            <Empty text={'情報を取得できませんでした'} />
          )}
        </Container>
      </Layout>
    </>
  );
};

//-----------------------------------------------------------
// ssr
//-----------------------------------------------------------
export const getServerSideProps = async () => {
  const client = new ShopifyGraphQLClient();

  try {
    const res = await client.products<IProducts>({ first: 100 });
    return {
      props: { products: res }
    };
  } catch (e) {
    return {
      props: { products: [] }
    };
  }
};

export default Index;
