import React, { Component, ErrorInfo, ReactNode } from 'react';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
interface Props {
  children: ReactNode;
  errorMessage: string;
}

//-----------------------------------------------------------
// state
//-----------------------------------------------------------
interface State {
  hasError: boolean;
}

/**
 * 致命的なエラーを捕捉するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`${this.props.errorMessage}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={'flex justify-center items-center w-screen h-screen'}>
          <div
            className={'p-4 text-center text-white bg-rose-600 rounded-md'}
            dangerouslySetInnerHTML={{
              __html: this.props.errorMessage
            }}
          ></div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
