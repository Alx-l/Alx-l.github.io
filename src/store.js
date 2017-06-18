import { GlobalStore, Action } from 'fluxx'
import { update } from 'immupdate'

export const updateFilter = Action('updateFilter')

const initialState = {
  filters: {}
}

export const mainStore = GlobalStore(initialState, on => {
  on(updateFilter, (state, filter) => {
    return update(state, {
      filters: {
        ...state.filters,
        [filter.key]: filter.booleanValue
      }
    })
  })
})
