import * as S from './styles';
import Image from 'next/image';

export default function Main({
  title = 'React avançado',
  description = 'TypeScript, ReactJS, Next.js e Styled Components',
}) {
  return (
    <S.Wrapper>
      <Image
        width="300"
        height="66"
        src="/img/logo.svg"
        alt="Um átomo e React Avançado escrito ao lado"
      />

      <S.Title>{title}</S.Title>

      <S.Description>{description}</S.Description>

      <S.Illustration
        width="344"
        height="300"
        src="/img/hero-illustration.svg"
        alt="Ilustração de um homem sentado em frente a um computador escrevendo códigos computacionais"
      />
    </S.Wrapper>
  );
}
