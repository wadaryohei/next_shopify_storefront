/**
 * カートの商品項目のHeadを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = () => {
  return (
    <div className='flex w-full border-b border-gray-200'>
      <div className='py-8 px-6 pl-0 w-3/6 text-sm font-normal text-left text-gray-600'>商品名</div>
      <div className='hidden py-8 px-6 w-2/6 text-sm font-normal text-right text-gray-600 md:table-cell'>数量</div>
      <div className='py-8 pr-0 w-3/6 text-sm font-normal text-right text-gray-600 md:w-1/6'>合計</div>
    </div>
  );
};

export default Index;
