//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  children: React.ReactNode;
};

/**
 * navbarを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ children }: Props) => {
  return <div className='flex justify-between items-center py-4 px-2 bg-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] md:px-8'>{children}</div>;
};

export default Index;
