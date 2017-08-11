import h from 'react-hyperscript'
import classNames from 'classnames'

import TextBlock from 'layouts/textBlock'
import IconHeader from 'reusableComponents/iconHeader'
import ToolTip from 'reusableComponents/tooltip'
import Icon from 'reusableComponents/icon'
import { PersonPin, Github } from 'svg'
import settings from 'settings'

import styles from './whereToFindMe.css'

const { email, grey } = settings

const WhereToFindMe = () => {
  const emailClassName = classNames(styles.email, 'u-underlineLeft')

  return h('div', [
    h(IconHeader, { icon: PersonPin, size: 20, color: grey, text: 'Finding me' }),
    h(TextBlock, { background: true }, [
      h('p', [
        'You can find me wandering in the streets of ',
        h(ToolTip, { hiddenText: 'FR, not TX :)' }, 'Paris.')
      ]),
      h('p', [
        'But since that could take a while before you randomly bump into me, feel free to send me an email :',
        h('br'),
        h('a', { className: emailClassName, href: `mailto:${email}` }, email)
      ]),
      h('span', 'Wanna take a peek at my repos?'),
      h('br'),
      h('a',
        {
          href: 'https://github.com/Alx-l',
          target: '_blank',
          className: 'btn-icon'
        },
        h(Icon, { svg: Github, color: '#fff', size: 35, customStyle: { display: 'block' } })
      ),
      h('p', [
        'My ',
        h('a',
          { href: 'https://codepen.io/AlxL', target: '_blank' },
          h('span.u-highlight.u-linkSweep', 'pens ')
        ),
        'maybe?'
      ])
    ])
  ])
}

export default WhereToFindMe
