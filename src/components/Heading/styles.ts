import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '.';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;

    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';

      left: 0;
      bottom: -1rem;
      position: absolute;

      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `,
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size }) => css`
    color: ${theme.colors[color!]};

    ${size &&
    css`
      font-size: ${theme.font.sizes.medium};
    `}

    ${size && wrapperModifiers[size](theme)};
    ${lineLeft && wrapperModifiers.lineLeft(theme)};
    ${lineBottom && wrapperModifiers.lineBottom(theme)};
  `}
`;
