import { Component } from 'react'
import PropTypes from 'prop-types'
import h from 'react-hyperscript'

import { Icon } from 'reusableComponents/icon'
import { Animate } from 'reusableComponents/Animate'
import { Expand } from 'svg'
import { className, switchClasses } from 'utils/misc'

import styles from './collapsible.css'

const propTypes = {
  title: PropTypes.string.isRequired,
  popOut: PropTypes.bool,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  titleIcon: PropTypes.func,
  titleIconSize: PropTypes.number
}

export class Collapsible extends Component {
  state = { open: false }

  render() {
    const {
      state: { open },
      props: { popOut, title, titleIcon, iconSize, titleIconSize, iconColor, children },
      onEnter, onExit } = this

    const CollapsibleClassName = className(`${ styles.root }
      .${ popOut && styles.popOut }
      .${ open && styles.isOpen }`)

    const expandIconClassName = className(`${ styles.expandIcon }.${ open && styles.isOpen }`)

    const renderIcon =
      titleIcon &&
      h(Icon, { svg: titleIcon, color: iconColor, className: styles.icon, size: titleIconSize })

    return h(`div.${ CollapsibleClassName }`,
      { 'aria-expanded': open },
      [
        h(`div.${ styles.title }`,
          {
            onKeyDown: this.handleKeyDown,
            onClick: this.handleClick,
            tabIndex: '0'
          },
          [
            h(`div.${ styles.titleLeft }`, [
              renderIcon,
              h(`span.${ styles.text }`, title)
            ]),
            h(`div.${ styles.titleRight }`, [
              h(`div.${ expandIconClassName }`, {},
                h(Icon, {
                  svg: Expand,
                  size: iconSize,
                  color: iconColor,
                  className: 'u-block'
                })
              )
            ]),
            h(`hr.${ styles.hr }`, {
              ref: hr => { this.hr = hr }
            })
          ]
        ),
        h(Animate,
          { trigger: open, onEnter, onExit, timeout: 225 },
          h('div', { className: styles.body }, children)
        )
      ]
    )
  }

  handleHrAnimation = (isOpen) => {
    if (isOpen) {
      switchClasses(this.hr, [styles.slideIn], [styles.slideOut])
    }
  }

  onEnter = (el) => {
    switchClasses(el, [styles.isMounting, styles.onEnter], [styles.onLeave])
    el.addEventListener('animationend', () => this.handleHrAnimation(this.state.open), { once: true })
  }

  onExit = (el) => {
    switchClasses(el, [styles.onLeave], [styles.onEnter])
    switchClasses(this.hr, [styles.slideOut], [styles.slideIn])
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = e => {
    const keycode = e.which || e.keyCode
    return keycode === 13 && this.setState({ open: !this.state.open })
  }
}

Collapsible.propTypes = propTypes
Collapsible.defaultProps = {
  popOut: false,
  iconSize: 24,
  iconColor: '#000',
  titleIconSize: 24
}
