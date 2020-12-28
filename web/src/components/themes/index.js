import media, { sizes } from './media'

const theme = {}

theme.breakpoints = sizes

theme.media = media

theme.sizes = {
  maxWidthSmall: '800px',
  maxWidth: '1280px',
  maxWidthLarge: '1920px',
  containerPadding: '10px',
  columnGutter: '10px',
}

theme.spacing = {
  px5: '5px',
  px10: '10px',
  px15: '15px',
  px20: '20px',
  px40: '40px',
  px80: '80px',
  px160: '160px',
}

theme.verticalSpacing = {
  xs: '10px',
  sm: '20px',
  md: '40px',
  lg: '80px',
  xl: '160px'
}

theme.zIndex = {
  // reserve 0-9 for all other non-overlay z-index.
}

const primaryColour = '4, 100, 200'
const secondaryColour = '41, 203, 126'
// const tertiary = ''

const light = '255, 255, 255'
const dark = '0, 0, 0'

theme.palette = {
  primary: `rgb(${primaryColour})`,
  primaryMatch: 'rgb(33, 203, 217)',
  primaryAlpha: {
    xs: `rgba(${primaryColour}, 0.1)`,
    sm: `rgba(${primaryColour}, 0.2)`,
    md: `rgba(${primaryColour}, 0.5)`,
    lg: `rgba(${primaryColour}, 0.7)`,
  },

  secondary: `rgb(${secondaryColour})`,
  secondaryMatch: 'rgb(105, 173, 179)',
  secondayAlpha: {
    xs: `rgba(${secondaryColour}, 0.1)`,
    sm: `rgba(${secondaryColour}, 0.2)`,
    md: `rgba(${secondaryColour}, 0.5)`,
    lg: `rgba(${secondaryColour}, 0.7)`,
  },

  // tertiary: `rgb(${tertiaryColour})`,
  // tertiaryMatch: 'rgb(105, 173, 179)',
  // secondayAlpha: {
  //   xs: `rgba(${tertiaryColour}, 0.1)`,
  //   sm: `rgba(${tertiaryColour}, 0.2)`,
  //   md: `rgba(${tertiaryColour}, 0.5)`,
  //   lg: `rgba(${tertiaryColour}, 0.7)`,
  // },

  light: `rgb(${light})`,
  lightAlpha: {
    xs: `rgba(${light}, 0.1)`,
    sm: `rgba(${light}, 0.2)`,
    md: `rgba(${light}, 0.5)`,
    lg: `rgba(${light}, 0.7)`,
  },

  dark: `rgb(${dark})`,
  darkAlpha: {
    xs: `rgba(${dark}, 0.1)`,
    sm: `rgba(${dark}, 0.2)`,
    md: `rgba(${dark}, 0.5)`,
    lg: `rgba(${dark}, 0.7)`,
  },

  alert: {
    success: 'rgb(255, 255, 0)',
    warning: 'rgb(0, 255, 0)',
    error: 'rgb(255, 0, 0)'
  },
}

theme.fontSizes = {
  size50: '5rem',
  size40: '4rem',
  size32: '3.2rem',
  size24: '2.4rem',
  size22: '2.2rem',
  size20: '2.2rem',
  size18: '1.8rem',
  size16: '1.6rem',
}

theme.lineHeights = {
  height70: '7rem',
  height48: '4.8rem',
  height32: '3.2rem',
  height26: '2.6rem',
  height24: '2.4rem',
  height20: '2rem',
  height18: '1.8rem',
  default: '1.5',
}

theme.fontWeights = {
  weight900: '900',
  weight700: '700',
  weight600: '600',
  weight500: '500',
  weight400: '400',
}

theme.fonts = {
  primary: 'Source Sans Pro, Roboto, sans-serif',
  secondary: 'Noto Serif, serif',
}

export default theme
