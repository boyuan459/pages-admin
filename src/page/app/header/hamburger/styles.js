import styled from 'styled-components'

import { media } from 'styles/media'

export const Wrapper = styled.button`
  display: none;
  ${media.phone`
    display: block;
  `}
`

export const HamburgerWrapper = styled.span`
`

export const HamburgerBox = styled.span`
  position: relative;
  display: inline-block;
  height: 17px;
  width: 25px;
`

export const HamburgerInner = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 1px;
  background-color: ${props => props.theme.black};
  transition: transform ease .15s;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 9px;
    width: 25px;
    height: 1px;
    background-color: inherit;
  }
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 17px;
    width: 25px;
    height: 1px;
    background-color: inherit;
  }

  &.active {
    transform: translate3d(0,10px,0) rotate(45deg);

    &:before {
      transform: rotate(-45deg) translate3d(-5.7px,-6px,0);
      opacity: 0;
    }
    &:after {
      transform: translate3d(0,-17px,0) rotate(90deg);
    }
  }
`
