import React from 'react'
import { Typography } from 'antd'

import { Wrapper, H2 } from './styles'

const { Title, Paragraph } = Typography

const FAQ = () => {
  return (
    <Wrapper>
      <H2>FAQ</H2>
      <Typography>
        <Title>How it works</Title>
        <Paragraph>
          Hubis chat application is based on web, you only need to put following code into your site, then it should work smoothly.
        </Paragraph>
      </Typography>
    </Wrapper>
  )
}

export default FAQ
