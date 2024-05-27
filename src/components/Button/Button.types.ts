import { ReactNode } from 'react';
import { ComponentProps, semanticColors, semanticSizes } from '../../types';

export interface ButtonProps extends ComponentProps {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children: ReactNode;
  disabled?: boolean;
  className?: String;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type ButtonSizes = 
  'sm'
  | 'md'
  | 'lg'

export type ButtonVariants =
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'

export type StyledButtonProps = {
  theme: any;
  size: semanticSizes;
  variant: semanticColors;
};
