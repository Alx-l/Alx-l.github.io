import PropTypes from 'prop-types'
import h from 'react-hyperscript'

import Icon from 'reusableComponents/icon'

import styles from './iconHeader.css'

const propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  color: PropTypes.string,
  bg: PropTypes.string,
  size: PropTypes.number
}

const IconHeader = props => {
  const { icon, size, bg, color, text } = props
  return h('div',
    { style: { backgroundColor: bg }, className: styles.root },
    h('h2', { className: styles.heading }, [
      h(Icon, { svg: icon, color, size, className: styles.icon }),
      h('span', { className: styles.text }, text)
    ])
  )
}

IconHeader.propTypes = propTypes
IconHeader.defaultProps = {
  color: '#000',
  bg: '#fff',
  size: 35
}

export default IconHeader
