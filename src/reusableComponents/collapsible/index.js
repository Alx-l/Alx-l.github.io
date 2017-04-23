
import React, { Component } from 'react'
import h from 'react-hyperscript'
import classNames from 'classnames'
import anime from 'animejs'

import Icon from 'reusableComponents/icon'
import Animate from 'reusableComponents/Animate'
import { Expand } from 'svg'

import styles from './collapsible.css'

export default class Collapsible extends Component {

  state = {
    open: false
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ open: !this.state.open })
  }

  animateHr = () => {
    const { state: { open }, hr } = this

    if (open) anime({ targets: hr, translateX: { ...animeSettings, value: '0%' } })
    else anime({ targets: hr, translateX: { ...animeSettings, value: `${hrOffsetValue}` } })
  }

  onEnter = (el, cb) => {
    const height = el.scrollHeight
    anime({
      begin: () => el.style.willChange = 'height',
      targets: el,
      height: { ...animeSettings, value: height },
      complete: () => {
        el.style.height = 'auto'
        el.style.willChange = ''
        this.animateHr()
        return cb()
      },
    })
  }

  onLeave = (el, cb) => {
    anime({
      begin: () => {
        el.style.willChange = 'height'
        return this.animateHr()
      },
      targets: el,
      height: { ...animeSettings, value: 0 },
      complete: () => {
        el.style.willChange = ''
        return cb()
      }
    })
  }

  render() {
    const { state: { open }, props: { popOut, title, titleIcon, iconSize, titleIconSize, iconColor, children }, onEnter, onLeave } = this
    const Collapsible_cn = classNames(styles.root, {
      'popOut': popOut,
      'is-open': open,
      'is-close': !open
    })
    const expandIcon_cn = classNames(styles.expandIcon, {
      'is-open': open
    })

    const renderIcon = titleIcon && (
      h(Icon, { svg: titleIcon, color: iconColor, className: 'icon', size: titleIconSize })
    )

    return (
      h('div', { 'aria-expanded': open, className: Collapsible_cn }, [
        h('div', { onKeyDown: this.handleKeyDown, className: styles.title, onClick: this.handleClick, tabIndex: '0' }, [
          h('div', { className: styles.titleLeft }, [
            renderIcon, h('span', { className: 'text' }, title)
          ]),
          h('div', { className: styles.titleRight }, [
            h('div', { className: expandIcon_cn },
              h(Icon, { svg: Expand, size: iconSize, color: iconColor, customStyle: { display: 'block' } })
            )
          ]),
          h('hr', { ref: hr => this.hr = hr,
            style: { transform: `translateX(${hrOffsetValue})` }, className: styles.hr }
          )
        ]),
        h(Animate, { trigger: open, onEnter, onLeave, customStyle: { height: '0px' } },
          h('div', { className: styles.body, style: { padding: '16px' } }, children)
        )
      ])
    )
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    popOut: React.PropTypes.bool,
    iconSize: React.PropTypes.number,
    iconColor: React.PropTypes.string,
    titleIcon: React.PropTypes.func,
    titleIconSize: React.PropTypes.number
  }

  static defaultProps = {
    popOut: false,
    iconSize: 24,
    iconColor: '#000',
    titleIconSize: 24
  }
}

const animeSettings = { duration: 225 , easing: 'easeInOutQuad' }
const hrOffsetValue = '-120%'