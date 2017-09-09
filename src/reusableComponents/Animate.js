import React from 'react'
import Transition from 'react-transition-group/Transition'
import h from 'react-hyperscript'

const propTypes = {
  onEnter: React.PropTypes.func.isRequired,
  onExit: React.PropTypes.func.isRequired,
  trigger: React.PropTypes.bool.isRequired,
  timeout: React.PropTypes.number.isRequired,
  className: React.PropTypes.string,
  customStyle: React.PropTypes.objectOf(React.PropTypes.string)
}

const Animate = props => {
  const {
    trigger,
    onEnter,
    onExit,
    timeout,
    children,
    className,
    customStyle
  } = props

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

Animate.propTypes = propTypes

export default Animate
