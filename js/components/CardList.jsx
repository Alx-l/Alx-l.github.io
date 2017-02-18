
import React from 'react'


const CardList = (props) => {

  const renderAll = () => {
    const { collectionToRender } = props
    const CardCollection = Object.keys(collectionToRender).map(el => collectionToRender[el])

    return CardCollection.map((el, i) => {
      return <div className='CardList-item' key={ i }>{ el }</div>
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
    <div className='CardList'>
      { renderFilteredCollection() }
    </div>
  )
}

CardList.propTypes = {
  collectionToRender: React.PropTypes.objectOf(React.PropTypes.node).isRequired,
  filters: React.PropTypes.objectOf(React.PropTypes.bool)
}


export default CardList