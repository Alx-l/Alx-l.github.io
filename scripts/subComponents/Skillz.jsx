
import React from 'react'

import IconHeader from 'reusableComponents/iconHeader'
import { Tool } from 'svg'
import { clFrontEnd, clBackEnd, clTools } from '../collections/CollapsibleCollection'
import settings from 'settings'

const { grey } = settings

const Skillz = () => {
  return (
    <div>
      <IconHeader icon={ Tool } size={ 20 } color={ grey } text="My skillz"/>
      <div className="l-textBlock">
        <p>Let's find out what I can do, shall we?</p>
      </div>
      <div className="l-collapsible">
        <div className="l-collapsible-left">
          <div className="l-collapsible-item" data-divider={ true }>
            { clFrontEnd }
          </div>
          <div className="l-collapsible-item" data-divider={ true }>
            { clBackEnd }
          </div>
        </div>
        <div className="l-collapsible-right">
          <div className="l-collapsible-item">
            { clTools }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillz
