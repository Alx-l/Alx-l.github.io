import { api as router } from 'abyssa'

export const pxToRem = val => {
  const toRem = parseInt(val, 10) / 16
  return `${toRem}rem`
}

export const pxToRemDims = val => ({
  width: pxToRem(val),
  height: pxToRem(val)
})

export const handleLink = (e, dest) => {
  // ideally, this function would not be needed...but we still live in a IE world
  e.preventDefault()
  router.transitionTo(dest)
}

export const addClass = (className, ...nodeList) => {
  nodeList.map(item => item.classList.add(className))
}

export const removeClass = (className, ...nodeList) => {
  nodeList.map(item => item.classList.remove(className))
}

export const handleStickyClassOnScroll = ({
  node,
  targetNode,
  threshold = 0,
  isBottomValue,
  className
}) => {
  const { top, bottom } = node.getBoundingClientRect()
  !isBottomValue && (node.style.height = `${targetNode.offsetHeight}px`)
  return (isBottomValue ? bottom : top) <= threshold
    ? targetNode.classList.add(className)
    : targetNode.classList.remove(className)
}
