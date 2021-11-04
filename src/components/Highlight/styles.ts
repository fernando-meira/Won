import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;

    height: 23rem;

    display: grid;

    &::after {
      content: '';
      position: absolute;

      width: 100%;
      height: 100%;

      background: rgba(0, 0, 0, 0.6);
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    text-align: right;
    z-index: ${theme.layers.base};
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};
  `}
`;
