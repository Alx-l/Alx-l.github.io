
import React from 'react'

import { isObjEmpty, isObjFalsy } from '../../utils'

import styles from './cardlist.css'


const CardList = (props) => {

  const renderCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props

    const render = (collection) => {
      return collection
        .sort((a, b) => {
          if (sortKey) {
            return a.props[sortKey] > b.props[sortKey] ? 1 :
              a.props[sortKey] < b.props[sortKey] ? -1 : 0
          }
          return
        })
        .map((item, i) => {
          return <div className={ styles.item } key={ i }>{ item }</div>
        })
    }

    if (isObjEmpty(filters) || isObjFalsy(filters)) {
      return render(collectionToRender)
    }
    return render(collectionToRender.filter(item => filters[item.props.cat]))
  }

  return (
    <div className={ styles.root }>
      { renderCollection() }
    </div>
  )
}

CardList.propTypes = {
  collectionToRender: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  filters: React.PropTypes.objectOf(React.PropTypes.bool),
  sortKey: React.PropTypes.string
}


export default CardList