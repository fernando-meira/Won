import * as S from './styles';

export type ButtonProps = {
  isFullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

export default function Button({
  icon,
  children,
  size = 'medium',
  isFullWidth = false,
}: ButtonProps) {
  return (
    <S.Container size={size} isFullWidth={isFullWidth} hasIcon={!!icon}>
      {!!icon && icon}

      {!!children && <span>{children}</span>}
    </S.Container>
  );
}
