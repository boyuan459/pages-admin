import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Wrapper } from './styles'

const FormItem = Form.Item

class Login extends Component {
  render () {
    const { getFieldDecorator } = this.props.form
    return (
      <Wrapper>
        <Form>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please enter your username!' }]
            })(
              <Input placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please enter your password' }]
            })(
              <Input type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button>Log in</Button>
          </FormItem>
        </Form>
      </Wrapper>
    )
  }
}

const LoginWrapper = Form.create({ name: 'login' })(Login)

export default LoginWrapper
