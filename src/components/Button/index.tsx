import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
};

export default function Button({
  children,
  size = 'medium',
  isFullWidth = false,
}: ButtonProps) {
  return (
    <S.Container size={size} isFullWidth={isFullWidth}>
      {!!children && <span>{children}</span>}
    </S.Container>
  );
}
