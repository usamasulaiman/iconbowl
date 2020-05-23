
import React from 'react';

export default function Arrow(prop) {
  const { color= 'currentColor', size= 100, direction= 'right', ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={color}
      transform={`rotate(${
        direction === 'down' ? '90' :
        direction === 'left' ? '180' :
        direction === 'up' ? '270' : '0'
        })
      `}
      strokeLinecap="round"
      {...otherProps}
    >
      <path d="M16.94 7.49372C16.5983 7.15201 16.5983 6.59799 16.94 6.25628C17.2817 5.91457 17.8357 5.91457 18.1774 6.25628L27.7483 15.8271C28.09 16.1688 28.09 16.7229 27.7483 17.0646L18.1774 26.6354C17.8357 26.9771 17.2817 26.9771 16.94 26.6354C16.5983 26.2937 16.5983 25.7397 16.94 25.398L25.0945 17.2434H4.875C4.39175 17.2434 4 16.8517 4 16.3684C4 15.8852 4.39175 15.4934 4.875 15.4934H24.9397L16.94 7.49372Z" />
    </svg>
  );
};
