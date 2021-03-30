import styled from 'styled-components'
import theme from '../../themes'

const StyledFooter = styled.footer`
  margin-top: ${theme.spacings.xxl};
`

const ContactAlternative = styled.span`
  display: block;
  a, a span {
    color: ${theme.palette.blue};
    display: block;
  }

  ${({theme}) => theme.media.md`
    a, a span {
      display: inline-block;
    }
  `}
`

const Bottom = styled.section`
  margin-top: ${theme.spacings.xxl};
  padding: ${theme.spacings.md} 0 ${theme.spacings.xl} 0;
  background: linear-gradient(
    90deg,
    rgba(${theme.palette.rawRgb.blue}, 0.25) 0.73%,
    rgba(${theme.palette.rawRgb.pink}, 0.25) 31.75%,
    rgba(${theme.palette.rawRgb.yellow}, 0.25) 100%
  );
`

StyledFooter.ContactAlternative = ContactAlternative
StyledFooter.Bottom = Bottom

export default StyledFooter
