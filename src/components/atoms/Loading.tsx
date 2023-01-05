import { Loading } from '@nextui-org/react';
import { useEffect } from 'react';

//----------------------------------
// props
//----------------------------------
type Props = {
  loading?: boolean;
};

/**
 * ローディングを描画するコンポーネント
 */
//----------------------------------
// component
//----------------------------------
const Index = ({ loading }: Props): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      style={{
        opacity: loading ? 0 : 0.9,
        backgroundColor: '#fff',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Loading />
    </div>
  );
};

export default Index;
