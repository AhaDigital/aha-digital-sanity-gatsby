import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'
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
            const { page: { title = null, id, slug = {}}} = item
            const link = get(slug, 'current')
            return link && title && (
              <li key={id}>
                <Link to={`/${link}/`}>{title}</Link>
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
