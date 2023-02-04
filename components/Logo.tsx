import logotype from '../public/logo.svg';
import Image from 'next/image';

export default function Logo() {
  return <Image alt="happySpiders logo" src={logotype} />;
}
