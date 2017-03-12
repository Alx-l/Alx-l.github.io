
import React from 'react'

import CardReveal from '../reusableComponents/card-reveal'
import settings from '../settings'

import styles from '../reusableComponents/card-reveal/card-reveal.css'

const { git } = settings


export const BubblyBoilerplate = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor="#000" href={ git + 'bubbly-boilerplate' }
    title="Bubbly Boilerplate"
    subTitle="homemade starter kit"
    footerText="there's more inside"
  >
    <p className="u-underline">Recipe :</p>
    <ul>
      <li>React / Fluxx</li>
      <li>ES6</li>
      <li>Jade</li>
      <li>PostCSS (cssnext)</li>
      <li>CSS Modules</li>
    </ul>
    <p className={ styles.insideFooter }>I made this boilerplate to help me getting started with new projects easily.
    </p>
  </CardReveal>
)


export const BubblyGrid = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor="#000" href={ git + 'bubbly-grid' }
    title="Bubbly Grid"
    subTitle="homemade grid system"
    footerText={ <span>available on <a className="u-link u-highlight" href="https://www.npmjs.com/package/bubbly-grid-stylus" target="_blank">npm</a></span> }
  >
    <p className="u-underline">Recipe :</p>
    <ul>
      <li>Stylus</li>
      <li>SCSS</li>
    </ul>
    <p className={ styles.insideFooter }>This grid system is built with calc() and is inspired by
    <a href="https://github.com/peterramsing/lost" target="_blank" className="u-highlight u-linkSweep"> LostGrid.</a>
    </p>
  </CardReveal>
)


export const Portfolio = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor="#000" href={ git + 'portfolio' }
    title="Me"
    subTitle="myself and I"
    footerText="there's more inside"
  >
    <p className="u-underline">Recipe :</p>
    <ul>
      <li>
        <a className="u-linkSweep" target="_blank" href="https://github.com/alx-l/bubbly-boilerplate">Bubbly Boilerplate</a>
      </li>
    </ul>
  </CardReveal>
)


export const VinylMinded = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor="#000" href="http://alex-l.com/vinylminded/"
    title="Vinyl Minded"
    subTitle="fake e-commerce site"
    footerText="there's more inside"
  >
    <p className="u-underline">Recipe :</p>
    <ul>
      <li>Foundation Framework</li>
      <li>SCSS</li>
      <li>jQuery</li>
      <li>PHP / MySQL</li>
    </ul>
    <p className={ styles.insideFooter }>This site was made to obtain my certification as a web developer from IFOCOP.</p>
  </CardReveal>
)


export const PokemonYo = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor="#000" href="http://pokemonyoisthename.herokuapp.com/"
    title="Pokemon Yo"
    subTitle="simple pokedex"
    footerText="there's more inside"
  >
    <p className="u-underline">Recipe :</p>
    <ul>
      <li>React / Fluxx</li>
      <li><a href="http://pokeapi.co/docsv2/" target="_blank" className="u-linkSweep">Pokeapi V2</a></li>
      <li>ES6</li>
      <li>Stylus / PostCSS</li>
    </ul>
    <p className={ styles.insideFooter }>Wanna see the <a href="https://github.com/Alx-l/pokemonyo" target="_blank" className="u-linkSweep">repo</a>?</p>
  </CardReveal>
)


export const NRJMobile = (
  <CardReveal cat={ 'jobs' } blinkIcon={ true } iconColor="#000" href="https://www.nrjmobile.fr/"
    title="NRJ Mobile"
    subTitle="4 months during 2015"
    footerText="there's more inside"
  >
    <p className="u-underline">Tasks :</p>
    <ul>
      <li>Develop landing pages</li>
      <li>Code email newsletters</li>
    </ul>
  </CardReveal>
)


export const Zengularity = (
  <CardReveal cat={ 'jobs' } blinkIcon={ true } iconColor="#000" href="https://zengularity.com"
    title="Zengularity"
    subTitle="Since October 2016"
    footerText="there's more inside"
  >
    <p className="u-underline">Tasks :</p>
    <ul>
      <li>Build UI's</li>
    </ul>
    <p className="u-underline">Stack :</p>
    <ul>
      <li>TypeScript</li>
      <li>React</li>
      <li><a href="https://github.com/AlexGalays/fluxx" target="_blank" className="u-linkSweep">Fluxx</a></li>
      <li>CSS Modules / Stylus</li>
    </ul>
  </CardReveal>
)