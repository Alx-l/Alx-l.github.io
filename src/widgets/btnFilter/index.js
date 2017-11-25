import PropTypes from 'prop-types'
import h from 'react-hyperscript'

import styles from './btnFilter.css'

const propTypes = {
  onClick: PropTypes.func,
  dataAttr: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool
}

export const BtnFilter = props => {
  const { onClick, dataAttr, text, isActive } = props
  return h(`button.${ styles.btnFilter }.${ isActive ? styles.isActive : '' }`,
    {
      onClick,
      'data-props': dataAttr,
      tabIndex: '0'
    },
    text
  )
}

BtnFilter.propTypes = propTypes
