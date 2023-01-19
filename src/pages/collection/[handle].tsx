import React from 'react';
import Empty from 'components/elements/Empty';
import Text from 'components/elements/Text';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Nav from 'components/layouts/Nav';
import * as Products from 'components/features/products/components/Index';
import * as Category from 'components/features/collection/components/Index';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { ICollectionByHandle, ICollections, IProducts } from 'services/apis/shopify/queries';
import { GetServerSidePropsContext } from 'next';
import { SITE_DESCRIPTION, SITE_IMAGE } from 'constants/base';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  products: IProducts;
  collections: ICollections;
  handle: string | null;
};

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ products, collections, handle }: IProps) => {
  return (
    <>
      <Layout title={`「${handle ? handle : ''}」の一覧`} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
        <Container>
          {products.products ? (
            <div className={'grid grid-cols-1 md:flex'}>
              <div className='w-64'>
                <Nav color={'dark'} />
              </div>
              <div className='flex-1 mt-10 w-full md:mt-0'>
                <div className={'mb-8'}>
                  {handle && (
                    <Text h2 size={'text-2xl'}>
                      Collection {handle}
                    </Text>
                  )}
                  {collections && (
                    <div className='mt-2'>
                      <Category.CollectionTags collections={collections} />
                    </div>
                  )}
                </div>
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
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = new ShopifyGraphQLClient();
  const handle = context.query.handle;

  try {
    // handleが存在しない場合
    if (!handle) {
      return {
        props: { products: [], collections: [], handle: '' }
      };
    }

    // collectionの一覧を取得
    const collections = await client.collections<ICollections>({ first: 100 });

    // handleがallの場合
    if (handle === 'all') {
      const products = await client.products<IProducts>({ first: 100 });
      return {
        props: {
          products,
          handle
        }
      };
    }

    // handleがall以外の場合
    const products = await client.collectionByHandle<ICollectionByHandle>({ handle: handle as string, first: 100 });
    return {
      props: {
        products: products.collectionByHandle,
        collections,
        handle
      }
    };
  } catch (e) {
    return {
      props: { products: [], collections: [], handle: '' }
    };
  }
};

export default Index;
