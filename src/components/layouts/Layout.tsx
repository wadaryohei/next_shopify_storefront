import Link from 'next/link';
import { ReactNode } from 'react';
import { Navbar, Text, Spacer } from '@nextui-org/react';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import Main from 'components/layouts/Main';
import Icon from 'components/atoms/Icon';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children: ReactNode;
};

/**
 * headerやfooterを管理するlayoutコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children }: Props) => {
  return (
    <div>
      {/** header */}
      <Header>
        <Navbar isBordered variant={'sticky'}>
          <Navbar.Brand>
            <Link href='/'>
              <a>
                <Text b color='inherit'>
                  Next.js Shopify StoreFront
                </Text>
              </a>
            </Link>
          </Navbar.Brand>

          <Navbar.Content>
            <Link href='/cart'>
              <a>
                <Icon />
              </a>
            </Link>
          </Navbar.Content>
        </Navbar>
      </Header>

      {/** main */}
      <Spacer y={4} />
      <Main>{children}</Main>
      <Spacer y={4} />

      {/** footer */}
      <Footer></Footer>
    </div>
  );
};

export default Index;
