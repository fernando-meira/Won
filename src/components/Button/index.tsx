import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  isFullWidth?: boolean;
  as?: React.ElementType;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
} & ButtonTypes;

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
