import { ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children?: ReactNode;
} & containerProps;

type containerProps = {
  xl6?: boolean;
  xl5?: boolean;
  xl4?: boolean;
  xl3?: boolean;
  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  xs?: boolean;
};

/**
 * <container />を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children, xl6, xl5, xl4, xl3, xl, lg, md, sm, xs }: Props) => {
  return (
    <div
      className={`
        px-4 md:px-10 mx-auto
        ${xl6 ? 'max-w-6xl' : ''}
        ${xl5 ? 'max-w-5xl' : ''}
        ${xl4 ? 'max-w-4xl' : ''}
        ${xl3 ? 'max-w-3xl' : ''}
        ${xl ? 'max-w-xl' : ''}
        ${lg ? 'max-w-lg' : ''}
        ${md ? 'max-w-md' : ''}
        ${sm ? 'max-w-sm' : ''}
        ${xs ? 'max-w-xs' : ''}
      `}
    >
      {children}
    </div>
  );
};

export default Index;
