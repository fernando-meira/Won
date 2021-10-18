import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.footer`
  ${HeadingStyles.Container} {
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: repeat(2, 1fr);

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      text-decoration: none;
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.small};
      margin-bottom: ${theme.spacings.xxsmall};
    }

    a:hover {
      text-decoration: underline;
    }
  `};
`;

export const Anchor = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.medium};

    text-align: center;
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
