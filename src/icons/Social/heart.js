import React from 'react';

export default function Heart(prop) {
  const { color= 'currentColor', size= 100, ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill-rule="evenodd"
      clip-rule="evenodd"
      {...otherProps}
    >
      <path d="M16.5716 7.81999C17.4873 7.27061 18.5407 6.6818 19.6469 6.32927C20.7622 5.97382 21.9932 5.83841 23.2293 6.26966C23.6845 6.42848 24.1502 6.67368 24.5333 7.05675C26.5021 9.02555 26.224 11.6349 25.2549 13.9255C24.28 16.2296 22.5055 18.4999 20.9542 20.1804L16.6842 24.8063C16.6572 24.8399 16.6274 24.8719 16.5948 24.9021C16.2397 25.2298 15.6861 25.2077 15.3583 24.8526L11.048 20.1831C9.49667 18.5025 7.72221 16.2322 6.74732 13.9281C5.77817 11.6375 5.50007 9.02818 7.46887 7.05938C7.85194 6.67631 8.31774 6.43111 8.77293 6.27229C10.009 5.84104 11.24 5.97644 12.3553 6.3319C13.4615 6.68443 14.5149 7.27324 15.4306 7.82262L15.9989 8.16363L16.5716 7.81999ZM16.5085 9.89873C16.2337 10.0939 15.8585 10.1202 15.5511 9.93577L14.5302 9.32323C13.6301 8.78319 12.7236 8.28601 11.8239 7.99927C10.9334 7.71546 10.1126 7.65834 9.34941 7.92462C9.06442 8.02405 8.85208 8.15105 8.70631 8.29681C7.4955 9.50762 7.49407 11.2019 8.35899 13.2462C9.21817 15.2768 10.8352 17.3725 12.3339 18.9961L15.9999 22.9676L19.6683 18.9934C21.167 17.3699 22.784 15.2742 23.6432 13.2436C24.5081 11.1993 24.5067 9.50499 23.2959 8.29419C23.1501 8.14842 22.9378 8.02142 22.6528 7.92199C21.8896 7.65571 21.0688 7.71283 20.1783 7.99664C19.2786 8.28338 18.3721 8.78057 17.472 9.3206L16.5085 9.89873Z" />
    </svg>
  );
};