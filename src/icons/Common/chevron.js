import React from 'react';

export default function Chevron(prop) {
  const { color= 'currentColor', size= 100, direction= 'right', ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="2"
      transform={`rotate(${
        direction === 'down' ? '90' :
        direction === 'left' ? '180' :
        direction === 'up' ? '270' : '0'
        })
      `}
      strokeLinecap="round"
      // strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M10 4L22 16L10 28" />
    </svg>
  );
};
