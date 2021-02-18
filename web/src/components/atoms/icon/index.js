import React from 'react'
import HamburgerIcon from './hamburger'
import CloseIcon from './closeIcon'
import ArrowDownIcon from './arrowDownIcon'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'close':
      return <CloseIcon />
    case 'arrow-down':
      return <ArrowDownIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
