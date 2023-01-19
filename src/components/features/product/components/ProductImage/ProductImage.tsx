import React from 'react';
import Image from 'components/elements/Image';
import { IProduct } from 'services/apis/shopify/queries';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  product: IProduct;
};

/**
 * 商品詳細の画像を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ product }: IProps) => {
  return (
    <>
      {product.product.variants.edges.map((edge, i) => {
        return (
          <div key={i}>
            <Image src={edge.node.image.url} alt={edge.node.sku} />
          </div>
        );
      })}
    </>
  );
};

export default Index;
