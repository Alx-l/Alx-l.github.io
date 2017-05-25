
import { Router } from 'abyssa'
import ReactState from './ReactState' // to use abyssa with React
import 'space-lift/all'

import Main from './components/main'

import WhoAmI from 'views/WhoAmI'
import WhatIDo from 'views/whatido'
import WhatIveDone from 'views/WhatIveDone'
import WhereToFindMe from 'views/WhereToFindMe'
import ErrorPage_404 from 'views/ErrorPage'

import './global.css'


const state = ReactState(document.querySelector('#app'))

const router = Router({

  app: state('', Main, {
    index: state('', WhoAmI),
    whatido: state('whatido', WhatIDo),
    whativedone: state('whativedone', WhatIveDone),
    wheretofindme: state('wheretofindme', WhereToFindMe),
    errorPage_404: state('errorPage_404', ErrorPage_404),
  })
})
.configure({
  urlSync: 'hash',
  notFound: 'app.errorPage_404'
})

router.init()
