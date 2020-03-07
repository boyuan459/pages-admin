import React, { useState } from 'react'
import { Affix, Button } from 'antd'
import { Link } from 'react-scroll'
import kebabCase from 'lodash/kebabCase'
import get from 'lodash/get'
import map from 'lodash/map'
import { Grid } from 'react-styled-flexboxgrid'
import classname from 'classnames'

import Box from 'component/Box'
import Hamburger from './hamburger'
import { Wrapper, Logo, Links, Login, Navbar, NavbarWrapper } from './styles'

const Header = (props) => {
  const { sections, affix } = props
  const [ active, setActive ] = useState(false)
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
    <Wrapper>
      <Grid>
        <NavbarWrapper justify="space-between">
          <Box justify="space-between">
            <Logo><span>Hubis</span></Logo>
            <Hamburger active={active} onClick={() => setActive(preState => !preState)} />
          </Box>
          <Navbar className={classname({'collapsed': !active})}>
            <Links>
              {links}
            </Links>
            <Box>
              <Button type="primary">FREE TRAIL </Button>
              <Login type="primary">Login</Login>
            </Box>
          </Navbar>
        </NavbarWrapper>
      </Grid>
    </Wrapper>
    
  )
  return (
    affix ?
    (
      <Affix>
        {navbar}
      </Affix>
    ) : navbar
  )
}

export default Header
