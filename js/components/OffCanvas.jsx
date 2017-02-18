
import React, { Component } from 'react'
import classNames from 'classnames'

import { handleLink } from '../utils'

export default class OffCanvas extends Component {

  state = {
    open: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.open !== nextState.open
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) this.setState({ open: true })
  }

  componentDidUpdate(prevProps, prevState) {
    const body = document.querySelector('body')
    const bodyAlias = document.documentElement
    const html = document.querySelector('html')
    const { top } = body.getBoundingClientRect()

    if (!prevState.open) {
      html.classList.add('u-noscroll')
      html.style.top = `${top}px`
    } else {
      html.classList.remove('u-noscroll')
      body.scrollTop = top * -1
      bodyAlias.scrollTop = top * -1
    }
  }

  handleClose = () => this.setState({ open: false })

  renderItems = () => {
    const { items, route } = this.props

    return items.map((item, i) => {
      const isActive = route === item.dest && true || route === 'index' && item.isIndex

      return (
        <li onClick={ this.handleClose } className={ isActive ? 'OffCanvas-item is-active' : 'OffCanvas-item' } key={ i }>
          <a data-nav="ignore" onClick={ e => handleLink(e, item.dest) } className='OffCanvas-link' href={ item.dest } >{ item.text }</a>
        </li>
      )
    })
  }

  render() {
    const className = classNames('OffCanvas', {
      'is-open': this.props.open && this.state.open
    })

    return (
      <div className={ className } style={{ textTransform: 'uppercase' }}>
        <div className="OffCanvas-overlay" onClick={ this.handleClose }></div>
        <div className="OffCanvas-content">
          <ul>
            { this.renderItems() }
          </ul>
        </div>
      </div>
    )
  }

  static propTypes = {
    open: React.PropTypes.bool,
    route: React.PropTypes.string,
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }
}