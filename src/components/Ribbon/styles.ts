import styled, { css, DefaultTheme } from 'styled-components';

import { RibbonColors, RibbonProps } from '.';

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background: ${theme.colors[color]};
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.medium};
  `,
};

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!size && containerModifiers[size](theme)};
    ${!!color && containerModifiers.color(theme, color)};
  `}
`;
