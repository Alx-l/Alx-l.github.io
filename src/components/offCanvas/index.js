import React from 'react'
import h from 'react-hyperscript'
import classNames from 'classnames'

import { handleLink, addClass, removeClass } from 'utils/misc'

import styles from './offCanvas.css'

const OffCanvas = props => {
  const html = document.querySelector('html')
  const body = document.body
  const { top } = body.getBoundingClientRect()
  const makeBodyUnscrollable = () => {
    addClass('u-noscroll', html, body)
    html.style.top = `${top}px`
  }
  const makeBodyScrollable = () => {
    removeClass('u-noscroll', html, body)
    window.scroll(0, top * -1)
  }

  props.open
    ? makeBodyUnscrollable()
    : makeBodyScrollable()

  const renderItems = () => {
    const { items, route } = props

    return items.map((item, i) => {
      const isActive =
        route === item.dest || (route === 'index' && item.isIndex)
      const className = classNames(styles.item, {
        'is-active': isActive
      })

      return h('li', { className, key: i },
        h('a',
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

  const className = classNames(styles.root, { 'is-open': props.open })

  return h('div', { className, style: { textTransform: 'uppercase' } }, [
    h('div', { className: styles.overlay }),
    h('div', { className: styles.content }, h('ul', {}, renderItems()))
  ])
}

OffCanvas.propTypes = {
  open: React.PropTypes.bool,
  route: React.PropTypes.string,
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}

export default OffCanvas
