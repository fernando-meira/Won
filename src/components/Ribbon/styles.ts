import styled, { css, DefaultTheme } from 'styled-components';

import { ColorProps, RibbonProps } from '.';

const containerModifiers = {
  color: (theme: DefaultTheme, color: ColorProps) => css`
    background: ${theme.colors[color]};
  `,
};

export const Container = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color }) => css`
    ${color && containerModifiers.color(theme, color)}
  `}
`;
