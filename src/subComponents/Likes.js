
import { h } from 'utils/misc'

import IconHeader from 'reusableComponents/iconHeader'
import { Heart } from 'svg'
import { clMusic, clTVMovies, clMisc, clPeople } from 'collections/CollapsibleCollection'
import settings from 'settings'

const { grey } = settings

const Likes = () => {
  return (
    h('div', {},
      h(IconHeader, { icon: Heart, size: 20, color: grey, text: 'My Likes' }),
      h('div', { className: 'l-textBlock' },
        h('p', {}, 'While we\'re at it, why not get a glance about some stuff I heart...')
      ),
      h('div', { className: 'l-collapsible' },
        h('div', { className: 'l-collapsible-left' },
          h('div', { className: 'l-collapsible-item', 'data-divider': true }, clMusic),
          h('div', { className: 'l-collapsible-item', 'data-divider': true }, clTVMovies),
        ),
        h('div', { className: 'l-collapsible-right' },
          h('div', { className: 'l-collapsible-item', 'data-divider': true }, clPeople),
          h('div', { className: 'l-collapsible-item', 'data-divider': true }, clMisc),
        )
      )
    )
  )
}

export default Likes
