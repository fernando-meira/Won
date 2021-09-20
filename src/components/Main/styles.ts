import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 2.4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: #fff;
  text-align: center;
  background-color: #06092b;
`;

export const Title = styled.h1`
  margin-top: 2rem;

  font-size: 2.5rem;
`;

export const Description = styled.h2`
  margin-bottom: 2rem;

  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled(Image)`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
