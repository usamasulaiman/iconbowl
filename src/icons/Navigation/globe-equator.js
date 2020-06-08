import React from 'react';

export default function GlobeEquator(prop) {
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
      <path d="M9.80453 16.6562C10.0161 19.6435 11.4401 22.6139 13.897 26.034C9.45241 25.1072 6.06421 21.3019 5.77067 16.6562H9.80453ZM11.5597 16.6562C11.787 19.3574 13.2001 22.2151 15.9549 25.8783C18.746 22.2027 20.1895 19.3416 20.4396 16.6562H11.5597ZM20.4334 14.9062H11.5784C11.8543 12.2964 13.2476 9.54872 15.9613 6.08074C18.7526 9.54474 20.1695 12.2879 20.4334 14.9062ZM22.196 16.6562C21.9627 19.6374 20.5034 22.6163 18.0051 26.054C22.4977 25.163 25.9336 21.3359 26.2293 16.6562H22.196ZM26.1923 14.9062H22.1909C21.9474 12.018 20.5414 9.17944 18.0935 5.96396C22.4023 6.85817 25.7204 10.4574 26.1923 14.9062ZM9.82014 14.9062H5.80767C6.27713 10.4805 9.56327 6.89558 13.8395 5.97812C11.4533 9.20104 10.075 12.0378 9.82014 14.9062ZM16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" />
    </svg>
  );
};