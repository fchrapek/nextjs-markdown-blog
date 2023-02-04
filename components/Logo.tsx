import logotype from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" >
      <Image alt="happySpiders logo" src={logotype} />
    </Link>
  )
}
