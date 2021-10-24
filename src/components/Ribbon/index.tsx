import * as S from './styles';

export type RibbonColors = 'primary' | 'secondary';

export type RibbonProps = {
  color?: RibbonColors;
  children: React.ReactNode;
};

export default function Ribbon({ children, color = 'primary' }: RibbonProps) {
  return (
    <S.Container aria-label="etiqueta" color={color}>
      {children}
    </S.Container>
  );
}
