
import { h } from 'utils/misc'

import Collapsible from 'reusableComponents/collapsible'
import { BackEnd, Code, FrontEnd, Movie, Music, Pencil, People, SupaHappy, ThumbUp, TV } from 'svg'
import settings from 'settings'

const { greyDarken } = settings


export const clFrontEnd = (
  h(Collapsible, { titleIcon: FrontEnd, iconColor: greyDarken, titleIconSize: 35, title: 'Front-end', popOut: true },
    h('ul', {},
      h('li', {}, 'HTML5'),
      h('li', {}, 'Jade'),
      h('li', {}, 'CSS3 / Flexbox'),
      h('li', {}, 'Stylus / Sass / Less'),
      h('li', {}, 'PostCSS')
    ),
    h('p', {}, 'To organize my stylesheets, I try to follow the ',
      h('span', { className: 'u-highlight' }, 'SMACSS '), 'guidelines and the ',
      h('span', { className: 'u-highlight' }, 'SUIT CSS '), 'naming conventions.'
    ),
    h(Collapsible, { titleIcon: Code, iconColor: greyDarken, titleIconSize: 35, title: 'JS' },
      h('ul', {},
        h('li', {}, 'ES5 / ES6'),
        h('li', {}, 'React / Flux architecture')
      )
    ),
    h(Collapsible, { titleIcon: Pencil, iconColor: greyDarken, titleIconSize: 35, title: 'Design' },
      h('ul', {},
        h('li', {}, 'Sketch'),
        h('li', {}, 'Photoshop')
      )
    )
  )
)


export const clBackEnd = (
  h(Collapsible, { titleIcon: BackEnd, iconColor: greyDarken, titleIconSize: 35, title: 'Back-end', popOut: true },
    h('ul', {},
      h('li', {}, 'Node.js / Express (wip)'),
      h('li', {}, 'PHP'),
      h('li', {}, 'mySQL')
    )
  )
)


export const clTools = (
  h(Collapsible, { titleIcon: ThumbUp, iconColor: greyDarken, titleIconSize: 30, title: 'Tools I like', popOut: true },
    h('ul', {},
      h('li', {}, 'iTerm2'),
      h('li', {}, 'npm / yarn'),
      h('li', {}, 'Webpack'),
      h('li', {}, 'CSS Modules'),
      h('li', {}, 'ESLint / Stylelint'),
      h('li', {}, 'Heroku')
    ),
    h('p', {}, 'And if you must know, I work on a ',
      h('span', { className: 'u-highlight' }, 'MacBook Pro '), 'using ',
      h('span', { className: 'u-highlight' }, 'Visual Studio Code '), 'as my code editor.'
    )
  )
)


export const clMusic = (
  h(Collapsible, { titleIcon: Music, iconColor: greyDarken, titleIconSize: 35, title: 'Music', popOut: true },
    h('p', {}, `Music is so many things, it can soothe you, move you, make you move, annoy you or even make you fall asleep, it's just fundamental :)`),
    h(Collapsible, { iconColor: greyDarken, title: 'Rap' },
      h('p', {}, 'Of course this is not an exhaustive list :'),
      h('ul', {},
        h('li', {}, 'Evidence (Westside rider)'),
        h('li', {}, `Chance the Rapper (he's like Kanye West before Kanye became a Kardashian)`),
        h('li', {}, 'Bun B'),
        h('li', {}, 'Chamillionaire'),
        h('li', {}, `ASAP Mob (not all of 'em...)`),
        h('li', {}, `Cam'ron (Dipset b*tch)`),
        h('li', {}, 'The Wu-Tang Clan, The Notorious B.I.G, Kurupt...(never forget what time it is ;)')
      )
    ),
    h(Collapsible, { iconColor: greyDarken, title: 'B-Side' },
      h('p', {}, 'All right, now get ready for the dummy mix, no rules, just me, my taste and no filter :'),
      h('ul', {},
        h('li', {}, 'Mélat'),
        h('li', {}, `Blink-182 (didn't even listen to them as a teen, but man they're good)`),
        h('li', {}, 'Frank Ocean'),
        h('li', {}, 'Jhené Aiko'),
        h('li', {}, 'Raphael Saadiq'),
        h('li', {}, 'A-Trak'),
        h('li', {}, '...')
      )
    )
  )
)


export const clTVMovies = (
  h(Collapsible, { titleIcon: TV, iconColor: greyDarken, titleIconSize: 35, title: 'Netflix & ...', popOut: true },
    h('p', {}, 'Another non exhaustive list :'),
    h('ul', {},
      h('li', {}, 'Stranger Things'),
      h('li', {}, 'Black Mirror'),
      h('li', {}, 'Daredevil'),
      h('li', {}, 'Mr. Robot'),
      h('li', {}, 'Atlanta'),
      h('li', {}, 'Orange is the new black'),
      h('li', {}, 'American Dad'),
      h('li', {}, '...'),
    ),
    h(Collapsible, { titleIcon: Movie, iconColor: greyDarken, titleIconSize: 35, title: 'Movies' },
      h('p', {}, `Maybe not my favorites of all time, but the ones that pop into my head as I'm writing this.`),
      h('ul', {},
        h('li', {}, 'Pitch Perfect (nerd alert!)'),
        h('li', {}, 'Kick-ass'),
        h('li', {}, '50/50'),
        h('li', {}, `Carlito's Way`),
        h('li', {}, 'End of watch'),
        h('li', {}, '22 Jump Street'),
        h('li', {}, '...')
      )
    )
  )
)


export const clPeople = (
  h(Collapsible, { titleIcon: People, iconColor: greyDarken, titleIconSize: 35, title: 'Following', popOut: true },
    h('p', {}, 'Some devs I follow, look up to, and/or like :'),
    h('ul', {},
      h('li', {},
        h('a', { href: 'http://bit.ly/1KcNPaY', target: '_blank', className: 'u-linkSweep' }, 'Mattias Petter Johansson')
      ),
      h('li', {},
        h('a', { href: 'http://kosamari.com/notes', target: '_blank', className: 'u-linkSweep' }, 'Mariko Kosaka')
      ),
      h('li', {},
        h('a', { href: 'https://medium.com/@_ericelliott', target: '_blank', className: 'u-linkSweep' }, 'Eric Elliott')
      ),
      h('li', {},
        h('a', { href: 'https://bitsofco.de/', target: '_blank', className: 'u-linkSweep' }, 'Ire Aderinokun')
      ),
      h('li', {},
        h('a', { href: 'https://pawelgrzybek.com/', target: '_blank', className: 'u-linkSweep' }, 'Pawel Grzybek')
      ),
    )
  )
)


export const clMisc = (
  h(Collapsible, { titleIcon: SupaHappy, iconColor: greyDarken, titleIconSize: 35, title: 'Misc', popOut: true },
    h('p', {}, 'And of course, I like to have my ',
      h('span', { className: 'u-highlight' }, '5 vegetables '), 'a day (I mean, it feels good when I do...which is like once a month).'
    ),
    h('p', {}, 'And last but not least, I like people (again, ',
      h('span', { className: 'u-highlight' }, 'not every single one of them, '), `my heart is not that big), I mean music, tv series, your opinion about what's happening on the other side of the world and stuff is great...`
    ),
    h('p', {}, `But what's greater is when you get to share (and disagree with) all that with someone else, otherwise, what's the point, right?`)
  )
)
