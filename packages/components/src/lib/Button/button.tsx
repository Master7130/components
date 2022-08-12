import React, { HtmlHTMLAttributes } from 'react';

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  rounded: 'small' | 'medium' | 'large';
  disabled: boolean;
  secondary: boolean;
}

export default function Button({
  text = 'Button',
  rounded,
  disabled,
  secondary,
  ...props
}: Props) {
  const roundedStyle =
    rounded === 'small'
      ? 'rounded'
      : rounded === 'medium'
      ? 'rounded-md'
      : 'rounded-lg';

  const disabledStyle = disabled
    ? 'cursor-not-allowed pointer-events-none opacity-50'
    : '';

  const secondaryStyle = secondary
    ? 'bg-transparent active:bg-blue-100 border border-blue-600'
    : 'bg-blue-500 active:bg-blue-600 text-white';

  return (
    <button
      className={`${roundedStyle} ${disabledStyle} ${secondaryStyle} py-2 px-10`}
      {...props}
    >
      {text}
    </button>
  );
}
