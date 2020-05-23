import React from 'react';

export default function DocumentFilled(prop) {
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
      <path d="M8.75 4H23.8345C25.3532 4 26.5845 5.23122 26.5845 6.75V25.2514C26.5845 26.7701 25.3532 28.0014 23.8345 28.0014H8.75C7.23121 28.0014 6 26.7701 6 25.2514V6.75C6 5.23122 7.23122 4 8.75 4ZM8.75 5.75C8.19772 5.75 7.75 6.19772 7.75 6.75V25.2514C7.75 25.8036 8.19771 26.2514 8.75 26.2514H23.8345C24.3867 26.2514 24.8345 25.8036 24.8345 25.2514V6.75C24.8345 6.19772 24.3867 5.75 23.8345 5.75H8.75ZM12.0211 10.8954H10.312V9.14544H12.0211V10.8954ZM13.7289 10.8954H22.2711V9.14545H13.7289V10.8954ZM12.0211 16.875H10.312V15.125H12.0211V16.875ZM13.7289 16.875H22.2711V15.125H13.7289V16.875ZM12.0211 22.8546H10.312V21.1046H12.0211V22.8546ZM13.7267 22.8546L20.9978 22.8725L21.0022 21.1225L13.731 21.1046L13.7267 22.8546Z"  />
    </svg>
  );
};
