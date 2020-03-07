import React from 'react'
import { Typography } from 'antd'

import { Wrapper, H2 } from './styles'

const { Title, Paragraph } = Typography

const FAQ = () => {
  return (
    <Wrapper>
      <H2>FAQ</H2>
      <Typography>
        <Title level={3}>How it works</Title>
        <Paragraph>
          Hubis chat application is based on web, you only need to put following code into your site, then it should work smoothly.
          <pre><code>&lt;script id="hubis-chat-app" src="https://hubis.com/dist/bundle.js?key=API_KEY" /&gt;</code></pre>
        </Paragraph>
        <Title level={3}>What happen if trial expired</Title>
        <Paragraph>
          We provide 90 days of free trial, you can continue with your subscription with 10 USD per month if you happy with our application.
        </Paragraph>
      </Typography>
    </Wrapper>
  )
}

export default FAQ
