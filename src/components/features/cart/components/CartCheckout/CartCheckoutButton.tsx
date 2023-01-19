import Button from 'components/elements/Button';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  text: string;
  onClick: () => void;
};

/**
 * カートのチェックアウトボタンを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, onClick }: Props) => {
  return <Button text={text} isDisabled={false} onClick={() => onClick()} />;
};

export default Index;
