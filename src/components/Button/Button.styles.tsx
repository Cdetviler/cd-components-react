import styled from 'styled-components';
import { semanticColors } from '../../types';
import { StyledButtonProps } from './Button.types';

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${(props) =>
    props.size in props.theme.spacing.padding && props.theme.spacing.padding[props.size]};
  margin: ${(props) =>
    props.size in props.theme.spacing.margin && props.theme.spacing.margin[props.size]};
  font-size: ${(props) =>
    props.size in props.theme.fonts.sizes && props.theme.fonts.sizes[props.size]};
  border: 1px solid ${(props) => props.theme.colors.semantic.border.secondary};
  border-radius: 0.25em;
  font-family: ${(props) => props.theme.fonts.families.primary};
  font-weight: ${(props) => props.theme.fonts.weights.regular};
  color: ${(props) => props.theme.colors.grays.white};
  cursor: pointer;
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.semantic.background.primary};
  border-color: ${(props) => props.theme.colors.semantic.border.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.semantic.hover.primary};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.semantic.active.primary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.semantic.disabled.primary};
    border-color: ${(props) => props.theme.colors.semantic.disabled.primary};

    &:active,
    &:hover {
      background-color: ${(props) => props.theme.colors.semantic.disabled.primary};
    }
  }
`;

export const SecondaryButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.semantic.background.secondary};
  border-color: ${(props) => props.theme.colors.semantic.border.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.semantic.hover.secondary};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.semantic.active.secondary};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.semantic.disabled.secondary};
    border-color: ${(props) => props.theme.colors.semantic.disabled.secondary};

    &:active,
    &:hover {
      background-color: ${(props) => props.theme.colors.semantic.disabled.secondary};
    }
  }
`;

export const SuccessButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.semantic.background.success};
  border-color: ${(props) => props.theme.colors.semantic.border.success};

  &:hover {
    background-color: ${(props) => props.theme.colors.semantic.hover.success};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.semantic.active.success};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.semantic.disabled.success};
    border-color: ${(props) => props.theme.colors.semantic.disabled.success};

    &:active,
    &:hover {
      background-color: ${(props) => props.theme.colors.semantic.disabled.success};
    }
  }
`;

export const DangerButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.semantic.background.danger};
  border-color: ${(props) => props.theme.colors.semantic.border.danger};

  &:hover {
    background-color: ${(props) => props.theme.colors.semantic.hover.danger};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.semantic.active.danger};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.semantic.disabled.danger};
    border-color: ${(props) => props.theme.colors.semantic.disabled.danger};

    &:active,
    &:hover {
      background-color: ${(props) => props.theme.colors.semantic.disabled.danger};
    }
  }
`;

export const WarningButton = styled(StyledButton)`
  color: ${(props) => props.theme.colors.grays.carbon};
  background-color: ${(props) => props.theme.colors.semantic.background.warning};
  border-color: ${(props) => props.theme.colors.semantic.border.warning};

  &:hover {
    background-color: ${(props) => props.theme.colors.semantic.hover.warning};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.semantic.active.warning};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.semantic.disabled.warning};
    border-color: ${(props) => props.theme.colors.semantic.disabled.warning};

    &:active,
    &:hover {
      background-color: ${(props) => props.theme.colors.semantic.disabled.warning};
    }
  }
`;

export const InfoButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.colors.semantic.background.info};
  border-color: ${(props) => props.theme.colors.semantic.border.info};

  &:hover {
    background-color: ${(props) => props.theme.colors.semantic.hover.info};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.semantic.active.info};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.semantic.disabled.info};
    border-color: ${(props) => props.theme.colors.semantic.disabled.info};

    &:active,
    &:hover {
      background-color: ${(props) => props.theme.colors.semantic.disabled.info};
    }
  }
`;

const variants = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  success: SuccessButton,
  danger: DangerButton,
  warning: WarningButton,
  info: InfoButton,
  custom: StyledButton,
};

export const getVariant = (variant: semanticColors) =>
  variant in variants ? variants[variant] : StyledButton;
