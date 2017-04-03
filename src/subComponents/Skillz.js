
import h from 'react-hyperscript'

import IconHeader from 'reusableComponents/iconHeader'
import { Tool } from 'svg'
import { clFrontEnd, clBackEnd, clTools } from 'collections/CollapsibleCollection'
import settings from 'settings'

const { grey } = settings

const Skillz = () => {
  return (
    h('div', [
      h(IconHeader, { icon: Tool, size: 20, color: grey, text: 'My skillz' }),
      h('.l-textBlock', [ h('p', `Let's find out what I can do, shall we?`) ]),
      h('.l-collapsible', [
        h('.l-collapsible-left', [
          h('.l-collapsible-item', { 'data-divider': true }, clFrontEnd),
          h('.l-collapsible-item', { 'data-divider': true }, clBackEnd)
        ]),
        h('.l-collapsible-right', [
          h('.l-collapsible-item', {}, clTools)
        ])
      ])
    ])
  )
}

export default Skillz
