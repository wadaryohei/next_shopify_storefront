import { ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children?: ReactNode;
};

/**
 * <header />を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children }: Props) => {
  return <header>{children}</header>;
};

export default Index;
