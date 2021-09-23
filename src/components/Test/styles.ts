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

export const Progress = styled.span<{ width: number; isChecked: boolean }>`
  ${({ theme, width, isChecked }) =>
    theme &&
    css`
      height: 4px;
      width: ${width}%;
      border-radius: 4px;

      background-color: ${isChecked
        ? theme.colors.white
        : theme.colors.darkGray};
    `}

  &:not(:first-child) {
    margin-left: 4px;
  }
`;
