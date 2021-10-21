import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  position: relative;

  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`;

export const Image = styled.div<{ src: string }>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;

    background-size: cover;
    background-image: url(${src});
    background-position: center center;
    background-color: ${theme.colors.lightGray};

    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};

    background-color: rgba(0, 0, 0, 0.7);

    ${media.greaterThan('medium')`
      position: absolute;
      left: 0;
      bottom: 0;

      padding: ${theme.spacings.large};
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
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
    margin-bottom: ${theme.spacings.xxsmall};

    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};

    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
