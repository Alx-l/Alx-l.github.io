import h from 'react-hyperscript'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.element).isRequired,
  renderItem: PropTypes.func.isRequired,
  computeKey: PropTypes.func.isRequired,
  timeout: PropTypes.number.isRequired,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  classNames: PropTypes.shape({
    onEnter: PropTypes.string,
    onExit: PropTypes.string,
    root: PropTypes.string
  })
}

export const GroupAnimate = props => {
  const { list, renderItem, computeKey, classNames = {}, timeout, onEnter, onExit } = props
  return h(TransitionGroup, { className: classNames.root }, list.map((item, i) => {
    return h(CSSTransition, {
      children: renderItem(item),
      onEnter: onEnter ? el => onEnter(el, i) : undefined,
      onExit: onExit ? el => onExit(el, i) : undefined,
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
