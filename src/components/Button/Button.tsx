import React from "react";
import { themeDefault } from "../Theme/themeDefault";
import { getVariant, StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({
    variant = 'custom',
    size = 'md',
    children,
    onClick = () => {},
    theme = themeDefault
}: ButtonProps) => {
    const StyledButtonComponent = getVariant(variant);
    return <StyledButtonComponent variant={variant} size={size} onClick={onClick} theme={theme}>{children}</StyledButtonComponent>
    // return <button onClick={onClick}>{children}</button>;
}

export default Button;
