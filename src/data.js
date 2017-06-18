import { updateFilter } from './store'

export function setFilter(key, booleanValue) {
  updateFilter({ key, booleanValue })
}
