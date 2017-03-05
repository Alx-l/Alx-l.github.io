
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactTransitionGroup from 'react-addons-transition-group'


export default class Animate extends Component {
  render() {
    const { trigger, children, onEnter, onLeave, customClassName, customStyle } = this.props
    return (
      <ReactTransitionGroup style={{ display: 'block', ...customStyle }} className={ customClassName }>
        { trigger ? <InnerComponent onEnter={ onEnter } onLeave={ onLeave } content={ children }/> : null }
      </ReactTransitionGroup>
    )
  }

  static propTypes = {
    onEnter: React.PropTypes.func.isRequired,
    onLeave: React.PropTypes.func.isRequired,
    customStyle: React.PropTypes.objectOf(React.PropTypes.string)
  }
}

class InnerComponent extends Component {
  componentWillEnter(cb) {
    const innerEl = ReactDOM.findDOMNode(this)
    const el = innerEl.parentNode
    this.props.onEnter(el, cb)
  }

  componentWillLeave(cb) {
    const innerEl = ReactDOM.findDOMNode(this)
    const el = innerEl.parentNode
    this.props.onLeave(el, cb)
  }

  render() {
    return (
      <span style={{ display: 'block' }}>
        { this.props.content }
      </span>
    )
  }

  static propTypes = {
    onEnter: React.PropTypes.func.isRequired,
    onLeave: React.PropTypes.func.isRequired,
    content: React.PropTypes.element.isRequired,
    customClassName: React.PropTypes.string
  }
}