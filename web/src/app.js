import React, {useState, useEffect} from 'react'
import Layout from './components/organisms/layout'

const App = props => {
  const [showNav, setShowNav] = useState(false)
  const [isUserTabbing, setisUserTabbing] = useState(false)

  const handleShowNav = () => {
    setShowNav(true)
  }

  const handleHideNav = () => {
    setShowNav(false)
  }

  useEffect(() => {
    if(typeof document !== 'undefined' && !isUserTabbing) {
      document.addEventListener('keyup', (event) => {
        if (event.key === 'Tab') {
          document.body.classList.add('isTabbing')
          setisUserTabbing(true)
        }
      })
    }
  }, [isUserTabbing])

  return (
    <Layout
      {...props}
      showNav={showNav}
      onHideNav={handleHideNav}
      onShowNav={handleShowNav}
    />
  )
}

export default App
