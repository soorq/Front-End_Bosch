import Link from 'next/link';
import React from 'react';

type TypeButtonProps = {
  url: string;
  size?: string;
  fill?: boolean;
  color?: string;
  rounded?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  border?: boolean;
  className?: string;
  id?: string;
};

const Button: React.FC<TypeButtonProps> = ({
  size,
  color,
  onClick,
  children,
  url,
  rounded,
  border,
  className,
  id,
}) => {
  const buttonClassName = `${className} transition-all py-${
    size === 'sm'
      ? 2
      : size === 'md'
      ? 3
      : size === 'lg'
      ? 4
      : size === 'xl'
      ? 5
      : 6
  } px-${
    size === 'sm'
      ? 4
      : size === 'md'
      ? 5
      : size === 'lg'
      ? 6
      : size === 'xl'
      ? 7
      : 8
  } bg-${color === 'primary' ? 'primary' : 'neutral_gray_800'} rounded-${
    rounded
      ? 'full'
      : size === 'sm'
      ? 'sm'
      : size === 'md'
      ? 'md'
      : size === 'lg'
      ? 'lg'
      : ''
  } ${
    border
      ? color === 'primary'
        ? 'border border-primary'
        : 'border border-neutral_gray_500'
      : ''
  } hover:bg-${
    color === 'primary' ? 'neutral_gray_800' : 'primary'
  } hover:border-${color === 'primary' ? 'neutral_gray_500' : 'primary'}`;

  return (
    <Link
      href={url}
      id={id ? id : `button-${size}`}
      className={buttonClassName}
    >
      {children}
    </Link>
  );
};

export default Button;
