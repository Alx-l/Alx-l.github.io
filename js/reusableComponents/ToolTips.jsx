
import React, { Component } from 'react'
import classNames from 'classnames'


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

  renderToolTips() {
    const { hiddenText } = this
    const marginLeft = () => hiddenText.style.marginLeft = `-${hiddenText.clientWidth / 2}px`

    hiddenText && hiddenText.addEventListener('animationstart', marginLeft)
    const ToolTips_hiddenText_cn = classNames('ToolTips-hiddenText', {
      'is-visible': this.state.visible
    })

    return (
      <span ref={ hiddenText => this.hiddenText = hiddenText } className={ ToolTips_hiddenText_cn }>
        { this.props.hiddenText }
      </span>
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