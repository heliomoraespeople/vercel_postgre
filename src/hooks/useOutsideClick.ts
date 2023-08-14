import React, { MutableRefObject } from 'react';

const useOutsideClick = (
  callback: () => void
): MutableRefObject<HTMLDivElement> => {
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const handleClick = (event: PointerEvent): void => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
