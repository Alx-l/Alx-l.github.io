import { Component } from 'react'
import PropTypes from 'prop-types'
import h from 'react-hyperscript'
import anime from 'animejs'
import { update } from 'space-lift'

import { Icon } from 'reusableComponents/icon'
import { Animate } from 'reusableComponents/Animate'
import { Expand } from 'svg'
import { className } from 'utils/misc'

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

  defaultAnimeDuration = 225

  animeDuration = this.defaultAnimeDuration

  animeSettings = { duration: this.defaultAnimeDuration, easing: 'easeInOutQuad' }

  hrOffsetValue = '-120%'

  render() {
    const {
      state: { open },
      props: { popOut, title, titleIcon, iconSize, titleIconSize, iconColor, children },
      onEnter, onExit, hrOffsetValue } = this

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
              ref: hr => { this.hr = hr },
              style: { transform: `translateX(${ hrOffsetValue })` }
            })
          ]
        ),
        h(Animate,
          { trigger: open, onEnter, onExit, timeout: this.animeSettings.duration },
          h('div', { className: styles.body }, children)
        )
      ]
    )
  }

  onEnter = (el) => {
    el.classList.add(styles.onEnter)
    const height = el.scrollHeight
    this.animeDuration = this.animeSettings.duration
    el.style.height = '0px'

    anime({
      targets: el,
      height: { ...this.animeSettings, value: height },
      run: (anim) => {
        this.updateAnimeDuration(anim.currentTime)
        !this.state.open && this.pauseAnimation(anim)
      },
      complete: () => {
        el.style.height = 'auto'
        this.animateHr(true)
      }
    })
  }

  onExit = (el) => {
    this.animeDuration = this.animeSettings.duration
    anime({
      begin: () => {
        return this.animateHr(false)
      },
      targets: el,
      height: { ...this.animeSettings, value: 0 },
      run: (anim) => {
        this.updateAnimeDuration(anim.currentTime)
        this.state.open && this.pauseAnimation(anim)
      }
    })
  }

  animateHr = isOpening => {
    const { hr, animeSettings, hrOffsetValue } = this

    isOpening
      ? anime({ targets: hr, translateX: { ...animeSettings, value: '0%' } })
      : anime({
        targets: hr,
        translateX: { ...animeSettings, value: `${ hrOffsetValue }` }
      })
  }

  updateAnimeDuration = (currentTime) => {
    this.animeSettings = update(this.animeSettings, {
      duration: this.defaultAnimeDuration - (this.animeDuration - currentTime)
    })
  }

  pauseAnimation = (anim) => anim.pause()

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
