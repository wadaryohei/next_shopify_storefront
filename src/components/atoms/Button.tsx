//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  text: string;
  isDisabled?: boolean;
  onClick?: () => void;
};

/**
 * ボタンコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, isDisabled, onClick }: Props) => {
  return (
    <button onClick={onClick} disabled={isDisabled} className={'p-4 w-full text-white bg-blue-700 rounded-full'}>
      {text}
    </button>
  );
};

export default Index;
