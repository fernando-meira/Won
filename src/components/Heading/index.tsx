import * as S from './styles';

export type HeadingProps = {
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
  color?: 'white' | 'black';
  children: React.ReactNode;
};

export default function Heading({
  children,
  size = 'medium',
  color = 'black',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) {
  return (
    <S.Container
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
    >
      {children}
    </S.Container>
  );
}
