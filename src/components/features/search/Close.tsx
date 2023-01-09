import { IUseSearch } from 'hooks/useSearch';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  text: string;
  searchHooks: IUseSearch;
};

/**
 * 商品検索パネルを閉じるボタンを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, searchHooks }: IProps) => {
  return (
    <button className={'p-2 mt-4 w-[120px] text-black bg-white'} onClick={() => searchHooks.searchPanel(searchHooks.panel)}>
      {text}
    </button>
  );
};

export default Index;
