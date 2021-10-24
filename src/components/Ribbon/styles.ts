import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, color }) => css`
    background: ${theme.colors[color]};
  `}
`;
