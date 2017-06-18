import React from 'react'
import h from 'react-hyperscript'
import classNames from 'classnames'

import styles from './textBlock.css'

const TextBlock = props => {
  const className = classNames(styles.root, {
    [styles.background]: props.background
  })

  return h('div', { className }, [props.children])
}

TextBlock.propTypes = {
  background: React.PropTypes.bool
}

export default TextBlock
