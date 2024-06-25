import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const customButton: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  className,
  variant = 'primary',
  disabled = false,
}) => {
  const baseStyle = 'px-6 py-2 rounded-full transition-colors';
  const variants = {
    primary: 'bg-[#e26a00] text-white hover:bg-[#d25c00]',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  };

  const combinedClassName = classNames(
    baseStyle,
    variants[variant],
    className,
    {
      'opacity-50 cursor-not-allowed': disabled,
    },
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={combinedClassName}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default customButton;
