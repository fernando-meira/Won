import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HighlightProps } from '.';

type ContainerProps = Pick<HighlightProps, 'backgroundImage'>;

export const Container = styled.section<ContainerProps>`
  ${({ theme, backgroundImage }) => css`
    position: relative;

    height: 23rem;

    display: grid;

    background-size: cover;
    background-position: center center;
    background-image: url(${backgroundImage});

    &::after {
      content: '';
      position: absolute;

      width: 100%;
      height: 100%;

      background: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    text-align: right;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      
      align-self: end;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
