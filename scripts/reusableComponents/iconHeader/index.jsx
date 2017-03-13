
import React from 'react'

import Icon from '../../reusableComponents/icon'

import styles from './iconHeader.css'

const IconHeader = (props) => {
  const { icon, size, bg, color, text } = props
  return (
    <div style={{ backgroundColor: bg }} className={ styles.root }>
      <h2 className={ styles.heading }>
        <Icon svg={ icon } size={ size } className={ styles.icon } color={ color } />
        <span className={ styles.text }>{ text }</span>
      </h2>
    </div>
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
