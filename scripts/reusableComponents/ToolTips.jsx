
import React, { Component } from 'react'
import anime from 'animejs'

import Animate from '../reusableComponents/Animate'


export default class ToolTips extends Component {

  state = {
    visible: false
  }

  handleHoverIn = () => this.setState({ visible: true })

  handleHoverOut = () => this.setState({ visible: false })

  // to handle touch devices
  handleClick = () => this.setState({ visible: !this.state.visible })

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ visible: !this.state.visible })
  }

  onEnter = (el, cb) => {
    anime({
      begin: () => {
        el.style.marginLeft = `-${el.clientWidth / 2}px`
      },
      targets: el,
      scale: { ...animeSettings, easing: [0.175, 0.885, 0.32, 1.275], value: 1 },
      complete: cb
    })
  }

  onLeave = (el, cb) => {
    anime({
      targets: el,
      scale: { ...animeSettings, easing: 'easeInOutQuad', value: 0 },
      complete: cb
    })
  }

  renderToolTips() {
    const { onEnter, onLeave, state: { visible } } = this

    return (
      <Animate
        trigger={ visible }
        onEnter={ onEnter }
        onLeave={ onLeave }
        customClassName="ToolTips-hiddenText"
        customStyle={{ transform: 'scale(0)' }}
      >
        <span>
          { this.props.hiddenText }
        </span>
      </Animate>
    )
  }

  render() {
    return (
      <span onClick={ this.handleClick } onMouseEnter={ this.handleHoverIn } onMouseLeave={ this.handleHoverOut } onKeyDown={ this.handleKeyDown } className="ToolTips" tabIndex="0">
        <span className="ToolTips-text">
          { this.props.children }
        </span>
        { this.renderToolTips() }
      </span>
    )
  }

  static propTypes = {
    hiddenText: React.PropTypes.string
  }

  static defaultProps = {
    hiddenText: 'add some text'
  }
}

const animeSettings = { duration: 225 }