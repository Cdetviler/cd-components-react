import styled, { css } from "styled-components";
import { semanticColors } from "../../types";
import { StyledButtonProps } from "./Button.types";

export const StyledButton = styled.button<StyledButtonProps>`
    padding: ${props => props.size in props.theme.spacing.padding && props.theme.spacing.padding[props.size]};
    margin: ${props => props.size in props.theme.spacing.margin && props.theme.spacing.margin[props.size]};
    font-size: ${props => props.size in props.theme.fonts.sizes && props.theme.fonts.sizes[props.size]};
`

export const PrimaryButton = styled(StyledButton)`
    color: ${props => props.theme.colors.semantic.text.primary};
    background-color: ${props => props.theme.colors.semantic.primary};
`

export const SecondaryButton = styled(StyledButton)`
    color: ${props => props.theme.colors.semantic.text.secondary};
    background-color: ${props => props.theme.colors.semantic.secondary};
`

export const SuccessButton = styled(StyledButton)`
    color: ${props => props.theme.colors.semantic.text.success};
    background-color: ${props => props.theme.colors.semantic.success};
`

export const DangerButton = styled(StyledButton)`
    color: ${props => props.theme.colors.semantic.text.danger};
    background-color: ${props => props.theme.colors.semantic.danger};
`

export const WarningButton = styled(StyledButton)`
    color: ${props => props.theme.colors.semantic.text.warning};
    background-color: ${props => props.theme.colors.semantic.warning};
`

export const InfoButton = styled(StyledButton)`
    color: ${props => props.theme.colors.semantic.text.info};
    background-color: ${props => props.theme.colors.semantic.info};
`

const variants = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    success: SuccessButton,
    danger: DangerButton,
    warning: WarningButton,
    info: InfoButton,
    custom: StyledButton
}

export const getVariant = (variant: semanticColors) => {
    return variant in variants ? variants[variant] : StyledButton;
}