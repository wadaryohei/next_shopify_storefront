import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import { useRecoilState } from 'recoil';
import { loadingAtom } from 'stores/atoms';
import { useCart } from 'hooks/useCart';
import { useDisabled } from 'hooks/useDisabled';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import * as Product from 'components/features/product/Index';
import { IProduct } from 'services/apis/shopify/queries';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { SITE_DESCRIPTION } from 'constants/base';

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
    <Layout title={product.product.title} description={SITE_DESCRIPTION} image={''} url={''}>
      <Container xl4>
        {product != null ? (
          <div className={'grid grid-cols-1 gap-8 md:grid-cols-2'}>
            {loading && <Loading />}
            <div>
              <Product.Image product={product} />
            </div>

            <div>
              <Product.Title title={product.product.title} />
              <div className='mt-4'>
                <Product.Description descriptionHtml={product.product.descriptionHtml} />
              </div>

              <div className='mt-4'>
                <Product.Price product={product} />
              </div>

              <div className='mt-4'>
                <Product.AddButton product={product} quantity={1} cartHooks={cartHooks} disabledHooks={disabledHooks} setLoading={setLoading} />
              </div>
            </div>
          </div>
        ) : (
          <div className={'grid grid-cols-1 md:grid-cols-2'}>
            <Text>商品情報を取得できませんでした。</Text>
          </div>
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
