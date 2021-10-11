import media from 'styled-media-query';
import styled, { css } from 'styled-components';

type MenuMobileProps = {
  isVisibleMenu: boolean;
};

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
    align-items: center;
    justify-content: flex-end;

    > div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;

export const MenuMobile = styled.nav<MenuMobileProps>`
  ${({ theme, isVisibleMenu }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    position: absolute;

    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: ${theme.colors.white};
    opacity: ${isVisibleMenu ? 1 : 0};
    transition: opacity 0.3s ease-in-out;
    pointer-events: ${isVisibleMenu ? 'all' : 'none'};
    > svg {
      top: 0;
      right: 0;
      position: absolute;

      width: 2.4rem;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};

      cursor: pointer;
    }

    ${MenuNav} {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transition: transform 0.3s ease-in-out;
      transform: ${isVisibleMenu ? 'translateY(0)' : 'translateY(3rem)'};
    }

    ${RegisterBox} {
      transition: transform 0.3s ease-in-out;
      transform: ${isVisibleMenu ? 'translateX(0)' : 'translateY(3rem)'};
    }
  `}
`;

export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`;

export const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    margin: 0.3rem ${theme.spacings.small} 0;

    text-align: center;
    text-decoration: none;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};

    &:hover {
      &::after {
        content: '';
        position: absolute;

        height: 0.3rem;

        display: block;

        animation: hoverAnimation 0.2s forwards;
        background-color: ${theme.colors.primary};
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          left: 0;
          width: 100%;
        }
      }
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    display: flex;
    align-items: center;
    flex-direction: column;

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const CreateAccount = styled.a`
  ${({ theme }) => css`
    padding-bottom: 0.3rem;

    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;
