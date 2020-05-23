import React from 'react';

export default function Send(prop) {
  const { color= 'currentColor', size= 100, ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M27.1263 4.87503L4.87503 16.0007L15.0332 17.9356M27.1263 4.87503L17.9356 27.1263L15.0332 17.9356M27.1263 4.87503L15.0332 17.9356" />
    </svg>
  );
};
