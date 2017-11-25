import PropTypes from 'prop-types'
import h from 'react-hyperscript'

import styles from './textBlock.css'

const propTypes = {
  background: PropTypes.bool
}

export const TextBlock = props => {
  const className = `${ styles.root }.${ props.background ? styles.background : '' }`

  return h(`div.${ className }`, [props.children])
}

TextBlock.propTypes = propTypes
