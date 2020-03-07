import React from 'react'
import { Row, Col, Button } from 'antd'

import Box from 'component/Box'
import { H2, P, Img } from './styles'

const Home = () => {
  return (
    <Row>
      <Col xs={24} sm={12}>
        <Box direction="column" justify="center">
          <H2>Easy chat for business</H2>
          <P>Simple chat application for your business, only a few clicks to enable chat function on your site.</P>
          <div>
            <Button type="primary" size="large">90 Days Free Trial</Button>
          </div>
        </Box>
      </Col>
      <Col xs={24} sm={12}>
        <Box justify="center">
          <Img src="https://res.cloudinary.com/photoshow/image/upload/v1583045644/hubis/hubis_chat-min.png" alt="hubis chat" />
        </Box>
      </Col>
    </Row>
  )
}

export default Home
