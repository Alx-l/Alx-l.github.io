
import { api as router } from 'abyssa'


export const requestAnimationFrame =  window.requestAnimationFrame ||
                                      window.mozRequestAnimationFrame ||
                                      window.webkitRequestAnimationFrame ||
                                      window.msRequestAnimationFrame


export const pxToRem = (val) => {
  const toInt = parseInt(val, 10)
  const toRem = toInt / 16
  return `${toRem}rem`
}


export const pxToRemDims = (val) => {
  return {
    width: pxToRem(val),
    height: pxToRem(val)
  }
}

export const addTabIndex = item => item.tabIndex = 0

export const removeTabIndex = item => item.tabIndex = -1

export const handleLink = (e, dest) => {
  // usually, this function would not be needed...except for IE11
  e.preventDefault()
  router.transitionTo(dest)
}