import React from 'react'

import ScrollElements from 'component/ScrollElements'
import Block from 'component/Block'
import Header from './header'
import Home from './home'
import Features from './features'
import FAQ from './faq'

const App = props => {
  const sections = [
    { title: 'Home' },
    { title: 'Features' },
    { title: 'FAQ' },
    { title: 'Contact' },
  ]
  return (
    <>
      <Header sections={sections} />
      <ScrollElements sections={sections}>
        <Block grey>
          <Home />
        </Block>
        <Block>
          <Features />
        </Block>
        <Block grey>
          <FAQ />
        </Block>
      </ScrollElements>
    </>
  )
}

export default App
