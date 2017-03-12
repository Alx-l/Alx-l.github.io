
import React from 'react'

import styles from './cardlist.css'


const CardList = (props) => {

  const renderAll = () => {
    const { collectionToRender, sortBy: sortKey } = props
    return collectionToRender
      .sort((a, b) => {
        if (sortKey) {
          return a.props[sortKey] > b.props[sortKey] ? 1 :
            a.props[sortKey] < b.props[sortKey] ? -1 : 0
        }
        return
      })
      .map((el, i) => {
        return <div className={ styles.item } key={ i }>{ el }</div>
      })
  }

  const renderFilteredCollection = () => {
    const { filters } = props

    const filterCollection = Object.keys(filters).map(filter => filters[filter])
    const allFiltersUnset = filterCollection.every(el => el === false)

    if (allFiltersUnset) return renderAll()

    return renderAll().filter((item) => {
      const { cat } = item.props.children.props
      return filters[cat]
    })
  }

  return (
    <div className={ styles.root }>
      { renderFilteredCollection() }
    </div>
  )
}

CardList.propTypes = {
  collectionToRender: React.PropTypes.arrayOf(React.PropTypes.node).isRequired,
  filters: React.PropTypes.objectOf(React.PropTypes.bool),
  sortKey: React.PropTypes.string
}


export default CardList