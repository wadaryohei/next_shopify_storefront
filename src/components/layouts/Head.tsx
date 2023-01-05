import NextHead from 'next/head';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
};

/**
 * <head />を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ title, description, image, url }: Props) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <link rel='canonical' href={url} />
    </NextHead>
  );
};

export default Index;
