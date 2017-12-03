import h from 'react-hyperscript'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.element),
  renderItem: PropTypes.func,
  computeKey: PropTypes.func,
  timeout: PropTypes.number,
  classNames: PropTypes.shape({
    onEnter: PropTypes.string,
    onExit: PropTypes.string,
    root: PropTypes.string
  })
}

export const GroupAnimate = props => {
  const { list, renderItem, computeKey, classNames, timeout } = props
  return h(TransitionGroup, { className: classNames.root }, list.map(item => {
    return h(CSSTransition, {
      children: renderItem(item),
      key: computeKey(item),
      timeout,
      classNames: {
        enterActive: classNames.onEnter,
        exitActive: classNames.onExit
      }
    })
  }))
}

GroupAnimate.propTypes = propTypes
