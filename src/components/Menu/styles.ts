import media from 'styled-media-query';
import styled, { css } from 'styled-components';

export const Container = styled.menu`
  ${({ theme }) => css`
    position: relative;

    padding: ${theme.spacings.small} 0;

    display: flex;
    align-items: center;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: 2.4rem;
    height: 2.4rem;

    cursor: pointer;
    color: ${theme.colors.white};
  `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;

type MenuFullProps = {
  isVisibleMenu: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ isVisibleMenu }) => css`
    opacity: ${isVisibleMenu ? 1 : 0};
  `}
`;
