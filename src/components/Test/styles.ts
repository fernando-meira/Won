import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) =>
    theme &&
    css`
      width: 100%;
      height: 20px;
      padding: 0 20px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${theme.colors.gray};
    `}
`;

export const Progress = styled.span<{ width: number; isChecked?: boolean }>`
  ${({ theme, width, isChecked }) =>
    theme &&
    css`
      height: 4px;
      width: ${width}%;
      /* border-radius: 4px; */

      background-color: ${isChecked
        ? theme.colors.white
        : theme.colors.darkGray};
    `}

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  /* &:not(:first-child) {
    margin-left: 4px;
  } */
`;
