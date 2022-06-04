type semanticColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'custom';
type semanticSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type {
    semanticColors,
    semanticSizes
}

export interface ComponentProps {
    style: React.CSSProperties,
    theme: any
}