import React from 'react';
import { ButtonProps } from './Button.types';
import styles from './button.module.css';

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) => {
  const classNames: String[] = [className]
  classNames.push(styles[`${variant}Variant`]);
  classNames.push(styles[`${size}Size`]);
  console.log(styles.button);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
