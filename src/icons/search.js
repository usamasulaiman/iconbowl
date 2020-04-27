import React from 'react';

export default function Search(prop) {
  const { color= 'currentColor', size= 100, ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5ZM15.7449 16.6591C14.0751 18.1169 11.8907 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5C19 11.9962 18.0373 14.2675 16.4629 15.9629L23.6464 23.1464C23.8417 23.3417 23.8417 23.6583 23.6464 23.8536C23.4512 24.0488 23.1346 24.0488 22.9393 23.8536L15.7449 16.6591Z" />
    </svg>
  );
};
