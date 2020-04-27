import React from 'react';

export default function Send(prop) {
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9622 0.69089C24.0418 0.498076 23.9934 0.276081 23.8406 0.133969C23.6879 -0.00814199 23.463 -0.0404986 23.2764 0.0527963L0.276414 11.5528C0.0846082 11.6487 -0.0246841 11.8562 0.00475457 12.0686C0.0341932 12.2811 0.195807 12.4511 0.406465 12.4912L10.6131 14.4353L13.5232 23.6506C13.5865 23.8511 13.7685 23.9905 13.9786 23.9995C14.1886 24.0086 14.3819 23.8852 14.4622 23.6909L23.9622 0.69089ZM10.8209 13.4569L2.04679 11.7856L21.2066 2.20575L10.8209 13.4569ZM11.5642 14.126L14.0628 22.0383L22.001 2.8194L11.5642 14.126Z" />
    </svg>
  );
};
