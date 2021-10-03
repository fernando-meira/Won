import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

type WrapperProps = Pick<ButtonProps, 'size' | 'isFullWidth'>;

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
};

export const Container = styled.button<WrapperProps>`
  ${({ theme, size, isFullWidth }) => css`
    border: none;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};

    color: ${theme.colors.white};
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);

    ${!!size && containerModifiers[size](theme)};
    ${isFullWidth && containerModifiers.isFullWidth()};
  `}
`;
