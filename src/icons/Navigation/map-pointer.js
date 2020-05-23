import React from 'react';

export default function MapPointer(prop) {
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      {...otherProps}
    >
      <path d="M26 6L6 14.5714L16 16L17.4286 26L26 6Z" />
    </svg>
  );
};
