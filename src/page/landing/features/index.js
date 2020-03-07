import React from 'react'
import { Row, Col } from 'antd'

import Box from 'component/Box'
import { FeatureWrapper, Title, P, Lightning, H2, Check, Web } from './styles'

const Features = () => {
  return (
    <Box direction="column">
      <H2>Awesome Features</H2>
      <Row gutter={16}>
        <Col xs={24} sm={8}>
          <FeatureWrapper direction="column" justify="center" align="center">
            <Lightning />
            <Title>Realtime</Title>
            <P>You can send and receive message from anywhere in the world instantly, everything happen in realtime.</P>
          </FeatureWrapper>
        </Col>
        <Col xs={24} sm={8}>
          <FeatureWrapper direction="column" justify="center" align="center">
            <Check />
            <Title>Simple</Title>
            <P>You can enable the chat functionality on your site by a few clicks, simplicity is in our DNA.</P>
          </FeatureWrapper>
        </Col>
        <Col xs={24} sm={8}>
          <FeatureWrapper direction="column" justify="center" align="center">
            <Web />
            <Title>Modern</Title>
            <P>This application is based on web, no need to install anything.</P>
          </FeatureWrapper>
        </Col>
      </Row>
    </Box>
  )
}

export default Features
