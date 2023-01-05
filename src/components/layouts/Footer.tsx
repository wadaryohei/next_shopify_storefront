import { ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children?: ReactNode;
};

/**
 * <footer />を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children }: Props) => {
  return <footer className={'bg-smoke'}>{children}</footer>;
};

export default Index;
