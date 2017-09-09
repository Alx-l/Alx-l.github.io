import React, { Component } from 'react'
import h from 'react-hyperscript'
import classNames from 'classnames'
import anime from 'animejs'
import { update } from 'immupdate'

import Icon from 'reusableComponents/icon'
import Animate from 'reusableComponents/Animate'
import { Expand } from 'svg'

import styles from './collapsible.css'

const propTypes = {
  title: React.PropTypes.string.isRequired,
  popOut: React.PropTypes.bool,
  iconSize: React.PropTypes.number,
  iconColor: React.PropTypes.string,
  titleIcon: React.PropTypes.func,
  titleIconSize: React.PropTypes.number
}

export default class Collapsible extends Component {
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

    const CollapsibleClassName = classNames(styles.root, {
      popOut: popOut,
      'is-open': open,
      'is-close': !open
    })
    const expandIconClassName = classNames(styles.expandIcon, {
      'is-open': open
    })

    const renderIcon =
      titleIcon &&
      h(Icon, { svg: titleIcon, color: iconColor, className: 'icon', size: titleIconSize })

    return h('div',
      { 'aria-expanded': open, className: CollapsibleClassName },
      [
        h('div',
          {
            onKeyDown: this.handleKeyDown,
            className: styles.title,
            onClick: this.handleClick,
            tabIndex: '0'
          },
          [
            h('div', { className: styles.titleLeft }, [
              renderIcon,
              h('span', { className: 'text' }, title)
            ]),
            h('div', { className: styles.titleRight }, [
              h('div',
                { className: expandIconClassName },
                h(Icon, {
                  svg: Expand,
                  size: iconSize,
                  color: iconColor,
                  customStyle: { display: 'block' }
                })
              )
            ]),
            h('hr', {
              ref: hr => { this.hr = hr },
              style: { transform: `translateX(${hrOffsetValue})` },
              className: styles.hr
            })
          ]
        ),
        h(Animate,
          { trigger: open, onEnter, onExit, customStyle: { height: '0px' }, timeout: this.animeSettings.duration },
          h('div', { className: styles.body }, children)
        )
      ]
    )
  }

  onEnter = (el) => {
    const height = el.scrollHeight
    this.animeDuration = this.animeSettings.duration
    anime({
      begin: () => { el.style.willChange = 'height' },
      targets: el,
      height: { ...this.animeSettings, value: height },
      run: (anim) => {
        this.updateAnimeDuration(anim.currentTime)
        !this.state.open && this.pauseAnimation(anim)
      },
      complete: () => {
        el.style.height = 'auto'
        el.style.willChange = ''
        this.animateHr(true)
      }
    })
  }

  onExit = (el) => {
    this.animeDuration = this.animeSettings.duration
    anime({
      begin: () => {
        el.style.willChange = 'height'
        return this.animateHr(false)
      },
      targets: el,
      height: { ...this.animeSettings, value: 0 },
      run: (anim) => {
        this.updateAnimeDuration(anim.currentTime)
        this.state.open && this.pauseAnimation(anim)
      },
      complete: () => {
        el.style.willChange = ''
      }
    })
  }

  animateHr = isOpening => {
    const { hr, animeSettings, hrOffsetValue } = this

    isOpening
      ? anime({ targets: hr, translateX: { ...animeSettings, value: '0%' } })
      : anime({
        targets: hr,
        translateX: { ...animeSettings, value: `${hrOffsetValue}` }
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
