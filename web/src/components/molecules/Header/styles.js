import styled, { css } from 'styled-components'
import theme from '../../themes'

const Wrapper = styled.header`
  position: relative;
  z-index: 10;
`

const TopLevel = styled.div`
  background: linear-gradient(
    90deg,
    rgba(${theme.palette.rawRgb.blue}, 0.25) 0.73%,
    rgba(${theme.palette.rawRgb.pink}, 0.25) 31.75%,
    rgba(${theme.palette.rawRgb.yellow}, 0.25) 100%
  );
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

const TopLevelAccessibility = styled.div`
  max-width: ${theme.grid.maxWidth};
  margin: 0 auto;
  padding: 0 ${theme.grid.containerPadding};
  display: flex;
  justify-content: flex-end;
`

export { Wrapper, TopLevel, SkipToContent, TopLevelAccessibility }
