import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'
import h from 'react-hyperscript'

export default class Animate extends Component {
  render() {
    const {
      trigger,
      children,
      onEnter,
      onExit,
      className,
      customStyle,
      timeout
    } = this.props
    return h(Transition,
      {
        in: trigger,
        onEnter,
        onExit,
        timeout,
        mountOnEnter: true,
        unmountOnExit: true,
        style: { ...customStyle }
      },
      h('div', { className }, children)
    )
  }

  static propTypes = {
    onEnter: React.PropTypes.func.isRequired,
    onExit: React.PropTypes.func.isRequired,
    trigger: React.PropTypes.bool.isRequired,
    timeout: React.PropTypes.number.isRequired,
    className: React.PropTypes.string,
    customStyle: React.PropTypes.objectOf(React.PropTypes.string)
  }
}
