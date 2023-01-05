import React from 'react';
import { Container } from '@nextui-org/react';
import { useCart } from 'hooks/useCart';
import Layout from 'components/layouts/Layout';
import Loading from 'components/atoms/Loading';
import CheckoutButton from 'components/features/button/CheckoutButton';
import BuyTotal from 'components/features/cart/BuyTotal';
import CartHead from 'components/features/cart/CartHead';
import CartRow from 'components/features/cart/CartRow';
import Text from 'components/atoms/Text';

//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = () => {
  const cartHooks = useCart();

  return (
    <Layout>
      <Container xl>
        {cartHooks.cartLoading ? (
          <Loading />
        ) : (
          <>
            {cartHooks.cart.lineItems.length === 0 ? (
              <Text b size={'text-xl'}>
                カートに商品がありません
              </Text>
            ) : (
              <>
                <div className={'mx-auto max-w-3xl'}>
                  <div>
                    <CartHead />
                  </div>

                  <div className='mt-4 w-full'>
                    {cartHooks.cart.lineItems.map((lineItem, index) => {
                      return (
                        <div key={index} className={'flex items-center mx-auto w-full'}>
                          <CartRow lineItem={lineItem} cartHooks={cartHooks} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className='pt-8 mx-auto mt-10 max-w-3xl border-t'>
                  <div className={'block w-full text-right'}>
                    <BuyTotal itemCount={cartHooks.cart.lineItemsCount} subTotal={cartHooks.cart.subTotal} />
                  </div>

                  <div className={'mt-8'}>
                    <CheckoutButton
                      text={'決済画面へ'}
                      onClick={() => {
                        window.location.href = cartHooks.cart.webUrl;
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Index;
