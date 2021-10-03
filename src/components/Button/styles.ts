import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'isFullWidth'>;

const containerModifiers = {
  isFullWidth: () => css`
    width: 100%;
  `,
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  withIcon: (theme: DefaultTheme) => css`
    align-items: center;
    display: inline-flex;
    justify-content: center;

    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
};

export const Container = styled.button<WrapperProps>`
  ${({ theme, size, isFullWidth, hasIcon }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    cursor: pointer;
    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);

    ${!!size && containerModifiers[size](theme)};
    ${hasIcon && containerModifiers.withIcon(theme)};
    ${isFullWidth && containerModifiers.isFullWidth()};
  `}
`;
