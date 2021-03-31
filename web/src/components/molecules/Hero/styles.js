import styled, {css} from 'styled-components'
import theme from '../../themes'

const StyledHero = styled.section`
  width: 100%;
  height: 303px;
  display: flex;
  align-items: flex-end;
  background-position: bottom center;
  background-size: cover;
  background-color: rgba(${theme.palette.rawRgb.yellow}, 0.1);
  position: relative;
  z-index: 0;

  ${({isLandingPage}) => !isLandingPage && css`
    margin: 0 0 115px;
    &:before, &:after {
      content: '';
      width: 100%;
      height: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(90deg, rgba(${theme.palette.rawRgb.pink}, 0.25) 0%, rgba(${theme.palette.rawRgb.yellow}, 0.25) 100%);
      z-index: -1;
    }

    &:after {
      bottom: 20px;
      background: linear-gradient(90deg, rgba(${theme.palette.rawRgb.blue}, 0.25) 0%, rgba(${theme.palette.rawRgb.pink}, 0.25) 100%);
    }  
  `}

  ${({isLandingPage}) => isLandingPage && css`
    &:before {
      content: '';
      width: 100%;
      height: 86px;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyNSIgaGVpZ2h0PSI4OCIgdmlld0JveD0iMCAwIDE1MjUgODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTkyLjY3NTggODYuNDk5NkM5MC4zNCA4Ni41MzM5IDg4LjExMzMgODYuNTMyNiA4NiA4Ni40OTk2SDkyLjY3NThDMTM3LjQ5NyA4NS44NDI2IDIyMi40NzMgNzIuMTI4MSAzMTcgMTkuNDk5OEMzODQuNSAtMTguMDgxMSAzOTAgLTIuNTAwMTIgMTUyNC41IDg2LjQ5OTZIOTIuNjc1OFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNOC42NzU4MSA4Ni40OTk2QzYuMzQwMDUgODYuNTMzOSA0LjExMzMzIDg2LjUzMjYgMiA4Ni40OTk2SDguNjc1ODFDNTMuNDk3MyA4NS44NDI2IDEzOC40NzMgNzIuMTI4MSAyMzMgMTkuNDk5OEMzMDAuNSAtMTguMDgxMSAzMDYgLTIuNTAwMTIgMTQ0MC41IDg2LjQ5OTZIOC42NzU4MVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KPHBhdGggZD0iTTE0NDEgODYuOTk5OEw4LjQzMTUgODYuOTk5OUM1LjgxNjMzIDg3LjAyMDUgMy4xNzI2NyA4Ny4wMjA4IDAuNSA4Ni45OTk5SDguNDMxNUMxMzguODU0IDg1Ljk3MjYgMTk4LjQ0NSAzNC4yNzc2IDI1NCAxNi40OTk5QzMyOSAtNy41MDAxMiA1NzggMjkgMTQ0MSA4Ni45OTk4WiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjgwNS4yNSIgeTE9IjAuMzg5NjQ4IiB4Mj0iODA1LjI1IiB5Mj0iODYuNTI0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMUY2OUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGRUU2NiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSI3MjEuMjUiIHkxPSIwLjM4OTY0OCIgeDI9IjcyMS4yNSIgeTI9Ijg2LjUyNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNERBMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjREQTMiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=');
      background-position: -235px bottom;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      bottom: -2px;
      left: 0;
      @media (min-width: 1300px) {
        background-position: -200px bottom;
      }
      @media (min-width: 1350px) {
        background-position: -160px bottom;
      }
      @media (min-width: 1440px) {
        background-size: contain;
        background-position: center bottom;
        left: -120px;
      }
    }
  `}

  ${({image}) => image && css`
    background-image: url(${image});
  `}
  ${({theme}) => theme.media.md`
    height: 355px;
  `}
`

const Bubbles = styled.span`
  display: none;
  ${({theme}) => theme.media.lg`
    display: block;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    z-index: -1;
  `}
`

const StyledHeading = styled.div`
  z-index: 1;
  position: relative;
  ${({isLandingPage}) => isLandingPage ? css`
    margin-bottom: 30px;
  ` : css`
    transform: translateY(50%);
    padding: ${theme.spacings.lg} ${theme.spacings.xl};
    text-align: center;
    background-color: ${theme.palette.light};
  `}
`

const Breadcrumbs = styled.ol`
  display: flex;
  a {
    color: ${theme.palette.dark};
    span {
      color: ${theme.palette.dark};
    }
    &:last-child {
      text-decoration: none;
    }
  }
`

const BreadcrumbsDivider = styled.span`
  display: inline-block;
  margin: 0 ${theme.spacings.md};
  color: ${theme.palette.dark};

`

const Intro = styled.div`
  max-width: 414px;
  margin: ${theme.spacings.sm} auto;
  ${({isLandingPage}) => isLandingPage && css`
    margin: 0;
  `}
`

StyledHero.Heading = StyledHeading
StyledHero.Breadcrumbs = Breadcrumbs
StyledHero.BreadcrumbsDivider = BreadcrumbsDivider
StyledHero.Intro = Intro
StyledHero.Bubbles = Bubbles

export default StyledHero
