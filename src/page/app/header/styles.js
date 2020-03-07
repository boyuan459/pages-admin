import styled from 'styled-components'
import { Button } from 'antd'

import Box from 'component/Box'
import { media } from 'styles/media'

export const NavbarWrapper = styled(Box)`
  ${media.phone`
    flex-direction: column;
  `}
`

export const Links = styled.ul`
  margin-right: 40px;
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
  ${media.phone`
    margin-right: 0;
    margin-bottom: 20px;
    li {
      width: 100%;
    }
  `}
`

export const Navbar = styled(Box)`
  ${media.phone`
    flex-direction: column;
    &.collapsed {
      display: none;
    }
  `}
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
  min-height: 75px;
  margin-bottom: 5px;
  padding: 20px 0;
  box-shadow: 0 0 3px ${props => props.theme.gray};
  background-color: ${props => props.theme.white};

  .ant-affix {
    display: block;
    background-color: ${props => props.theme.white};
    height: 75px !important;
    ${NavbarWrapper} {
      height: 75px;
      justify-content: center;
    }
  }
`

export const Login = styled(Button)`
  margin-left: 10px;
  background-color: ${props => props.theme.blue};
`
