import { FC } from 'react';

interface IArrows {
  color?: string;
}

const ArrowUp: FC<IArrows> = ({ color = '#4B4D4F' }) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12.25"
        y="8.3999"
        width="7.2"
        height="1.6"
        transform="rotate(-135 12.25 8.3999)"
        fill={color}
      />
      <rect
        x="9.42188"
        y="3.30859"
        width="7.2"
        height="1.6"
        transform="rotate(135 9.42188 3.30859)"
        fill={color}
      />
    </svg>
  );
};

export default ArrowUp;
