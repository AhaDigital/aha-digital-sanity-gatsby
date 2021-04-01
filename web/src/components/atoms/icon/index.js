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
import ChevronRightIcon from './ChevronRightIcon'
import ChevronDownIcon from './ChevronDownIcon'
import PdfIcon from './PdfIcon'

function Icon (props) {
  const {symbol, color = '#1F69FF'} = props
  switch (symbol) {
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
    case 'chevronRight':
      return <ChevronRightIcon color={color} />
    case 'chevronDown':
      return <ChevronDownIcon />
    case 'pdf':
      return <PdfIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
