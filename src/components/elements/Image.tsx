//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  src: string;
  width?: string | number;
  height?: string | number;
  alt: string;
};

/**
 * 画像コンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ src, width, height, alt }: Props) => {
  return (
    <img
      style={{ minWidth: `${width ? width : ''}px`, minHeight: `${height ? height : ''}px` }}
      className='object-cover'
      src={src}
      alt={alt}
      width={width ? width : '100%'}
      height={height ? height : 'auto'}
    />
  );
};

export default Index;
