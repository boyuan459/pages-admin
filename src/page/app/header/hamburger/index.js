import React from 'react'
import classname from 'classnames'

import { Wrapper, HamburgerWrapper, HamburgerBox, HamburgerInner } from './styles'

const Hamburger = (props) => {
  const { active, onClick } = props
  return (
    <Wrapper onClick={onClick}>
      <HamburgerWrapper>
        <HamburgerBox>
          <HamburgerInner className={classname({ "active": active })} />
        </HamburgerBox>
      </HamburgerWrapper>
    </Wrapper>
  )
}

export default Hamburger
