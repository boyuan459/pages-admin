import React from 'react'
import { array } from 'prop-types'
import { Element } from 'react-scroll'
import { get, kebabCase, map, compact } from 'lodash'

const ScrollElements = props => {
  const { children, sections } = props
  return map(compact(children), (child, i) => {
    const name = kebabCase(get(sections, `${i}.title`, ''))
    console.log('name', name)
    return (
      <Element name={name} key={i}>
        {child}
      </Element>
    )
  })
}

ScrollElements.propTypes = {
  sections: array,
  children: array,
}

export default ScrollElements
