
import React, { Component } from 'react'
import anime from 'animejs'

import Icon from '../reusableComponents/Icon'
import { More, Close, Blink } from '../svg'
import { addTabIndex, removeTabIndex } from '../utils'


// inner component that will be rendered inside CardReveal
export const Reveal = props => (<div className='Reveal' style={{ overflow: 'hidden' }}>{ props.children }</div>)

// usage :
//   <CardReveal>
//     I'm visible
//     <Reveal>
//       I'm hidden until you change the state
//     </Reveal>
//   </CardReveal>


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

  renderContent(innerComponent) {
    const { children } = this.props
    const filteredContent = innerComponent ? children.filter(child => typeof child.type === 'function') :
      children.filter(child => typeof child.type !== 'function')

    return filteredContent
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

  renderReveal() {
    const { open } = this.state

    return (
      <div ref={ reveal => this.reveal = reveal } className='CardReveal-reveal' aria-hidden={ !open }>
        <div className='Reveal-iconContainer' onClick={ this.handleClick } onKeyDown={ this.handleKeyDown } tabIndex={ open ? 0 : -1 }>
          <Icon svg={ Close } color={ this.props.iconColor } size={ 24 }/>
        </div>
        { this.renderContent(Reveal) }
      </div>
    )
  }

  render() {
    const { cat, href, footerText, iconColor, blinkIcon } = this.props

    const renderBlinkIcon = blinkIcon &&
    <div>
      <a href={ href } target='_blank' tabIndex={ this.state.open ? -1 : 0 } style={{ display: 'block' }}>
        <Icon svg={ Blink } color={ iconColor } size={ 24 }/>
      </a>
    </div>

    return (
      <div className='CardReveal' data-cat={ cat }>
        <div className='CardReveal-content'>
          { this.renderContent() }
        </div>
        <div className='CardReveal-footer'>
          <div className='CardReveal-footerText'>
            { footerText }
          </div>
          <div className='CardReveal-iconContainer'>
            <div onClick={ this.handleClick } onKeyDown={ this.handleKeyDown } tabIndex="0">
              <Icon svg={ More } size={ 24 } color={ iconColor } />
            </div>
            { renderBlinkIcon }
          </div>
        </div>
        { this.renderReveal() }
      </div>
    )
  }

  static propTypes = {
    iconColor: React.PropTypes.string,
    blinkIcon: React.PropTypes.bool,
    href: React.PropTypes.string,
    footerText: React.PropTypes.node,
    cat: React.PropTypes.string
  }

  static defaultProps = {
    iconColor: '#fff',
    blinkIcon: false,
    href: '',
    footerText: '',
    cat: ''
  }
}