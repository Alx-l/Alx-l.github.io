
import { h } from 'utils/misc'

import IconHeader from 'reusableComponents/iconHeader'
import { Tool } from 'svg'
import { clFrontEnd, clBackEnd, clTools } from 'collections/CollapsibleCollection'
import settings from 'settings'

const { grey } = settings

const Skillz = () => {
  return (
    h('div', {},
      h(IconHeader, { icon: Tool, size: 20, color: grey, text: 'My skillz' }),
      h('div', { className: 'l-textBlock' },
        h('p', {}, `Let's find out what I can do, shall we?`)
      ),
      h('div', { className: 'l-collapsible' },
        h('div', { className: 'l-collapsible-left' },
          h('div', { className: 'l-collapsible-item', 'data-divider': true }, clFrontEnd),
          h('div', { className: 'l-collapsible-item', 'data-divider': true }, clBackEnd)
        ),
        h('div', { className: 'l-collapsible-right' },
          h('div', { className: 'l-collapsible-item' }, clTools)
        )
      )
    )
  )
}

export default Skillz
