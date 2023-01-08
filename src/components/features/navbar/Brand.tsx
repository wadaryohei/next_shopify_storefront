import Link from 'next/link';
import { Avatar } from '@nextui-org/react';
import Text from 'components/atoms/Text';

//-----------------------------------------------------------
// props
//-----------------------------------------------------------
type Props = {
  text: string;
  tone: 'light' | 'dark';
};

/**
 * navbarのブランドを描画するコンポーネント
 */
//-----------------------------------------------------------
// component
//-----------------------------------------------------------
const Index = ({ text, tone }: Props) => {
  return (
    <Link href='/'>
      <a className={`flex items-center ${tone === 'light' ? '' : 'bg-white p-4 w-full justify-center'}`}>
        <Avatar color='gradient' textColor='white' className='mr-2 cursor-pointer' />
        <Text b color='text-gray-800'>
          {text}
        </Text>
      </a>
    </Link>
  );
};

export default Index;
