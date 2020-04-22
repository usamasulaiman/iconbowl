import React from 'react';

export default function Star(prop) {
  const { color= 'currentColor', size= 100, ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M7.08 10.55l2.8-.68c.33-.08.63-.28.84-.56l1.7-2.28 1.66 2.47c.18.28.46.48.77.59l2.83.94-1.8 2.14a1.5 1.5 0 00-.35.98l.04 2.8-2.78-1.08a1.5 1.5 0 00-.97-.04l-2.83.85.12-2.85c.02-.35-.09-.7-.3-.98l-1.73-2.3z"  stroke-width="1.5"/>
      <path transform="matrix(.58145 .81358 -.8352 .54993 4.47 3.25)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h3.59"/>
      <path transform="matrix(.96513 -.26176 .30105 .9536 .93 16.95)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h3.56"/>
      <path transform="matrix(-.61124 .79145 -.8037 -.59505 18.63 2.5)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h3.44"/>
      <path transform="matrix(.94061 .33948 -.33553 .94203 18.37 15.62)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h3.65"/>
      <path transform="matrix(-.00445 .99999 -.99945 -.03304 11.12 19.17)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h3.45"/>
      <path transform="matrix(.94063 .33942 -.33547 .94205 .38 9.34)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h1.39"/>
      <path transform="matrix(-.00445 .99999 -.99945 -.03304 11.18 .63)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h1.27"/>
      <path transform="matrix(.96513 -.26176 .30105 .9536 21.16 11.25)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h1.34"/>
      <path transform="matrix(.58145 .81358 -.8352 .54993 16.85 20.3)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h1.35"/>
      <path transform="matrix(-.61124 .79145 -.8037 -.59505 6.07 18.77)"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1-1h1.26"/>
    </svg>
  );
};
