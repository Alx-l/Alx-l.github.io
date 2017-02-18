
import React, { Component } from 'react'
import classNames from 'classnames'
import anime from 'animejs'

import Icon from '../reusableComponents/Icon'
import { Expand } from '../svg'
import { addTabIndex, removeTabIndex } from '../utils'


export default class Collapsible extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    const { collapse } = this
    const InnerInstances = Array.from(collapse.querySelectorAll('.Collapsible-title'))
    const links = Array.from(collapse.querySelectorAll('a'))

    InnerInstances.map(removeTabIndex)
    links.map(removeTabIndex)
  }

  componentDidUpdate(prevProps, prevState) {
    const { open } = this.state
    const { collapse } = this
    const InnerInstances = Array.from(collapse.querySelectorAll('.Collapsible-title'))
    const links = Array.from(collapse.querySelectorAll('a'))

    if (prevState.open) {
      links.map(removeTabIndex)
      InnerInstances.map(removeTabIndex)
    }
    else {
      links.map(addTabIndex)
      InnerInstances.map(addTabIndex)
    }

    prevState.open !== open && this.animateCollapsible()
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ open: !this.state.open })
  }

  animateCollapsible = () => {
    const { state: { open }, collapse } = this
    const height = collapse && collapse.scrollHeight
    const settings = { duration: 225 , easing: 'easeInOutQuad' }

    if (open) {
      anime({
        targets: collapse,
        height: { ...settings, value: height },
        complete: () => {
          collapse.style.height = 'auto'
          this.animateHr()
        },
      })
    } else {
      anime({
        begin: this.animateHr(),
        targets: collapse,
        height: { ...settings, value: 0 }
      })
    }
  }

  hrOffsetValue = '-120%'

  animateHr = () => {
    const { state: {  open }, hr } = this
    const settings = { duration: 225 , easing: 'easeInOutQuad' }

    if (open) {
      anime({ targets: hr, translateX: { ...settings, value: '0%' }
      })
    } else {
      anime({ targets: hr, translateX: { ...settings, value: `${this.hrOffsetValue}` }
      })
    }
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
      <Icon svg={ titleIcon } color={ iconColor } className='Collapsible-titleIcon' size={ titleIconSize } />
    )

    return (
      <div
        aria-expanded={ open }
        className={ Collapsible_cn }
      >
        <div onKeyDown={ this.handleKeyDown } className='Collapsible-title' onClick={ this.handleClick } tabIndex="0">
          <div className='Collapsible-titleLeft'>
            { renderIcon }
            <span className='Collapsible-titleText'>{ title }</span>
          </div>
          <div className='Collapsible-titleRight'>
            <div className={ Collapsible_expandIcon_cn }>
              <Icon svg={ Expand } size={ iconSize } color={ iconColor } customStyle={{ display: 'block' }}/>
            </div>
          </div>
          <hr ref={ hr => this.hr = hr } style={{ transform: `translateX(${this.hrOffsetValue})` }} className='Collapsible-hr'/>
        </div>
        <div ref={ collapse => this.collapse = collapse } style={{ height: '0px' }}>
          <div style={{ padding: '16px' }}>
            { children }
          </div>
        </div>
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