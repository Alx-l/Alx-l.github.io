

import { h } from 'utils/misc'
import CardReveal from 'reusableComponents/cardReveal'
import settings from 'settings'

import styles from 'reusableComponents/cardReveal/cardReveal.css'

const { git } = settings


export const BubblyBoilerplate = (
  h(CardReveal, {
    cat: 'sideprojects', blinkIcon: true, iconColor: '#000', href: git + 'bubbly-boilerplate',
    title: 'Bubbly Boilerplate',
    subTitle: 'homemade starter kit',
    footerText: 'there\'s more inside'
  },
    h('p', { className: 'u-underline' }, 'Recipe :'),
    h('ul', {},
      h('li', {}, 'ES6'),
      h('li', {}, 'React / Fluxx'),
      h('li', {}, 'Jade'),
      h('li', {}, 'PostCSS (cssnext)'),
      h('li', {}, 'CSS Modules'),
    ),
    h('p', { className: styles.insideFooter }, 'I made this boilerplate to help me getting started with new projects easily.')
  )
)

export const BubblyGrid = (
  h(CardReveal, {
    cat: 'sideprojects', blinkIcon: true, iconColor: '#000', href: git + 'bubbly-grid',
    title: 'Bubbly Grid',
    subTitle: 'homemade grid system',
    footerText: h('span', {}, 'available on ',
      h('a', { className: 'u-link u-highlight', href: 'https://www.npmjs.com/package/bubbly-grid-stylus' }, 'npm')
    )
  },
    h('p', { className: 'u-underline' }, 'Recipe :'),
    h('ul', {},
      h('li', {}, 'Stylus'),
      h('li', {}, 'SCSS')
    ),
    h('p', { className: styles.insideFooter }, 'This grid system is built with calc() and is inspired by ',
      h('a', { href: 'https://github.com/peterramsing/lost', target: '_blank', className: 'u-highlight u-linkSweep' }, 'LostGrid')
    )
  )
)


export const Portefolio = (
  h(CardReveal, {
    cat: 'sideprojects', blinkIcon: true, iconColor: '#000', href: git + 'portefolio',
    title: 'Me',
    subTitle: 'myself and I',
    footerText: 'there\'s more inside'
  },
    h('p', { className: 'u-underline' }, 'Recipe :'),
    h('ul', {},
      h('li', {},
        h('a', { className: 'u-linkSweep', target: '_blank', href: 'https://github.com/alx-l/bubbly-boilerplate' }, 'Bubbly Boilerplate')
      )
    )
  )
)


export const VinylMinded = (
  h(CardReveal, {
    cat: 'sideprojects', blinkIcon: true, iconColor: '#000', href: 'http://alex-l.com/vinylminded/',
    title: 'Vinyl Minded',
    subTitle: 'fake e-commerce site',
    footerText: 'there\'s more inside'
  },
    h('p', { className: 'u-underline' }, 'Recipe :'),
    h('ul', {},
      h('li', {}, 'Foundation Framework'),
      h('li', {}, 'SCSS'),
      h('li', {}, 'jQuery'),
      h('li', {}, 'PHP / mySQL'),
    ),
    h('p', { className: styles.insideFooter }, 'This site was made to obtain my certification as a web developer from IFOCOP.')
  )
)


export const PokemonYo = (
  h(CardReveal, {
    cat: 'sideprojects', blinkIcon: true, iconColor: '#000', href: 'http://pokemonyoisthename.herokuapp.com/',
    title: 'Pokemon Yo',
    subTitle: 'simple pokedex',
    footerText: 'there\'s more inside'
  },
    h('p', { className: 'u-underline' }, 'Recipe :'),
    h('ul', {},
      h('li', {}, 'React / Fluxx'),
      h('li', {},
        h('a', { href: 'http://pokeapi.co/docsv2/', target: '_blank', className: 'u-linkSweep' }, 'Pokeapi V2')
      ),
      h('li', {}, 'ES6'),
      h('li', {}, 'Stylus / PostCSS'),
    ),
    h('p', { className: styles.insideFooter }, 'Wanna see the ',
      h('a', { href: git + 'pokemonyo', target: '_blank', className: 'u-linkSweep' }, 'repo?')
    )
  )
)


export const NrjMobile = (
  h(CardReveal, {
    cat: 'jobs', blinkIcon: true, iconColor: '#000', href: 'https://www.nrjmobile.fr/',
    title: 'NRJ Mobile',
    subTitle: '4 months during 2015',
    footerText: 'there\'s more inside'
  },
    h('p', { className: 'u-underline' }, 'Tasks :'),
    h('ul', {},
      h('li', {}, 'Develop landing pages'),
      h('li', {}, 'Code email newsletters')
    )
  )
)


export const Zengularity = (
  h(CardReveal, {
    cat: 'jobs', blinkIcon: true, iconColor: '#000', href: 'https://zengularity.com',
    title: 'Zengularity',
    subTitle: 'Since October 2016',
    footerText: 'there\'s more inside'
  },
    h('p', { className: 'u-underline' }, 'Tasks :'),
    h('ul', {},
      h('li', {}, 'Build UI\'s'),
      h('li', {}, 'Code email newsletters')
    ),
    h('p', { className: 'u-underline' }, 'Stack :'),
    h('ul', {},
      h('li', {}, 'TypeScript'),
      h('li', {}, 'React'),
      h('li', {},
        h('a', { href: 'https://github.com/AlexGalays/fluxx', target: '_blank', className: 'u-linkSweep' }, 'Fluxx')
      ),
      h('li', {}, 'CSS Modules'),
      h('li', {}, 'Stylus / Less')
    ),
  )
)
