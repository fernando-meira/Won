import Button from 'components/Button';

import * as S from './styles';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLink: string;
  buttonLabel: string;
  backgroundImage: string;
};

export default function Highlight({
  title,
  subtitle,
  buttonLink,
  buttonLabel,
  backgroundImage,
}: HighlightProps) {
  return (
    <S.Container backgroundImage={backgroundImage}>
      <S.Content>
        <S.Title>{title}</S.Title>

        <S.Subtitle>{subtitle}</S.Subtitle>

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Content>
    </S.Container>
  );
}
