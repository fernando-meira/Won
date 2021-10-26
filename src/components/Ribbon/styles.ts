import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { RibbonColors, RibbonProps } from '.';

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background: ${theme.colors[color]};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  small: (theme: DefaultTheme) => css`
    right: -1.5rem;

    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;

    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;

      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,

  normal: (theme: DefaultTheme) => css`
    right: -2rem;

    height: 3.6rem;
    padding: 0 ${theme.spacings.small};

    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;

      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
};

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};

    display: flex;
    align-items: center;

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    &::before {
      right: 0;
      content: '';
      position: absolute;

      border-style: solid;
      border-left-width: 0rem;
      border-bottom-width: 1rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    ${!!color && containerModifiers.color(theme, color)};
    ${!!size && containerModifiers[size](theme)};
  `}
`;
