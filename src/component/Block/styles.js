import styled from 'styled-components'

import { media } from 'styles/media'

export const Wrapper = styled.div`
  background-color: ${props => (props.transparent ? 'transparent' : props.theme.white)};
  padding-top: 40px;
  padding-bottom: 40px;
  ${media.phone`
    paddint-top: 20px;
    padding-bottom: 20px;
  `}
  &:empty {
    display: none;
  }
  &.rc-greyed {
    background-color: ${props => props.theme.grayLighter};
  }
  &.no-padding {
    padding: 0;
    ${media.phone`
      padding: 0;
    `};
  }
`
