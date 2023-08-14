import { FC } from 'react';

type Props = {
  active: boolean;
};

const ListButton: FC<Props> = ({ active }) => {
  let color = { main: '#005174', secondary: '#fff' };
  if (!active) {
    color = { main: '#DCDFE0', secondary: '#B7BBBD' };
  }
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="4" fill={color.main} />
      <rect x="4" y="10.3999" width="24" height="2.4" fill={color.secondary} />
      <rect x="4" y="5.6001" width="24" height="2.4" fill={color.secondary} />
      <rect x="4" y="15.2002" width="24" height="2.4" fill={color.secondary} />
      <rect x="4" y="20" width="24" height="2.4" fill={color.secondary} />
      <rect x="4" y="24.8003" width="24" height="2.4" fill={color.secondary} />
    </svg>
  );
};

export default ListButton;
