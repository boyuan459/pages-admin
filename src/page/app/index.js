import React from 'react'

import Header from './header'

const App = props => {
  const sections = [
    { title: 'Home' },
    { title: 'Features' },
    { title: 'Contact' },
  ]
  return (
    <Header sections={sections} />
  )
}

export default App
