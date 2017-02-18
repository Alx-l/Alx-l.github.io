
import React from 'react'

import Nav from './Nav'
import Footer from './Footer'
import settings from '../settings'

const { primaryColor } = settings


const Main = (props) => {
  const { name } = props.route
  return (
    <div className="root">
      <Nav route={ name } heading='Alex L' subHeading='front-end dev' backgroundColor={ primaryColor }/>
      <div className='Main'>
        { props.children }
      </div>
      <Footer backgroundColor={ primaryColor }/>
    </div>
  )
}

export default Main
