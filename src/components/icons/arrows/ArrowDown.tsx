import { FC } from 'react';

interface IArrows {
  color?: string;
}

const ArrowDown: FC<IArrows> = ({ color = '#4B4D4F' }) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.75"
        y="1.6001"
        width="7.2"
        height="1.6"
        transform="rotate(45 3.75 1.6001)"
        fill={color}
      />
      <rect
        x="6.57812"
        y="6.69141"
        width="7.2"
        height="1.6"
        transform="rotate(-45 6.57812 6.69141)"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDown;
