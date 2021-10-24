import styled, { css, DefaultTheme } from 'styled-components';

import { RibbonColors, RibbonProps } from '.';

const containerModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background: ${theme.colors[color]};
  `,
};

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color }) => css`
    ${color && containerModifiers.color(theme, color)}
  `}
`;
