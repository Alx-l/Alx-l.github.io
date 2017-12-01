import { GlobalStore, Action } from 'fluxx'
import lift, { update } from 'space-lift'

export const updateFilter = Action('updateFilter')

const initialState = {
  filters: []
}

export const mainStore = GlobalStore(initialState, on => {
  on(updateFilter, (state, key) => {
    const keyIndex = lift(state.filters)
      .findIndex(k => k === key)
      .getOrElse(-1)

    return update(state, {
      filters: keyIndex > -1
        ? lift(state.filters).removeAt(keyIndex).value()
        : lift(state.filters).append(key).value()
    })
  })
})
