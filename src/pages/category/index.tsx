import React from 'react';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Empty from 'components/elements/Empty';
import * as Category from 'components/features/collection/components/Index';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { ICollections } from 'services/apis/shopify/queries';
import { SITE_DESCRIPTION, SITE_IMAGE } from 'constants/base';
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
    <Layout title={PAGE_CATEGORY} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
      <Container xl>
        {collections.collections ? (
          <div className='grid grid-cols-2 gap-8'>
            <Category.CollectionList collections={collections} />
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
