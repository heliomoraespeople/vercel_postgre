import Link from 'next/link';
import { FC, ReactElement } from 'react';

type Props = {
  text: ReactElement | string;
  href: string;
  last: boolean;
};

const Crumb: FC<Props> = ({ text, href, last = false }) => {
  if (last) {
    return <span className="font-semibold"> {text}</span>;
  }

  return (
    <>
      <Link href={href}>{text}</Link>
      <span className="font-extrabold"> | </span>
    </>
  );
};

export default Crumb;
