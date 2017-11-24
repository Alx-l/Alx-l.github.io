import PropTypes from 'prop-types'
import h from 'react-hyperscript'

import { pxToRemDims } from 'utils/misc'

const propTypes = {
  svg: PropTypes.func.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  customStyle: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.string
}

const Icon = props => {
  const { color, className, svg, size, customStyle } = props

  return h(`div.${ className }`,
    {
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
