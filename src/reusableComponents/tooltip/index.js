import React, { Component } from 'react'
import h from 'react-hyperscript'
import anime from 'animejs'

import Animate from 'reusableComponents/Animate'

import styles from './tooltip.css'

export default class ToolTip extends Component {
  state = { visible: false }

  animeSettings = {
    duration: 225
  }

  RAF = 0
  lastScrollYPos = 0

  render() {
    return h('span',
      {
        onClick: this.handleClick,
        onMouseEnter: this.setVisible,
        onMouseLeave: this.unsetVisible,
        onKeyDown: this.handleKeyDown,
        className: styles.root,
        tabIndex: '0'
      },
      [
        h('span',
          {
            ref: visibleText => { this.visibleText = visibleText },
            className: styles.text
          },
          this.props.children
        ),
        this.renderToolTips()
      ]
    )
  }

  renderToolTips() {
    const { onEnter, onLeave, state: { visible }, props } = this

    return h(Animate,
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

  onEnter = (el, cb) => {
    const { scrollWidth: hiddenElWidth, scrollHeight: hiddenElHeight } = el
    const {
      width: visibleTextWidth,
      top: visibleTextTop,
      left: visibleTextLeft,
      right: visibleTextRight,
      height: visibleTextHeight
    } = this.visibleText.getBoundingClientRect()
    const distanceFromTop = visibleTextTop - hiddenElHeight
    const distanceFromRight =
      window.innerWidth - (visibleTextLeft + visibleTextWidth)

    el.style.top = this.computeTop({
      distanceFromTop,
      visibleTextTop,
      visibleTextHeight,
      hiddenElHeight
    })
    el.style.left = this.computeLeft({
      hiddenElWidth,
      distanceFromRight,
      visibleTextRight,
      visibleTextLeft
    })
    el.style.marginLeft = this.computeMarginLeft({
      hiddenElWidth,
      visibleTextWidth,
      visibleTextLeft,
      distanceFromRight
    })
    el.style.transformOrigin = this.computeTransformOrigin({
      distanceFromTop,
      distanceFromRight,
      hiddenElWidth,
      visibleTextLeft,
      visibleTextWidth
    })

    anime({
      begin: () => {
        this.lastScrollYPos = window.pageYOffset
        this.handleRAF()
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
      complete: () => {
        el.style.top = 0
        el.style.left = 0
        el.style.marginLeft = 0
        window.cancelAnimationFrame(this.RAF)
        return cb()
      }
    })
  }

  setVisible = () => this.setState({ visible: true })

  unsetVisible = () => this.setState({ visible: false })

  // to handle touch devices
  handleClick = () => this.setState({ visible: !this.state.visible })

  handleKeyDown = e => {
    const keycode = e.which || e.keyCode
    return keycode === 13 && this.setState({ visible: !this.state.visible })
  }

  handleRAF = () => {
    this.lastScrollYPos !== window.pageYOffset && this.unsetVisible()
    this.RAF = window.requestAnimationFrame(this.handleRAF)
  }

  computeMarginLeft = ({
    hiddenElWidth,
    visibleTextWidth,
    visibleTextLeft,
    distanceFromRight
  }) => {
    return (hiddenElWidth - visibleTextWidth) / 2 > visibleTextLeft ||
      hiddenElWidth > distanceFromRight
      ? '0px'
      : `${-(hiddenElWidth - visibleTextWidth) / 2}px`
  }

  computeTop = ({
    distanceFromTop,
    visibleTextTop,
    visibleTextHeight,
    hiddenElHeight
  }) => {
    return distanceFromTop > 0
      ? `${visibleTextTop - hiddenElHeight}px`
      : `${visibleTextTop + visibleTextHeight}px`
  }

  computeLeft = ({
    hiddenElWidth,
    distanceFromRight,
    visibleTextRight,
    visibleTextLeft
  }) => {
    return hiddenElWidth > distanceFromRight
      ? `${visibleTextRight - hiddenElWidth}px`
      : `${visibleTextLeft}px`
  }

  computeTransformOrigin = ({
    distanceFromTop,
    distanceFromRight,
    hiddenElWidth,
    visibleTextLeft,
    visibleTextWidth
  }) => {
    if (distanceFromTop > 0) {
      return hiddenElWidth > distanceFromRight
        ? 'right bottom 0'
        : (hiddenElWidth - visibleTextWidth) / 2 > visibleTextLeft
          ? 'left bottom 0'
          : 'center bottom 0'
    } else {
      return hiddenElWidth > distanceFromRight
        ? 'right top 0'
        : (hiddenElWidth - visibleTextWidth) / 2 > visibleTextLeft
          ? 'left top 0'
          : 'center top 0'
    }
  }

  static propTypes = {
    hiddenText: React.PropTypes.string
  }

  static defaultProps = {
    hiddenText: 'add some text'
  }
}
