import React from 'react';

export default function MapEmpty(prop) {
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
      <path d="M12.6667 8.66667L6 6V23.3333L12.6667 26M12.6667 8.66667L19.3333 6M12.6667 8.66667V26M19.3333 6L26 8.66667V26L19.3333 23.3333M19.3333 6V23.3333M19.3333 23.3333L12.6667 26" />
    </svg>
  );
};
