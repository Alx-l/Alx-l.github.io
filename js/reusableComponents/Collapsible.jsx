
import React, { Component } from 'react'
import classNames from 'classnames'
import anime from 'animejs'

import Icon from '../reusableComponents/Icon'
import Animate from '../reusableComponents/Animate'
import { Expand } from '../svg'


export default class Collapsible extends Component {

  state = {
    open: false
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ open: !this.state.open })
  }

  animateHr = () => {
    const { state: { open }, hr } = this

    if (open) {
      anime({ targets: hr, translateX: { ...animeSettings, value: '0%' }
      })
    } else {
      anime({ targets: hr, translateX: { ...animeSettings, value: `${hrOffsetValue}` }
      })
    }
  }

  onEnter = ({ el, cb }) => {
    const height = el.scrollHeight
    el.style.height = 0
    anime({
      targets: el,
      height: { ...animeSettings, value: height },
      complete: () => {
        el.style.height = 'auto'
        this.animateHr()
        cb()
      },
    })
  }

  onLeave = ({ el, cb }) => {
    anime({
      targets: el,
      begin: this.animateHr,
      height: { ...animeSettings, value: 0 },
      complete: cb
    })
  }

  render() {
    const { state: { open }, props: { popOut, title, titleIcon, iconSize, titleIconSize, iconColor, children } } = this
    const Collapsible_cn = classNames('Collapsible', {
      'popOut': popOut,
      'is-open': open,
      'is-close': !open
    })
    const Collapsible_expandIcon_cn = classNames('Collapsible-expandIcon', {
      'is-open': open
    })

    const renderIcon = titleIcon && (
      <Icon svg={ titleIcon } color={ iconColor } className="Collapsible-titleIcon" size={ titleIconSize } />
    )

    return (
      <div
        aria-expanded={ open }
        className={ Collapsible_cn }
      >
        <div onKeyDown={ this.handleKeyDown } className="Collapsible-title" onClick={ this.handleClick } tabIndex="0">
          <div className="Collapsible-titleLeft">
            { renderIcon }
            <span className="Collapsible-titleText">{ title }</span>
          </div>
          <div className="Collapsible-titleRight">
            <div className={ Collapsible_expandIcon_cn }>
              <Icon svg={ Expand } size={ iconSize } color={ iconColor } customStyle={{ display: 'block' }}/>
            </div>
          </div>
          <hr ref={ hr => this.hr = hr } style={{ transform: `translateX(${hrOffsetValue})` }} className="Collapsible-hr"/>
        </div>
        <Animate
          trigger={ open }
          onEnter={ this.onEnter }
          onLeave={ this.onLeave }
        >
          <div style={{ padding: '16px' }}>
            { children }
          </div>
        </Animate>
      </div>
    )
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    popOut: React.PropTypes.bool,
    iconSize: React.PropTypes.number,
    iconColor: React.PropTypes.string,
    titleIcon: React.PropTypes.func,
    titleIconSize: React.PropTypes.number
  }

  static defaultProps = {
    popOut: false,
    iconSize: 24,
    iconColor: '#000',
    titleIconSize: 24
  }
}

const animeSettings = { duration: 225 , easing: 'easeInOutQuad' }
const hrOffsetValue = '-120%'