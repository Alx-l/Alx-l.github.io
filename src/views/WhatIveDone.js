import connect from 'fluxx/lib/ReactConnector'
import classNames from 'classnames'
import _ from 'space-lift'
import h from 'react-hyperscript'

import { mainStore } from '../store'
import { setFilter } from '../data'

import TextBlock from 'layouts/textBlock'
import IconHeader from 'reusableComponents/iconHeader'
import { History } from 'svg'
import CardList from '../components/cardlist'
import * as Cards from '../collections/CardCollection'
import settings from 'settings'

import styles from './whatIveDone.css'

const { grey } = settings
const CardCollection = _(Cards).values().value()

const WhatIveDone = props => {
  const renderFilterBtn = (text, dataAttr) => {
    const { filters } = props

    return h('button.btn-filter',
      {
        onClick: () => setFilter(dataAttr, !filters[dataAttr]),
        'data-props': dataAttr,
        className: classNames(filters[dataAttr] && 'active'),
        tabIndex: '0'
      },
      text
    )
  }

  return h('div', [
    h(IconHeader, { icon: History, size: 20, color: grey, text: 'My work' }),
    h(TextBlock, [h('p', `Here is what I've done so far :`)]),
    h('div', { className: styles.filters }, [
      h('span', 'show :'),
      renderFilterBtn('side projects', 'sideprojects'),
      renderFilterBtn('jobs', 'jobs')
    ]),
    h(CardList, {
      sortBy: 'title',
      collectionToRender: CardCollection,
      filters: props.filters
    })
  ])
}

export default connect(WhatIveDone, mainStore, state => state)
