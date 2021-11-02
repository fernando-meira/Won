import Button from '../Button';
import Ribbon from '../Ribbon';

import * as S from './styles';

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLink: string;
  buttonLabel: string;
  ribbon: React.ReactNode;
  ribbonSize?: 'small' | 'normal';
  ribbonColor?: 'primary' | 'secondary';
};

export default function Banner({
  image,
  title,
  ribbon,
  subtitle,
  buttonLink,
  ribbonSize,
  buttonLabel,
  ribbonColor,
}: BannerProps) {
  return (
    <S.Container>
      <S.Image src={image} role="img" aria-label={title} />

      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

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
