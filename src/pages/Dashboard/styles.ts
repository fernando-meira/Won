import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.black};
`;
