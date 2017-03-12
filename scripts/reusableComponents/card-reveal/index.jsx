
import React, { Component } from 'react'
import anime from 'animejs'

import Icon from '../../reusableComponents/icon'
import Animate from '../../reusableComponents/Animate'
import { More, Close, Blink } from '../../svg'

import styles from './card-reveal.css'


export default class CardReveal extends Component {

  state = {
    open: false
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleKeyDown = (e) => {
    const keycode = e.which || e.keyCode
    if (keycode === 13) this.setState({ open: !this.state.open })
  }

  onEnter = (el, cb) => {
    anime({
      targets: el,
      translateY: { ...animeSettings, value: '-100%' },
      complete: cb
    })
  }

  onLeave = (el, cb) => {
    anime({
      targets: el,
      translateY: { ...animeSettings, value: '100%' },
      complete: cb
    })
  }

  renderInside() {
    const { open } = this.state
    const { iconColor, children } = this.props

    return (
      <Animate
        trigger={ open }
        onEnter={ this.onEnter }
        onLeave={ this.onLeave }
        customClassName={ styles.container }
      >
        <div>
          <div className={ styles.insideIconContainer } onClick={ this.handleClick } onKeyDown={ this.handleKeyDown } tabIndex="0">
            <Icon svg={ Close } color={ iconColor } size={ 24 }/>
          </div>
          <div className={ styles.insideRoot } style={{ overflow: 'hidden' }}>
            { children }
          </div>
        </div>
      </Animate>
    )
  }

  render() {
    const { cat, href, title, subTitle, footerText, iconColor, blinkIcon } = this.props

    const renderBlinkIcon = blinkIcon &&
    <div>
      <a href={ href } target="_blank" style={{ display: 'block' }}>
        <Icon svg={ Blink } color={ iconColor } size={ 24 }/>
      </a>
    </div>

    return (
      <div className={ styles.root } data-cat={ cat }>
        <div className={ styles.content }>
          <h3 className={ styles.title }>{ title }</h3>
          { subTitle && <span className={ styles.subTitle }>{ subTitle }</span> }
        </div>
        <div className={ styles.footer }>
          <div className={ styles.footerText }>
            { footerText }
          </div>
          <div className={ styles.iconContainer }>
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

const animeSettings = { duration: 225 , easing: 'easeInOutQuad' }