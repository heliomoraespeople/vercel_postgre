export interface IIconArrow {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

const IconArrow: React.FC<IIconArrow> = ({
  color = '#009FC2',
  size = 'md'
}) => {
  const arrowSize = {
    lg: {
      width: 42,
      height: 22,
      path: 'M40.9941 11.2294C40.8876 11.638 40.6213 11.9307 40.3432 12.2173C37.657 14.9735 34.9826 17.742 32.3023 20.5043C31.8053 21.0165 31.1841 21.169 30.6812 20.7848C30.2256 20.4372 30.054 20.2421 29.699 19.7787C29.3735 19.3457 29.4031 18.6688 29.7522 18.242C29.8173 18.1566 29.8942 18.0773 29.9711 18.0042C31.5036 16.4248 33.3969 14.5467 34.9353 12.9673C34.9886 12.9124 35.0418 12.8454 35.1306 12.7539C34.9945 12.7539 34.3791 12.7539 34.2904 12.7539C29.2552 12.7539 7.50845 12.7539 2.47919 12.7539C1.51476 12.7539 1.00592 12.2295 1 11.2416C1 10.9733 1 10.955 1 10.6867C1 9.76592 1.49701 9.2476 2.39044 9.2476C4.97015 9.2476 20.1138 9.2476 22.6935 9.2476C25.1667 9.2476 31.7758 9.2476 34.249 9.2476C34.3318 9.2476 35.0063 9.2476 35.1424 9.2476C35.0536 9.15613 35.0063 9.09515 34.9471 9.04027C33.4029 7.44873 31.4503 5.55228 29.9061 3.95464C29.4209 3.45461 29.273 2.78994 29.6457 2.27772C29.9889 1.80818 30.2315 1.57036 30.6812 1.21059C31.1131 0.869107 31.7166 0.966673 32.1367 1.33255C32.2195 1.40572 32.2905 1.4789 32.3674 1.55817C35.0241 4.29002 37.6748 7.02797 40.3314 9.75982C40.6154 10.0525 40.8935 10.3513 41 10.766C40.9941 10.9184 40.9941 11.077 40.9941 11.2294Z'
    },
    md: {
      width: 32,
      height: 17,
      path: 'M30.9956 8.67206C30.9157 8.97848 30.716 9.198 30.5074 9.41295C28.4928 11.4801 26.487 13.5565 24.4768 15.6282C24.104 16.0124 23.6381 16.1267 23.2609 15.8386C22.9192 15.5779 22.7905 15.4316 22.5242 15.084C22.2802 14.7593 22.3023 14.2516 22.5642 13.9315C22.613 13.8675 22.6707 13.808 22.7284 13.7531C23.8777 12.5686 25.2977 11.16 26.4515 9.97548C26.4914 9.93432 26.5314 9.88402 26.5979 9.81542C26.4959 9.81542 26.0344 9.81542 25.9678 9.81542C22.1914 9.81542 5.88134 9.81542 2.10939 9.81542C1.38607 9.81542 1.00444 9.4221 1 8.68121C1 8.47998 1 8.46626 1 8.26503C1 7.57444 1.37276 7.1857 2.04283 7.1857C3.97761 7.1857 15.3353 7.1857 17.2701 7.1857C19.125 7.1857 24.0818 7.1857 25.9367 7.1857C25.9988 7.1857 26.5047 7.1857 26.6068 7.1857C26.5402 7.1171 26.5047 7.07137 26.4604 7.03021C25.3022 5.83654 23.8377 4.41421 22.6795 3.21598C22.3157 2.84096 22.2047 2.34246 22.4843 1.95829C22.7417 1.60614 22.9236 1.42777 23.2609 1.15794C23.5848 0.90183 24.0374 0.975005 24.3525 1.24941C24.4146 1.30429 24.4679 1.35917 24.5256 1.41863C26.518 3.46752 28.5061 5.52098 30.4986 7.56987C30.7116 7.78939 30.9201 8.01349 31 8.32448C30.9956 8.43882 30.9956 8.55773 30.9956 8.67206Z'
    },
    sm: {
      width: 22,
      height: 12,
      path: 'M20.997 6.11471C20.9438 6.31899 20.8107 6.46534 20.6716 6.60864C19.3285 7.98676 17.9913 9.37098 16.6512 10.7521C16.4027 11.0083 16.092 11.0845 15.8406 10.8924C15.6128 10.7186 15.527 10.621 15.3495 10.3893C15.1868 10.1729 15.2016 9.83442 15.3761 9.62099C15.4087 9.57831 15.4471 9.53867 15.4856 9.50208C16.2518 8.71241 17.1985 7.77333 17.9677 6.98366C17.9943 6.95622 18.0209 6.92268 18.0653 6.87694C17.9972 6.87694 17.6896 6.87694 17.6452 6.87694C15.1276 6.87694 4.25422 6.87694 1.7396 6.87694C1.25738 6.87694 1.00296 6.61473 1 6.12081C1 5.98665 1 5.9775 1 5.84335C1 5.38296 1.2485 5.1238 1.69522 5.1238C2.98508 5.1238 10.5569 5.1238 11.8468 5.1238C13.0834 5.1238 16.3879 5.1238 17.6245 5.1238C17.6659 5.1238 18.0032 5.1238 18.0712 5.1238C18.0268 5.07807 18.0032 5.04758 17.9736 5.02014C17.2014 4.22436 16.2252 3.27614 15.453 2.47732C15.2104 2.22731 15.1365 1.89497 15.3229 1.63886C15.4944 1.40409 15.6157 1.28518 15.8406 1.10529C16.0565 0.934553 16.3583 0.983337 16.5683 1.16627C16.6098 1.20286 16.6453 1.23945 16.6837 1.27908C18.012 2.64501 19.3374 4.01399 20.6657 5.37991C20.8077 5.52626 20.9467 5.67566 21 5.88299C20.997 5.95921 20.997 6.03848 20.997 6.11471Z'
    }
  };

  return (
    <svg
      width={arrowSize[size].width}
      height={arrowSize[size].height}
      viewBox={`0 0 ${arrowSize[size].width} ${arrowSize[size].height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={arrowSize[size].path}
        fill={color}
        stroke={color}
        strokeWidth="0.4"
      />
    </svg>
  );
};

export default IconArrow;
