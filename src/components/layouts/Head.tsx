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
const Index = ({ title, description, image, url, router }: Props) => {
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
      <meta property='og:image' content={image} />
      <link rel='canonical' href={url} />
    </NextHead>
  );
};

export default Index;
