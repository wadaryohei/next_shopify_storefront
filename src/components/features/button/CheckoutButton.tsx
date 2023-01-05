import Button from 'components/atoms/Button';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  text: string;
  onClick: () => void;
};

/**
 * チェックアウトボタンのコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, onClick }: Props) => {
  return <Button text={text} isDisabled={false} onClick={() => onClick()} />;
};

export default Index;
