import React from 'react';

export default function Flag(prop) {
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
      <path d="M19.3002 25.9503L11.8828 15.2078M15.7194 6C13.7661 6.97662 10.3627 7.12457 8.14587 7.10303C7.29562 7.09477 6.75836 8.07821 7.25462 8.76865L11.8828 15.2078M15.7194 6C17.3175 9.19634 18.2136 10.9884 19.8117 14.1847M15.7194 6C16.3834 7.32805 17.1923 8.94587 17.4197 9.40069C17.6471 9.85551 20.8348 8.55773 21.8579 8.04618C22.881 7.53464 26.4618 14.6963 25.9503 15.7194C25.5721 16.4758 23.2366 16.9525 22.0447 17.1497C21.6264 17.2189 21.2198 17.0009 21.0302 16.6217C20.704 15.9692 20.1907 14.9426 19.8117 14.1847M19.8117 14.1847C19.0879 15.2078 11.8828 15.2078 11.8828 15.2078" />
    </svg>
  );
};
