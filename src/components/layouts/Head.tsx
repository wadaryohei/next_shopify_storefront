import { SITE_TITLE } from 'constants/base';
import NextHead from 'next/head';
import { NextRouter } from 'next/router';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
  router: NextRouter;
};

/**
 * <head />を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ title, description, url, router }: Props) => {
  return (
    <NextHead>
      {router.asPath != '/' ? (
        <title>
          {title} | {SITE_TITLE}
        </title>
      ) : (
        <title>
          {title} | {description}
        </title>
      )}
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='og/default.png' />
      <link rel='icon' href='favicon/favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='apple-touch-icon' sizes='180x180' type='image/png' href='favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='favicon/favicon-16x16.png' />
      <link rel='canonical' href={`${url}${router.asPath}`} />
    </NextHead>
  );
};

export default Index;
