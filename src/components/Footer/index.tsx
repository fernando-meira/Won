import * as S from './styles';

import Heading from '../Heading';
import Logo from 'components/Logo';

export default function Footer() {
  return (
    <S.Container>
      <Logo color="black" />

      <S.Content>
        <S.Column>
          <Heading lineBottom lineColor="secondary" size="small">
            Contact
          </Heading>

          <nav>
            <S.Anchor href="mailto:thomwork@outlook.com">
              thomwork@outlook.com
            </S.Anchor>

            <S.Anchor href="tel:15998266793">+55 15 998266793</S.Anchor>
          </nav>
        </S.Column>

        <S.Column>
          <Heading lineBottom lineColor="secondary" size="small">
            Follow us
          </Heading>

          <nav>
            <S.Anchor href="#">Instagram</S.Anchor>

            <S.Anchor href="#">Twitter</S.Anchor>

            <S.Anchor href="#">YouTube</S.Anchor>

            <S.Anchor href="#">Facebook</S.Anchor>
          </nav>
        </S.Column>

        <S.Column>
          <Heading lineBottom lineColor="secondary" size="small">
            Links
          </Heading>

          <nav>
            <S.Anchor href="#">Loja</S.Anchor>

            <S.Anchor href="#">Explorar</S.Anchor>

            <S.Anchor href="#">Buscar</S.Anchor>

            <S.Anchor href="#">FAQ</S.Anchor>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Location
          </Heading>

          <span>Ana Maria Ferreira Baltazar</span>

          <span>750, Bloco 11, Apto.204</span>

          <span>Itapetininga, SP</span>
        </S.Column>
      </S.Content>
    </S.Container>
  );
}
