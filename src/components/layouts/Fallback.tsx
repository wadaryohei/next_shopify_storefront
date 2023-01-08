import { FallbackProps } from 'react-error-boundary';

/**
 * エラー時のfallbakcを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ error }: FallbackProps) => {
  return (
    <div className='flex fixed top-0 left-0 justify-center items-center w-screen h-screen'>
      <div className='text-center'>
        <p className='mb-2 text-lg font-bold text-red-600'>エラーが発生しました</p>
        <pre>{error}</pre>
        <button
          className='text-sm font-bold text-gray-600 underline'
          onClick={() => {
            window.location.href = '/';
          }}
        >
          TOPページに戻る
        </button>
      </div>
    </div>
  );
};

export default Index;
