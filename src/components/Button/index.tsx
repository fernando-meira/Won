import React from 'react';
import * as S from './styles';

export type ButtonProps = {
  isFullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  icon,
  children,
  size = 'medium',
  isFullWidth = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      {...rest}
      size={size}
      hasIcon={!!icon}
      isFullWidth={isFullWidth}
    >
      {!!icon && icon}

      {!!children && <span>{children}</span>}
    </S.Container>
  );
}
