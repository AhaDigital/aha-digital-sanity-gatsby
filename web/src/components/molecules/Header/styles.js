import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import theme from '../../themes'

const TopLevel = styled.div`
  display: none;
  background: linear-gradient(
    90deg,
    rgba(${theme.palette.rawRgb.blue}, 0.25) 0.73%,
    rgba(${theme.palette.rawRgb.pink}, 0.25) 31.75%,
    rgba(${theme.palette.rawRgb.yellow}, 0.25) 100%
  );

  ${({theme}) => theme.media.md`
    display: block;
  `}
`

const SkipToContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  > button {
    ${theme.visually.hidden}
  }

  > button:focus {
    ${theme.visually.visible}
  }
`

const Accessibility = styled.div`
  max-width: ${theme.grid.maxWidth};
  margin: 0 auto;
  padding: 0 ${theme.grid.containerPadding};
  display: flex;
  justify-content: flex-end;
`

TopLevel.SkipToContent = SkipToContent
TopLevel.Accessibility = Accessibility

const StyledLink = styled(Link)`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  padding: 8px ${theme.spacings.md};
`

const NavLevel = styled.div`
  height: 80px;
  position: static;
  border-bottom: 1px solid rgba(${theme.palette.rawRgb.dark}, 0.2);
  background-color: ${theme.palette.light};

  ${({theme}) => theme.media.md`
    position: relative;
  `}
`

const Nav = styled.div`
  width: 100%;
  padding: ${theme.spacings.lg} ${theme.grid.containerPadding} ${theme.spacings.md};
  box-sizing: border-box;
  position: absolute;
  top: -100vh;
  z-index: -1;
  transition: all ${theme.animationTime.default} ease-in-out;

  ul {
    margin: ${theme.spacings.lg} 0 30px;
  }

  ${({theme}) => theme.media.md`
    padding: 0;
    position: relative;

    nav, ul {
      margin: 0;
    }
  `}

  .navActive {
    color: ${theme.palette.blue};
    text-decoration: none;
    &:before {
      background-color: ${theme.palette.blue};
    }
  }

  ${({showNav}) => showNav && css`
    height: calc(100vh - 80px);  
    top: 80px;
    right: 0;
    background-color: ${theme.palette.light};
  `}


  ${({theme}) => theme.media.md`
    width: auto;
    max-width: ${theme.grid.maxWidth};
    margin: 0 auto;
    padding: 0 ${theme.grid.containerPadding};
    display: flex;
    justify-content: flex-end;
    position: static;
    height: auto;

    ul {
      display: flex;
      justify-content: flex-end;
    }
  `}
`

const MobileMenuButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  right: ${theme.spacings.md};
  transform: translateY(-50%);
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover, &:focus {
    svg .hamburger, svg .close {
      stroke: ${theme.palette.blue};
    }
  }
  ${({theme}) => theme.media.md`
    display: none;
  `}
`

const Wrapper = styled.header`
  background-color: ${theme.palette.light};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all ${theme.animationTime.default} ease-in-out;

  ${({foldHeader}) => foldHeader && css`
    ${({theme}) => theme.media.md`
      top: -40px;
    `}
  `}

  ${({showNav}) => showNav && css`
    ${NavLevel} {
      height: auto;
    }
  `}
`

NavLevel.Nav = Nav
NavLevel.Link = StyledLink
NavLevel.MobileMenuButton = MobileMenuButton
export { Wrapper, TopLevel, NavLevel }
