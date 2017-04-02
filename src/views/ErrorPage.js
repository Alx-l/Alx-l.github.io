
import { h } from 'utils/misc'

import IconHeader from 'reusableComponents/iconHeader'
import { Warning } from 'svg'
import settings from 'settings'

const { grey } = settings


const ErrorPage = () => {
  return (
    h('div', {},
      h(IconHeader, { icon: Warning, size: 20, color: grey, text: 'Oops' }),
      h('div', { className: 'l-textBlock' },
        h('p', {}, 'You lost homie?')
      )
    )
  )
}

export default ErrorPage
