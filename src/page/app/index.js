import React from 'react'
import styled from 'styled-components'

import ScrollElements from 'component/ScrollElements'
import Block from 'component/Block'
import Header from './header'
import Home from './home'
import Features from './features'
import FAQ from './faq'
import Contact from './contact'

const ContactBlock = styled(Block)`
  background-color: ${props => props.theme.brandPrimary};
`

const App = props => {
  const sections = [
    { title: 'Home' },
    { title: 'Features' },
    { title: 'FAQ' },
    { title: 'Contact' },
  ]
  return (
    <>
      <Header affix sections={sections} />
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
        <ContactBlock>
          <Contact />
        </ContactBlock>
      </ScrollElements>
    </>
  )
}

export default App
