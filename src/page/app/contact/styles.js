import styled from 'styled-components'

import Box from 'component/Box'

export const Wrapper = styled.div`
  h2, h3, .ant-typography, label {
    color: ${props => props.theme.white};
  }
`

export const H2 = styled.h2`
  margin: 30px 0;
  text-align: center;
  font-size: 30px;
`
