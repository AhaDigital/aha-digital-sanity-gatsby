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
import ChevronRightIcon from './chevronRightIcon'
import PdfIcon from './pdfIcon'

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
    case 'chevronRight':
      return <ChevronRightIcon />
    case 'pdf':
      return <PdfIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
