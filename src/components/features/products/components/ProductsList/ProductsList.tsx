import React from 'react';
import Link from 'next/link';
import * as Products from 'components/features/products/components/Index';
import { IProducts } from 'services/apis/shopify/queries';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  products: IProducts;
};

/**
 * 商品一覧を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ products }: IProps) => {
  return (
    <>
      {products.products.edges.map((edge, index: number) => {
        return (
          <div key={index}>
            <Link href={`/product/${edge.node.handle}`}>
              <a>
                <Products.Image product={edge.node.variants} />
                <div className='mt-4'>
                  <Products.Title title={edge.node.title} />
                  <Products.Price product={edge.node.variants} />
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Index;
