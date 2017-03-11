
import React from 'react'

import { Heart, Laptop, Music, Add } from '../svg'
import Icon from '../reusableComponents/Icon'
import settings from '../settings'

const { accentColor, black } = settings
const year = new Date().getFullYear()

const Footer = (props) => {
  return (
    <footer className="Footer" style={{ background: props.backgroundColor }}>
      <div className="Footer-body">
        <span style={{ display: 'block', textTransform: 'uppercase' }}>Made with...</span>
        <div className="Footer-icons">
          <Icon svg={ Heart } className="Footer-Heart" color={ accentColor } size={ 40 }/>
          <Icon svg={ Add } color={ black } customStyle={{ margin: '0 0.2em' }} size={ 18 } />
          <Icon svg={ Laptop } size={ 45 } color={ black }  />
        </div>
        <div className="Footer-icon">
          <div>While enjoying some
            <Icon svg={ Music } size={ 35 } className="Footer-Music" color={ black } customStyle={{ display: 'inline-block' }} />
          </div>
        </div>
      </div>
      <div className="Footer-overlay">
        <span>© { year } Alex L the developer</span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired
}

export default Footer
