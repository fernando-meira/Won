import styled, { css } from 'styled-components';

export const TimerWrapper = styled.div`
  padding: 0.4rem;
  width: 14rem;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Button = styled.button`
  ${({ theme }) =>
    theme &&
    css`
      border: none;
      width: 4rem;
      padding: 0.4rem;
      height: 4rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      background-color: ${theme.colors.gray};

      > svg {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 4px;

        color: ${theme.colors.white};
      }
    `}
`;

export const Timer = styled.span`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`;
