
import h from 'react-hyperscript'

import IconHeader from 'reusableComponents/iconHeader'
import { Heart } from 'svg'
import { clMusic, clTVMovies, clMisc, clPeople } from 'collections/CollapsibleCollection'
import settings from 'settings'

const { grey } = settings

const Likes = () => {
  return (
    h('div', {}, [
      h(IconHeader, { icon: Heart, size: 20, color: grey, text: 'My Likes' }),
      h('.l-textBlock', {},
        h('p', {}, `While we're at it, why not get a glance about some stuff I heart...`)
      ),
      h('.l-collapsible', {}, [
        h('.l-collapsible-left', {}, [
          h('.l-collapsible-item', { 'data-divider': true }, clMusic),
          h('.l-collapsible-item', { 'data-divider': true }, clTVMovies),
        ]),
        h('.l-collapsible-right', {}, [
          h('.l-collapsible-item', { 'data-divider': true }, clPeople),
          h('.l-collapsible-item', {}, clMisc),
        ])
      ])
    ])
  )
}

export default Likes
