
import { h } from 'utils/misc'

import Skillz from 'subComponents/Skillz'
import Likes from 'subComponents/Likes'


const WhatIDo = () => {
  return (
    h('div', { className: 'WhatIDo' },
      h(Skillz),
      h(Likes)
    )
  )
}

export default WhatIDo
