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
    const { scrollWidth: elWidth, scrollHeight: elHeight } = el
    const {
      width: visibleTextWidth,
      top: visibleTextTop,
      left: visibleTextLeft,
      right: visibleTextRight,
      height: visibleTextHeight
    } = this.visibleText.getBoundingClientRect()
    const distanceFromBottom =
      window.innerHeight - (visibleTextTop + visibleTextHeight)
    const distanceFromRight =
      window.innerWidth - (visibleTextLeft + visibleTextWidth)

    const computeMarginLeft = () => {
      if (
        (elWidth - visibleTextWidth) / 2 > visibleTextLeft ||
        elWidth > distanceFromRight
      ) { return '0px' }
      return `${-(elWidth - visibleTextWidth) / 2}px`
    }

    const computeTop = () => {
      if (visibleTextTop > distanceFromBottom) { return `${visibleTextTop - elHeight}px` }
      return `${visibleTextTop + visibleTextHeight}px`
    }

    const computeLeft = () => {
      if (elWidth > distanceFromRight) return `${visibleTextRight - elWidth}px`
      return `${visibleTextLeft}px`
    }

    const computeTransformOrigin = () => {
      if (visibleTextTop > distanceFromBottom) {
        if (elWidth > distanceFromRight) return 'right bottom 0'
        if ((elWidth - visibleTextWidth) / 2 > visibleTextLeft) { return 'left bottom 0' }
        return 'center bottom 0'
      } else {
        if (elWidth > distanceFromRight) return 'right top 0'
        if ((elWidth - visibleTextWidth) / 2 > visibleTextLeft) { return 'left top 0' }
        return 'center top 0'
      }
    }

    el.style.top = computeTop()
    el.style.left = computeLeft()
    el.style.marginLeft = computeMarginLeft()
    el.style.transformOrigin = computeTransformOrigin()
    anime({
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
      complete: () => {
        el.style.top = 0
        el.style.left = 0
        el.style.marginLeft = 0
        return cb()
      }
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
        h(
          'span',
          {
            ref: visibleText => {
              this.visibleText = visibleText
            },
            className: styles.text
          },
          this.props.children
        ),
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
