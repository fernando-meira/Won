import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoints = keyof DefaultBreakpoints;

export type MediaTestProps = {
  lessThan?: breakpoints;
  greaterThan?: breakpoints;
};

const mediaTestModifiers = {
  lessThan: (size: breakpoints) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,
  greaterThan: (size: breakpoints) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `,
};

export default styled.div<MediaTestProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaTestModifiers.lessThan(lessThan)};
    ${!!greaterThan && mediaTestModifiers.greaterThan(greaterThan)};
  `}
`;
