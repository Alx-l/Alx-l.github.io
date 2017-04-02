
import React, { Component } from 'react'
import h from 'react-hyperscript'

import { handleLink } from 'utils/misc'

import OffCanvas from '../offCanvas'
import Icon from 'reusableComponents/icon'
import { Hamburger } from 'svg'

import styles from './nav.css'


export default class Nav extends Component {

  state = {
    open: false
  }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  handleClick = (e) => {
    if (!e.target.classList.contains('OffCanvas-content')) {
      this.handleClose()
    }
  }

  renderNavItems() {
    const { route } = this.props

    return links.map((link, i) => {
      const { dest, text, isIndex } = link
      const isActive = route === dest && true || route === 'index' && isIndex

      return (
        h('li', { key: i , className: isActive && 'is-active' },
          h('a', { 'data-nav': 'ignore', onClick: e => handleLink(e, dest), href: dest, className: styles.link }, text)
        )
      )
    })
  }

  renderMenuIcon() {
    return (
      h('div', { className: styles.icon , onClick: this.handleOpen },
        h(Icon, { svg: Hamburger, size: 40, color: '#fff' })
      )
    )
  }

  render() {
    const { backgroundColor, heading, subHeading, route } = this.props

    return (
      h('nav', { style: { backgroundColor }, className: styles.root }, [
        h('div', { className: styles.avatar }, h('img', { src: 'images/avatarpic.jpg', alt: 'avatar pic' })),
        h('h1', { className: styles.heading }, heading),
        h('div', { className: styles.subHeading }, subHeading),
        h('ul', { className: styles.list }, this.renderNavItems()), this.renderMenuIcon(),
        h('div', { onClick: this.handleClick }, h(OffCanvas, { route, open: this.state.open, items: links }))
      ])
    )
  }

  static propTypes = {
    heading: React.PropTypes.string.isRequired,
    subHeading: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    menuIconSize: React.PropTypes.number,
    menuIconColor: React.PropTypes.string,
    route: React.PropTypes.string
  }

  static defaultProps = {
    heading: 'your name',
    subHeading: 'your job',
    menuIconSize: 40,
    menuIconColor: '#fff'
  }
}

const links = [
  { text: 'who am i', dest: '/', isIndex: true },
  { text: 'what i do', dest: 'whatido' },
  { text: `what i've done`, dest: 'whativedone' },
  { text: 'where to find me', dest: 'wheretofindme' }
]
