import PropTypes from 'prop-types'
import h from 'react-hyperscript'
import lift from 'space-lift'

import styles from './cardlist.css'

const propTypes = {
  collectionToRender: PropTypes.arrayOf(PropTypes.node).isRequired,
  filters: PropTypes.objectOf(PropTypes.bool),
  sortBy: PropTypes.string
}

const CardList = props => {
  const renderCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props
    const filtersAreSet = lift(filters)
      .values()
      .compact()
      .value().length > 0

    const filterByCat = card => (filtersAreSet ? filters[card.props.cat] : card)
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

export default CardList
