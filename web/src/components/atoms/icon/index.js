import React from 'react'
import HamburgerIcon from './Hamburger'
import CloseIcon from './CloseIcon'
import ArrowDownIcon from './ArrowDownIcon'
import EyeIcon from './EyeIcon'
import EyeClosedIcon from './EyeClosedIcon'
import EarClosedIcon from './EarClosedIcon'
import EarIcon from './EarIcon'
import DecoratorLeftIcon from './DecoratorLeft'
import DecoratorRightIcon from './DecoratorRight'
import AhaDigitalLogo from './AhaDigitalLogo'
import BubbleLeft from './BubbleLeft'
import BubbleRight from './BubbleRight'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'close':
      return <CloseIcon />
    case 'arrowDown':
      return <ArrowDownIcon />
    case 'eye':
      return <EyeIcon />
    case 'eyeClosed':
      return <EyeClosedIcon />
    case 'earClosed':
      return <EarClosedIcon />
    case 'ear':
      return <EarIcon />
    case 'decoratorLeft':
      return <DecoratorLeftIcon />
    case 'decoratorRight':
      return <DecoratorRightIcon />
    case 'bubbleLeft':
      return <BubbleLeft />
    case 'bubbleRight':
      return <BubbleRight />
    case 'logo':
      return <AhaDigitalLogo {...props} />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
