
import connect from 'fluxx/lib/ReactConnector'
import _ from 'space-lift'
import h from 'react-hyperscript'

import { mainStore } from '../store'
import { setFilter } from '../data'

import IconHeader from 'reusableComponents/iconHeader'
import { History } from 'svg'
import CardList from '../components/cardlist'
import * as Cards from '../collections/CardCollection'
import settings from 'settings'

const { accentColor, grey } = settings
const CardCollection = _(Cards).values().value()

const WhatIveDone = (props) => {

  const renderFilterBtn = (text, dataAttr) => {
    const { filters } = props

    return (
      h('button.btn-filter', {
        onClick: () => setFilter(dataAttr, !filters[dataAttr]),
        'data-props': dataAttr,
        style: filters[dataAttr] ? styles.btn.active : styles.btn.inactive,
        tabIndex: '0'
      }, text)
    )
  }

  return (
    h('.v-whativedone', [
      h(IconHeader, { icon: History, size: 20, color: grey, text: 'My work' }),
      h('.l-textBlock', [ h('p', `Here is what I've done so far :`) ]),
      h('.v-whativedone-filters', [
        h('span', 'show :'),
        renderFilterBtn('side projects', 'sideprojects'),
        renderFilterBtn('jobs', 'jobs')
      ]),
      h(CardList, { sortBy: 'title', collectionToRender: CardCollection, filters: props.filters })
    ])
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
