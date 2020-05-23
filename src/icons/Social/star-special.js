import React from 'react';

export default function StarSpecial(prop) {
  const { color= 'currentColor', size= 100, ...otherProps } = prop;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M8.058 4.143c.68.998.826 2.527.214 2.944-.613.418-1.982-.276-2.663-1.275-.681-.999-1.233-1.808-.009-2.643 1.225-.835 1.777-.025 2.458.974z" />
      <path d="M14.094 11.262l2.138-2.654 2.138 2.654c.21.26.485.46.797.578l3.184 1.214-1.863 2.854c-.182.28-.287.602-.304.935l-.17 3.404-3.29-.89a1.884 1.884 0 00-.984 0l-3.29.89-.17-3.404a1.884 1.884 0 00-.304-.935l-.825.538.825-.539-1.863-2.853 3.184-1.214c.312-.119.587-.319.797-.578zm2.072-2.736h0z" />
      <path d="M5.253 10.916c1.091.521 1.985 1.77 1.665 2.438-.32.669-1.853.757-2.943.236-1.09-.522-1.975-.944-1.336-2.281.64-1.337 1.524-.915 2.614-.393zM28.077 12.584c-1.022.647-2.554.74-2.95.114-.397-.626.342-1.971 1.363-2.618 1.022-.647 1.85-1.172 2.643.08.793 1.252-.035 1.777-1.056 2.424zM27.39 20.605c-1.196-.182-2.414-1.117-2.302-1.85.112-.732 1.553-1.262 2.748-1.08 1.195.182 2.164.33 1.94 1.795-.223 1.465-1.192 1.318-2.387 1.135zM24.097 26.961c-.975-.715-1.621-2.108-1.183-2.705.438-.598 1.961-.4 2.936.315.975.715 1.765 1.295.888 2.49-.876 1.195-1.666.615-2.641-.1zM14.485 27.089c.017-1.209.778-2.543 1.519-2.532.74.01 1.462 1.366 1.445 2.575-.018 1.208-.032 2.188-1.514 2.167-1.482-.021-1.468-1.001-1.45-2.21zM4.338 18.631c1.2-.144 2.624.431 2.712 1.167.089.735-1.158 1.632-2.358 1.776-1.2.145-2.173.262-2.35-1.21-.177-1.471.796-1.588 1.996-1.733zM6.323 25.075c1.013-.66 2.544-.775 2.949-.155.405.62-.316 1.976-1.329 2.637-1.012.66-1.833 1.196-2.643-.045-.81-1.24.011-1.776 1.023-2.437zM25.425 5.39c-.613 1.042-1.933 1.825-2.572 1.45-.639-.377-.595-1.911.017-2.953.613-1.042 1.11-1.887 2.388-1.136 1.277.752.78 1.597.167 2.639z" />
    </svg>
  );
};
