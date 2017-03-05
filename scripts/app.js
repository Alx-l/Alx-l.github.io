
import { Router } from 'abyssa'
import ReactState from './ReactState' // to use abyssa with React

import Main from './components/Main'
import WhoAmI from './pageComponents/WhoAmI'
import WhatIDo from './pageComponents/WhatIDo'
import WhatIveDone from './pageComponents/WhatIveDone'
import WhereToFindMe from './pageComponents/WhereToFindMe'
import ErrorPage_404 from './pageComponents/ErrorPage'


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