import React from 'react'
import h from 'react-hyperscript'
import classNames from 'classnames'

import styles from './btnFilter.css'

const propTypes = {
  onClick: React.PropTypes.func,
  dataAttr: React.PropTypes.string,
  text: React.PropTypes.string,
  isActive: React.PropTypes.bool
}

const BtnFilter = props => {
  const { onClick, dataAttr, text, isActive } = props
  return h('button',
    {
      onClick,
      'data-props': dataAttr,
      tabIndex: '0',
      className: classNames(styles.btnFilter, { [styles.isActive]: isActive })
    },
    text
  )
}

BtnFilter.propTypes = propTypes

export default BtnFilter
