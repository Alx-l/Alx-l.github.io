import h from 'react-hyperscript'

/* Add */
export const Add = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* BackEnd */
export const BackEnd = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Blink */
export const Blink = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Code */
export const Code = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0V0z', fill: 'none' }),
      h('path', {
        d:
          'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Close */
export const Close = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Expand */
export const Expand = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Face */
export const Face = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* FrontEnd */
export const FrontEnd = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Github */
export const Github = color => {
  return h(
    'svg',
    { style: { display: 'block' }, fill: color, viewBox: '0 0 24 24' },
    h('path', {
      d:
        'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
    })
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Hamburger */
export const Hamburger = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* HappySmiley */
export const HappySmiley = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Heart */
export const Heart = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* History */
export const History = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Laptop */
export const Laptop = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* More */
export const More = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Movies */
export const Movie = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Music */
export const Music = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Pencil */
export const Pencil = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* People */
export const People = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* PersonPin */
export const PersonPin = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* SupaHappy */
export const SupaHappy = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', {
        d:
          'M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z'
      }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* ThumbUp */
export const ThumbUp = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Tool */
export const Tool = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { clipRule: 'evenodd', d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* TV */
export const TV = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
      h('path', {
        d:
          'M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z'
      })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */

/* Warning */
export const Warning = color => {
  return h(
    'svg',
    {
      style: { display: 'block' },
      fill: color,
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg'
    },
    [
      h('circle', { cx: '12', cy: '19', r: '2' }),
      h('path', { d: 'M10 3h4v12h-4z' }),
      h('path', { d: 'M0 0h24v24H0z', fill: 'none' })
    ]
  )
}
/* –––––––––––––––––––––––––––––––––––––––––––––––––– */
