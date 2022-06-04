import { ReactNode } from "react";
import { ComponentProps, semanticColors, semanticSizes } from "../../types";

export interface ButtonProps extends ComponentProps {
    variant?: semanticColors,
    size?: semanticSizes,
    children: ReactNode,
    onClick?:  (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void
}

export type StyledButtonProps = {
    theme: any,
    size: semanticSizes,
    variant: semanticColors,
}