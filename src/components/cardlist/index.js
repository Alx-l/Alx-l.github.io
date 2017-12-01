import PropTypes from 'prop-types'
import h from 'react-hyperscript'
import lift from 'space-lift'

import styles from './cardlist.css'

const propTypes = {
  collectionToRender: PropTypes.arrayOf(PropTypes.node).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string),
  sortBy: PropTypes.string
}

export const CardList = props => {
  const renderCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props
    const filtersAreSet = lift(filters)
      .value().length > 0

    const isFilterSet = filterKey => lift(filters)
      .find(f => f === filterKey)
      .isDefined()

    const filterByCat = card => (filtersAreSet ? isFilterSet(card.props.cat) : true)
    const content = card =>
      h(`div.${ styles.item }`, {}, card)

    return lift(collectionToRender)
      .filter(filterByCat)
      .sort({ by: card => card.props[sortKey], ignoreCase: true })
      .map(content)
      .value()
  }

  return h(`div.${ styles.root }`, renderCollection())
}

CardList.propTypes = propTypes
