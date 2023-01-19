import React from 'react';
import Link from 'next/link';
import Image from 'components/elements/Image';
import { LineItem } from 'shopify-buy';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  lineItem: LineItem;
};

/**
 * カートの画像を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ lineItem }: IProps) => {
  return (
    <Link href={`/product/${lineItem.variant.product.handle}`}>
      <a>
        <Image src={lineItem.variant.image.src} width={100} height={100} alt={lineItem.title} />
      </a>
    </Link>
  );
};

export default Index;
