import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

import Logo from 'components/Logo';

import * as S from './styles';

const Menu = () => (
  <S.Container>
    <S.IconWrapper aria-label="Open menu">
      <MenuIcon />
    </S.IconWrapper>

    <S.LogoWrapper aria-label="Logo">
      <Logo hideOnMobile />
    </S.LogoWrapper>

    <S.MenuGroup>
      <S.IconWrapper aria-label="Search">
        <SearchIcon />
      </S.IconWrapper>

      <S.IconWrapper aria-label="Open shopping cart">
        <ShoppingCartIcon />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Container>
);

export default Menu;
