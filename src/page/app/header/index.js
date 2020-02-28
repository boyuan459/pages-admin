import React, { Component } from 'react'
import { Affix, Button } from 'antd'
import { Link } from 'react-scroll'
import kebabCase from 'lodash/kebabCase'
import get from 'lodash/get'
import map from 'lodash/map'
import { Grid } from 'react-styled-flexboxgrid'

import { Wrapper, Logo, Links, Li, Box } from './styles'

class Header extends Component {
  render () {
    const { sections, affix } = this.props
    const links = map(sections, (section, i) => {
      return (
        <Li className="link" key={i}>
          <Link activeClass="active" to={kebabCase(get(section, 'title', ''))} spy smooth duration={500}>
            <span>{section.title}</span>
          </Link>
        </Li>
      )
    })
    const navbar = (
      <Box>
        <Logo>Hubis</Logo>
        <Links>
          {links}
        </Links>
        <Button type="primary">FREE TRAIL </Button>
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
