import React, { useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'

import * as actions from 'redux/auth/action'
import { Wrapper, Title } from './styles'

const FormItem = Form.Item

function Login (props) {
  const { login, form } = props
  const { getFieldDecorator, validateFields } = form;
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        login(values)
      }
    })
  }, [])
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Pages CMS</Title>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please enter your username!" }]
          })(<Input placeholder="Username" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please enter your password" }]
          })(<Input type="password" placeholder="Password" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Log in</Button>
        </FormItem>
      </Form>
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.Auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login (user) {
      dispatch (actions.login(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
