import { ComponentProps, semanticColors, semanticSizes } from '../../types';

export type variantType =
  | 'search'
  | 'close'
  | 'warning'
  | 'error'
  | 'check'
  | 'minus'
  | 'minusCircle'
  | 'plus'
  | 'plusCircle'
  | 'caretDown'
  | 'caretUp'
  | 'caretRight'
  | 'caretLeft'
  | 'tripleLines'
  | 'question';

export interface IconProps extends ComponentProps {
  variant: variantType;
  size?: semanticSizes;
  color?: semanticColors;
}
