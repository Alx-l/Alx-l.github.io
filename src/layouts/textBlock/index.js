import PropTypes from 'prop-types'
import h from 'react-hyperscript'
import classNames from 'classnames'

import styles from './textBlock.css'

const propTypes = {
  background: PropTypes.bool
}

const TextBlock = props => {
  const className = classNames(styles.root, {
    [styles.background]: props.background
  })

  return h('div', { className }, [props.children])
}

TextBlock.propTypes = propTypes

export default TextBlock
