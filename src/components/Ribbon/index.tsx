import * as S from './styles';

export type RibbonProps = {
  children: React.ReactNode;
};

export default function Ribbon({ children }: RibbonProps) {
  return <S.Container aria-label="etiqueta">{children}</S.Container>;
}
