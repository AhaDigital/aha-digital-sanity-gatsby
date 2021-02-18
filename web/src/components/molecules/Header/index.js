import React, { useRef, useLayoutEffect, useState } from 'react'
import { Link } from 'gatsby'
import get from 'lodash.get'
import Icon from '../../atoms/icon'

const Header = ({menu, onHideNav, onShowNav, toContentFocus, showNav, siteTitle}) => {
  const toContentRef = useRef(null)
  const [toContentTriggered, setToContentTriggered] = useState(false)

  useLayoutEffect(() => {
    if(typeof window !== 'undefined' && toContentTriggered) {
      toContentRef.current.blur()
      toContentFocus()
      setToContentTriggered(false)
    }
  }, [toContentTriggered])

  return (
    <header>
      <div>
        <button ref={toContentRef} name="toContent" onClick={() => setToContentTriggered(true)}>
          <Icon symbol='arrow-down'/>
          Till huvudinnehåll
        </button>
        top menu
      </div>
      <div>
        <Link to='/'>{siteTitle}</Link>
        <nav aria-label="Huvudmeny">
          <ul role="menubar" aria-label="Huvudmeny">
            {
              menu.map(item => {
                const { page: { title = null, id, slug = {}}} = item
                const link = get(slug, 'current')
                return link && title && (
                  <li key={id} role="none">
                    <Link
                      to={`/${link}/`}
                      activeStyle={{ color: "red" }}
                      role="menuitem"
                      >
                        {title}
                      </Link>
                  </li>
                )
              })
            }
          </ul>
          <button onClick={showNav ? onHideNav : onShowNav}>
            {
              showNav ? (
                <Icon symbol='close'/>
              ) : (
                <Icon symbol='hamburger'/>
              )
            }
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

Header.defaultProps = {
  menu: {},
}
