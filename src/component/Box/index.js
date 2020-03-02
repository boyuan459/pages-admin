import { string, oneOfType, bool, number } from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { media } from 'styles/media'

const Wrapper = styled.div`
  display: flex;
  flex: ${props => props.flex || '0 1 auto'};
  align-items: ${props => props.align || 'normal'};
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => (props.flexWrap ? 'wrap' : 'nowrap')};
  height: ${props => props.height || 'auto'};
  justify-content: ${props => props.justify || 'normal'};
  ${media.tablet`
    ${props => props.responsive && `
      flex-direction: column;
    `}
  `}
`

const Box = props => {
  const { className, children, wrap, ...rest } = props
  return <Wrapper className={className} flexWrap={wrap ? 1 : 0} {...rest}>{children}</Wrapper>
}

Box.propTypes = {
  align: string,
  className: string,
  direction: string,
  flex: oneOfType([ number, string ]),
  justify: string,
  responsive: bool,
  wrap: bool,
}

export default Box
