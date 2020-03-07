import React from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'

import { Wrapper, H2 } from './styles'

const { Title, Paragraph, Text } = Typography

const FormItem = Form.Item

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
}

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!'
  },
}

const Contact = () => {
  const handleFinish = values => {
    console.log(values)
  }
  return (
    <Wrapper>
      <H2>Contact Us</H2>
      <Row>
        <Col xs={24} sm={12}>
          <Title level={3}>Answers to your questions</Title>
          <Paragraph>
            <Text>
              Drop us a comment or a question and we'll response to you.
            </Text>
          </Paragraph>
        </Col>
        <Col xs={24} sm={12}>
          <Form {...layout} name="message-form" onFinish={handleFinish} validateMessages={validateMessages}>
            <FormItem name="name" label="Name" rules={[{ required: true }]}>
              <Input size="large" />
            </FormItem>
            <FormItem name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input size="large" />
            </FormItem>
            <FormItem name="message" label="Message">
              <Input.TextArea size="large" autoSize={{ minRows: 3, maxRows: 5 }} />
            </FormItem>
            <FormItem wrapperCol={{ offset: 8, span: 8 }}>
              <Button type="default" htmlType="submit">Submit</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Contact
