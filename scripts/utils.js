
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


export const handleLink = (e, dest) => {
  // ideally, this function would not be needed...except we live in a IE11 world
  e.preventDefault()
  router.transitionTo(dest)
}