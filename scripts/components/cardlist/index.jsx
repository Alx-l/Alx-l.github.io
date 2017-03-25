
import React from 'react'
import _ from 'space-lift'

import styles from './cardlist.css'


const CardList = (props) => {

  const renderCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props
    const filtersAreSet = Object.keys(filters).find(item => filters[item])
    const filterByCat = item => filtersAreSet ? filters[item.props.cat] : item
    const content = (item, i) => <div className={ styles.item } key={ i }>{ item }</div>

    return _(collectionToRender)
      .filter(filterByCat)
      .sort({ by: el => el.props[sortKey], ignoreCase: true })
      .map(content)
      .value()
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