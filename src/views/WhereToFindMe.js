import h from 'react-hyperscript'

import { TextBlock } from 'layouts/textBlock'
import { IconHeader } from 'reusableComponents/iconHeader'
import { ToolTip } from 'reusableComponents/tooltip'
import { Icon } from 'reusableComponents/icon'
import { PersonPin, Github } from 'svg'
import { link } from 'utils/misc'
import { settings } from 'settings'

import styles from './whereToFindMe.css'

const { email, grey } = settings

export const WhereToFindMe = () => {
  const emailClassName = `${ styles.email }.${ 'u-underlineLeft' }`

  return h('div', [
    h(IconHeader, { icon: PersonPin, size: 20, color: grey, text: 'Finding me' }),
    h(TextBlock, { background: true }, [
      h('p', [
        'You can find me wandering in the streets of ',
        h(ToolTip, { hiddenText: 'FR, not TX :)', className: 'u-highlight.u-link' }, 'Paris.')
      ]),
      h('p', [
        'But since that could take a while before you randomly bump into me, feel free to send me an email :',
        h('br'),
        h(`a.${ emailClassName }`, { href: `mailto:${ email }` }, email)
      ]),
      h('span', 'Wanna take a peek at my repos?'),
      h('br'),
      link('https://github.com/Alx-l',
        h(Icon, { svg: Github, color: '#fff', size: 35, className: 'u-block' }),
        'btn-icon'
      ),
      h('p', [
        'My ',
        link('https://codepen.io/AlxL', 'pens ', 'u-highlight.u-linkSweep'),
        'maybe?'
      ])
    ])
  ])
}
