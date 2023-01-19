import { ReactNode } from 'react';
import { useEnv } from 'hooks/useEnv';
import { useSearch } from 'hooks/useSearch';
import { useRouter } from 'next/router';
import Head from 'components/layouts/Head';
import Header from 'components/layouts/Header';
import Footer from 'components/layouts/Footer';
import Main from 'components/layouts/Main';
import Nav from 'components/layouts/Nav';
import Container from 'components/layouts/Container';
import Text from 'components/elements/Text';
import * as Navbar from 'components/features/navbar/components/Index';
import * as Search from 'components/features/search/components/Index';
import { SITE_TITLE } from 'constants/base';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children: ReactNode;
  title: string;
  description: string;
  image: string;
};

/**
 * headerやfooterを管理するlayoutコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children, title, description, image }: Props) => {
  const router = useRouter();
  const searchHooks = useSearch();
  const envHooks = useEnv();

  return (
    <div>
      {/** head */}
      <Head title={title} description={description} image={image} url={envHooks.getEnvUrl()} router={router} />

      {/** panel */}
      <Search.SearchPanel searchHooks={searchHooks} />

      {/** header */}
      <Header>
        <Navbar.NavbarWrapper>
          <Navbar.NavbarContentBrand text={SITE_TITLE} tone='light' />
          <Navbar.NavbarContent searchHooks={searchHooks} router={router} />
        </Navbar.NavbarWrapper>
      </Header>

      {/** main */}
      <div className='py-24'>
        <Main>{children}</Main>
      </div>

      {/** footer */}
      <Footer>
        <Container>
          <div className='grid grid-cols-1 gap-16 justify-start md:flex'>
            <div className='w-full md:w-64'>
              <Navbar.NavbarContentBrand text={SITE_TITLE} tone='dark' />
            </div>

            <div className='w-64'>
              <Nav color='light' />
            </div>
          </div>

          <div className='flex flex-col justify-between items-center pt-4 mt-10 border-t md:flex-row'>
            <Text color='text-white'>© 2022 YURAGI.</Text>
            <Text color='text-white'>Created by Ryohei Wada.</Text>
          </div>
        </Container>
      </Footer>
    </div>
  );
};

export default Index;
