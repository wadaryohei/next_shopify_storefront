import React from 'react';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Empty from 'components/atoms/Empty';
import * as Category from 'components/features/collection/Index';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { ICollections } from 'services/apis/shopify/queries';
import { SITE_DESCRIPTION } from 'constants/base';
import { PAGE_CATEGORY } from 'constants/pages';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  collections: ICollections;
};

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ collections }: IProps) => {
  return (
    <Layout title={PAGE_CATEGORY} description={SITE_DESCRIPTION} image={''} url={''}>
      <Container xl>
        {collections.collections ? (
          <div className='grid grid-cols-2 gap-8'>
            <Category.List collections={collections} />
          </div>
        ) : (
          <Empty text={'情報を取得できませんでした'} />
        )}
      </Container>
    </Layout>
  );
};

//-----------------------------------------------------------
// ssr
//-----------------------------------------------------------
export const getServerSideProps = async () => {
  const client = new ShopifyGraphQLClient();

  try {
    const res = await client.collections<ICollections>({ first: 100 });
    return {
      props: { collections: res }
    };
  } catch (e) {
    return {
      props: { collections: [] }
    };
  }
};

export default Index;
