//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  text: string;
  onClick: () => void;
};

/**
 * カート削除ボタンのコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, onClick }: Props) => {
  return (
    <button className={'text-xs text-gray-400 underline'} type={'button'} onClick={onClick}>
      {text}
    </button>
  );
};

export default Index;
