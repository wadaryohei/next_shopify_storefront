//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
};

/**
 * 見出し描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ src, width, height, alt }: Props) => {
  return (
    <img
      style={{ minWidth: `${width ? width : ''}px`, minHeight: `${height ? height : ''}px` }}
      className={`object-cover`}
      src={src}
      alt={alt}
      width={width ? width : 400}
      height={height ? height : 400}
    />
  );
};

export default Index;
