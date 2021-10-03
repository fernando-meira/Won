import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoints = keyof DefaultBreakpoints;

type MediaMatchTwoProps = {
  lessThan?: breakpoints;
  greaterThan?: breakpoints;
};

const mediaMatchTwoModifiers = {
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

export default styled.div<MediaMatchTwoProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchTwoModifiers.lessThan(lessThan)};
    ${!!greaterThan && mediaMatchTwoModifiers.greaterThan(greaterThan)};
  `}
`;
