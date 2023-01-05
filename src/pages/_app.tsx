import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from 'components/layouts/Fallback';
import { NextUIProvider } from '@nextui-org/react';
import 'styles/tailwind.css';

/**
 * rootコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  }, [router.pathname]);

  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback}>
        <RecoilRoot>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </RecoilRoot>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
