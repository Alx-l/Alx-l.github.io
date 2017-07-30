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

  RAF = 0
  lastScrollYPos = 0

  setVisible = () => this.setState({ visible: true })

  unsetVisible = () => this.setState({ visible: false })

  // to handle touch devices
  handleClick = () => this.setState({ visible: !this.state.visible })

  handleKeyDown = e => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ visible: !this.state.visible })
  }

  handleRAF = () => {
    if (this.lastScrollYPos !== window.scrollY) {
      this.unsetVisible()
    }
    this.RAF = window.requestAnimationFrame(this.handleRAF)
  }

  computeMarginLeft = ({
    hiddenElWidth,
    visibleTextWidth,
    visibleTextLeft,
    distanceFromRight
  }) => {
    if (
      (hiddenElWidth - visibleTextWidth) / 2 > visibleTextLeft ||
      hiddenElWidth > distanceFromRight
    ) {
      return '0px'
    }
    return `${-(hiddenElWidth - visibleTextWidth) / 2}px`
  }

  computeTop = ({
    distanceFromTop,
    visibleTextTop,
    visibleTextHeight,
    hiddenElHeight
  }) => {
    if (distanceFromTop > 0) {
      return `${visibleTextTop - hiddenElHeight}px`
    }
    return `${visibleTextTop + visibleTextHeight}px`
  }

  computeLeft = ({
    hiddenElWidth,
    distanceFromRight,
    visibleTextRight,
    visibleTextLeft
  }) => {
    if (hiddenElWidth > distanceFromRight) { return `${visibleTextRight - hiddenElWidth}px` }
    return `${visibleTextLeft}px`
  }

  computeTransformOrigin = ({
    distanceFromTop,
    distanceFromRight,
    hiddenElWidth,
    visibleTextLeft,
    visibleTextWidth
  }) => {
    if (distanceFromTop > 0) {
      if (hiddenElWidth > distanceFromRight) return 'right bottom 0'
      if ((hiddenElWidth - visibleTextWidth) / 2 > visibleTextLeft) {
        return 'left bottom 0'
      }
      return 'center bottom 0'
    } else {
      if (hiddenElWidth > distanceFromRight) return 'right top 0'
      if ((hiddenElWidth - visibleTextWidth) / 2 > visibleTextLeft) {
        return 'left top 0'
      }
      return 'center top 0'
    }
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
        this.lastScrollYPos = window.scrollY
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
        onMouseEnter: this.setVisible,
        onMouseLeave: this.unsetVisible,
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
