import Link from 'next/link';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type IProps = {
  color: 'light' | 'dark';
};

/**
 * <nav />を描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ color }: IProps) => {
  const tone = `${color === 'light' ? 'text-white' : 'text-black'}`;

  return (
    <div className='flex flex-col gap-2 justify-start items-start'>
      <Link href='/'>
        <a className={tone}>Home</a>
      </Link>
      <Link href='/collection/all'>
        <a className={tone}>All</a>
      </Link>
      <Link href='/about'>
        <a className={tone}>About</a>
      </Link>
      <Link href='/category'>
        <a className={tone}>Category</a>
      </Link>
    </div>
  );
};

export default Index;
