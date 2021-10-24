import * as S from './styles';

export type RibbonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
};

export default function Ribbon({ children, color = 'primary' }: RibbonProps) {
  return (
    <S.Container aria-label="etiqueta" color={color}>
      {children}
    </S.Container>
  );
}
