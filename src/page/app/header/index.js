import React, { Component } from 'react'
import { Affix, Button } from 'antd'
import { Link } from 'react-scroll'
import kebabCase from 'lodash/kebabCase'
import get from 'lodash/get'
import map from 'lodash/map'
import { Grid } from 'react-styled-flexboxgrid'

import Box from 'component/Box'

import { Wrapper, Logo, Links, Login } from './styles'

class Header extends Component {
  render () {
    const { sections, affix } = this.props
    const links = map(sections, (section, i) => {
      return (
        <li className="link" key={i}>
          <Link activeClass="active" to={kebabCase(get(section, 'title', ''))} spy smooth duration={500} offset={-75}>
            <span>{section.title}</span>
          </Link>
        </li>
      )
    })
    const navbar = (
      <Box justify="space-between">
        <Logo><span>Hubis</span></Logo>
        <Links>
          {links}
        </Links>
        <Box>
          <Button type="primary">FREE TRAIL </Button>
          <Login type="primary">Login</Login>
        </Box>
      </Box>
    )
    return (
      affix ? navbar
      : (
        <Wrapper>
          <Affix>
            <Grid>
              {navbar}
            </Grid>
          </Affix>
        </Wrapper>
      )
    )
  }
}

export default Header
