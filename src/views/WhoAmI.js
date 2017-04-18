
import h from 'react-hyperscript'

import TextBlock from 'layouts/textBlock'
import IconHeader from 'reusableComponents/iconHeader'
import { Face } from 'svg'
import settings from 'settings'

const { grey } = settings

const WhoAmI = () => {
  return (
    h('.WhoAmI', [
      h(IconHeader, { icon: Face, size: 20, color: grey, text: 'Hello World' }),
      h(TextBlock, { background: true }, [
        h('p', [
          'Let me introduce myself, I am ',
          h('span.u-highlight', 'Alex '), 'a junior ',
          h('span.u-highlight', 'front-end web dev')
        ]),
        h('p', `I used to handle stock, and also customer complaints at an electronics store, but after a few years I just wasn't happy with this job of mine.`),
        h('p', [
          'I wanted to do something that allowed me to let my ',
          h('span.u-highlight', 'creativity '),
          'speak, I wanted to build things, leave a mark (little as an ink stain will do) on this world.'
        ]),
        h('p', [
          'And I discovered that ',
          h('span.u-highlight', 'web development '),
          `give me all that. Being able to code things that potentially the whole world can see and interact with, it's just a really nice feeling, isn't it ?`
        ]),
        h('p', [ 'So, hello world, and welcome to my world ',
          h('span.u-highlight', 'O_O')
        ])
      ])
    ])
  )
}

export default WhoAmI
