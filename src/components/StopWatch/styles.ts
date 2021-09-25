import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ButtonWrapper = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const TimerWrapper = styled.div`
  padding: 0.4rem;
  width: 10rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Button = styled.button`
  ${({ theme }) =>
    theme &&
    css`
      width: 4rem;
      height: 4rem;
      border: none;
      padding: 0.4rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      background-color: transparent;

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
