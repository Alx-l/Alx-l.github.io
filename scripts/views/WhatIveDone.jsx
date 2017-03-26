
import React from 'react'
import connect from 'fluxx/lib/ReactConnector'

import { values }  from '../utils'

import { mainStore } from '../store'
import { setFilter } from '../data'

import IconHeader from '../reusableComponents/iconHeader'
import { History } from '../svg'
import CardList from '../components/cardlist'
import * as Cards from '../collections/CardCollection'
import settings from '../settings'

const { accentColor, grey } = settings
const CardCollection = values(Cards)

const WhatIveDone = (props) => {

  const renderFilterBtn = (text, dataAttr) => {
    const { filters } = props

    return (
      <button className="btn-filter"
        onClick={ () => setFilter(dataAttr, !filters[dataAttr]) }
        data-props={ dataAttr }
        style={ filters[dataAttr] ? styles.btn.active : styles.btn.inactive }
        tabIndex="0"
      >
        { text }
      </button>
    )
  }

  return (
    <div className="v-whativedone">
      <IconHeader icon={ History } size={ 20 } color={ grey } text="My work"/>
      <div className="l-textBlock">
        <p>Here is what I've done so far :</p>
      </div>
      <div className="v-whativedone-filters">
        <span>show :</span>
        { renderFilterBtn('side projects', 'sideprojects') }
        { renderFilterBtn('jobs', 'jobs') }
      </div>
      <div>
        <CardList sortBy="title" collectionToRender={ CardCollection } filters={ props.filters }/>
      </div>
    </div>
  )
}

// styles
const styles = {
  btn: {
    active: {
      background: accentColor,
      borderColor: 'transparent',
      color: '#fff'
    },
    inactive: {
      background: 'transparent'
    }
  }
}

export default connect(WhatIveDone, mainStore, state => state)