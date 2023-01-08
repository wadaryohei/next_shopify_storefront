//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  descriptionHtml: string;
};

/**
 * 商品詳細の詳細を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ descriptionHtml }: IProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: descriptionHtml
      }}
    />
  );
};

export default Index;
