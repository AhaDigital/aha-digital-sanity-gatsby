import styled, {css} from 'styled-components'
import theme from '../../themes'

const StyledHero = styled.section`
  width: 100%;
  height: 217px;
  background-position: bottom center;
  background-size: cover;
  background-color: rgba(${theme.palette.rawRgb.yellow}, 0.1);
  position: relative;

  ${({image}) => image && css`
    background-image: url(${image});
  `}
  ${({theme}) => theme.media.md`
    height: 355px;
  `}
`

export default StyledHero
