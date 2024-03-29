import styled from 'styled-components'
import theme from '../../themes'

const HeadingWithImage = styled.div`
  position: relative;

  span {
    display: inline-block;
    padding: 0 5px 0 0;
  }

  h2 {
    ${({theme}) => theme.media.sm`
      max-width: 80%;
      hyphens: initial;
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 0;

      span {
        padding: 3px 5px 3px 0;
        background-color: ${theme.palette.light};
      }
    `}
  }
`

const HeadingAsImage = styled.h2`
  margin: 0 0 ${theme.spacings.lg};
`

export {HeadingWithImage, HeadingAsImage}
