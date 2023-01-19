import { CSSProperties, ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children: ReactNode;
  size?: string;
  color?: string;
  align?: 'text-left' | 'text-center' | 'text-right';
  leading?: string;
  isLoose?: boolean;
  style?: CSSProperties | undefined;
} & HeadingProps &
  styleProps;

type HeadingProps = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  span?: boolean;
};

type styleProps = {
  b?: boolean;
  under?: boolean;
};

/**
 * テキストコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children, size, color, align, leading, isLoose, h1, h2, h3, h4, span, b, under, style }: Props) => {
  const props = `
    ${size ? size : 'text-sm'}
    ${color ? color : 'text-based'}
    ${isLoose ? `leading-loose` : `leading-normal`}
    ${leading ? leading : ''}
    ${b ? 'font-bold' : ''}
    ${under ? 'under' : ''}
    ${align ? align : 'text-left'} whitespace-pre-wrap break-all
  `;

  return (
    <>
      {h1 && (
        <h1 className={props} style={style}>
          {children}
        </h1>
      )}
      {h2 && (
        <h2 className={props} style={style}>
          {children}
        </h2>
      )}
      {h3 && (
        <h3 className={props} style={style}>
          {children}
        </h3>
      )}
      {h4 && (
        <h4 className={props} style={style}>
          {children}
        </h4>
      )}
      {span && (
        <span className={props} style={style}>
          {children}
        </span>
      )}
      {!(h1 || h2 || h3 || h4 || span) && (
        <p className={props} style={style}>
          {children}
        </p>
      )}
    </>
  );
};

export default Index;
