import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import { useRecoilState } from 'recoil';
import { loadingAtom } from 'stores/atoms';
import { useCart } from 'hooks/useCart';
import { useDisabled } from 'hooks/useDisabled';
import Layout from 'components/layouts/Layout';
import Container from 'components/layouts/Container';
import Loading from 'components/elements/Loading';
import Text from 'components/elements/Text';
import * as Product from 'components/features/product/components/Index';
import { IProduct } from 'services/apis/shopify/queries';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { SITE_DESCRIPTION, SITE_IMAGE } from 'constants/base';

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
    <Layout title={product.product.title} description={SITE_DESCRIPTION} image={SITE_IMAGE}>
      <Container xl4>
        {product != null ? (
          <div className={'grid grid-cols-1 gap-8 md:grid-cols-2'}>
            {loading && <Loading />}
            <div>
              <Product.ProductImage product={product} />
            </div>

            <div>
              <Product.ProductDescriptionTitle title={product.product.title} />
              <div className='mt-4'>
                <Product.ProductDescription descriptionHtml={product.product.descriptionHtml} />
              </div>

              <div className='mt-4'>
                <Product.ProductDescriptionPrice product={product} />
              </div>

              <div className='mt-4'>
                <Product.ProductDescriptionAddButton
                  product={product}
                  quantity={1}
                  cartHooks={cartHooks}
                  disabledHooks={disabledHooks}
                  setLoading={setLoading}
                />
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
