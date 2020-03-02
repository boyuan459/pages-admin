import { bool, node, string } from 'prop-types'
import React from 'react'
import { Grid } from 'react-styled-flexboxgrid'
import classnames from 'classnames'

import { Wrapper } from './styles'

const Block = props => {
  const { children, className, grey, full, noPadding, transparent } = props
  if (!children) return null
  const content = full ? children : <Grid>{children}</Grid>
  return (
    <Wrapper transparent={transparent} className={classnames('rc-block', { 'rc-greyed': grey, 'no-padding': noPadding }, className)}>
      {content}
    </Wrapper>
  )
}

Block.propTypes = {
  children: node,
  className: string,
  full: bool,
  grey: bool,
  noPadding: bool,
  transparent: bool,
}

export default Block
