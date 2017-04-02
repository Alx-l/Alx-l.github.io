
import h from 'react-hyperscript'

import Skillz from 'subComponents/Skillz'
import Likes from 'subComponents/Likes'


const WhatIDo = () => {
  return (
    h('.WhatIDo', {}, [
      h(Skillz),
      h(Likes)
    ])
  )
}

export default WhatIDo
