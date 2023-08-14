import { MutableRefObject } from 'react';

export const jumpToRef = (
  ref: MutableRefObject<HTMLDivElement>,
  offset = 110
): void => {
  window.scrollTo({
    behavior: 'smooth',
    top: ref.current.offsetTop - offset
  });
};
