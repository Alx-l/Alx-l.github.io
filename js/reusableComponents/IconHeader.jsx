
import React from 'react'
// require styles from '_IconHeader.styl'

import Icon from '../reusableComponents/Icon'

const IconHeader = (props) => {
  const { icon, size, bg, color, text } = props
  return (
    <div style={{ backgroundColor: bg }} className='IconHeader'>
      <h2 className='IconHeader-heading'>
        <Icon svg={ icon } size={ size } className='IconHeader-icon' color={ color } />
        <span className='IconHeader-text'>{ text }</span>
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
