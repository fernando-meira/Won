import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoints = keyof DefaultBreakpoints;

export type MediaMatchTwoProps = {
  lessThan?: breakpoints;
  greaterThan?: breakpoints;
};

export default styled.div<MediaMatchTwoProps>`
  ${({ lessThan, greaterThan }) => css`
    display: hidden;
  `}
`;
