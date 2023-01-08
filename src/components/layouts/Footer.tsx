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
  return <footer className='py-16 bg-black'>{children}</footer>;
};

export default Index;
