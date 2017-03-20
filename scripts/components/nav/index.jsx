
import React, { Component } from 'react'

import OffCanvas from '../offCanvas'
import Icon from '../../reusableComponents/icon'
import { Hamburger } from '../../svg'
import { handleLink } from '../../utils'

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
        <li key={ i } className={ isActive && 'is-active' }>
          <a data-nav="ignore" onClick={ e => handleLink(e, dest) } href={ dest } className={ styles.link }>{ text }</a>
        </li>
      )
    })
  }

  renderMenuIcon() {
    return (
      <div className={ styles.icon } onClick={ this.handleOpen }>
        <Icon svg={ Hamburger } size={ 40 } color="#fff"/>
      </div>
    )
  }

  render() {
    const { backgroundColor, heading, subHeading, route } = this.props

    return (
        <nav style={{ backgroundColor }} className={ styles.root }>
          <div className={ styles.avatar }><img src="images/avatarpic.jpg" alt="avatar pic"/></div>
          <h1 className={ styles.heading }>{ heading }</h1>
          <div className={ styles.subHeading }>{ subHeading }</div>
          <ul className={ styles.list }>
            { this.renderNavItems() }
          </ul>
          { this.renderMenuIcon() }
          <div onClick={ this.handleClick }>
            <OffCanvas route={ route } open={ this.state.open } items={ links }/>
          </div>
        </nav>
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
  { text: 'what i\'ve done', dest: 'whativedone' },
  { text: 'where to find me', dest: 'wheretofindme' }
]
