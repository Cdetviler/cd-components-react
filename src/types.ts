export type semanticColors =
  'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'custom';

export type semanticSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type fontAwesomeSizes = 'xs' | 'sm' | 'lg' | '1x' | '2x';

export interface ComponentProps {
  style?: React.CSSProperties;
  theme?: any;
}
