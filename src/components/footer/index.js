
import React from 'react'

import h from 'react-hyperscript'

import { Heart, Laptop, Music, Add } from 'svg'
import Icon from 'reusableComponents/icon'
import settings from 'settings'

import styles from './footer.css'

const { accentColor, black } = settings
const year = new Date().getFullYear()

const Footer = (props) => {
  return (
    h('footer', { className: styles.root, style: { background: props.backgroundColor } }, [
      h('div', { className: styles.body }, [
        h('span', { style: { display: 'block', textTransform: 'uppercase' } }, 'Made with...'),
        h('div', { className: styles.icons }, [
          h(Icon, { svg: Heart, className: styles.heart, color: accentColor, size: 40 }),
          h(Icon, { svg: Add, customStyle: { margin: '0 0.2em' }, color: black, size: 18 }),
          h(Icon, { svg: Laptop, color: black, size: 45 }),
        ]),
        h('div', { className: styles.text }, [
          h('div', {}, 'While enjoying some',
            h(Icon, { svg: Music, size: 35, className: styles.music, color: black, customStyle: { display: 'inline-block' } })
          )
        ])
      ]),
      h('div', { className: styles.overlay }, h('span', {}, `© ${ year } Alex L the developer`))
    ])
  )
}

Footer.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired
}

export default Footer
