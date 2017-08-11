import h from 'react-hyperscript'
import CardReveal from 'reusableComponents/cardReveal'
import settings from 'settings'

import styles from 'reusableComponents/cardReveal/cardReveal.css'

const { git } = settings

const li = text => h('li', {}, text)

export const BubblyBoilerplate = h(CardReveal,
  {
    cat: 'sideprojects',
    blinkIcon: true,
    iconColor: '#000',
    href: git + 'bubbly-boilerplate',
    title: 'Bubbly Boilerplate',
    subTitle: 'homemade starter kit',
    footerText: `there's more inside`
  },
  [
    h('p.u-underline', 'Recipe :'),
    h('ul', [
      li('ES6'),
      li('React / Fluxx'),
      li('Jade'),
      li('PostCSS (cssnext)'),
      li('CSS Modules')
    ]),
    h(
      'p', { className: styles.insideFooter },
      'I made this boilerplate to help me getting started with new projects easily.'
    )
  ]
)

export const BubblyGrid = h(CardReveal,
  {
    cat: 'sideprojects',
    blinkIcon: true,
    iconColor: '#000',
    href: git + 'bubbly-grid',
    title: 'Bubbly Grid',
    subTitle: 'homemade grid system',
    footerText: h('span', [
      'available on ',
      h('a.u-link.u-highlight',
        { href: 'https://www.npmjs.com/package/bubbly-grid-stylus' },
        'npm'
      )
    ])
  },
  [
    h('p.u-underline', 'Recipe :'),
    h('ul', [li('Stylus'), li('SCSS')]),
    h('p', { className: styles.insideFooter }, [
      'This grid system is built with calc() and is inspired by ',
      h(
        'a.u-highlight.u-linkSweep',
        { href: 'https://github.com/peterramsing/lost', target: '_blank' },
        'LostGrid'
      )
    ])
  ]
)

export const Portefolio = h(CardReveal,
  {
    cat: 'sideprojects',
    blinkIcon: true,
    iconColor: '#000',
    href: git + 'portfolio',
    title: 'Me',
    subTitle: 'myself and I',
    footerText: `there's more inside`
  },
  [
    h('p.u-underline', 'Recipe :'),
    h('ul', [
      h('li', [
        h('a.u-linkSweep',
          {
            target: '_blank',
            href: 'https://github.com/alx-l/bubbly-boilerplate'
          }, 'Bubbly Boilerplate'
        )
      ])
    ])
  ]
)

export const VinylMinded = h(CardReveal,
  {
    cat: 'sideprojects',
    blinkIcon: true,
    iconColor: '#000',
    href: 'http://alex-l.com/vinylminded/',
    title: 'Vinyl Minded',
    subTitle: 'fake e-commerce site',
    footerText: `there's more inside`
  },
  [
    h('p.u-underline', 'Recipe :'),
    h('ul', [
      li('Foundation Framework'),
      li('SCSS'),
      li('jQuery'),
      li('PHP / mySQL')
    ]),
    h('p',
      { className: styles.insideFooter },
      'This site was made to obtain my certification as a web developer from IFOCOP.'
    )
  ]
)

export const PokemonYo = h(CardReveal,
  {
    cat: 'sideprojects',
    blinkIcon: true,
    iconColor: '#000',
    href: 'http://pokemonyoisthename.herokuapp.com/',
    title: 'Pokemon Yo',
    subTitle: 'simple pokedex',
    footerText: `there's more inside`
  },
  [
    h('p.u-underline', 'Recipe :'),
    h('ul', [
      li('React / Fluxx'),
      h('li', [
        h('a',
          {
            href: 'http://pokeapi.co/docsv2/',
            target: '_blank',
            className: 'u-linkSweep'
          }, 'Pokeapi V2'
        )
      ]),
      li('ES6'),
      li('Stylus / PostCSS')
    ]),
    h('p', { className: styles.insideFooter }, [
      'Wanna see the ',
      h('a.u-linkSweep', { href: git + 'pokemonyo', target: '_blank' }, 'repo?')
    ])
  ]
)

export const NrjMobile = h(CardReveal,
  {
    cat: 'jobs',
    blinkIcon: true,
    iconColor: '#000',
    href: 'https://www.nrjmobile.fr/',
    title: 'NRJ Mobile',
    subTitle: '4 months during 2015',
    footerText: `there's more inside`
  },
  [
    h('p.u-underline', 'Tasks :'),
    h('ul', [li('Develop landing pages'), li('Code email newsletters')])
  ]
)

export const Zengularity = h(CardReveal,
  {
    cat: 'jobs',
    blinkIcon: true,
    iconColor: '#000',
    href: 'https://zengularity.com',
    title: 'Zengularity',
    subTitle: 'Since October 2016',
    footerText: `there's more inside`
  },
  [
    h('p.u-underline', 'Tasks :'),
    h('ul', [li(`Build UI's`)]),
    h('p.u-underline', 'Tools :'),
    h('ul', [li(`Jira`), li(`Taiga`), li(`Bitbucket / Github`)]),
    h('p.u-underline', 'Stack :'),
    h('ul', [
      li('TypeScript'),
      li('React'),
      h('li', [
        h(
          'a.u-linkSweep',
          { href: 'https://github.com/AlexGalays/fluxx', target: '_blank' },
          'Fluxx'
        )
      ]),
      li('CSS Modules'),
      li('Less / Stylus')
    ])
  ]
)
