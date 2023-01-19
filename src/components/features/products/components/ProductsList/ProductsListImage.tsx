import React from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  product: {
    edges: {
      node: {
        id: string;
        sku: string;
        priceV2: {
          amount: string;
        };
        quantityAvailable: number;
        image: {
          url: string;
        };
      };
    }[];
  };
};

/**
 * 商品一覧の画像を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ product }: IProps) => {
  return (
    <>
      {product.edges.map((edge, i) => {
        return (
          <div key={i}>
            <img src={edge.node.image.url} alt={edge.node.sku} />
          </div>
        );
      })}
    </>
  );
};

export default Index;
