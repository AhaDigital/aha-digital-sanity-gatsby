import React from 'react'
import HamburgerIcon from './hamburger'
import CloseIcon from './closeIcon'
import ArrowDownIcon from './arrowDownIcon'
import EyeIcon from './eyeIcon'
import EyeClosedIcon from './eyeClosedIcon'
import EarClosedIcon from './earClosedIcon'
import EarIcon from './earIcon'
import DecoratorLeftIcon from './decoratorLeft'
import DecoratorRightIcon from './decoratorRight'
import AhaDigitalLogo from './ahaDigitalLogo'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'close':
      return <CloseIcon />
    case 'arrow-down':
      return <ArrowDownIcon />
    case 'eye':
      return <EyeIcon />
    case 'eye-closed':
      return <EyeClosedIcon />
    case 'ear-closed':
      return <EarClosedIcon />
    case 'ear':
      return <EarIcon />
    case 'decorator-left':
      return <DecoratorLeftIcon />
    case 'decorator-right':
      return <DecoratorRightIcon />
    case 'logo':
      return <AhaDigitalLogo {...props} />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
