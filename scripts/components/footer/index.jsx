
import React from 'react'

import { Heart, Laptop, Music, Add } from '../../svg'
import Icon from '../../reusableComponents/icon'
import settings from '../../settings'

import styles from './footer.css'

const { accentColor, black } = settings
const year = new Date().getFullYear()

const Footer = (props) => {
  return (
    <footer className={ styles.root } style={{ background: props.backgroundColor }}>
      <div className={ styles.body }>
        <span style={{ display: 'block', textTransform: 'uppercase' }}>Made with...</span>
        <div className={ styles.icons }>
          <Icon svg={ Heart } className={ styles.heart } color={ accentColor } size={ 40 }/>
          <Icon svg={ Add } color={ black } customStyle={{ margin: '0 0.2em' }} size={ 18 } />
          <Icon svg={ Laptop } size={ 45 } color={ black }  />
        </div>
        <div className={ styles.text }>
          <div>While enjoying some
            <Icon svg={ Music } size={ 35 } className={ styles.music } color={ black } customStyle={{ display: 'inline-block' }} />
          </div>
        </div>
      </div>
      <div className={ styles.overlay }>
        <span>© { year } Alex L the developer</span>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired
}

export default Footer
