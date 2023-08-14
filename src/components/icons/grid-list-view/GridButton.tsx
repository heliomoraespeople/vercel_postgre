import { FC } from 'react';

type Props = {
  active: boolean;
};

const GridButton: FC<Props> = ({ active }) => {
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
      <rect
        x="5.59375"
        y="4.7998"
        width="9.6"
        height="6.4"
        fill={color.secondary}
      />
      <rect
        x="16.7969"
        y="4.7998"
        width="9.6"
        height="6.4"
        fill={color.secondary}
      />
      <rect
        x="5.59375"
        y="12.7998"
        width="9.6"
        height="6.4"
        fill={color.secondary}
      />
      <rect
        x="16.7969"
        y="12.7998"
        width="9.6"
        height="6.4"
        fill={color.secondary}
      />
      <rect
        x="5.59375"
        y="20.7998"
        width="9.6"
        height="6.4"
        fill={color.secondary}
      />
      <rect
        x="16.7969"
        y="20.7998"
        width="9.6"
        height="6.4"
        fill={color.secondary}
      />
    </svg>
  );
};

export default GridButton;
