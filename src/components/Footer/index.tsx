import * as S from './styles';

import Heading from '../Heading';
import Logo from 'components/Logo';

export default function Footer() {
  return (
    <S.Container>
      <Logo color="black" />

      <S.Content>
        <Heading lineBottom lineColor="secondary" size="small">
          Contact
        </Heading>

        <a href="mailto:thomwork@outlook.com">thomwork@outlook.com</a>
      </S.Content>
    </S.Container>
  );
}
