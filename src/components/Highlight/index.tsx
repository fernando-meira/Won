import Button from 'components/Button';

import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLink: string;
  buttonLabel: string;
};

export default function Highlight({
  title,
  subtitle,
  buttonLink,
  buttonLabel,
}: HighlightProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Subtitle>{subtitle}</S.Subtitle>

      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Container>
  );
}
