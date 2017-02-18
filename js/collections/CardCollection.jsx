
import React from 'react'

import CardReveal, { Reveal } from '../reusableComponents/CardReveal'
import settings from '../settings'

const { git } = settings


export const BubblyBoilerplate = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor='#000' href={ git + 'bubbly-boilerplate' } footerText="there's more inside">
    <h3 className='CardReveal-title'>Bubbly Boilerplate</h3>
    <span className='CardReveal-subTitle'>homemade starter kit</span>
    <Reveal>
    <p className='Reveal-header'>Recipe :</p>
    <ul className='Reveal-list'>
      <li>React / Fluxx</li>
      <li>ES6</li>
      <li>Jade</li>
      <li>Stylus</li>
      <li>PostCSS</li>
    </ul>
    <p className='Reveal-footer'>I made this boilerplate to help me getting started with new projects easily.
    </p>
    </Reveal>
  </CardReveal>
)


export const BubblyGrid = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor='#000' href={ git + 'bubbly-grid' }
  footerText={ <span>available on <a className='u-link u-highlight' href='https://www.npmjs.com/package/bubbly-grid-stylus' target='_blank'>npm</a></span> }>
    <h3 className='CardReveal-title'>Bubbly Grid</h3>
    <span className='CardReveal-subTitle'>homemade grid system</span>
    <Reveal>
    <p className='Reveal-header'>Recipe :</p>
    <ul className='Reveal-list'>
      <li>Stylus</li>
      <li>SCSS</li>
    </ul>
    <p className='Reveal-footer'>This grid system is built with calc() and is inspired by
    <a href='https://github.com/peterramsing/lost' target='_blank' className='u-highlight u-linkSweep'> LostGrid.</a>
    </p>
    </Reveal>
  </CardReveal>
)


export const Portfolio = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor='#000' href={ git + 'portfolio' } footerText="there's more inside">
    <h3 className='CardReveal-title'>Me</h3>
    <span className='CardReveal-subTitle'>myself and I</span>
    <Reveal>
    <p className='Reveal-header'>Recipe :</p>
    <ul className='Reveal-list'>
      <li>React / Fluxx</li>
      <li>ES6</li>
      <li>Stylus / PostCSS</li>
    </ul>
    </Reveal>
  </CardReveal>
)


export const VinylMinded = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor='#000' href='http://alex-l.com/vinylminded/' footerText="there's more inside">
    <h3 className='CardReveal-title'>Vinyl Minded</h3>
    <span className='CardReveal-subTitle'>fake e-commerce site</span>
    <Reveal>
      <p className='Reveal-header'>Recipe :</p>
      <ul className='Reveal-list'>
        <li>Foundation Framework</li>
        <li>SCSS</li>
        <li>jQuery</li>
        <li>PHP / MySQL</li>
      </ul>
      <p className='Reveal-footer'>This site was made to obtain my certification as a web developer from IFOCOP.</p>
    </Reveal>
  </CardReveal>
)


export const PokemonYo = (
  <CardReveal cat={ 'sideprojects' } blinkIcon={ true } iconColor='#000' href='http://pokemonyoisthename.herokuapp.com/' footerText="there's more inside">
    <h3 className='CardReveal-title'>Pokemon Yo</h3>
    <span className='CardReveal-subTitle'>simple pokedex</span>
    <Reveal>
      <p className='Reveal-header'>Recipe :</p>
      <ul className='Reveal-list'>
        <li>React / Fluxx</li>
        <li><a href='http://pokeapi.co/docsv2/' target='_blank' className='u-linkSweep'>Pokeapi V2</a></li>
        <li>ES6</li>
        <li>Stylus / PostCSS</li>
      </ul>
      <p className='Reveal-footer'>Wanna see the <a href='https://github.com/Alx-l/pokemonyo' target='_blank' className='u-linkSweep'>repo</a>?</p>
    </Reveal>
  </CardReveal>
)


export const NRJMobile = (
  <CardReveal cat={ 'jobs' } blinkIcon={ true } iconColor='#000' href='https://www.nrjmobile.fr/' footerText="there's more inside">
    <h3 className='CardReveal-title'>NRJ Mobile</h3>
    <span className='CardReveal-subTitle'>4 months during 2015</span>
    <Reveal>
    <p className='Reveal-header'>Tasks :</p>
    <ul className='Reveal-list'>
      <li>Develop landing pages</li>
      <li>Code email newsletters</li>
    </ul>
    </Reveal>
  </CardReveal>
)


export const Zengularity = (
  <CardReveal cat={ 'jobs' } blinkIcon={ true } iconColor='#000' href='https://zengularity.com' footerText="there's more inside">
    <h3 className='CardReveal-title'>Zengularity</h3>
    <span className='CardReveal-subTitle'>Since october 2016</span>
    <Reveal>
    <p className='Reveal-header'>Tasks :</p>
    <ul className='Reveal-list'>
      <li>Build UI's</li>
    </ul>
    <p className='Reveal-header'>Stack :</p>
    <ul className='Reveal-list'>
      <li>TypeScript</li>
      <li>React</li>
      <li><a href='https://github.com/AlexGalays/fluxx' target='_blank' className='u-linkSweep'>Fluxx</a></li>
      <li>Stylus / SCSS</li>
    </ul>
    </Reveal>
  </CardReveal>
)