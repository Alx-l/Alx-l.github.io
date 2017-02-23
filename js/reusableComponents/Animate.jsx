
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactTransitionGroup from 'react-addons-transition-group'


export default class Animate extends Component {
  render() {
    const { trigger, children, onEnter, onLeave, customClassName } = this.props
    return (
      <ReactTransitionGroup component="div" className={ customClassName }>
        { trigger ? <InnerComponent onEnter={ onEnter } onLeave={ onLeave } content={ children }/> : null }
      </ReactTransitionGroup>
    )
  }

  static propTypes = {
    onEnter: React.PropTypes.func.isRequired,
    onLeave: React.PropTypes.func.isRequired,
  }
}

class InnerComponent extends Component {
  componentWillEnter(cb) {
    const el = ReactDOM.findDOMNode(this)
    const root = el.parentNode
    this.props.onEnter({ el, cb, root })
  }

  componentWillLeave(cb) {
    const el = ReactDOM.findDOMNode(this)
    const root = el.parentNode
    this.props.onLeave({ el, cb, root })
  }

  render() {
    return (
      <div>
        { this.props.content }
      </div>
    )
  }

  static propTypes = {
    onEnter: React.PropTypes.func.isRequired,
    onLeave: React.PropTypes.func.isRequired,
    content: React.PropTypes.element.isRequired,
    customClassName: React.PropTypes.string
  }
}