import PropTypes from 'prop-types'
import h from 'react-hyperscript'
import lift from 'space-lift'

import { GroupAnimate } from 'reusableComponents//GroupAnimate'

import styles from './cardlist.css'

const propTypes = {
  collectionToRender: PropTypes.arrayOf(PropTypes.node).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string),
  sortBy: PropTypes.string
}

export const CardList = props => {
  const getCardCollection = () => {
    const { collectionToRender, filters, sortBy: sortKey } = props
    const filtersAreSet = lift(filters)
      .value().length > 0

    const isFilterSet = filterKey => lift(filters)
      .find(f => f === filterKey)
      .isDefined()

    const filterByCat = card => (filtersAreSet ? isFilterSet(card.props.cat) : true)

    return lift(collectionToRender)
      .filter(filterByCat)
      .sort({ by: card => card.props[sortKey], ignoreCase: true })
      .value()
  }

  return h(GroupAnimate, {
    list: getCardCollection(),
    renderItem: _card => h(`div.${ styles.item }`, {}, _card),
    computeKey: _card => _card.props.title,
    timeout: 250,
    classNames: {
      root: styles.root,
      onEnter: styles.onEnter,
      onExit: styles.onExit
    }
  })
}

CardList.propTypes = propTypes
