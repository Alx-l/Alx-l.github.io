
import { h } from 'utils/misc'

import Nav from '../nav'
import Footer from '../footer'
import settings from 'settings'

const { primaryColor } = settings

import styles from './main.css'


const Main = (props) => {
  const { name } = props.route
  return (
    h('div', { className: 'root' },
      h(Nav, { route: name, heading: 'Alex L', subHeading: 'front-end dev', backgroundColor: primaryColor }),
      h('div', { className: styles.root }, props.children),
      h(Footer, { backgroundColor: primaryColor })

    )
  )
}

export default Main
