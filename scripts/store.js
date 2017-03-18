
import { GlobalStore, Action } from 'fluxx'
import _put from '1-liners/put'

export const updateFilter = Action('updateFilter')

const initialState = {
  filters: {}
}

export const mainStore = GlobalStore(initialState, (on) => {

  on(updateFilter, (state, filter) => {
    return _put('filters', { ...state.filters, [filter.key]: filter.booleanValue }, state)
  })

})