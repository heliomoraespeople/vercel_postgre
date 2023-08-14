import { FC } from 'react';

interface IPerson {
  width?: number;
  height?: number;
}

const Person: FC<IPerson> = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 40L2 99"
        stroke="#005174"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="7.39 7.39"
      />
      <path
        d="M26 58C26 58 23 58 23 55C23 52 26 43 41 43C56 43 59 52 59 55C59 58 56 58 56 58H26ZM41 40C43.3869 40 45.6761 39.0518 47.364 37.364C49.0518 35.6761 50 33.3869 50 31C50 28.6131 49.0518 26.3239 47.364 24.636C45.6761 22.9482 43.3869 22 41 22C38.6131 22 36.3239 22.9482 34.636 24.636C32.9482 26.3239 32 28.6131 32 31C32 33.3869 32.9482 35.6761 34.636 37.364C36.3239 39.0518 38.6131 40 41 40Z"
        fill="#005174"
      />
      <ellipse
        cx="41"
        cy="40.5"
        rx="39"
        ry="38.5"
        stroke="#005174"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="7.39 7.39"
      />
    </svg>
  );
};

export default Person;
