import styled from 'styled-components'
import { RiseOutlined, CheckCircleOutlined, ChromeOutlined } from '@ant-design/icons'

import Box from 'component/Box'

export const H2 = styled.h2`
  margin: 30px 0;
  text-align: center;
  font-size: 30px;
`

export const FeatureWrapper = styled(Box)`
  height: 265px;
  padding: 40px 20px;
  border-radius: 5px;
  background-color: ${props => props.theme.grayLight};
`

export const Title = styled.h3`
  margin: 20px 0;
`

export const P = styled.p`
`

export const Lightning = styled(RiseOutlined)`
  font-size: 32px;
  color: ${props => props.theme.brandPrimary};
`

export const Check = styled(CheckCircleOutlined)`
  font-size: 32px;
  color: ${props => props.theme.brandPrimary};
`

export const Web = styled(ChromeOutlined)`
  font-size: 32px;
  color: ${props => props.theme.brandPrimary};
`
