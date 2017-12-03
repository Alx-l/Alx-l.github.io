import h from 'react-hyperscript'
import { api as router } from 'abyssa'

export const pxToRem = val => {
  const toRem = parseInt(val, 10) / 16
  return `${ toRem }rem`
}

export const pxToRemDims = val => ({
  width: pxToRem(val),
  height: pxToRem(val)
})

export const link = (url, content, className) => {
  return h(`a.${ className }`, { href: url, target: '_blank', rel: 'noreferrer' }, content)
}

export const handleLink = (e, dest) => {
  // ideally, this function would not be needed...but we still live in a IE world
  e.preventDefault()
  router.transitionTo(dest)
}

export const addClass = (className, ...nodeList) => {
  nodeList.forEach(item => item.classList.add(className))
}

export const removeClass = (className, ...nodeList) => {
  nodeList.forEach(item => item.classList.remove(className))
}

export const className = classNameString => classNameString.replace(/\.?\b(false)|(undefined)/g, '')

export const handleStickyClassOnScroll =
({ node, targetNode, threshold = 0, isBottomValue, className }) => {
  const { top, bottom } = node.getBoundingClientRect()
  !isBottomValue && (node.style.height = `${ targetNode.offsetHeight }px`)
  return (isBottomValue ? bottom : top) <= threshold
    ? targetNode.classList.add(className)
    : targetNode.classList.remove(className)
}

export const debounce = (func, wait, immediate) => {
  let timeout
  return function() {
    const context = this
    const args = arguments
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
