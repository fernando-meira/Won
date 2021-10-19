import Button from '../Button';
import * as S from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLink: string;
  buttonLabel: string;
};

export default function Banner({
  image,
  title,
  subtitle,
  buttonLink,
  buttonLabel,
}: BannerProps) {
  return (
    <S.Container>
      <S.Image src={image} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>

        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Container>
  );
}
