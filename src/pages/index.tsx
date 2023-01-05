import React from 'react';
import Link from 'next/link';
import { Grid, Container, Spacer } from '@nextui-org/react';
import Layout from 'components/layouts/Layout';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import { ShopifyGraphQLClient } from 'services/apis/shopify/clients/storefront/ShopifyGraphQLClient';
import { IProducts } from 'services/apis/shopify/queries';

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
    <Layout>
      <Container xl>
        {products.products ? (
          <Grid.Container gap={2} justify='flex-start'>
            {products.products.edges.map((product, index: number) => {
              return (
                <Grid xs={6} md={3} key={index} direction={'column'}>
                  {product.node.variants.edges.map((edge, i) => {
                    return (
                      <div key={i}>
                        <Link href={`/product/${product.node.handle}`}>
                          <a>
                            <Image src={edge.node.image.url} alt={''} />
                          </a>
                        </Link>
                      </div>
                    );
                  })}
                  <Spacer css={{ marginTop: '4px' }} />
                  <Text b color='inherit'>
                    {product.node.title}
                  </Text>
                  {product.node.variants.edges.map((edge, i) => {
                    return (
                      <Text key={i} b color={'text-red-600'}>
                        ￥{Number(edge.node.priceV2.amount).toLocaleString()}
                      </Text>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid.Container>
        ) : (
          <Grid.Container gap={2} justify='center'>
            情報を取得できませんでした
          </Grid.Container>
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
    const res = await client.products<IProducts>({ first: 100 });
    return {
      props: { products: res }
    };
  } catch (e) {
    return {
      props: { producs: [] }
    };
  }
};

export default Index;
