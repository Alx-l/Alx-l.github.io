
import React from 'react'

import _every from '1-liners/every'
import _filter from '1-liners/filter'
import _map from '1-liners/map'
import _partial from '1-liners/partial'
import _pipeAll from '1-liners/pipeAll'
import _values from '1-liners/values'

import styles from './cardlist.css'


const CardList = (props) => {

  const renderCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props

    const isEmpty = _every(item => item === false, _values(filters))
    const content = _partial(_map, (item, i) => <div className={ styles.item } key={ i }>{ item }</div>)
    const filter = _partial(_filter, item => filters[item.props.cat])
    const sort = _partial((collection) => {
      return collection.sort((a, b) => {
        return a.props[sortKey] > b.props[sortKey] ? 1 :
          a.props[sortKey] < b.props[sortKey] ? -1 : 0
      })
    })

    return _pipeAll(isEmpty ? [sort, content] :
      [filter, sort, content])(collectionToRender)
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