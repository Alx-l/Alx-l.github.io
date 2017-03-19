
import React from 'react'

import _filter from '1-liners/filter'
import _map from '1-liners/map'
import _partial from '1-liners/partial'
import _pipeAll from '1-liners/pipeAll'
import _values from '1-liners/values'

import styles from './cardlist.css'


const CardList = (props) => {

  const renderCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props

    const filtersAreSet = _values(filters).find(item => item)
    const filter = filtersAreSet && _partial(_filter, item => filters[item.props.cat])

    const sort = collection => collection.sort((a, b) =>
      a.props[sortKey] > b.props[sortKey] ? 1 :
      a.props[sortKey] < b.props[sortKey] ? -1 : 0)

    const content = _partial(_map, (item, i) => <div className={ styles.item } key={ i }>{ item }</div>)
    const funcArr = _filter(item => item, [filter, sort, content])

    return _pipeAll(funcArr)(collectionToRender)
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