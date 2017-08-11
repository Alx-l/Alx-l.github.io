import React, { Component } from 'react'
import h from 'react-hyperscript'
import anime from 'animejs'

import Icon from 'reusableComponents/icon'
import Animate from 'reusableComponents/Animate'
import { More, Close, Blink } from 'svg'

import styles from './cardReveal.css'

export default class CardReveal extends Component {
  state = { open: false }

  animeSettings = {
    duration: 225,
    easing: 'easeInOutQuad'
  }

  render() {
    const { cat, href, title, subTitle, footerText, iconColor, blinkIcon } = this.props

    const renderBlinkIcon =
      blinkIcon &&
      h('div', [
        h('a',
          { href, target: '_blank', style: { display: 'block' } },
          h(Icon, { svg: Blink, color: iconColor, size: 24 })
        )
      ])

    return h('div', { className: styles.root, 'data-cat': cat }, [
      h('div', { className: styles.content }, [
        h('h3', { className: styles.title }, title),
        subTitle && h('span', { className: styles.subTitle }, subTitle)
      ]),
      h('div', { className: styles.footer }, [
        h('div', { className: styles.footerText }, footerText),
        h('div', { className: styles.iconContainer }, [
          h('div', { onClick: this.handleClick, onKeyDown: this.handleKeyDown, tabIndex: '0' },
            h(Icon, { svg: More, size: 24, color: iconColor })
          ),
          renderBlinkIcon
        ])
      ]),
      this.renderInside()
    ])
  }

  renderInside() {
    const { open } = this.state
    const { iconColor, children } = this.props

    return h(Animate,
      { trigger: open, onEnter: this.onEnter, onLeave: this.onLeave, customClassName: styles.container },
      [
        h('div', [
          h('div',
            {
              className: styles.insideIcon,
              onClick: this.handleClick,
              onKeyDown: this.handleKeyDown,
              tabIndex: '0'
            },
            h(Icon, { svg: Close, color: iconColor, size: 24 })
          ),
          h('div',
            { className: styles.insideRoot, style: { overflow: 'hidden' } },
            children
          )
        ])
      ]
    )
  }

  onEnter = (el, cb) => {
    anime({
      targets: el,
      translateY: { ...this.animeSettings, value: '-100%' },
      complete: cb
    })
  }

  onLeave = (el, cb) => {
    anime({
      targets: el,
      translateY: { ...this.animeSettings, value: '100%' },
      complete: cb
    })
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = e => {
    const keycode = e.which || e.keyCode
    return keycode === 13 && this.setState({ open: !this.state.open })
  }

  static propTypes = {
    iconColor: React.PropTypes.string,
    blinkIcon: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    footerText: React.PropTypes.node,
    cat: React.PropTypes.string
  }

  static defaultProps = {
    iconColor: '#fff',
    blinkIcon: false,
    title: 'title',
    href: '',
    footerText: '',
    cat: ''
  }
}
