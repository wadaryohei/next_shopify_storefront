//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  text: string;
  onClick: () => void;
};

/**
 * カートの削除ボタンを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, onClick }: Props) => {
  return (
    <button className='text-xs text-gray-400 underline' type='button' onClick={onClick}>
      {text}
    </button>
  );
};

export default Index;
