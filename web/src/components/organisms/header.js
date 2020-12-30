import { Link } from 'gatsby'
import React from 'react'
import Icon from '../atoms/icon'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div>
    <Link to='/'>{siteTitle}</Link>

    <button onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger'/>
    </button>

    <nav>
      <ul>
        <li>
          <Link to='/archive/'>Archive</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
