
import React from 'react'

import Nav from '../nav'
import Footer from '../footer'
import settings from '../../settings'

const { primaryColor } = settings

import styles from './main.css'


const Main = (props) => {
  const { name } = props.route
  return (
    <div className="root">
      <Nav route={ name } heading="Alex L" subHeading="front-end dev" backgroundColor={ primaryColor }/>
      <div className={ styles.root }>
        { props.children }
      </div>
      <Footer backgroundColor={ primaryColor }/>
    </div>
  )
}

export default Main
