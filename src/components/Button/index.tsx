import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return <S.Container>{!!children && <span>{children}</span>}</S.Container>;
}
