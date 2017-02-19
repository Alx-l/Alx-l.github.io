
import React, { Component } from 'react'
import anime from 'animejs'

import Icon from '../reusableComponents/Icon'
import { More, Close, Blink } from '../svg'
import { addTabIndex, removeTabIndex } from '../utils'


export default class CardReveal extends Component {

  state = {
    open: false
  }

  componentDidMount() {
    const { reveal } = this
    const links = Array.from(reveal.querySelectorAll('a'))
    links.map(removeTabIndex)
  }

  componentDidUpdate(prevProps, prevState) {
    const { state: { open }, reveal } = this
    const links = Array.from(reveal.querySelectorAll('a'))

    if (prevState.open) links.map(removeTabIndex)
    else links.map(addTabIndex)

    prevState.open !== open && this.animateReveal()
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ open: !this.state.open })
  }

  animateReveal = () => {
    const { state: { open }, reveal } = this
    const settings = { duration: 225 , easing: 'easeInOutQuad' }

    if (open) {
      anime({ targets: reveal, translateY: { ...settings, value: '-100%' }
      })
    } else {
      anime({ targets: reveal, translateY: { ...settings, value: '0%' }
      })
    }
  }

  renderInside() {
    const { open } = this.state
    const { iconColor, children } = this.props

    return (
      <div ref={ reveal => this.reveal = reveal } className="CardReveal-reveal" aria-hidden={ !open }>
        <div className="Reveal-iconContainer" onClick={ this.handleClick } onKeyDown={ this.handleKeyDown } tabIndex={ open ? 0 : -1 }>
          <Icon svg={ Close } color={ iconColor } size={ 24 }/>
        </div>
        <div className="Reveal" style={{ overflow: 'hidden' }}>
          { children }
        </div>
      </div>
    )
  }

  render() {
    const { cat, href, title, subTitle, footerText, iconColor, blinkIcon } = this.props

    const renderBlinkIcon = blinkIcon &&
    <div>
      <a href={ href } target="_blank" tabIndex={ this.state.open ? -1 : 0 } style={{ display: 'block' }}>
        <Icon svg={ Blink } color={ iconColor } size={ 24 }/>
      </a>
    </div>

    return (
      <div className="CardReveal" data-cat={ cat }>
        <div className="CardReveal-content">
          <h3 className="CardReveal-title">{ title }</h3>
          { subTitle && <span className="CardReveal-subTitle">{ subTitle }</span> }
        </div>
        <div className="CardReveal-footer">
          <div className="CardReveal-footerText">
            { footerText }
          </div>
          <div className="CardReveal-iconContainer">
            <div onClick={ this.handleClick } onKeyDown={ this.handleKeyDown } tabIndex="0">
              <Icon svg={ More } size={ 24 } color={ iconColor } />
            </div>
            { renderBlinkIcon }
          </div>
        </div>
        { this.renderInside() }
      </div>
    )
  }

  static propTypes = {
    iconColor: React.PropTypes.string,
    blinkIcon: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    footerText: React.PropTypes.node,
    cat: React.PropTypes.string
  }

  static defaultProps = {
    iconColor: '#fff',
    blinkIcon: false,
    title: 'title',
    href: '',
    footerText: '',
    cat: ''
  }
}