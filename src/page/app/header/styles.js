import styled from 'styled-components'
import { Button } from 'antd'

export const Links = styled.ul`
  li {
    float: left;
    margin: 0 20px;
    font-size: 18px;
    font-weight: 500;
    a {
      color: ${props => props.theme.black};
    }
    a.active {
      color: ${props => props.theme.brandPrimary};
    }
  }
`

export const Logo = styled.div` 
  padding: 5px 0;
  span {
    height: 22px;
    line-height: 1.2;
    vertical-align: center;
    font-size: 18px;
    font-weight: 700;
  }
`

export const Wrapper = styled.div`
  height: 75px;
  margin-bottom: 5px;
  padding: 20px 0;
  box-shadow: 0 0 3px ${props => props.theme.gray};
  background-color: ${props => props.theme.white};

  .ant-affix {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px !important;
    background-color: ${props => props.theme.white};
  }
`

export const Login = styled(Button)`
  margin-left: 10px;
  background-color: ${props => props.theme.blue};
`
