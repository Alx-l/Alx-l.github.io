import { GlobalStore, Action } from 'fluxx'
import lift, { update } from 'space-lift'

export const updateFilter = Action('updateFilter')

const initialState = {
  filters: {}
}

export const mainStore = GlobalStore(initialState, on => {
  on(updateFilter, (state, { key, value }) => {
    return update(state, {
      filters: lift(state.filters).add(key, value).value()
    })
  })
})
