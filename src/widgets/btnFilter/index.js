import PropTypes from 'prop-types'
import h from 'react-hyperscript'
import classNames from 'classnames'

import styles from './btnFilter.css'

const propTypes = {
  onClick: PropTypes.func,
  dataAttr: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool
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
