import React from 'react'
import h from 'react-hyperscript'

import { pxToRemDims } from 'utils/misc'

const propTypes = {
  svg: React.PropTypes.func.isRequired,
  size: React.PropTypes.number,
  className: React.PropTypes.string,
  customStyle: React.PropTypes.objectOf(React.PropTypes.string),
  color: React.PropTypes.string
}

const Icon = props => {
  const { color, className, svg, size, customStyle } = props

  return h('div',
    {
      className,
      style: { display: 'inline-block', ...pxToRemDims(size), ...customStyle }
    },
    svg(color)
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = {
  color: '#000'
}

export default Icon
