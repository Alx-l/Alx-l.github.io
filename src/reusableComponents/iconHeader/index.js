import React from 'react'
import h from 'react-hyperscript'

import Icon from 'reusableComponents/icon'

import styles from './iconHeader.css'

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

IconHeader.propTypes = {
  text: React.PropTypes.string.isRequired,
  icon: React.PropTypes.func.isRequired,
  color: React.PropTypes.string,
  bg: React.PropTypes.string,
  size: React.PropTypes.number
}

IconHeader.defaultProps = {
  color: '#000',
  bg: '#fff',
  size: 35
}

export default IconHeader
