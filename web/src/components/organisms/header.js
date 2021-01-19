import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Icon from '../atoms/icon'

const Header = ({menu, onHideNav, onShowNav, showNav, siteTitle}) => (
  <div>
    <Link to='/'>{siteTitle}</Link>

    <button onClick={showNav ? onHideNav : onShowNav}>
      <Icon symbol='hamburger'/>
    </button>

    <nav>
      <ul>
        {
          menu.map(item => {
            const { page: { title = null, slug: { current: linkTo = null }} } = item
            return linkTo && title && (
              <li>
                <Link to={`/${linkTo}/`}>{title}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  </div>
)

export default Header

Header.defaultProps = {
  menu: {},
}
/*
Header.propTypes = {
  menu: PropTypes.shape({})
}*/
