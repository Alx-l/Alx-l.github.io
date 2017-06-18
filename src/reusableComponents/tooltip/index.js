import React, { Component } from 'react'
import h from 'react-hyperscript'
import anime from 'animejs'

import Animate from 'reusableComponents/Animate'

import styles from './tooltip.css'

export default class ToolTip extends Component {
  state = {
    visible: false
  }

  animeSettings = {
    duration: 225
  }

  handleHoverIn = () => this.setState({ visible: true })

  handleHoverOut = () => this.setState({ visible: false })

  // to handle touch devices
  handleClick = () => this.setState({ visible: !this.state.visible })

  handleKeyDown = e => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ visible: !this.state.visible })
  }

  onEnter = (el, cb) => {
    anime({
      begin: () => {
        el.style.marginLeft = `-${el.clientWidth / 2}px`
      },
      targets: el,
      scale: {
        ...this.animeSettings,
        easing: [0.175, 0.885, 0.32, 1.275],
        value: 1
      },
      complete: cb
    })
  }

  onLeave = (el, cb) => {
    anime({
      targets: el,
      scale: { ...this.animeSettings, easing: 'easeInOutQuad', value: 0 },
      complete: cb
    })
  }

  renderToolTips() {
    const { onEnter, onLeave, state: { visible }, props } = this

    return h(
      Animate,
      {
        trigger: visible,
        onEnter,
        onLeave,
        customClassName: styles.hiddenText,
        customStyle: { transform: 'scale(0)' }
      },
      h('span', props.hiddenText)
    )
  }

  render() {
    return h(
      'span',
      {
        onClick: this.handleClick,
        onMouseEnter: this.handleHoverIn,
        onMouseLeave: this.handleHoverOut,
        onKeyDown: this.handleKeyDown,
        className: styles.root,
        tabIndex: '0'
      },
      [
        h('span', { className: styles.text }, this.props.children),
        this.renderToolTips()
      ]
    )
  }

  static propTypes = {
    hiddenText: React.PropTypes.string
  }

  static defaultProps = {
    hiddenText: 'add some text'
  }
}
