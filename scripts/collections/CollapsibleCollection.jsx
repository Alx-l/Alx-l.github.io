import React from 'react'

import Collapsible from '../reusableComponents/collapsible'
import { BackEnd, Code, FrontEnd, Movie, Music, Pencil, People, SupaHappy, ThumbUp, TV } from '../svg'
import settings from '../settings'

const { greyDarken } = settings


export const clFrontEnd = (
  <Collapsible titleIcon={ FrontEnd } iconColor={ greyDarken } titleIconSize={ 35 } title="Front-end" popOut={ true }>
    <ul>
      <li>HTML5</li>
      <li>Jade</li>
      <li>CSS3 / Flexbox</li>
      <li>Stylus / Sass / Less</li>
      <li>PostCSS</li>
    </ul>
    <p>
      To organize my stylesheets, I try to follow the <span className="u-highlight">SMACSS</span> guidelines and the <span className="u-highlight">SUIT CSS</span> naming conventions.
    </p>
    <Collapsible titleIcon={ Code } iconColor={ greyDarken } titleIconSize={ 35 } title="JS">
      <ul>
        <li>ES5 / ES6</li>
        <li>React / Flux architecture</li>
      </ul>
    </Collapsible>
    <Collapsible titleIcon={ Pencil } iconColor={ greyDarken } titleIconSize={ 35 } title="Design">
      <ul>
        <li>Sketch</li>
        <li>Photoshop</li>
      </ul>
    </Collapsible>
  </Collapsible>
)


export const clBackEnd = (
  <Collapsible titleIcon={ BackEnd } iconColor={ greyDarken } titleIconSize={ 35 } title="Back-end" popOut={ true }>
    <ul>
      <li>Node.js / Express (wip)</li>
      <li>PHP5</li>
      <li>mySQL</li>
    </ul>
  </Collapsible>
)


export const clTools = (
  <Collapsible titleIcon={ ThumbUp } iconColor={ greyDarken } titleIconSize={ 30 } title="Tools I like" popOut={ true }>
    <ul>
      <li>iTerm2</li>
      <li>npm / yarn</li>
      <li>Webpack</li>
      <li>CSS Modules</li>
      <li>ESLint / Stylelint</li>
      <li>Heroku</li>
    </ul>
    <p>
      And if you must know, I work on a <span className="u-highlight">MacBook Pro</span>, using <span className="u-highlight">Visual Studio Code</span> as my code editor.
    </p>
  </Collapsible>
)


export const clMusic = (
  <Collapsible titleIcon={ Music } iconColor={ greyDarken } titleIconSize={ 35 } title="Music" popOut={ true }>
    <p>
      Music is so many things, it can soothe you, move you, make you move, annoy you or even make you fall asleep, it's just fundamental :)
    </p>
    <Collapsible iconColor={ greyDarken } title="Rap">
      <p>
        Of course this is not an exhaustive list :
      </p>
      <ul>
        <li>Evidence (Westside rider)</li>
        <li>Chance the Rapper (he's like Kanye West before Kanye became a Kardashian)</li>
        <li>Bun B</li>
        <li>Chamillionaire</li>
        <li>ASAP Mob (not all of 'em...)</li>
        <li>Cam'ron (Dipset b*tch)</li>
        <li>The Wu-Tang Clan, The Notorious B.I.G, Kurupt...(never forget what time it is ;)</li>
      </ul>
    </Collapsible>
    <Collapsible iconColor={ greyDarken } title="B-Side">
      <p>
        All right, now get ready for the dummy mix, no rules, just me, my taste and no filter :
      </p>
      <ul>
        <li>Mélat</li>
        <li>Blink-182 (didn't even listen to them as a teen, but man they're good)</li>
        <li>Frank Ocean</li>
        <li>Jhené Aiko</li>
        <li>Raphael Saadiq</li>
        <li>A-Trak</li>
        <li>...</li>
      </ul>
    </Collapsible>
  </Collapsible>
)


export const clTVMovies = (
  <Collapsible titleIcon={ TV } iconColor={ greyDarken } titleIconSize={ 35 } title="Netflix & ..." popOut={ true }>
    <p>
      Another non exhaustive list :
    </p>
    <ul>
      <li>Stranger Things</li>
      <li>The Man in The High Castle</li>
      <li>Daredevil</li>
      <li>Mr. Robot</li>
      <li>Atlanta</li>
      <li>Orange is the new black</li>
      <li>American Dad</li>
      <li>...</li>
    </ul>
    <Collapsible titleIcon={ Movie } iconColor={ greyDarken } titleIconSize={ 35 } title="Movies">
      <p>
        Maybe not my favorites of all time, but the ones that pop into my head as I'm writing this.
      </p>
      <ul>
        <li>Pitch Perfect (nerd alert!)</li>
        <li>Kick-ass</li>
        <li>50/50</li>
        <li>Carlito's Way</li>
        <li>End of watch</li>
        <li>22 Jump Street</li>
        <li>...</li>
      </ul>
    </Collapsible>
  </Collapsible>
)


export const clPeople = (
  <Collapsible titleIcon={ People } iconColor={ greyDarken } titleIconSize={ 35 } title="Following..." popOut={ true }>
    <p>
      Some devs I follow, look up to, and/or like :
    </p>
    <ul>
      <li><a href="http://bit.ly/1KcNPaY" target="_blank" className="u-linkSweep">Mattias Petter Johansson</a></li>
      <li><a href="http://kosamari.com/notes" target="_blank" className="u-linkSweep">Mariko Kosaka</a></li>
      <li><a href="http://bradfrost.com/" target="_blank" className="u-linkSweep">Brad Frost</a></li>
      <li><a href="https://bitsofco.de/" target="_blank" className="u-linkSweep">Ire Aderinokun</a></li>
      <li><a href="https://pawelgrzybek.com/" target="_blank" className="u-linkSweep">Pawel Grzybek</a></li>
      <li><a href="https://una.im/" target="_blank" className="u-linkSweep">Una Kravets</a></li>
    </ul>
  </Collapsible>
)


export const clMisc = (
  <Collapsible titleIcon={ SupaHappy } iconColor={ greyDarken } titleIconSize={ 35 } title="Misc" popOut={ true }>
    <p>
      And of course, I like to have my <span className="u-highlight">5 vegetables</span> a day (I mean, it feels good when I do...which is like once a month).
    </p>
    <p>
      And last but not least, I like people (again, <span className="u-highlight">not every single one of them</span>, my heart is not that big), I mean music, tv series, your opinion about what's happening on the other side of the world and stuff is great...
    </p>
    <p>
      But what's greater is when you get to share (and disagree with) all that with someone else, otherwise, what's the point, right?
    </p>
  </Collapsible>
)