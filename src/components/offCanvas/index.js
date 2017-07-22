import React, { Component } from 'react'
import h from 'react-hyperscript'
import classNames from 'classnames'

import { handleLink } from 'utils/misc'

import styles from './offCanvas.css'

export default class OffCanvas extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.open !== nextProps.open
  }

  componentDidUpdate(prevProps) {
    const html = document.querySelector('html')
    const body = document.body
    const { top } = body.getBoundingClientRect()

    if (!prevProps.open) {
      html.classList.add('u-noscroll')
      html.style.top = `${top}px`
    } else {
      html.classList.remove('u-noscroll')
      window.scroll(0, top * -1)
    }
  }

  renderItems = () => {
    const { items, route } = this.props

    return items.map((item, i) => {
      const isActive =
        route === item.dest || (route === 'index' && item.isIndex)
      const className = classNames(styles.item, {
        'is-active': isActive
      })

      return h(
        'li',
        { className, key: i },
        h(
          'a',
          {
            'data-nav': 'ignore',
            onClick: e => handleLink(e, item.dest),
            tabIndex: '-1',
            className: styles.link,
            href: item.dest
          },
          item.text
        )
      )
    })
  }

  render() {
    const className = classNames(styles.root, {
      'is-open': this.props.open
    })

    return h('div', { className, style: { textTransform: 'uppercase' } }, [
      h('div', { className: styles.overlay }),
      h('div', { className: styles.content }, h('ul', {}, this.renderItems()))
    ])
  }

  static propTypes = {
    open: React.PropTypes.bool,
    route: React.PropTypes.string,
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }
}
