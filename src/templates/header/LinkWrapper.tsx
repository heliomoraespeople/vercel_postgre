import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {
  Children,
  Dispatch,
  FC,
  ReactElement,
  SetStateAction
} from 'react';

type Props = {
  href?: string;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
  className?: string;
  exact?: boolean;
};

const LinkWrapper: FC<Props> = ({
  href,
  setIsDropdownOpen,
  children,
  className,
  exact = false
}) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  if (isActive) className += ' font-bold';

  const childLabel = Children.only(children)?.props?.children[0];
  if (
    pathname.includes('programas-inovacao') &&
    (childLabel == 'Programas de Inovação' ||
      childLabel?.props?.children == 'Programas de Inovação')
  )
    className += ' font-bold';

  if (href) {
    return (
      <Link href={href}>
        <li>
          <button
            className={className}
            onClick={() => setIsDropdownOpen(false)}
          >
            {children}
          </button>
        </li>
      </Link>
    );
  } else {
    return <li className={className}>{children}</li>;
  }
};

export default LinkWrapper;
