import '../styles/index.css';
import * as NextImage from 'next/image';

const BREAKPOINTS_INT = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    let height;
    if (key === 'xs') {
      height = `${val * 1.777}px`
    } else {
      height = `${val / 1.777}px`
      // height = `${(idx + 5) * 10}vh`
    }

    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: height
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};
