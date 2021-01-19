import React, {useState} from 'react'
import Layout from './components/organisms/layout'

function App (props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }

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
