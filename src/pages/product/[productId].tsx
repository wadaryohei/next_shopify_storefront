import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import { useRecoilState } from 'recoil';
import { Grid, Spacer } from '@nextui-org/react';
import { loadingAtom } from 'stores/atoms';
import { useCart } from 'hooks/useCart';
import { useDisabled } from 'hooks/useDisabled';
import Layout from 'components/layouts/Layout';
import AddButton from 'components/features/button/AddButton';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import { IProduct } from 'services/apis/shopify/queries';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  product: IProduct;
};

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ product }: IProps) => {
  const cartHooks = useCart();
  const disabledHooks = useDisabled();
  const [loading, setLoading] = useRecoilState(loadingAtom);

  return (
    <Layout>
      {product != null ? (
        <Grid.Container gap={2} justify='center'>
          {loading && <Loading />}
          <Grid xs={12} md={4}>
            {product.product.variants.edges.map((edge, i) => {
              return (
                <div key={i}>
                  <img src={edge.node.image.url} alt={''} />
                </div>
              );
            })}
          </Grid>

          <Grid xs={12} md={4} direction={'column'}>
            <Text h2 b size={'text-3xl'} color={'text-gray-600'}>
              {product.product.title}
            </Text>
            <div
              dangerouslySetInnerHTML={{
                __html: product.product.descriptionHtml
              }}
            />
            <Spacer y={1} />
            {product.product.variants.edges.map((edge, i) => {
              return (
                <Text key={i} b size={'text-3xl'} color={'text-red-500'} align={'text-right'}>
                  ￥{Number(edge.node.priceV2.amount).toLocaleString()}
                </Text>
              );
            })}
            <Spacer y={3} />
            {product.product.variants.edges.map((edge, index) => {
              return (
                <AddButton key={index} variantId={edge.node.id} quantity={1} cartHooks={cartHooks} disabledHooks={disabledHooks} setLoading={setLoading} />
              );
            })}
          </Grid>
        </Grid.Container>
      ) : (
        <Grid.Container gap={2} justify='center'>
          <Text>商品情報を取得できませんでした。</Text>
        </Grid.Container>
      )}
    </Layout>
  );
};

//-----------------------------------------------------------
// ssr
//-----------------------------------------------------------
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = new ShopifyGraphQLClient();

  try {
    const res = await client.product<IProduct>({ handle: context.query.productId as string });
    return {
      props: { product: res }
    };
  } catch (e) {
    return {
      props: { product: null }
    };
  }
};

export default Index;
