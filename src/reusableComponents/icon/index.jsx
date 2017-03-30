
import React from 'react'

import { pxToRemDims } from 'utils/misc'

const Icon = (props) => {
  const { color, className, svg, size, customStyle } = props

  return (
    <div
      className={ className }
      style={{ display: 'inline-block', ...pxToRemDims(size), ...customStyle }}
    >
      { svg(color) }
    </div>
  )
}

Icon.propTypes = {
  svg: React.PropTypes.func.isRequired,
  size: React.PropTypes.number,
  className: React.PropTypes.string,
  customStyle: React.PropTypes.objectOf(React.PropTypes.string),
  color: React.PropTypes.string
}

Icon.defaultProps = {
  color: '#000'
}

export default Icon
