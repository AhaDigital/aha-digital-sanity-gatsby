import styled, {css} from 'styled-components'
import Heading from '../../atoms/Heading'
import theme from '../../themes'

const StyledHero = styled.section`
  width: 100%;
  height: 217px;
  display: flex;
  align-items: flex-end;
  margin: 0 0 115px;
  background-position: bottom center;
  background-size: cover;
  background-color: rgba(${theme.palette.rawRgb.yellow}, 0.1);
  position: relative;
  z-index: 0;

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

  ${({image}) => image && css`
    background-image: url(${image});
  `}
  ${({theme}) => theme.media.md`
    height: 355px;
  `}
`

const StyledHeading = styled.div`
  padding: ${theme.spacings.lg} ${theme.spacings.xl};
  text-align: center;
  background-color: ${theme.palette.light};
  transform: translateY(50%);
  z-index: 1;
`

const Intro = styled.div`
  max-width: 414px;
  margin: ${theme.spacings.sm} auto;
`

StyledHero.Heading = StyledHeading
StyledHero.Intro = Intro

export default StyledHero
