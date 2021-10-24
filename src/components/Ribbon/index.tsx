import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';

export type RibbonProps = {
  color?: RibbonColors;
  size?: 'small' | 'normal';
  children: React.ReactNode;
};

export default function Ribbon({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) {
  return (
    <S.Container aria-label="etiqueta" color={color} size={size}>
      {children}
    </S.Container>
  );
}
