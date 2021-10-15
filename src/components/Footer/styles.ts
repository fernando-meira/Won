import styled, { css } from 'styled-components';

import Heading from '../Heading';

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`;

export const Column = styled.div``;

export const Anchor = styled.a`
  font-weight: 400;
`;

export const Copyright = styled.p``;
