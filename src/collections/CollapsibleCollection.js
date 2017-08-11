import h from 'react-hyperscript'

import Collapsible from 'reusableComponents/collapsible'
import {
  BackEnd,
  Code,
  FrontEnd,
  Movie,
  Music,
  Pencil,
  People,
  SupaHappy,
  ThumbUp,
  TV
} from 'svg'
import settings from 'settings'

const { greyDarken } = settings

const li = text => h('li', {}, text)

export const clFrontEnd = h(Collapsible,
  {
    titleIcon: FrontEnd,
    iconColor: greyDarken,
    titleIconSize: 35,
    title: 'Front-end',
    popOut: true
  },
  [
    h('ul', [
      li('HTML5'),
      li('Jade (I mean Pug 🐶...)'),
      li('CSS3 / Flexbox'),
      li('SCSS / Less / Stylus'),
      li('PostCSS')
    ]),
    h('p', [
      'To organize my stylesheets, I try to follow the ',
      h('a.u-linkSweep.u-highlight',
        { href: 'https://smacss.com/', target: '_blank' },
        'SMACSS '
      ),
      'guidelines and the ',
      h(
        'a.u-linkSweep.u-highlight',
        { href: 'https://suitcss.github.io/', target: '_blank' },
        'SUIT CSS '
      ),
      'naming conventions.'
    ]),
    h('p', [
      'On the JS side, I follow the ',
      h('a.u-linkSweep.u-highlight',
        { href: 'https://standardjs.com/', target: '_blank' },
        'Standard JS '
      ),
      'rules.'
    ]),
    h(
      Collapsible,
      {
        titleIcon: Code,
        iconColor: greyDarken,
        titleIconSize: 35,
        title: 'JS'
      },
      h('ul', [
        li('ES5 / ES6'),
        li('TypeScript'),
        li('React / Flux architecture')
      ])
    ),
    h(Collapsible,
      {
        titleIcon: Pencil,
        iconColor: greyDarken,
        titleIconSize: 35,
        title: 'Design'
      },
      h('ul', [li('Affinity Designer'), li('Sketch'), li('Figma')])
    )
  ]
)

export const clBackEnd = h(Collapsible,
  {
    titleIcon: BackEnd,
    iconColor: greyDarken,
    titleIconSize: 35,
    title: 'Back-end',
    popOut: true
  },
  [h('ul', [li('Node.js / Express'), li('MongoDB')])]
)

export const clTools = h(Collapsible,
  {
    titleIcon: ThumbUp,
    iconColor: greyDarken,
    titleIconSize: 30,
    title: 'Tools I like',
    popOut: true
  },
  [
    h('ul', [
      li('iTerm2'),
      li('npm / yarn'),
      li('Webpack'),
      li('CSS Modules'),
      li('ESLint / Stylelint'),
      li('Homebrew 🍺')
    ]),
    h('p', [
      'And if you must know, I work on a ',
      h('span.u-highlight', 'MacBook Pro '),
      'using ',
      h('span.u-highlight', 'Visual Studio Code '),
      'as my code editor.'
    ])
  ]
)

export const clMusic = h(Collapsible,
  {
    titleIcon: Music,
    iconColor: greyDarken,
    titleIconSize: 35,
    title: 'Music',
    popOut: true
  },
  [
    h('p',
      `Music is so many things, it can soothe you, move you, make you move, annoy you or even make you fall asleep, it's just fundamental :)`
    ),
    h(Collapsible, { iconColor: greyDarken, title: 'Rap' }, [
      h('p', 'Of course this is not an exhaustive list :'),
      h('ul', [
        li('Dave East'),
        li('TDE'),
        li(`Chance the Rapper (he's like Kanye West before Kanye became a Kardashian)`),
        li('Joey Bada$$'),
        li('Young Thug'),
        li(`ASAP Mob (not all of 'em...)`),
        li(
          `Cam'ron, The Wu-Tang Clan, The Notorious B.I.G, Kurupt...(never forget what time it is ;)`
        )
      ])
    ]),
    h(Collapsible, { iconColor: greyDarken, title: 'B-Side' }, [
      h('p',
        'All right, now get ready for the dummy mix, no rules, just me, my taste and no filter :'
      ),
      h('ul', [
        li('Jhené Aiko'),
        li('Paramore'),
        li('Frank Ocean'),
        li('Mélat'),
        li(`Blink-182 (didn't even listen to them as a teen, but man they're good)`),
        li('A-Trak'),
        li('...')
      ])
    ])
  ]
)

export const clTVMovies = h(Collapsible,
  {
    titleIcon: TV,
    iconColor: greyDarken,
    titleIconSize: 35,
    title: 'Netflix & ...',
    popOut: true
  },
  [
    h('p', 'Another non exhaustive list :'),
    h('ul', [
      li('Stranger Things'),
      li('Black Mirror'),
      li('Daredevil'),
      li('Mr. Robot'),
      li('Narcos'),
      li('GoT'),
      li('Orange is the new black'),
      li('...')
    ]),
    h(Collapsible,
      {
        titleIcon: Movie,
        iconColor: greyDarken,
        titleIconSize: 35,
        title: 'Movies'
      },
      [
        h('p',
          `Maybe not my favorites of all time, but the ones that pop into my head as I'm writing this.`
        ),
        h('ul', [
          li('Pitch Perfect (nerd alert!)'),
          li('The Nice Guys'),
          li('End of watch'),
          li('50/50'),
          li(`Kingsman`),
          li('22 Jump Street'),
          li('...')
        ])
      ]
    )
  ]
)

export const clPeople = h(Collapsible,
  {
    titleIcon: People,
    iconColor: greyDarken,
    titleIconSize: 35,
    title: 'Following',
    popOut: true
  },
  [
    h('p', 'Some devs I follow, look up to, and/or simply like :'),
    h('ul', [
      h('li', [
        h('a.u-linkSweep',
          { href: 'http://bit.ly/1KcNPaY', target: '_blank' },
          'Mattias Petter Johansson'
        )
      ]),
      h('li', [
        h('a.u-linkSweep',
          { href: 'http://sidebar.io/', target: '_blank' },
          'Sacha Greif'
        )
      ]),
      h('li', [
        h('a.u-linkSweep',
          { href: 'https://una.im/', target: '_blank' },
          'Una Kravets'
        )
      ]),
      h('li', [
        h('a.u-linkSweep',
          { href: 'https://bitsofco.de/', target: '_blank' },
          'Ire Aderinokun'
        )
      ]),
      h('li', [
        h('a.u-linkSweep',
          { href: 'https://pawelgrzybek.com/', target: '_blank' },
          'Pawel Grzybek'
        )
      ]),
      h('li', [
        h('a.u-linkSweep',
          { href: 'https://medium.com/@_ericelliott/latest', target: '_blank' },
          'Eric Elliott'
        )
      ])
    ])
  ]
)

export const clMisc = h(Collapsible,
  {
    titleIcon: SupaHappy,
    iconColor: greyDarken,
    titleIconSize: 35,
    title: 'Misc',
    popOut: true
  },
  [
    h('p', [
      'And of course, I like to have my ',
      h('span.u-highlight', '5 vegetables '),
      'a day (I mean, it feels good when I do...which is like once a month).'
    ]),
    h('p', [
      'And last but not least, I like people (well,',
      h('span.u-highlight', ` some of 'em, `),
      `sometimes..., my heart's not that big 😛), I mean music, tv series, your opinion about what's happening on the other side of the world and stuff is great...`
    ]),
    h('p',
      `But what's greater is when you get to share (and disagree with) all that with someone else, otherwise, what's the point, right?`
    )
  ]
)
