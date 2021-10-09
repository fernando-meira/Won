import { useState } from 'react';
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';

import Logo from 'components/Logo';

import * as S from './styles';

const Menu = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  return (
    <S.Container>
      <S.IconWrapper
        aria-label="Open menu"
        onClick={() => setIsVisibleMenu(true)}
      >
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

      <S.MenuFull aria-hidden={!isVisibleMenu} isVisibleMenu={isVisibleMenu}>
        <CloseIcon
          aria-label="close menu"
          onClick={() => setIsVisibleMenu(false)}
        />
      </S.MenuFull>
    </S.Container>
  );
};

export default Menu;
