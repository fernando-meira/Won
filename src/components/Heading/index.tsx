import * as S from './styles';

export type LineColorProps = 'primary' | 'secondary';

export type HeadingProps = {
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium';
  color?: 'white' | 'black';
  children: React.ReactNode;
  lineColor?: LineColorProps;
};

export default function Heading({
  children,
  size = 'medium',
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
}: HeadingProps) {
  return (
    <S.Container
      size={size}
      color={color}
      lineLeft={lineLeft}
      lineBottom={lineBottom}
      lineColor={lineColor}
    >
      {children}
    </S.Container>
  );
}
