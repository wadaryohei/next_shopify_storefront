//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  icon: 'search' | 'cart';
  onClick: () => void;
};

/**
 * アイコンコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ icon, onClick }: Props) => {
  return (
    <>
      {icon === 'cart' && (
        <div className='cursor-pointer' onClick={() => onClick()}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='24' viewBox='0 0 24 24' stroke='#444'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'></path>
          </svg>
        </div>
      )}

      {icon === 'search' && (
        <div className='cursor-pointer' onClick={() => onClick()}>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='24' viewBox='0 0 24 24' stroke='#444'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default Index;
